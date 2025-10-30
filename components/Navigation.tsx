'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { designSystem, cn } from '@/lib/design-system';
import { navigationLinks, navigationContent } from '@/lib/content';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <nav
      className={cn(
        "bg-vision-isabelline",
        designSystem.shadows.subtle,
        designSystem.colors.border.primary,
        "border-b"
      )}
    >
      <div className={designSystem.layout.container}>
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className={cn(designSystem.text.h3, designSystem.colors.text.inverse.primary)}>
              {navigationContent.logo}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className={cn("hidden md:flex items-center", designSystem.spacing.gap.lg)}>
            {navigationLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  designSystem.text.body.sm,
                  "transition-colors",
                  designSystem.colors.hover.text.accent,
                  isActive(item.href)
                    ? cn(designSystem.colors.text.inverse.primary, designSystem.fontWeight.semibold)
                    : cn(designSystem.colors.text.inverse.secondary, designSystem.fontWeight.medium)
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href={navigationContent.bookNowHref}
              className={cn(designSystem.buttons.primary, designSystem.buttons.sizes.small)}
            >
              {navigationContent.bookNowText}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className={cn("md:hidden inline-flex items-center justify-center", designSystem.spacing.padding.sm, designSystem.rounded.md, designSystem.colors.text.inverse.primary, designSystem.colors.hover.background.gold)}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">{navigationContent.mobileMenuLabel}</span>
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
            <div className={cn(designSystem.spacing.padding.horizontal.sm, designSystem.spacing.padding.vertical.sm, designSystem.spacing.gap.xs, "flex flex-col")}>
              {navigationLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "block transition-colors",
                    designSystem.spacing.padding.horizontal.sm,
                    designSystem.spacing.padding.vertical.sm,
                    designSystem.rounded.md,
                    designSystem.text.body.md,
                    designSystem.colors.hover.text.accent,
                    isActive(item.href)
                      ? cn(designSystem.colors.text.inverse.primary, designSystem.fontWeight.semibold, "bg-vision-lion/10")
                      : cn(designSystem.colors.text.inverse.secondary, designSystem.fontWeight.medium)
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href={navigationContent.bookNowHref}
                className={cn(designSystem.buttons.primary, designSystem.buttons.sizes.small, designSystem.buttons.layout.block)}
                onClick={() => setMobileMenuOpen(false)}
              >
                {navigationContent.bookNowText}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}