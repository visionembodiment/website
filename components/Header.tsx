'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { designSystem, cn } from '@/lib/design-system';
import { useScrollDirection } from '@/hooks/useScrollDirection';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const { isSticky, translateY } = useScrollDirection(headerRef);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Community', href: '/community' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <header
      ref={headerRef}
      className={cn(
        "bg-vision-isabelline shadow-sm z-50 transition-transform duration-300",
        designSystem.colors.border.primary,
        "border-b",
        isSticky && "sticky top-0"
      )}
      style={{
        transform: `translateY(${translateY}px)`
      }}
    >
      <nav className={designSystem.layout.container}>
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className={cn(designSystem.text.h3, designSystem.colors.text.inverse.primary)}>
              Vision Embodiment
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  designSystem.text.body.sm,
                  designSystem.fontWeight.medium,
                  "transition-colors hover:text-vision-lion",
                  isActive(item.href)
                    ? designSystem.colors.text.inverse.primary
                    : designSystem.colors.text.inverse.secondary
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/booking"
              className={cn(designSystem.buttons.primarySmall, "px-4 py-2")}
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className={cn("md:hidden inline-flex items-center justify-center p-2 rounded-md", designSystem.colors.text.inverse.primary, designSystem.colors.hover.gold)}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "block px-3 py-2 rounded-md",
                    designSystem.text.body.md,
                    designSystem.fontWeight.medium,
                    "transition-colors hover:text-vision-lion",
                    isActive(item.href)
                      ? cn(designSystem.colors.text.inverse.primary, "bg-vision-lion/10")
                      : designSystem.colors.text.inverse.secondary
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/booking"
                className={cn(designSystem.buttons.primarySmall, designSystem.buttons.block, "px-3 py-2")}
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}