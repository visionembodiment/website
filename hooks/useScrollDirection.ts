import { useState, useEffect, useRef, RefObject } from 'react';

const DEBOUNCE_MS = 150;
const NAVIGATION_HEIGHT = 64;

export function useScrollDirection(headerRef: RefObject<HTMLDivElement | null>): {
  translateY: number;
  isSnapping: boolean;
} {
  const [translateY, setTranslateY] = useState(0);
  const [isSnapping, setIsSnapping] = useState(false);
  const lastScrollY = useRef(0);
  const lastScrollDirection = useRef<'up' | 'down'>('down');
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const currentTranslateY = useRef(translateY);

  currentTranslateY.current = translateY;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const headerHeight = headerRef.current?.offsetHeight || 0;
      const scrollDelta = currentScrollY - lastScrollY.current;
      const isScrollingUp = scrollDelta < 0;

      if (currentScrollY < headerHeight) {
        setTranslateY(0);
        lastScrollY.current = currentScrollY;
        return;
      }

      const newTranslateY = Math.max(-NAVIGATION_HEIGHT, Math.min(0, currentTranslateY.current - scrollDelta));
      setTranslateY(newTranslateY);
      setIsSnapping(false);

      lastScrollDirection.current = isScrollingUp ? 'up' : 'down';

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = setTimeout(() => {
        setIsSnapping(true);
        if (lastScrollDirection.current === 'up') {
          setTranslateY(0);
        } else {
          setTranslateY(-NAVIGATION_HEIGHT);
        }
      }, DEBOUNCE_MS);

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [headerRef]);

  return { translateY, isSnapping };
}
