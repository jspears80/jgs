/**
 * JGS Cloud Compliance
 * Robots.txt — static route for search engine directives
 * Compatible with Next.js v14+ (uses `routeSegmentConfig`)
 */

import { NextResponse } from 'next/server';

export const routeSegmentConfig = {
  runtime: 'edge',       // ensures fast, static edge delivery
  preferredRegion: 'auto'
};

// Generate robots.txt dynamically so it stays consistent across environments
export async function GET() {
  const body = `
User-agent: *
Allow: /

Sitemap: https://www.cloudjgs.com/sitemap.xml
`;

  return new NextResponse(body.trim(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, must-revalidate'
    }
  });
}
