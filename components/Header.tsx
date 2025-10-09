'use client';

import { useRef } from 'react';
import Navigation from './Navigation';
import PromotionBanner from './PromotionBanner';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import { homePageContent } from '@/lib/content';
import { cn } from '@/lib/design-system';

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const { translateY, isSnapping } = useScrollDirection(headerRef);
  const { promotion } = homePageContent;

  return (
    <div
      ref={headerRef}
      className={cn(
        "sticky top-0 z-50",
        isSnapping && "transition-transform duration-300"
      )}
      style={{
        transform: `translateY(${translateY}px)`
      }}
    >
      <Navigation />
      {promotion?.active && <PromotionBanner promotion={promotion} />}
    </div>
  );
}
