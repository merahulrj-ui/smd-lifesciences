import { NextResponse } from 'next/server';
import { BIOTECH_PRODUCTS } from '@/data/products';
import { STATIC_INSIGHTS } from '@/data/insights';

export const dynamic = 'force-static';

const BASE_URL = 'https://lifesciences.smdmedicare.in';
const STATIC_PUB_DATE = 'Thu, 08 Oct 2026 00:00:00 GMT';

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const corePages = [
    {
      title: 'SMD Life Sciences - Custom Monoclonal Antibody Development & Bulk IVD Antigen Supplier India',
      url: BASE_URL,
      desc: 'Validated custom monoclonal antibody development, recombinant antigens, monoclonal antibodies, and colloidal gold conjugates for IVD manufacturers in Bangalore, India.',
    },
    {
      title: 'Custom Monoclonal Antibody Development & Bulk Antibody Production CDMO India',
      url: `${BASE_URL}/services`,
      desc: 'End-to-end custom monoclonal antibody development, hybridoma screening, recombinant VH/VL expression, and gram-scale antibody production in Bangalore.',
    },
    {
      title: 'Diagnostic CDMO & Lateral Flow Rapid Test Development',
      url: `${BASE_URL}/diagnostic-cdmo`,
      desc: 'End-to-end contract development: hybridoma generation, recombinant expression, antibody pair screening, and strip assembly.',
    },
    {
      title: 'B2B Diagnostic Product Catalog - 70 Recombinant Antigens, Cytokines & Antibodies',
      url: `${BASE_URL}/products`,
      desc: 'High-affinity antigens, cytokines, and monoclonal antibodies for lateral flow test cards and ELISA manufacturing with lot-specific CoA.',
    },
    {
      title: 'Bulk IVD Recombinant & Native Antigens Supplier India - HIV, Syphilis, Dengue, Malaria',
      url: `${BASE_URL}/recombinant-antigens`,
      desc: 'High-purity recombinant antigens (HIV-1/2 PV1 Series, Syphilis Tp15/17/47, Dengue NS1, Troponin I, IL-6, PCT) manufactured for rapid test sensitivity.',
    },
    {
      title: 'Bulk IVD Antigen & Diagnostic Antibody Supplier India - Immunoassay Raw Materials',
      url: `${BASE_URL}/ivd-raw-materials`,
      desc: 'Bulk biologicals, colloidal gold nanoparticles, blocking buffers, and conjugated antibodies for diagnostic manufacturing.',
    },
    {
      title: 'Biotech Bench Insights & Wet-Lab Protocols',
      url: `${BASE_URL}/insights`,
      desc: 'Peer-reviewed whitepapers, nitrocellulose coating SOPs, gold conjugation protocols, and analytical benchmarks.',
    },
    {
      title: 'About SMD Life Sciences - Electronic City Bangalore Biomanufacturing',
      url: `${BASE_URL}/about`,
      desc: 'Specialized IVD biomanufacturing facility in Bangalore operated in technical partnership with Pentavalent Bio Sciences.',
    },
    {
      title: 'Contact SMD Life Sciences - Bulk Reagent Procurement & Sample Requests',
      url: `${BASE_URL}/contact`,
      desc: 'Request 1mg-5mg evaluation samples, technical data sheets, and bulk B2B commercial quotes.',
    },
  ];

  const insightItems = STATIC_INSIGHTS.map((ins) => ({
    title: ins.title,
    url: `${BASE_URL}/insights/${ins.slug}`,
    desc: ins.excerpt || `Technical laboratory dossier on ${ins.title}`,
  }));

  const productItems = BIOTECH_PRODUCTS.map((prod) => ({
    title: `${prod.name} (${prod.code}) - ${prod.category}`,
    url: `${BASE_URL}/products/${prod.code}`,
    desc: `${prod.name} (${prod.code}). Host: ${prod.host || 'E. coli / Mammalian'}, Purity: ${prod.purity}, Applications: ${prod.applications}. ${prod.description}`,
  }));

  const allItems = [...corePages, ...insightItems, ...productItems];

  const itemsXml = allItems
    .map(
      (item) => `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${escapeXml(item.url)}</link>
      <guid isPermaLink="true">${escapeXml(item.url)}</guid>
      <description>${escapeXml(item.desc)}</description>
      <pubDate>${STATIC_PUB_DATE}</pubDate>
    </item>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>SMD Life Sciences - Custom Monoclonal Antibody CDMO &amp; IVD Raw Materials Feed</title>
    <link>${BASE_URL}</link>
    <description>Latest custom monoclonal antibody services, validated recombinant antigens, diagnostic antibodies, and technical laboratory dossiers from SMD Life Sciences.</description>
    <language>en-IN</language>
    <lastBuildDate>${STATIC_PUB_DATE}</lastBuildDate>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    <atom:link href="https://pubsubhubbub.appspot.com/" rel="hub"/>
    <atom:link href="https://pubsubhubbub.superfeedr.com/" rel="hub"/>
${itemsXml}
  </channel>
</rss>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  });
}
