'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface LazySectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade' | 'slide-up' | 'slide-left' | 'slide-right';
  delay?: number;
}

export default function LazySection({
  children,
  className = '',
  animation = 'fade',
  delay = 0
}: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setTimeout(() => {
              setIsVisible(true);
              setHasAnimated(true);
            }, delay);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, [hasAnimated, delay]);

  const animationClasses = {
    fade: isVisible
      ? 'opacity-100 transition-opacity duration-700 ease-out'
      : 'opacity-0',
    'slide-up': isVisible
      ? 'opacity-100 translate-y-0 transition-all duration-700 ease-out'
      : 'opacity-0 translate-y-8',
    'slide-left': isVisible
      ? 'opacity-100 translate-x-0 transition-all duration-700 ease-out'
      : 'opacity-0 translate-x-8',
    'slide-right': isVisible
      ? 'opacity-100 translate-x-0 transition-all duration-700 ease-out'
      : 'opacity-0 -translate-x-8',
  };

  return (
    <section
      ref={sectionRef}
      className={`${animationClasses[animation]} ${className}`}
    >
      {children}
    </section>
  );
}
