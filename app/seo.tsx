'use client';
import { usePathname } from 'next/navigation';
import Head from 'next/head';

export default function Seo() {
  const path = usePathname();
  if (!path) return null; // hydration safety

  const meta = {
    '/': {
      title: 'Secure and Support — Microsoft 365 for Law & CPA Firms | JGS Cloud Compliance',
      desc:
        'JGS Cloud Compliance helps law and accounting firms operate securely and confidently on Microsoft 365. Projects fix risks. Retainers keep systems supported and defensible.',
    },
    '/about': {
      title: 'About JGS Cloud Compliance | Secure and Support for Law & CPA Firms',
      desc:
        'Learn how JGS Cloud Compliance helps professional firms stay secure, compliant, and confident on Microsoft 365. Founded by Jeremiah Spears, delivering assurance—not tickets.',
    },
    '/services': {
      title: 'Microsoft 365 Security Projects | JGS Cloud Compliance',
      desc:
        'Flat-fee Microsoft 365 projects that secure your firm: Security Hardening, Email Authentication & Delivery, and Backup & Recovery Validation.',
    },
    '/advisory': {
      title: 'Microsoft 365 Advisory Retainers | JGS Cloud Compliance',
      desc:
        'Ongoing Microsoft 365 support and oversight for law and CPA firms. Advisory retainers keep your environment compliant, documented, and audit-ready.',
    },
    '/contact': {
      title: 'Contact JGS Cloud Compliance | Book Consultation',
      desc:
        'Schedule a 30-minute consultation with Jeremiah Spears to discuss securing and supporting your firm’s Microsoft 365 environment. Remote consulting nationwide.',
    },
  };

  const current = meta[path] || meta['/'];

  return (
    <Head>
      <title>{current.title}</title>
      <meta name="description" content={current.desc} />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href={`https://www.cloudjgs.com${path}`} />

      {/* OpenGraph */}
      <meta property="og:title" content={current.title} />
      <meta property="og:description" content={current.desc} />
      <meta property="og:url" content={`https://www.cloudjgs.com${path}`} />
      <meta property="og:site_name" content="JGS Cloud Compliance" />
      <meta property="og:image" content="https://www.cloudjgs.com/og.png" />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={current.title} />
      <meta name="twitter:description" content={current.desc} />
      <meta name="twitter:image" content="https://www.cloudjgs.com/og.png" />

      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "JGS Cloud Compliance, LLC",
            url: "https://www.cloudjgs.com",
            logo: "https://www.cloudjgs.com/Logo.png",
            sameAs: ["https://www.linkedin.com/in/jspears80/"],
            founder: {
              "@type": "Person",
              name: "Jeremiah Spears",
              jobTitle: "Founder & Principal Consultant",
            },
            areaServed: "United States",
            description:
              "Microsoft 365 consulting for law and accounting firms. Secure and Support — projects that harden your environment and advisory that keeps it strong.",
          }),
        }}
      />
    </Head>
  );
}
