import { useState, useEffect, useRef, RefObject } from 'react';

const DEBOUNCE_MS = 150;

export function useScrollDirection(headerRef: RefObject<HTMLElement | null>): {
  isSticky: boolean;
  translateY: number;
} {
  const [isSticky, setIsSticky] = useState(false);
  const [translateY, setTranslateY] = useState(0);
  const lastScrollY = useRef(0);
  const lastScrollDirection = useRef<'up' | 'down'>('down');
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const currentTranslateY = useRef(translateY);
  const currentIsSticky = useRef(isSticky);

  currentTranslateY.current = translateY;
  currentIsSticky.current = isSticky;

  useEffect(() => {

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const headerHeight = headerRef.current?.offsetHeight || 0;
      const scrollDelta = currentScrollY - lastScrollY.current;
      const isScrollingUp = scrollDelta < 0;

      if (currentScrollY === 0) {
        setIsSticky(false);
        setTranslateY(0);
        lastScrollY.current = currentScrollY;
        return;
      }

      if (currentScrollY < headerHeight) {
        if (currentIsSticky.current) {
          setTranslateY(0);
          lastScrollY.current = currentScrollY;
          return;
        }

        setTranslateY(0);
        lastScrollY.current = currentScrollY;
        return;
      }

      if (!currentIsSticky.current && isScrollingUp) {
        setIsSticky(true);
        setTranslateY(0);
      } else if (!currentIsSticky.current) {
        lastScrollY.current = currentScrollY;
        return;
      }

      const newTranslateY = Math.max(-headerHeight, Math.min(0, currentTranslateY.current - scrollDelta));
      setTranslateY(newTranslateY);

      lastScrollDirection.current = isScrollingUp ? 'up' : 'down';

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = setTimeout(() => {
        if (lastScrollDirection.current === 'up') {
          setTranslateY(0);
        } else {
          setTranslateY(-headerHeight);
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

  return { isSticky, translateY };
}
