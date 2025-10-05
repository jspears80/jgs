// /scripts/verify-seo.ts
// Quick sanity check for your live SEO endpoints.
// Run:  npx tsx scripts/verify-seo.ts
// or:   ts-node scripts/verify-seo.ts
// Requires Node 18+ (fetch built-in).

const BASE_URL = process.env.SITE_URL || 'https://www.cloudjgs.com';

async function check(path: string) {
  const url = `${BASE_URL}${path}`;
  try {
    const res = await fetch(url);
    const text = await res.text();
    console.log(`\n===== ${path} =====`);
    console.log(`Status: ${res.status}`);
    console.log(`Content-Type: ${res.headers.get('content-type')}`);
    console.log('--- First 300 chars ---');
    console.log(text.slice(0, 300));
  } catch (err) {
    console.error(`Error fetching ${url}:`, err);
  }
}

async function main() {
  console.log(`Checking SEO endpoints for ${BASE_URL}`);
  await check('/robots.txt');
  await check('/sitemap.xml');
  console.log('\n✅  SEO verification complete.\n');
}

main();
