// /app/sitemap.xml/route.ts
export async function GET() {
  const base = 'https://www.cloudjgs.com';
  const urls = ['/', '/about', '/services', '/advisory', '/contact'];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `<url>
  <loc>${base}${u}</loc>
  <changefreq>monthly</changefreq>
  <priority>${u === '/' ? '1.0' : '0.8'}</priority>
</url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
