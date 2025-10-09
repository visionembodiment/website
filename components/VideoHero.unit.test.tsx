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

    it('should not throw error when autoplay is blocked', async () => {
      // Arrange
      HTMLVideoElement.prototype.play = vi.fn().mockRejectedValue(new Error('NotAllowedError'));

      // Act & Assert
      expect(() => {
        render(<VideoHero {...defaultProps} />);
      }).not.toThrow();
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

    it('should set poster attribute on video element', () => {
      // Arrange & Act
      const { container } = render(<VideoHero {...defaultProps} />);
      const video = container.querySelector('video');

      // Assert
      expect(video).toHaveAttribute('poster');
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
    it('should render mobile placeholder when provided', () => {
      // Arrange
      const props = {
        ...defaultProps,
        mobilePosterPlaceholder: '/images/hero-poster-mobile-placeholder.webp',
      };

      // Act
      const { container } = render(<VideoHero {...props} />);
      const placeholder = container.querySelector('img');

      // Assert
      expect(placeholder).toHaveAttribute('src', props.mobilePosterPlaceholder);
      expect(placeholder).toHaveClass('md:hidden');
    });

    it('should not render placeholder image when not provided', () => {
      // Arrange & Act
      const { container } = render(<VideoHero {...defaultProps} />);
      const placeholder = container.querySelector('img');

      // Assert
      expect(placeholder).toBeNull();
    });

    it('should set responsive poster on video element', () => {
      // Arrange
      const props = {
        ...defaultProps,
        mobilePosterImage: '/images/hero-poster-mobile.webp',
      };

      // Act
      const { container } = render(<VideoHero {...props} />);
      const video = container.querySelector('video');

      // Assert - Video should have mobile poster initially (based on default window size)
      expect(video).toHaveAttribute('poster');
    });
  });
});
