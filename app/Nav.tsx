'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function Nav() {
  const path = usePathname();

  // New site navigation
  const items = [
    { href: '/services', label: 'Secure' },   // formerly "Services"
    { href: '/advisory', label: 'Support' },  // formerly "Advisory"
    { href: '/proof', label: 'Proof' },       // new page
    { href: '/custom', label: 'Custom' },     // new page
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="nav-links unified-nav" aria-label="Main navigation">
      {items.map(({ href, label }) => {
        const active = path === href;
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
