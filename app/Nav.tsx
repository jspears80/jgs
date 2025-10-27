'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function Nav() {
  const path = usePathname();

  const items = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Secure' },
    { href: '/advisory', label: 'Support' },
    { href: '/about', label: 'Prove' },
    { href: '/custom', label: 'Custom' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="nav-links">
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
