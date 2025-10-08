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
});
