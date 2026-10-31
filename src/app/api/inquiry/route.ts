import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { sendNotificationMail } from '@/lib/mail';

const SCRIPT_PATTERN = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>|<[^>]+>|javascript:|data:\s*text\/html|on\w+\s*=/i;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      phone,
      organization,
      company,
      inquiry_type,
      product_code,
      product_name,
      message,
      _anti_bot_trap,
    } = body;

    // 1. Bot Honeypot Check
    if (_anti_bot_trap) {
      return NextResponse.json({ success: true, message: 'Inquiry received' });
    }

    // 2. Validate Required Fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and phone number are required.' },
        { status: 400 }
      );
    }

    // 3. Script / Code Injection Protection
    const fieldsToScan = [name, email, phone, organization, company, product_code, message].filter(Boolean);
    for (const val of fieldsToScan) {
      if (SCRIPT_PATTERN.test(String(val))) {
        return NextResponse.json(
          { success: false, error: 'Security alert: HTML or executable scripts are strictly blocked.' },
          { status: 400 }
        );
      }
    }

    const orgName = (organization || company || 'Not Specified').trim();
    const inqType = (inquiry_type || 'General Reagent Inquiry').trim();
    const prodRef = product_code ? `${product_code} ${product_name ? `(${product_name})` : ''}` : 'N/A';
    const clientNotes = (message || '').trim();

    // Compile comprehensive message for database
    const compiledMessage = `[Type: ${inqType}] | [Org: ${orgName}] | [Reagent: ${prodRef}] | Notes: ${clientNotes || 'None'}`;

    // 4. Save to TiDB Database
    try {
      await pool.query(
        'INSERT INTO enquiries (name, email, phone, message, type, created_at) VALUES (?, ?, ?, ?, ?, NOW())',
        [name.trim(), email.trim(), phone.trim(), compiledMessage, 'lifesciences']
      );
    } catch (dbErr: any) {
      console.error('Database insertion warning:', dbErr.message);
      // Non-blocking: continue to email dispatch even if DB logs warning
    }

    // 5. Send Notification Email to Technical Desk
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; rounded: 12px;">
        <div style="background-color: #0b0f19; padding: 16px; border-radius: 8px; color: #ffffff; margin-bottom: 20px;">
          <h2 style="margin: 0; color: #f97316; font-size: 18px;">🧪 New SMD Life Sciences Inquiry</h2>
          <p style="margin: 4px 0 0; font-size: 12px; color: #94a3b8;">Inquiry Type: <strong>${inqType}</strong></p>
        </div>
        
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr>
            <td style="padding: 8px; color: #64748b; width: 35%;">Client Name:</td>
            <td style="padding: 8px; color: #0f172a; font-weight: bold;">${name}</td>
          </tr>
          <tr style="background-color: #f8fafc;">
            <td style="padding: 8px; color: #64748b;">Email Address:</td>
            <td style="padding: 8px; color: #0f172a;"><a href="mailto:${email}" style="color: #2563eb;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px; color: #64748b;">Phone / WhatsApp:</td>
            <td style="padding: 8px; color: #0f172a;"><a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}" style="color: #16a34a;">${phone}</a></td>
          </tr>
          <tr style="background-color: #f8fafc;">
            <td style="padding: 8px; color: #64748b;">Organization / Lab:</td>
            <td style="padding: 8px; color: #0f172a;">${orgName}</td>
          </tr>
          ${product_code ? `
          <tr>
            <td style="padding: 8px; color: #64748b;">Reagent Reference:</td>
            <td style="padding: 8px; color: #0f172a; font-weight: bold; color: #ea580c;">${prodRef}</td>
          </tr>` : ''}
          <tr style="background-color: #f8fafc;">
            <td style="padding: 8px; color: #64748b; vertical-align: top;">Project Notes:</td>
            <td style="padding: 8px; color: #0f172a; line-height: 1.5;">${clientNotes || 'No additional notes provided.'}</td>
          </tr>
        </table>

        <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e2e8f0; font-size: 11px; color: #94a3b8; text-align: center;">
          Sent automatically from <a href="https://lifesciences.smdmedicare.in" style="color: #2563eb;">lifesciences.smdmedicare.in</a> R&D Desk.
        </div>
      </div>
    `;

    // Dispatch notification
    await sendNotificationMail({
      subject: `[Biotech RFQ] ${inqType}: ${name} (${orgName})`,
      html: emailHtml,
    });

    return NextResponse.json({
      success: true,
      message: 'Your inquiry has been submitted successfully. Our scientific team will contact you within 24 hours.',
    });
  } catch (error: any) {
    console.error('API /inquiry error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error processing inquiry.' },
      { status: 500 }
    );
  }
}
