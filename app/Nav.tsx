'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/secure', label: 'Secure' },
  { href: '/prove', label: 'Prove' },
  { href: '/assure', label: 'Assure' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="nav-links" aria-label="Primary">
      {NAV_ITEMS.map(({ href, label }) => {
        const active =
          pathname === href ||
          (href !== '/' && pathname?.startsWith(href + '/'));

        return (
          <Link
            key={href}
            href={href}
            className={active ? 'nav-active' : undefined}
            aria-current={active ? 'page' : undefined}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
