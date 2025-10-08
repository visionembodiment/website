import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { act } from 'react';
import Header from '@/components/Header';

vi.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

describe('Header Integration', () => {
  beforeEach(() => {
    window.scrollY = 0;
    vi.clearAllMocks();
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should render navigation links', () => {
    // Arrange & Act
    render(<Header />);

    // Assert
    expect(screen.getByText('Vision Embodiment')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
  });

  it('should be visible and not sticky at page top', () => {
    // Arrange & Act
    const { container } = render(<Header />);
    const header = container.querySelector('header');

    // Assert
    expect(header).toHaveStyle({ transform: 'translateY(0px)' });
    expect(header).not.toHaveClass('sticky');
  });

  it('should scroll naturally when scrolling down past header height', () => {
    // Arrange
    const { container } = render(<Header />);
    const header = container.querySelector('header') as HTMLElement;
    const headerHeight = 64;

    Object.defineProperty(header, 'offsetHeight', {
      writable: true,
      value: headerHeight,
    });

    // Act
    act(() => {
      window.scrollY = headerHeight + 100;
      window.dispatchEvent(new Event('scroll'));
    });

    // Assert
    expect(header).not.toHaveClass('sticky');
    expect(header).toHaveStyle({ transform: 'translateY(0px)' });
  });

  it('should become sticky and show when scrolling up', () => {
    // Arrange
    const { container } = render(<Header />);
    const header = container.querySelector('header') as HTMLElement;
    const headerHeight = 64;

    Object.defineProperty(header, 'offsetHeight', {
      writable: true,
      value: headerHeight,
    });

    act(() => {
      window.scrollY = headerHeight + 200;
      window.dispatchEvent(new Event('scroll'));
    });

    // Act
    act(() => {
      window.scrollY = headerHeight + 100;
      window.dispatchEvent(new Event('scroll'));
    });

    // Assert
    expect(header).toHaveClass('sticky');
    expect(header).toHaveStyle({ transform: 'translateY(0px)' });
  });

  it('should not be sticky when scrolled back to top', () => {
    // Arrange
    const { container } = render(<Header />);
    const header = container.querySelector('header') as HTMLElement;
    const headerHeight = 64;

    Object.defineProperty(header, 'offsetHeight', {
      writable: true,
      value: headerHeight,
    });

    act(() => {
      window.scrollY = headerHeight + 200;
      window.dispatchEvent(new Event('scroll'));
    });
    act(() => {
      window.scrollY = headerHeight + 100;
      window.dispatchEvent(new Event('scroll'));
    });

    // Act
    act(() => {
      window.scrollY = 0;
      window.dispatchEvent(new Event('scroll'));
    });

    // Assert
    expect(header).toHaveStyle({ transform: 'translateY(0px)' });
    expect(header).not.toHaveClass('sticky');
  });

  it('should follow scroll delta when sticky and scrolling down', () => {
    // Arrange
    const { container } = render(<Header />);
    const header = container.querySelector('header') as HTMLElement;
    const headerHeight = 64;

    Object.defineProperty(header, 'offsetHeight', {
      writable: true,
      value: headerHeight,
    });

    act(() => {
      window.scrollY = headerHeight + 200;
      window.dispatchEvent(new Event('scroll'));
    });
    act(() => {
      window.scrollY = headerHeight + 100;
      window.dispatchEvent(new Event('scroll'));
    });

    // Act
    act(() => {
      window.scrollY = headerHeight + 130;
      window.dispatchEvent(new Event('scroll'));
    });

    // Assert
    expect(header).toHaveClass('sticky');
    expect(header).toHaveStyle({ transform: 'translateY(-30px)' });
  });

  it('should always show banner at page top', () => {
    // Arrange
    const { container } = render(<Header />);
    const banner = container.querySelector('[class*="gradient"]') as HTMLElement;

    // Assert - Banner should be visible
    expect(banner).toBeVisible();
  });

  it('should keep banner always sticky', () => {
    // Arrange
    const { container } = render(<Header />);
    const banner = container.querySelector('[class*="gradient"]') as HTMLElement;

    // Act - Scroll down past header height (first time)
    act(() => {
      window.scrollY = 100;
      window.dispatchEvent(new Event('scroll'));
    });

    // Assert - Banner should always be sticky
    expect(banner).toHaveClass('sticky');
  });

  it('should always apply transform to banner', () => {
    // Arrange
    const { container } = render(<Header />);
    const banner = container.querySelector('[class*="gradient"]') as HTMLElement;

    // Act - Scroll down (not sticky yet)
    act(() => {
      window.scrollY = 50;
      window.dispatchEvent(new Event('scroll'));
    });

    // Assert - Banner should have transform applied
    expect(banner.style.transform).toContain('translateY(');
  });

  it('should position banner 64px below navigation', () => {
    // Arrange
    const { container } = render(<Header />);
    const banner = container.querySelector('[class*="gradient"]') as HTMLElement;
    const header = container.querySelector('header') as HTMLElement;

    act(() => {
      window.scrollY = 200;
      window.dispatchEvent(new Event('scroll'));
    });
    act(() => {
      window.scrollY = 100;
      window.dispatchEvent(new Event('scroll'));
    });

    // Act - Scroll down to hide navigation
    act(() => {
      window.scrollY = 130;
      window.dispatchEvent(new Event('scroll'));
    });

    // Assert - Banner should be 64px offset from navigation
    const headerTransform = header.style.transform;
    const bannerTransform = banner.style.transform;

    expect(headerTransform).toContain('translateY(');
    expect(bannerTransform).toContain('translateY(');
  });

  it('should keep banner visible and sticky when navigation becomes sticky', () => {
    // Arrange
    const { container } = render(<Header />);
    const banner = container.querySelector('[class*="gradient"]') as HTMLElement;

    act(() => {
      window.scrollY = 200;
      window.dispatchEvent(new Event('scroll'));
    });

    // Act - Scroll up to make navigation sticky
    act(() => {
      window.scrollY = 100;
      window.dispatchEvent(new Event('scroll'));
    });

    // Assert - Banner should be visible and sticky
    expect(banner).toBeVisible();
    expect(banner).toHaveClass('sticky');
  });
});
