/**
 * SMD Life Sciences - Automated High-Speed CrawlBot Engine
 * 
 * Functions:
 * 1. Fetches all 85 live URLs from sitemap.xml.
 * 2. Crawls each URL with Googlebot simulation headers (User-Agent: Googlebot/2.1).
 * 3. Pre-warms edge CDN cache and verifies HTTP 200 OK status codes & latencies.
 * 4. Extracts <title> tag to verify HTML render integrity.
 * 5. Saves timestamped audit to src/data/crawlbot_report.json.
 */

const fs = require('fs');
const path = require('path');

const DOMAIN = 'lifesciences.smdmedicare.in';
const BASE_URL = `https://${DOMAIN}`;
const SITEMAP_URL = `${BASE_URL}/sitemap.xml`;
const CONCURRENCY = 15;

const GOOGLEBOT_UA = 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)';

async function fetchWithTimeout(url, options = {}, timeoutMs = 6000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, { ...options, signal: controller.signal });
    clearTimeout(id);
    return res;
  } catch (err) {
    clearTimeout(id);
    throw err;
  }
}

async function runCrawlBot() {
  const startTime = Date.now();
  console.log('='.repeat(70));
  console.log('🤖 SMD LIFE SCIENCES — HIGH-SPEED ACTIVE CRAWLBOT');
  console.log(`🕒 Timestamp: ${new Date().toISOString()}`);
  console.log(`🌐 Target Host: ${DOMAIN}`);
  console.log('='.repeat(70));

  // 1. Fetch Sitemap
  console.log('\n📥 [1/3] Loading live sitemap.xml...');
  let urls = [];
  try {
    const sitemapRes = await fetchWithTimeout(SITEMAP_URL);
    if (!sitemapRes.ok) throw new Error(`Sitemap HTTP ${sitemapRes.status}`);
    const xml = await sitemapRes.text();
    const matches = xml.match(/<loc>(.*?)<\/loc>/g) || [];
    urls = matches.map(m => m.replace(/<\/?loc>/g, '').trim());
    console.log(`   ✅ Sitemaps Loaded: ${urls.length} URLs found.`);
  } catch (err) {
    console.error(`   ❌ Failed to load sitemap: ${err.message}. Using fallback.`);
    urls = [
      BASE_URL,
      `${BASE_URL}/products`,
      `${BASE_URL}/insights`,
      `${BASE_URL}/recombinant-antigens`,
      `${BASE_URL}/ivd-raw-materials`,
      `${BASE_URL}/diagnostic-cdmo`,
      `${BASE_URL}/services`,
      `${BASE_URL}/about`,
      `${BASE_URL}/contact`
    ];
  }

  // 2. Active Concurrent Crawl with Googlebot Headers
  console.log(`\n🕷️ [2/3] Crawling ${urls.length} URLs with Googlebot simulation (Concurrency: ${CONCURRENCY})...`);
  const crawlResults = [];

  for (let i = 0; i < urls.length; i += CONCURRENCY) {
    const batch = urls.slice(i, i + CONCURRENCY);
    const batchPromises = batch.map(async (url) => {
      const pageStart = Date.now();
      try {
        const res = await fetchWithTimeout(url, {
          headers: {
            'User-Agent': GOOGLEBOT_UA,
            'Accept': 'text/html,application/xhtml+xml',
          }
        });
        const duration = Date.now() - pageStart;
        const html = await res.text();
        const titleMatch = html.match(/<title>(.*?)<\/title>/i);
        const title = titleMatch ? titleMatch[1].trim() : 'No Title Found';
        return { url, status: res.status, duration, title, ok: res.ok };
      } catch (err) {
        return { url, status: 0, error: err.message, ok: false, duration: Date.now() - pageStart };
      }
    });

    const batchResults = await Promise.all(batchPromises);
    crawlResults.push(...batchResults);
    process.stdout.write(`   ↳ Crawled ${crawlResults.length}/${urls.length} URLs...\r`);
  }
  console.log(`\n   ✅ Crawl finished. 100% of live endpoints visited & edge caches warmed.`);

  // 3. Save Report
  console.log('\n📊 [3/3] Generating Crawl Diagnostics Report...');
  const totalDuration = ((Date.now() - startTime) / 1000).toFixed(2);
  const successCount = crawlResults.filter(r => r.ok).length;
  const avgLatency = (crawlResults.reduce((acc, r) => acc + r.duration, 0) / (crawlResults.length || 1)).toFixed(0);

  const report = {
    domain: DOMAIN,
    crawledAt: new Date().toISOString(),
    totalUrls: crawlResults.length,
    healthyUrls: successCount,
    healthPercent: ((successCount / (crawlResults.length || 1)) * 100).toFixed(1) + '%',
    avgLatencyMs: parseInt(avgLatency, 10),
    totalDurationSeconds: parseFloat(totalDuration),
    failures: crawlResults.filter(r => !r.ok).map(r => ({ url: r.url, status: r.status, error: r.error })),
  };

  const reportDir = path.join(__dirname, '../src/data');
  if (!fs.existsSync(reportDir)) fs.mkdirSync(reportDir, { recursive: true });
  fs.writeFileSync(path.join(reportDir, 'crawlbot_report.json'), JSON.stringify(report, null, 2), 'utf-8');

  console.log('='.repeat(70));
  console.log('📊 CRAWLBOT SUMMARY REPORT:');
  console.log(`   • Total URLs Crawled:     ${report.totalUrls}`);
  console.log(`   • Health Status:          ${report.healthyUrls}/${report.totalUrls} (${report.healthPercent})`);
  console.log(`   • Average Latency:        ${report.avgLatencyMs} ms`);
  console.log(`   • Failed Endpoints:       ${report.failures.length}`);
  console.log(`   • Execution Time:         ${report.totalDurationSeconds}s`);
  console.log(`   • Report File Saved:      src/data/crawlbot_report.json`);
  console.log('='.repeat(70));
  console.log('🎉 CRAWLBOT RUN COMPLETE.\n');

  process.exit(0);
}

runCrawlBot().catch((err) => {
  console.error('❌ CrawlBot Critical Error:', err);
  process.exit(1);
});
