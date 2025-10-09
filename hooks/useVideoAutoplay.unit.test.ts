import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useVideoAutoplay } from './useVideoAutoplay';
import { createRef } from 'react';

describe('useVideoAutoplay', () => {
  let videoRef: React.RefObject<HTMLVideoElement>;
  let posterRef: React.RefObject<HTMLImageElement>;
  let mockVideo: Partial<HTMLVideoElement>;
  let mockPoster: Partial<HTMLImageElement>;

  beforeEach(() => {
    mockVideo = {
      readyState: 0,
      play: vi.fn().mockResolvedValue(undefined),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      classList: {
        add: vi.fn(),
        remove: vi.fn(),
      } as any,
    };

    mockPoster = {
      classList: {
        add: vi.fn(),
        remove: vi.fn(),
      } as any,
    };

    videoRef = createRef<HTMLVideoElement>();
    posterRef = createRef<HTMLImageElement>();

    Object.defineProperty(videoRef, 'current', {
      writable: true,
      value: mockVideo,
    });

    Object.defineProperty(posterRef, 'current', {
      writable: true,
      value: mockPoster,
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('when video is already ready (cached)', () => {
    it('should attempt to play immediately', async () => {
      // Arrange
      mockVideo.readyState = 4;

      // Act
      renderHook(() => useVideoAutoplay(videoRef, posterRef));

      await act(async () => {
        await Promise.resolve();
      });

      // Assert
      expect(mockVideo.play).toHaveBeenCalled();
    });

    it('should fade in video when play succeeds', async () => {
      // Arrange
      mockVideo.readyState = 3;

      // Act
      renderHook(() => useVideoAutoplay(videoRef, posterRef));

      await act(async () => {
        await Promise.resolve();
      });

      // Assert
      expect(mockVideo.classList?.remove).toHaveBeenCalledWith('opacity-0');
    });

    it('should fade in video before fading out poster to prevent black blink', async () => {
      // Arrange
      mockVideo.readyState = 3;
      const calls: string[] = [];

      mockVideo.classList = {
        add: vi.fn((cls) => calls.push(`video.add(${cls})`)),
        remove: vi.fn((cls) => calls.push(`video.remove(${cls})`)),
      } as any;

      mockPoster.classList = {
        add: vi.fn((cls) => calls.push(`poster.add(${cls})`)),
        remove: vi.fn((cls) => calls.push(`poster.remove(${cls})`)),
      } as any;

      // Act
      renderHook(() => useVideoAutoplay(videoRef, posterRef));

      await act(async () => {
        await Promise.resolve();
      });

      // Assert - Video fades in first
      const videoFadeIndex = calls.indexOf('video.remove(opacity-0)');
      const posterFadeIndex = calls.indexOf('poster.add(opacity-0)');

      expect(videoFadeIndex).toBeGreaterThanOrEqual(0);
      expect(posterFadeIndex).toBeGreaterThanOrEqual(0);
      expect(videoFadeIndex).toBeLessThan(posterFadeIndex);
    });
  });

  describe('when video is not ready (first load)', () => {
    it('should attach canplay event listener', () => {
      // Arrange
      mockVideo.readyState = 0;

      // Act
      renderHook(() => useVideoAutoplay(videoRef, posterRef));

      // Assert
      expect(mockVideo.addEventListener).toHaveBeenCalledWith('canplay', expect.any(Function));
    });

    it('should attempt to play when canplay fires', async () => {
      // Arrange
      mockVideo.readyState = 0;
      let canplayHandler: (() => void) | undefined;
      mockVideo.addEventListener = vi.fn((event, handler) => {
        if (event === 'canplay') {
          canplayHandler = handler as () => void;
        }
      });

      renderHook(() => useVideoAutoplay(videoRef, posterRef));

      // Act
      await act(async () => {
        if (canplayHandler) {
          canplayHandler();
        }
        await Promise.resolve();
      });

      // Assert
      expect(mockVideo.play).toHaveBeenCalled();
    });

    it('should fade in video when canplay triggers successful play', async () => {
      // Arrange
      mockVideo.readyState = 0;
      let canplayHandler: (() => void) | undefined;
      mockVideo.addEventListener = vi.fn((event, handler) => {
        if (event === 'canplay') {
          canplayHandler = handler as () => void;
        }
      });

      renderHook(() => useVideoAutoplay(videoRef, posterRef));

      // Act
      await act(async () => {
        if (canplayHandler) {
          canplayHandler();
        }
        await Promise.resolve();
      });

      // Assert
      expect(mockVideo.classList?.remove).toHaveBeenCalledWith('opacity-0');
      expect(mockPoster.classList?.add).toHaveBeenCalledWith('opacity-0');
    });
  });

  describe('when autoplay is blocked', () => {
    it('should keep poster visible', async () => {
      // Arrange
      mockVideo.readyState = 4;
      mockVideo.play = vi.fn().mockRejectedValue(new Error('NotAllowedError'));

      // Act
      renderHook(() => useVideoAutoplay(videoRef, posterRef));

      await act(async () => {
        await Promise.resolve();
      });

      // Assert
      expect(mockVideo.classList?.remove).not.toHaveBeenCalled();
      expect(mockPoster.classList?.add).not.toHaveBeenCalled();
    });

    it('should not throw error', async () => {
      // Arrange
      mockVideo.readyState = 4;
      mockVideo.play = vi.fn().mockRejectedValue(new Error('NotAllowedError'));

      // Act & Assert
      expect(() => {
        renderHook(() => useVideoAutoplay(videoRef, posterRef));
      }).not.toThrow();
    });
  });

  describe('cleanup', () => {
    it('should remove canplay listener on unmount', () => {
      // Arrange
      mockVideo.readyState = 0;
      const { unmount } = renderHook(() => useVideoAutoplay(videoRef, posterRef));

      // Act
      unmount();

      // Assert
      expect(mockVideo.removeEventListener).toHaveBeenCalledWith('canplay', expect.any(Function));
    });
  });

  describe('when refs are null', () => {
    it('should handle null video ref gracefully', () => {
      // Arrange
      const nullVideoRef = createRef<HTMLVideoElement>();

      // Act & Assert
      expect(() => {
        renderHook(() => useVideoAutoplay(nullVideoRef, posterRef));
      }).not.toThrow();
    });

    it('should handle null poster ref gracefully', async () => {
      // Arrange
      const nullPosterRef = createRef<HTMLImageElement>();
      mockVideo.readyState = 4;

      // Act
      renderHook(() => useVideoAutoplay(videoRef, nullPosterRef));

      await act(async () => {
        await Promise.resolve();
      });

      // Assert
      expect(mockVideo.play).toHaveBeenCalled();
      expect(mockVideo.classList?.remove).toHaveBeenCalledWith('opacity-0');
    });

    it('should handle both refs being null gracefully', () => {
      // Arrange
      const nullVideoRef = createRef<HTMLVideoElement>();
      const nullPosterRef = createRef<HTMLImageElement>();

      // Act & Assert
      expect(() => {
        renderHook(() => useVideoAutoplay(nullVideoRef, nullPosterRef));
      }).not.toThrow();
    });
  });
});
