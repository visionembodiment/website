import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useScrollDirection } from './useScrollDirection';
import { createRef } from 'react';

describe('useScrollDirection', () => {
  let headerRef: React.RefObject<HTMLDivElement | null>;
  const MOCK_HEADER_HEIGHT = 120;
  const NAVIGATION_HEIGHT = 64;

  beforeEach(() => {
    window.scrollY = 0;
    vi.clearAllMocks();
    vi.useFakeTimers();

    headerRef = createRef<HTMLDivElement>();
    Object.defineProperty(headerRef, 'current', {
      writable: true,
      value: {
        offsetHeight: MOCK_HEADER_HEIGHT,
        getBoundingClientRect: () => ({ height: MOCK_HEADER_HEIGHT }),
      },
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('when within header height', () => {
    it('should not translate (translateY = 0)', () => {
      // Arrange
      const { result } = renderHook(() => useScrollDirection(headerRef));

      // Act
      act(() => {
        window.scrollY = MOCK_HEADER_HEIGHT - 10;
        window.dispatchEvent(new Event('scroll'));
      });

      // Assert
      expect(result.current.translateY).toBe(0);
    });

    it('should reset translateY when scrolling back into header zone', () => {
      // Arrange
      const { result } = renderHook(() => useScrollDirection(headerRef));

      act(() => {
        window.scrollY = MOCK_HEADER_HEIGHT + 100;
        window.dispatchEvent(new Event('scroll'));
      });

      // Act
      act(() => {
        window.scrollY = MOCK_HEADER_HEIGHT - 10;
        window.dispatchEvent(new Event('scroll'));
      });

      // Assert
      expect(result.current.translateY).toBe(0);
    });
  });

  describe('when scrolled past header', () => {
    it('should translate down on scroll down', () => {
      // Arrange - Start with scrollY=0, translateY=0, lastScrollY=0
      const { result } = renderHook(() => useScrollDirection(headerRef));

      // First scroll: huge jump from 0 to 220 gets clamped to -64
      act(() => {
        window.scrollY = MOCK_HEADER_HEIGHT + 100;
        window.dispatchEvent(new Event('scroll'));
      });

      // Act - Scroll down 30 more pixels
      act(() => {
        window.scrollY = MOCK_HEADER_HEIGHT + 130;
        window.dispatchEvent(new Event('scroll'));
      });

      // Assert - Already at max hidden (-64), stays there
      expect(result.current.translateY).toBe(-NAVIGATION_HEIGHT);
    });

    it('should translate up on scroll up', () => {
      // Arrange
      const { result } = renderHook(() => useScrollDirection(headerRef));

      act(() => {
        window.scrollY = MOCK_HEADER_HEIGHT + 100;
        window.dispatchEvent(new Event('scroll'));
      });
      act(() => {
        window.scrollY = MOCK_HEADER_HEIGHT + 150;
        window.dispatchEvent(new Event('scroll'));
      });

      // Act
      act(() => {
        window.scrollY = MOCK_HEADER_HEIGHT + 120;
        window.dispatchEvent(new Event('scroll'));
      });

      // Assert
      expect(result.current.translateY).toBeLessThan(0);
      expect(result.current.translateY).toBeGreaterThan(-NAVIGATION_HEIGHT);
    });

    it('should clamp translateY to max navigation height', () => {
      // Arrange
      const { result } = renderHook(() => useScrollDirection(headerRef));

      act(() => {
        window.scrollY = MOCK_HEADER_HEIGHT + 100;
        window.dispatchEvent(new Event('scroll'));
      });

      // Act - Scroll down more than navigation height
      act(() => {
        window.scrollY = MOCK_HEADER_HEIGHT + 200;
        window.dispatchEvent(new Event('scroll'));
      });

      // Assert
      expect(result.current.translateY).toBe(-NAVIGATION_HEIGHT);
    });

    it('should clamp translateY to min 0', () => {
      // Arrange
      const { result } = renderHook(() => useScrollDirection(headerRef));

      act(() => {
        window.scrollY = MOCK_HEADER_HEIGHT + 100;
        window.dispatchEvent(new Event('scroll'));
      });
      act(() => {
        window.scrollY = MOCK_HEADER_HEIGHT + 150;
        window.dispatchEvent(new Event('scroll'));
      });

      // Act - Scroll up more than we scrolled down
      act(() => {
        window.scrollY = MOCK_HEADER_HEIGHT + 50;
        window.dispatchEvent(new Event('scroll'));
      });

      // Assert
      expect(result.current.translateY).toBe(0);
    });
  });

  describe('snap animation', () => {
    it('should snap to fully hidden after scroll stops while scrolling down', () => {
      // Arrange
      const { result } = renderHook(() => useScrollDirection(headerRef));

      act(() => {
        window.scrollY = MOCK_HEADER_HEIGHT + 100;
        window.dispatchEvent(new Event('scroll'));
      });

      // Act
      act(() => {
        window.scrollY = MOCK_HEADER_HEIGHT + 130;
        window.dispatchEvent(new Event('scroll'));
      });

      act(() => {
        vi.advanceTimersByTime(150);
      });

      // Assert
      expect(result.current.translateY).toBe(-NAVIGATION_HEIGHT);
      expect(result.current.isSnapping).toBe(true);
    });

    it('should snap to fully visible after scroll stops while scrolling up', () => {
      // Arrange
      const { result } = renderHook(() => useScrollDirection(headerRef));

      act(() => {
        window.scrollY = MOCK_HEADER_HEIGHT + 100;
        window.dispatchEvent(new Event('scroll'));
      });
      act(() => {
        window.scrollY = MOCK_HEADER_HEIGHT + 150;
        window.dispatchEvent(new Event('scroll'));
      });
      act(() => {
        vi.advanceTimersByTime(150);
      });

      // Act
      act(() => {
        window.scrollY = MOCK_HEADER_HEIGHT + 120;
        window.dispatchEvent(new Event('scroll'));
      });

      act(() => {
        vi.advanceTimersByTime(150);
      });

      // Assert
      expect(result.current.translateY).toBe(0);
      expect(result.current.isSnapping).toBe(true);
    });

    it('should not be snapping while actively scrolling', () => {
      // Arrange
      const { result } = renderHook(() => useScrollDirection(headerRef));

      act(() => {
        window.scrollY = MOCK_HEADER_HEIGHT + 100;
        window.dispatchEvent(new Event('scroll'));
      });

      // Act
      act(() => {
        window.scrollY = MOCK_HEADER_HEIGHT + 130;
        window.dispatchEvent(new Event('scroll'));
      });

      // Assert
      expect(result.current.isSnapping).toBe(false);
    });

    it('should stop snapping when scrolling resumes', () => {
      // Arrange
      const { result } = renderHook(() => useScrollDirection(headerRef));

      act(() => {
        window.scrollY = MOCK_HEADER_HEIGHT + 100;
        window.dispatchEvent(new Event('scroll'));
      });
      act(() => {
        window.scrollY = MOCK_HEADER_HEIGHT + 130;
        window.dispatchEvent(new Event('scroll'));
      });
      act(() => {
        vi.advanceTimersByTime(150);
      });

      // Act
      act(() => {
        window.scrollY = MOCK_HEADER_HEIGHT + 140;
        window.dispatchEvent(new Event('scroll'));
      });

      // Assert
      expect(result.current.isSnapping).toBe(false);
    });
  });

  describe('edge cases', () => {
    it('should handle null ref gracefully', () => {
      // Arrange
      const nullRef = createRef<HTMLDivElement>();

      // Act & Assert
      const { result } = renderHook(() => useScrollDirection(nullRef));
      expect(result.current.translateY).toBe(0);
    });

    it('should cleanup scroll listener on unmount', () => {
      // Arrange
      const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener');
      const { unmount } = renderHook(() => useScrollDirection(headerRef));

      // Act
      unmount();

      // Assert
      expect(removeEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function));
    });
  });
});
