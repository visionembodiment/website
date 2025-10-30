'use client';

import { useRef, useEffect } from 'react';
import Navigation from './Navigation';
import PromotionBanner from './PromotionBanner';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import { promotionBannerContent } from '@/lib/content';
import { cn } from '@/lib/design-system';

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const { translateY, isSnapping } = useScrollDirection(headerRef);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight;
        document.documentElement.style.setProperty('--header-height', `${height}px`);
      }
    };

    updateHeaderHeight();

    window.addEventListener('resize', updateHeaderHeight);
    return () => window.removeEventListener('resize', updateHeaderHeight);
  }, [promotionBannerContent?.active]);

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
      {promotionBannerContent?.active && <PromotionBanner promotion={promotionBannerContent} />}
    </div>
  );
}
