import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useScrollDirection } from './useScrollDirection';
import { createRef } from 'react';

describe('useScrollDirection', () => {
  let headerRef: React.RefObject<HTMLElement | null>;
  const MOCK_HEADER_HEIGHT = 64;

  beforeEach(() => {
    window.scrollY = 0;
    vi.clearAllMocks();
    vi.useFakeTimers();

    headerRef = createRef<HTMLElement>();
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
    it('should always be visible and non-sticky', () => {
      // Arrange
      const { result } = renderHook(() => useScrollDirection(headerRef));

      // Act - Scroll within header height
      act(() => {
        window.scrollY = MOCK_HEADER_HEIGHT - 10;
        window.dispatchEvent(new Event('scroll'));
      });

      // Assert
      expect(result.current.isSticky).toBe(false);
      expect(result.current.translateY).toBe(0);
    });

    it('should not become sticky when scrolling up within header height', () => {
      // Arrange
      const { result } = renderHook(() => useScrollDirection(headerRef));

      act(() => {
        window.scrollY = 50;
        window.dispatchEvent(new Event('scroll'));
      });

      // Act
      act(() => {
        window.scrollY = 30;
        window.dispatchEvent(new Event('scroll'));
      });

      // Assert
      expect(result.current.isSticky).toBe(false);
    });
  });

  describe('when scrolling down past header', () => {
    it('should scroll naturally', () => {
      // Arrange
      const { result } = renderHook(() => useScrollDirection(headerRef));

      // Act
      act(() => {
        window.scrollY = MOCK_HEADER_HEIGHT + 100;
        window.dispatchEvent(new Event('scroll'));
      });

      // Assert
      expect(result.current.isSticky).toBe(false);
    });
  });

  describe('when scrolled down past header', () => {
    describe('when scrolling up', () => {
      it('should make header sticky', () => {
        // Arrange
        const { result } = renderHook(() => useScrollDirection(headerRef));

        act(() => {
          window.scrollY = MOCK_HEADER_HEIGHT + 200;
          window.dispatchEvent(new Event('scroll'));
        });

        // Act
        act(() => {
          window.scrollY = MOCK_HEADER_HEIGHT + 100;
          window.dispatchEvent(new Event('scroll'));
        });

        // Assert
        expect(result.current.isSticky).toBe(true);
      });

      it('should show header', () => {
        // Arrange
        const { result } = renderHook(() => useScrollDirection(headerRef));

        act(() => {
          window.scrollY = MOCK_HEADER_HEIGHT + 200;
          window.dispatchEvent(new Event('scroll'));
        });

        // Act
        act(() => {
          window.scrollY = MOCK_HEADER_HEIGHT + 100;
          window.dispatchEvent(new Event('scroll'));
        });

        // Assert
        expect(result.current.translateY).toBe(0);
      });
    });
  });

  describe('when sticky', () => {
    describe('when scrolling down', () => {
      it('should follow scroll delta', () => {
        // Arrange
        const { result } = renderHook(() => useScrollDirection(headerRef));

        act(() => {
          window.scrollY = MOCK_HEADER_HEIGHT + 200;
          window.dispatchEvent(new Event('scroll'));
        });
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
        expect(result.current.translateY).toBe(-30);
      });
    });

    describe('when scrolling up', () => {
      it('should follow scroll delta', () => {
        // Arrange
        const { result } = renderHook(() => useScrollDirection(headerRef));

        act(() => {
          window.scrollY = MOCK_HEADER_HEIGHT + 200;
          window.dispatchEvent(new Event('scroll'));
        });
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
        expect(result.current.translateY).toBeGreaterThan(-MOCK_HEADER_HEIGHT);
      });
    });

    describe('when scroll stops', () => {
      describe('when partially hidden', () => {
        it('should animate to fully hidden', () => {
          // Arrange
          const { result } = renderHook(() => useScrollDirection(headerRef));

          act(() => {
            window.scrollY = MOCK_HEADER_HEIGHT + 200;
            window.dispatchEvent(new Event('scroll'));
          });
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
          expect(result.current.translateY).toBe(-MOCK_HEADER_HEIGHT);
        });
      });

      describe('when partially shown', () => {
        it('should animate to fully shown', () => {
          // Arrange
          const { result } = renderHook(() => useScrollDirection(headerRef));

          act(() => {
            window.scrollY = MOCK_HEADER_HEIGHT + 200;
            window.dispatchEvent(new Event('scroll'));
          });
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
        });
      });
    });
  });

  describe('when scrolled back to top', () => {
    it('should not be sticky when at top', () => {
      // Arrange
      const { result } = renderHook(() => useScrollDirection(headerRef));

      act(() => {
        window.scrollY = MOCK_HEADER_HEIGHT + 200;
        window.dispatchEvent(new Event('scroll'));
      });
      act(() => {
        window.scrollY = MOCK_HEADER_HEIGHT + 100;
        window.dispatchEvent(new Event('scroll'));
      });

      // Act
      act(() => {
        window.scrollY = 0;
        window.dispatchEvent(new Event('scroll'));
      });

      // Assert
      expect(result.current.isSticky).toBe(false);
    });

    it('should stay sticky when scrolling back into header zone', () => {
      // Arrange
      const { result } = renderHook(() => useScrollDirection(headerRef));

      act(() => {
        window.scrollY = MOCK_HEADER_HEIGHT + 200;
        window.dispatchEvent(new Event('scroll'));
      });
      act(() => {
        window.scrollY = MOCK_HEADER_HEIGHT + 100;
        window.dispatchEvent(new Event('scroll'));
      });

      // Act - Scroll up into header zone
      act(() => {
        window.scrollY = MOCK_HEADER_HEIGHT - 10;
        window.dispatchEvent(new Event('scroll'));
      });

      // Assert - Should stay sticky to avoid jump
      expect(result.current.isSticky).toBe(true);
      expect(result.current.translateY).toBe(0);
    });

    it('should not hide header when sticky and scrolling down within header zone', () => {
      // Arrange
      const { result } = renderHook(() => useScrollDirection(headerRef));

      act(() => {
        window.scrollY = MOCK_HEADER_HEIGHT + 200;
        window.dispatchEvent(new Event('scroll'));
      });
      act(() => {
        window.scrollY = MOCK_HEADER_HEIGHT + 100;
        window.dispatchEvent(new Event('scroll'));
      });
      act(() => {
        window.scrollY = 30;
        window.dispatchEvent(new Event('scroll'));
      });

      // Act - Scroll down within header zone
      act(() => {
        window.scrollY = 40;
        window.dispatchEvent(new Event('scroll'));
      });

      // Assert - Should remain visible (translateY = 0)
      expect(result.current.translateY).toBe(0);
    });

    it('should not hide header when sticky and scrolling up within header zone', () => {
      // Arrange
      const { result } = renderHook(() => useScrollDirection(headerRef));

      act(() => {
        window.scrollY = MOCK_HEADER_HEIGHT + 200;
        window.dispatchEvent(new Event('scroll'));
      });
      act(() => {
        window.scrollY = MOCK_HEADER_HEIGHT + 100;
        window.dispatchEvent(new Event('scroll'));
      });
      act(() => {
        window.scrollY = 50;
        window.dispatchEvent(new Event('scroll'));
      });

      // Act - Scroll up within header zone
      act(() => {
        window.scrollY = 30;
        window.dispatchEvent(new Event('scroll'));
      });

      // Assert - Should remain visible (translateY = 0)
      expect(result.current.translateY).toBe(0);
    });
  });

  it('should handle null ref gracefully', () => {
    // Arrange
    const nullRef = createRef<HTMLElement>();

    // Act & Assert
    const { result } = renderHook(() => useScrollDirection(nullRef));
    expect(result.current.isSticky).toBe(false);
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
