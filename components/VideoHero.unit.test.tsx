import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render } from '@testing-library/react';
import VideoHero from './VideoHero';

describe('VideoHero', () => {
  const defaultProps = {
    title: 'Transform Your Vision',
    videoUrl: '/videos/hero.mp4',
    posterImage: '/images/hero-poster.webp',
  };

  beforeEach(() => {
    HTMLVideoElement.prototype.play = vi.fn().mockResolvedValue(undefined);
  });

  describe('video autoplay', () => {
    it('should attempt to play when canplay event fires (uncached video)', async () => {
      // Arrange
      const { container } = render(<VideoHero {...defaultProps} />);
      const video = container.querySelector('video') as HTMLVideoElement;

      Object.defineProperty(video, 'readyState', { value: 0, writable: true });

      // Act - Simulate video loading and canplay event
      video.dispatchEvent(new Event('canplay'));

      // Assert
      expect(video.play).toHaveBeenCalled();
    });

    it('should play immediately if video is already ready (cached video)', async () => {
      // Arrange - Mock cached video with readyState already at HAVE_FUTURE_DATA
      const originalReadyState = Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, 'readyState');
      Object.defineProperty(HTMLMediaElement.prototype, 'readyState', {
        get() { return 3; }, // HAVE_FUTURE_DATA
        configurable: true,
      });

      // Act
      const { container } = render(<VideoHero {...defaultProps} />);
      const video = container.querySelector('video') as HTMLVideoElement;

      // Assert - Should play immediately without waiting for canplay event
      expect(video.play).toHaveBeenCalled();

      // Cleanup
      if (originalReadyState) {
        Object.defineProperty(HTMLMediaElement.prototype, 'readyState', originalReadyState);
      }
    });

    it('should hide poster and show video when play succeeds', async () => {
      // Arrange
      const { container } = render(<VideoHero {...defaultProps} />);
      const video = container.querySelector('video') as HTMLVideoElement;
      const poster = container.querySelector('img') as HTMLImageElement;

      // Act
      video.dispatchEvent(new Event('canplay'));
      await vi.waitFor(() => {
        expect(video.classList.contains('opacity-0')).toBe(false);
      });

      // Assert
      expect(poster.classList.contains('opacity-0')).toBe(true);
    });

    it('should keep poster visible when autoplay is blocked', async () => {
      // Arrange
      HTMLVideoElement.prototype.play = vi.fn().mockRejectedValue(new Error('NotAllowedError'));
      const { container } = render(<VideoHero {...defaultProps} />);
      const video = container.querySelector('video') as HTMLVideoElement;
      const poster = container.querySelector('img') as HTMLImageElement;

      // Act
      video.dispatchEvent(new Event('canplay'));
      await new Promise(resolve => setTimeout(resolve, 0));

      // Assert
      expect(video.classList.contains('opacity-0')).toBe(true);
      expect(poster.classList.contains('opacity-0')).toBe(false);
    });
  });

  describe('rendering', () => {
    it('should render video with correct sources', () => {
      // Arrange
      const props = {
        ...defaultProps,
        mobileVideoUrl: '/videos/hero-mobile.mp4',
      };

      // Act
      const { container } = render(<VideoHero {...props} />);
      const video = container.querySelector('video');
      const videoSources = video?.querySelectorAll('source');

      // Assert
      expect(videoSources).toHaveLength(2);
      expect(videoSources?.[0]).toHaveAttribute('src', '/videos/hero-mobile.mp4');
      expect(videoSources?.[1]).toHaveAttribute('src', '/videos/hero.mp4');
    });

    it('should render poster image', () => {
      // Arrange & Act
      const { container } = render(<VideoHero {...defaultProps} />);
      const poster = container.querySelector('img');

      // Assert
      expect(poster).toHaveAttribute('src', defaultProps.posterImage);
    });

    it('should render title', () => {
      // Arrange & Act
      const { getByText } = render(<VideoHero {...defaultProps} />);

      // Assert
      expect(getByText(defaultProps.title)).toBeInTheDocument();
    });

    it('should have video with required attributes for autoplay', () => {
      // Arrange & Act
      const { container } = render(<VideoHero {...defaultProps} />);
      const video = container.querySelector('video') as HTMLVideoElement;

      // Assert
      expect(video.muted).toBe(true);
      expect(video.hasAttribute('playsInline')).toBe(true);
      expect(video.loop).toBe(true);
      expect(video).toHaveAttribute('preload', 'auto');
    });
  });

  describe('responsive behavior', () => {
    it('should use mobile poster when provided', () => {
      // Arrange
      const props = {
        ...defaultProps,
        mobilePosterImage: '/images/hero-poster-mobile.webp',
      };

      // Act
      const { container } = render(<VideoHero {...props} />);
      const poster = container.querySelector('img');

      // Assert
      expect(poster).toHaveAttribute('src', props.mobilePosterImage);
    });

    it('should use desktop poster as fallback when mobile poster not provided', () => {
      // Arrange & Act
      const { container } = render(<VideoHero {...defaultProps} />);
      const poster = container.querySelector('img');

      // Assert
      expect(poster).toHaveAttribute('src', defaultProps.posterImage);
    });
  });
});
