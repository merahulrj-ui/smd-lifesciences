import { NextResponse } from 'next/server';
import { BIOTECH_PRODUCTS } from '@/data/products';
import { STATIC_INSIGHTS } from '@/data/insights';

const BASE_URL = 'https://lifesciences.smdmedicare.in';

export async function GET() {
  const now = new Date().toUTCString();

  const corePages = [
    {
      title: 'SMD Life Sciences - IVD Biological Raw Materials & Diagnostic Reagents',
      url: BASE_URL,
      desc: 'Validated recombinant antigens, monoclonal antibodies, and colloidal gold conjugates for IVD manufacturers in Bangalore, India.',
    },
    {
      title: 'B2B Diagnostic Product Catalog - 64 Recombinant Antigens & Antibodies',
      url: `${BASE_URL}/products`,
      desc: 'High-affinity antigens and antibodies for lateral flow test cards and ELISA manufacturing with lot-specific CoA.',
    },
    {
      title: 'Recombinant Antigens for Diagnostics - Syphilis, Dengue, HIV, Malaria',
      url: `${BASE_URL}/recombinant-antigens`,
      desc: 'High-purity recombinant antigens (Tp15, Tp47, Dengue NS1, HIV-1/2, Troponin I) manufactured for rapid test sensitivity.',
    },
    {
      title: 'IVD Raw Materials & Lateral Flow Membrane Reagents',
      url: `${BASE_URL}/ivd-raw-materials`,
      desc: 'Bulk biologicals, colloidal gold nanoparticles, blocking buffers, and conjugated antibodies for diagnostic manufacturing.',
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
      (item) => `
    <item>
      <title><![CDATA[${item.title}]]></title>
      <link>${item.url}</link>
      <guid isPermaLink="true">${item.url}</guid>
      <description><![CDATA[${item.desc}]]></description>
      <pubDate>${now}</pubDate>
    </item>`
    )
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>SMD Life Sciences - Custom Monoclonal Antibody CDMO &amp; IVD Raw Materials Feed</title>
    <link>${BASE_URL}</link>
    <description>Latest custom monoclonal antibody services, validated recombinant antigens, diagnostic antibodies, and technical laboratory dossiers from SMD Life Sciences.</description>
    <language>en-IN</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    <atom:link href="https://pubsubhubbub.appspot.com/" rel="hub"/>
    <atom:link href="https://pubsubhubbub.superfeedr.com/" rel="hub"/>
    ${itemsXml}
  </channel>
</rss>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
