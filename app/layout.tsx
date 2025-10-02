import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'JGS Cloud Compliance — Microsoft 365 Secured for CPA & Law Firms',
  description: 'Flat-fee projects and advisory retainers that harden Microsoft 365, secure email delivery, and prove recovery—with audit-ready evidence for insurers and regulators.',
  openGraph: {
    title: 'JGS Cloud Compliance — Proof you can show.',
    description: 'Security hardening, secure email, recovery assurance. Flat-fee clarity. Evidence binders for CPA & Law firms.',
    url: 'https://www.cloudjgs.com/',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
    siteName: 'JGS Cloud Compliance',
  },
  icons: {
    icon: ['/favicon-16.png','/favicon-32.png','/favicon-48.png','/favicon.ico'],
    apple: ['/apple-touch-180.png']
  },
  robots: {
    index: true,
    follow: true
  },
  metadataBase: new URL('https://www.cloudjgs.com')
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
