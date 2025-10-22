import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import AboutPage from './page';
import { aboutPageContent } from '@/lib/content';

describe('AboutPage', () => {
  describe('Hero Section', () => {
    it('renders hero title and subtitle', () => {
      // Arrange & Act
      render(<AboutPage />);

      // Assert
      expect(screen.getByRole('heading', { level: 1, name: aboutPageContent.hero.title })).toBeInTheDocument();
      expect(screen.getByText(aboutPageContent.hero.subtitle)).toBeInTheDocument();
    });
  });

  describe('Journey Section', () => {
    it('renders journey title', () => {
      // Arrange & Act
      render(<AboutPage />);

      // Assert
      expect(screen.getByRole('heading', { level: 2, name: aboutPageContent.journey.title })).toBeInTheDocument();
    });

    it('renders all journey paragraphs', () => {
      // Arrange & Act
      render(<AboutPage />);

      // Assert
      aboutPageContent.journey.paragraphs.forEach(paragraph => {
        expect(screen.getByText(paragraph)).toBeInTheDocument();
      });
    });
  });

  describe('Philosophy Section', () => {
    it('renders philosophy title and quote', () => {
      // Arrange & Act
      render(<AboutPage />);

      // Assert
      expect(screen.getByRole('heading', { level: 3, name: aboutPageContent.philosophy.title })).toBeInTheDocument();
      expect(screen.getByText(new RegExp(aboutPageContent.philosophy.quote))).toBeInTheDocument();
    });
  });

  describe('Credentials Section', () => {
    it('renders credentials title', () => {
      // Arrange & Act
      render(<AboutPage />);

      // Assert
      expect(screen.getByRole('heading', { level: 2, name: aboutPageContent.credentials.title })).toBeInTheDocument();
    });

    it('renders all credential items', () => {
      // Arrange & Act
      render(<AboutPage />);

      // Assert
      aboutPageContent.credentials.items.forEach(cred => {
        expect(screen.getByText(cred.title)).toBeInTheDocument();
        expect(screen.getByText(cred.description)).toBeInTheDocument();
      });
    });
  });

  describe('Timeline Section', () => {
    it('renders timeline title', () => {
      // Arrange & Act
      render(<AboutPage />);

      // Assert
      expect(screen.getByRole('heading', { level: 3, name: aboutPageContent.timeline.title })).toBeInTheDocument();
    });

    it('renders all timeline events', () => {
      // Arrange & Act
      render(<AboutPage />);

      // Assert
      aboutPageContent.timeline.events.forEach(event => {
        expect(screen.getByText(event.year)).toBeInTheDocument();
        expect(screen.getByText(event.event)).toBeInTheDocument();
      });
    });
  });

  describe('Values Section', () => {
    it('renders values title', () => {
      // Arrange & Act
      render(<AboutPage />);

      // Assert
      expect(screen.getByRole('heading', { level: 2, name: aboutPageContent.values.title })).toBeInTheDocument();
    });

    it('renders all value items', () => {
      // Arrange & Act
      render(<AboutPage />);

      // Assert
      aboutPageContent.values.items.forEach(value => {
        expect(screen.getByText(value.title)).toBeInTheDocument();
        expect(screen.getByText(value.description)).toBeInTheDocument();
      });
    });
  });

  describe('Stats Section', () => {
    it('renders all stats', () => {
      // Arrange & Act
      render(<AboutPage />);

      // Assert
      aboutPageContent.stats.items.forEach(stat => {
        expect(screen.getByText(stat.number)).toBeInTheDocument();
        expect(screen.getByText(stat.label)).toBeInTheDocument();
      });
    });
  });

  describe('CTA Section', () => {
    it('renders CTA content', () => {
      // Arrange & Act
      render(<AboutPage />);

      // Assert
      expect(screen.getByRole('heading', { level: 2, name: aboutPageContent.cta.title })).toBeInTheDocument();
      expect(screen.getByText(aboutPageContent.cta.subtitle)).toBeInTheDocument();
    });

    it('renders CTA buttons with correct links', () => {
      // Arrange & Act
      render(<AboutPage />);

      // Assert
      const primaryButton = screen.getByRole('link', { name: aboutPageContent.cta.primaryButton.text });
      const secondaryButton = screen.getByRole('link', { name: aboutPageContent.cta.secondaryButton.text });

      expect(primaryButton).toHaveAttribute('href', aboutPageContent.cta.primaryButton.href);
      expect(secondaryButton).toHaveAttribute('href', aboutPageContent.cta.secondaryButton.href);
    });
  });

  describe('Accessibility', () => {
    it('has proper heading hierarchy', () => {
      // Arrange & Act
      render(<AboutPage />);

      // Assert
      const h1 = screen.getByRole('heading', { level: 1 });
      const h2s = screen.getAllByRole('heading', { level: 2 });
      const h3s = screen.getAllByRole('heading', { level: 3 });

      expect(h1).toBeInTheDocument();
      expect(h2s.length).toBeGreaterThan(0);
      expect(h3s.length).toBeGreaterThan(0);
    });

    it('all links have accessible names', () => {
      // Arrange & Act
      render(<AboutPage />);

      // Assert
      const links = screen.getAllByRole('link');
      links.forEach(link => {
        expect(link).toHaveAccessibleName();
      });
    });
  });
});
