'use client';

import { useEffect, useRef, useState } from 'react';
import { cn, designSystem } from '@/lib/design-system';

interface VideoHeroProps {
  title: string;
  videoUrl: string;
  mobileVideoUrl?: string;
  posterImage: string;
  mobilePosterImage?: string;
}

export default function VideoHero({ title, videoUrl, mobileVideoUrl, posterImage, mobilePosterImage }: VideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [poster, setPoster] = useState(posterImage);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile && mobilePosterImage) {
      setPoster(mobilePosterImage);
    }

    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay blocked, video will show poster
      });
    }
  }, [mobilePosterImage]);

  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        poster={poster}
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      >
        {mobileVideoUrl && (
          <source src={mobileVideoUrl} type="video/mp4" media="(max-width: 768px)" />
        )}
        <source src={videoUrl} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-vision-dark-purple/40 to-vision-licorice/60"></div>

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
