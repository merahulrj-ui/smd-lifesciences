import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: (process.env.MAIL_HOST || 'smtp.hostinger.com').replace(/['"]/g, ''),
  port: parseInt((process.env.MAIL_PORT || '465').toString().replace(/['"]/g, '')),
  secure: true,
  auth: {
    user: (process.env.MAIL_USERNAME || 'info@smdmedicare.in').replace(/['"]/g, ''),
    pass: (process.env.MAIL_PASSWORD || '').replace(/['"]/g, ''),
  },
});

export interface SendMailOptions {
  to?: string;
  subject: string;
  html: string;
}

export async function sendNotificationMail(options: SendMailOptions) {
  const fromName = (process.env.MAIL_FROM_NAME || 'SMD Life Sciences').replace(/['"]/g, '');
  const fromAddress = (process.env.MAIL_FROM_ADDRESS || 'info@smdmedicare.in').replace(/['"]/g, '');
  const recipient = options.to || fromAddress;

  try {
    const info = await transporter.sendMail({
      from: `"${fromName}" <${fromAddress}>`,
      to: recipient,
      subject: options.subject,
      html: options.html,
    });
    return { success: true, messageId: info.messageId };
  } catch (error: any) {
    console.error('Mail delivery error:', error.message);
    return { success: false, error: error.message };
  }
}
