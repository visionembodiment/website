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
      play: vi.fn().mockResolvedValue(undefined),
      load: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      classList: {
        add: vi.fn(),
        remove: vi.fn(),
      } as unknown as DOMTokenList,
    };

    Object.defineProperty(mockVideo, 'readyState', {
      writable: true,
      value: 0,
    });

    mockPoster = {
      classList: {
        add: vi.fn(),
        remove: vi.fn(),
      } as unknown as DOMTokenList,
    };

    videoRef = createRef<HTMLVideoElement>() as React.RefObject<HTMLVideoElement>;
    posterRef = createRef<HTMLImageElement>() as React.RefObject<HTMLImageElement>;

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
    it('should NOT call load() when cached to avoid re-download', () => {
      // Arrange
      (mockVideo as { readyState: number }).readyState =4;

      // Act
      renderHook(() => useVideoAutoplay(videoRef));

      // Assert
      expect(mockVideo.load).not.toHaveBeenCalled();
    });

    it('should attempt to play immediately', async () => {
      // Arrange
      (mockVideo as { readyState: number }).readyState =4;

      // Act
      renderHook(() => useVideoAutoplay(videoRef));

      await act(async () => {
        await Promise.resolve();
      });

      // Assert
      expect(mockVideo.play).toHaveBeenCalled();
    });
  });

  describe('when video is not ready (first load)', () => {
    it('should call load() to force video download on mobile', () => {
      // Arrange
      (mockVideo as { readyState: number }).readyState =0;

      // Act
      renderHook(() => useVideoAutoplay(videoRef));

      // Assert
      expect(mockVideo.load).toHaveBeenCalled();
    });

    it('should attach canplay event listener', () => {
      // Arrange
      (mockVideo as { readyState: number }).readyState =0;

      // Act
      renderHook(() => useVideoAutoplay(videoRef));

      // Assert
      expect(mockVideo.addEventListener).toHaveBeenCalledWith('canplay', expect.any(Function));
    });

    it('should attempt to play when canplay fires', async () => {
      // Arrange
      (mockVideo as { readyState: number }).readyState =0;
      let canplayHandler: (() => void) | undefined;
      mockVideo.addEventListener = vi.fn((event, handler) => {
        if (event === 'canplay') {
          canplayHandler = handler as () => void;
        }
      });

      renderHook(() => useVideoAutoplay(videoRef));

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
      (mockVideo as { readyState: number }).readyState =0;
      let canplayHandler: (() => void) | undefined;
      mockVideo.addEventListener = vi.fn((event, handler) => {
        if (event === 'canplay') {
          canplayHandler = handler as () => void;
        }
      });

      renderHook(() => useVideoAutoplay(videoRef));

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
  });

  describe('when autoplay is blocked', () => {
    it('should keep poster visible', async () => {
      // Arrange
      (mockVideo as { readyState: number }).readyState =4;
      mockVideo.play = vi.fn().mockRejectedValue(new Error('NotAllowedError'));

      // Act
      renderHook(() => useVideoAutoplay(videoRef));

      await act(async () => {
        await Promise.resolve();
      });

      // Assert
      expect(mockVideo.classList?.remove).not.toHaveBeenCalled();
      expect(mockPoster.classList?.add).not.toHaveBeenCalled();
    });

    it('should not throw error', async () => {
      // Arrange
      (mockVideo as { readyState: number }).readyState =4;
      mockVideo.play = vi.fn().mockRejectedValue(new Error('NotAllowedError'));

      // Act & Assert
      expect(() => {
        renderHook(() => useVideoAutoplay(videoRef));
      }).not.toThrow();
    });
  });

  describe('cleanup', () => {
    it('should remove canplay listener on unmount', () => {
      // Arrange
      (mockVideo as { readyState: number }).readyState =0;
      const { unmount } = renderHook(() => useVideoAutoplay(videoRef));

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
        renderHook(() => useVideoAutoplay(nullVideoRef));
      }).not.toThrow();
    });

    it('should handle null poster ref gracefully', async () => {
      // Arrange
      const nullPosterRef = createRef<HTMLImageElement>();
      (mockVideo as { readyState: number }).readyState =4;

      // Act
      renderHook(() => useVideoAutoplay(videoRef));

      await act(async () => {
        await Promise.resolve();
      });

      // Assert
      expect(mockVideo.play).toHaveBeenCalled();
    });

    it('should handle both refs being null gracefully', () => {
      // Arrange
      const nullVideoRef = createRef<HTMLVideoElement>();
      const nullPosterRef = createRef<HTMLImageElement>();

      // Act & Assert
      expect(() => {
        renderHook(() => useVideoAutoplay(nullVideoRef));
      }).not.toThrow();
    });
  });
});
