'use client';

import { useRef, useEffect, useState } from 'react';
import { cn, designSystem } from '@/lib/design-system';
import { useVideoAutoplay } from '@/hooks/useVideoAutoplay';

interface VideoHeroProps {
  title: string;
  videoUrl: string;
  mobileVideoUrl?: string;
  posterImage: string;
  posterPlaceholder?: string;
  mobilePosterImage?: string;
  mobilePosterPlaceholder?: string;
}

export default function VideoHero({ title, videoUrl, mobileVideoUrl, posterImage, posterPlaceholder, mobilePosterImage, mobilePosterPlaceholder }: VideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentPoster, setCurrentPoster] = useState(mobilePosterImage || posterImage);
  const [currentPlaceholder, setCurrentPlaceholder] = useState(mobilePosterPlaceholder || posterPlaceholder);
  const [showPlaceholder, setShowPlaceholder] = useState(!!(mobilePosterPlaceholder || posterPlaceholder));

  useEffect(() => {
    const updatePoster = () => {
      const isMobile = window.innerWidth < 768;
      setCurrentPoster(isMobile && mobilePosterImage ? mobilePosterImage : posterImage);
      setCurrentPlaceholder(isMobile && mobilePosterPlaceholder ? mobilePosterPlaceholder : posterPlaceholder);
    };

    updatePoster();
    window.addEventListener('resize', updatePoster);
    return () => window.removeEventListener('resize', updatePoster);
  }, [posterImage, mobilePosterImage, posterPlaceholder, mobilePosterPlaceholder]);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setShowPlaceholder(false);
    };
    img.src = currentPoster;
  }, [currentPoster]);

  useVideoAutoplay(videoRef);

  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden bg-vision-licorice">
      {showPlaceholder && currentPlaceholder && (
        <img
          src={currentPlaceholder}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
        />
      )}
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        preload="auto"
        poster={currentPoster}
        className="absolute inset-0 w-full h-full object-cover"
      >
        {mobileVideoUrl && (
          <source src={mobileVideoUrl} type="video/mp4" media="(max-width: 768px)" />
        )}
        <source src={videoUrl} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-vision-dark-purple/40 to-vision-licorice/60 pointer-events-none"></div>

      <div className="relative h-full flex items-center justify-center">
        <div className={cn(designSystem.layout.textAlign.center, designSystem.spacing.padding.horizontal.sm, designSystem.layout.maxWidth["4xl"], designSystem.spacing.margin.horizontal.auto)}>
          <h2 className={cn(designSystem.text.heroTitle, designSystem.colors.text.primary)}>
            {title}
          </h2>
        </div>
      </div>
    </section>
  );
}
