// /app/robots.txt/route.ts
export async function GET() {
  const body = `User-agent: *
Allow: /

Sitemap: https://www.cloudjgs.com/sitemap.xml
`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
