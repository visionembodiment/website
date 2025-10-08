'use client';

import { useRef } from 'react';
import Navigation from './Navigation';
import PromotionBanner from './PromotionBanner';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import { homePageContent } from '@/lib/content';

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const { isSticky, translateY, isSnapping } = useScrollDirection(headerRef);
  const { promotion } = homePageContent;

  const NAVIGATION_HEIGHT = 64;
  const bannerTranslateY = translateY + NAVIGATION_HEIGHT;

  return (
    <>
      <Navigation
        headerRef={headerRef}
        isSticky={isSticky}
        translateY={translateY}
        isSnapping={isSnapping}
      />
      <PromotionBanner
        promotion={promotion}
        isSticky={isSticky}
        translateY={translateY}
        isSnapping={isSnapping}
      />
    </>
  );
}
