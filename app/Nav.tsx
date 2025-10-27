'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function Nav() {
  const path = usePathname();
  const items = [
    { href: '/services', label: 'Secure' },
    { href: '/advisory', label: 'Support' },
    { href: '/proof', label: 'Proof' },
    { href: '/custom', label: 'Custom' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="nav-links unified-nav" aria-label="Main navigation">
      {items.map(({ href, label }) => {
        const active = path === href;
        return (
          <Link key={href} href={href} className={active ? 'nav-active' : undefined} aria-current={active ? 'page' : undefined}>
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
