'use client';

import { useRef } from 'react';
import { cn, designSystem } from '@/lib/design-system';
import { useVideoAutoplay } from '@/hooks/useVideoAutoplay';

interface VideoHeroProps {
  title: string;
  videoUrl: string;
  mobileVideoUrl?: string;
  posterImage: string;
  mobilePosterImage?: string;
}

export default function VideoHero({ title, videoUrl, mobileVideoUrl, posterImage, mobilePosterImage }: VideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useVideoAutoplay(videoRef, imgRef);

  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
      <picture className="absolute inset-0 w-full h-full transition-opacity duration-500">
        <source srcSet={posterImage} media="(min-width: 768px)" />
        <img
          ref={imgRef}
          src={mobilePosterImage || posterImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
        />
      </picture>
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover opacity-0"
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
