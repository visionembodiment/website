import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import * as scrollDirectionModule from '@/hooks/useScrollDirection';
import * as contentModule from '@/lib/content';

vi.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

vi.mock('@/hooks/useScrollDirection', () => ({
  useScrollDirection: vi.fn(() => ({
    translateY: 0,
    isSnapping: false,
  })),
}));

vi.mock('@/lib/content', () => ({
  homePageContent: {
    promotion: {
      active: true,
      emoji: '🎉',
      title: 'Test Promotion',
      description: 'Test description',
      buttonText: 'Test Button',
      href: '/test',
    },
  },
}));

describe('Header Integration', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders Navigation and PromotionBanner when promotion is active', () => {
    // Arrange & Act
    render(<Header />);

    // Assert
    expect(screen.getByText('Vision Embodiment')).toBeInTheDocument();
    expect(screen.getByText(/Test Promotion/i)).toBeInTheDocument();
  });

  it('Navigation and PromotionBanner move together as one unit', () => {
    // Arrange & Act
    const { container } = render(<Header />);

    // Assert: Both wrapped in same sticky container
    const stickyWrapper = container.querySelector('[class*="sticky"]');
    expect(stickyWrapper).toBeInTheDocument();

    const nav = stickyWrapper?.querySelector('nav');
    const promotionText = stickyWrapper?.querySelector('[class*="gradient"]');

    expect(nav).toBeInTheDocument();
    expect(promotionText).toBeInTheDocument();
  });

  it('applies translateY transform to wrapper containing both components', () => {
    // Arrange
    vi.mocked(scrollDirectionModule.useScrollDirection).mockReturnValue({
      translateY: -32,
      isSnapping: false,
    });

    // Act
    const { container } = render(<Header />);

    // Assert
    const wrapper = container.querySelector('[class*="sticky"]');
    expect(wrapper).toHaveStyle({ transform: 'translateY(-32px)' });
  });

  it('hides PromotionBanner when promotion is inactive', () => {
    // Arrange
    vi.mocked(contentModule).homePageContent = {
      ...contentModule.homePageContent,
      promotion: {
        active: false,
        emoji: '🎉',
        title: 'Inactive Promotion',
        description: 'Should not show',
        buttonText: 'Hidden',
        href: '/test',
      },
    };

    // Act
    render(<Header />);

    // Assert
    expect(screen.getByText('Vision Embodiment')).toBeInTheDocument();
    expect(screen.queryByText(/Inactive Promotion/i)).not.toBeInTheDocument();
  });

  it('applies snap animation class when isSnapping is true', () => {
    // Arrange
    vi.mocked(scrollDirectionModule.useScrollDirection).mockReturnValue({
      translateY: -64,
      isSnapping: true,
    });

    // Act
    const { container } = render(<Header />);

    // Assert
    const wrapper = container.querySelector('[class*="sticky"]');
    expect(wrapper?.className).toContain('transition-transform');
  });
});
