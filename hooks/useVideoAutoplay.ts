import { useEffect, RefObject } from 'react';

const HAVE_FUTURE_DATA = 3;

export function useVideoAutoplay(
  videoRef: RefObject<HTMLVideoElement | null>,
  posterRef: RefObject<HTMLImageElement | null>
) {
  useEffect(() => {
    if (!videoRef.current) return;

    const video = videoRef.current;

    const handleCanPlay = () => {
      video.classList.remove('opacity-0');

      video.play().catch(() => {
        video.classList.add('opacity-0');
      });
    };

    const isVideoReady = video.readyState >= HAVE_FUTURE_DATA;
    if (isVideoReady) {
      handleCanPlay();
    }

    video.addEventListener('canplay', handleCanPlay);
    return () => video.removeEventListener('canplay', handleCanPlay);
  }, [videoRef, posterRef]);
}
