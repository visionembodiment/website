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
}

export default function PromotionBanner({ promotion }: PromotionBannerProps) {
  return (
    <div
      className={cn(
        designSystem.colors.gradient.primary,
        designSystem.spacing.padding.vertical.sm,
        designSystem.spacing.padding.horizontal.sm,
        designSystem.layout.textAlign.center,
      )}
    >
      <div className={cn(designSystem.layout.container, "flex flex-col sm:flex-row items-center justify-center", designSystem.spacing.gap.xs, designSystem.spacing.gap.responsive.sm.sm)}>
        <span className={cn(designSystem.text.body.lg, designSystem.fontWeight.semibold, designSystem.colors.text.primary)}>{promotion.emoji} {promotion.title}</span>
        <span className={cn(designSystem.text.body.sm, designSystem.colors.text.secondary)}>{promotion.description}</span>
        <Link
          href={promotion.href}
          className={cn(designSystem.buttons.primary, designSystem.buttons.sizes.small)}
        >
          {promotion.buttonText}
        </Link>
      </div>
    </div>
  );
}
