/**
 * SMD Life Sciences - Search Engine Indexing URLs Generator
 * Generates direct Google Search Console inspection URLs and sitemap audit
 */

const { BIOTECH_PRODUCTS } = require('../src/data/products.ts');
const { STATIC_INSIGHTS } = require('../src/data/insights.ts');

const DOMAIN = 'lifesciences.smdmedicare.in';
const BASE_URL = `https://${DOMAIN}`;

console.log('='.repeat(70));
console.log('🚀 SMD LIFE SCIENCES — HIGH-PRIORITY INDEXING DISPATCH LIST');
console.log('='.repeat(70));

const corePages = [
  '/',
  '/products',
  '/insights',
  '/recombinant-antigens',
  '/ivd-raw-materials',
  '/diagnostic-cdmo',
  '/services',
  '/about',
  '/contact'
];

console.log(`\n📌 1. TOP 9 CORE PILLAR PAGES (Submit these in GSC "Request Indexing" first):`);
corePages.forEach((path, i) => {
  const fullUrl = `${BASE_URL}${path}`;
  const gscInspect = `https://search.google.com/search-console/inspect?resource_id=sc-domain%3A${DOMAIN}&id=${encodeURIComponent(fullUrl)}`;
  console.log(`  [${i + 1}] ${fullUrl}`);
  console.log(`      ↳ GSC 1-Click: ${gscInspect}`);
});

console.log(`\n📌 2. TOP 12 SCIENTIFIC WHITEPAPERS:`);
STATIC_INSIGHTS.forEach((ins, i) => {
  const fullUrl = `${BASE_URL}/insights/${ins.slug}`;
  console.log(`  [${i + 1}] ${ins.slug}`);
});

console.log(`\n📌 3. TOTAL 64 B2B REAGENT PRODUCTS:`);
console.log(`  Mapped: PVBSP101 to PVBSP64`);

console.log(`\n✅ TOTAL SITEMAP URL COUNT: ${corePages.length + STATIC_INSIGHTS.length + BIOTECH_PRODUCTS.length} URLs`);
console.log(`✅ SITEMAP LOCATION: ${BASE_URL}/sitemap.xml`);
console.log('='.repeat(70));
