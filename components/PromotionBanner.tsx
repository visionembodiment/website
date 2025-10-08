'use client';

import Link from 'next/link';
import { designSystem, cn } from '@/lib/design-system';

interface Promotion {
  emoji: string;
  title: string;
  description: string;
  href: string;
  buttonText: string;
}

interface PromotionBannerProps {
  promotion: Promotion;
  isSticky: boolean;
  translateY: number;
  isSnapping: boolean;
}

export default function PromotionBanner({ promotion, isSticky, translateY, isSnapping }: PromotionBannerProps) {
  return (
    <div
      className={cn(
        isSticky ? "sticky top-16" : "sticky top-0",
        "z-40",
        designSystem.colors.gradient.primary,
        designSystem.spacing.padding.vertical.sm,
        designSystem.spacing.padding.horizontal.sm,
        designSystem.layout.textAlign.center,
        isSnapping && "transition-transform duration-300"
      )}
      style={{
        transform: `translateY(${translateY}px)`
      }}
    >
      <div className={cn(designSystem.layout.container, "flex flex-col sm:flex-row items-center justify-center", designSystem.spacing.gap.xs, designSystem.spacing.gap.responsive.sm.sm)}>
        <span className={cn(designSystem.text.body.lg, designSystem.fontWeight.semibold, designSystem.colors.text.primary)}>{promotion.emoji} {promotion.title}</span>
        <span className={cn(designSystem.text.body.sm, designSystem.colors.text.secondary)}>{promotion.description}</span>
        <Link
          href={promotion.href}
          className={designSystem.buttons.primarySmall}
        >
          {promotion.buttonText}
        </Link>
      </div>
    </div>
  );
}
