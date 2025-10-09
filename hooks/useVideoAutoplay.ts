import { useEffect, RefObject } from 'react';

const HAVE_FUTURE_DATA = 3;

export function useVideoAutoplay(
  videoRef: RefObject<HTMLVideoElement | null>
) {
  useEffect(() => {
    if (!videoRef.current) return;

    const video = videoRef.current;

    const handleCanPlay = () => {
      video.play().catch(() => {
        // Autoplay failed, native poster remains visible
      });
    };

    const isVideoReady = video.readyState >= HAVE_FUTURE_DATA;
    if (isVideoReady) {
      handleCanPlay();
    } else {
      video.load();
    }

    video.addEventListener('canplay', handleCanPlay);

    return () => video.removeEventListener('canplay', handleCanPlay);
  }, [videoRef]);
}
