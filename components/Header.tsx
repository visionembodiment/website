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
