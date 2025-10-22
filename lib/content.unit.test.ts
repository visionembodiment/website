import { describe, it, expect } from 'vitest';
import { aboutPageContent } from './content';

describe('aboutPageContent', () => {
  describe('structure validation', () => {
    it('has all required sections', () => {
      expect(aboutPageContent.hero).toBeDefined();
      expect(aboutPageContent.journey).toBeDefined();
      expect(aboutPageContent.philosophy).toBeDefined();
      expect(aboutPageContent.credentials).toBeDefined();
      expect(aboutPageContent.timeline).toBeDefined();
      expect(aboutPageContent.values).toBeDefined();
      expect(aboutPageContent.stats).toBeDefined();
      expect(aboutPageContent.cta).toBeDefined();
    });

    it('hero section has title and subtitle', () => {
      expect(aboutPageContent.hero.title).toBeTruthy();
      expect(aboutPageContent.hero.subtitle).toBeTruthy();
    });

    it('journey section has title and paragraphs array', () => {
      expect(aboutPageContent.journey.title).toBeTruthy();
      expect(Array.isArray(aboutPageContent.journey.paragraphs)).toBe(true);
      expect(aboutPageContent.journey.paragraphs.length).toBeGreaterThan(0);
    });

    it('philosophy section has title and quote', () => {
      expect(aboutPageContent.philosophy.title).toBeTruthy();
      expect(aboutPageContent.philosophy.quote).toBeTruthy();
    });

    it('credentials have required fields', () => {
      expect(aboutPageContent.credentials.title).toBeTruthy();
      expect(Array.isArray(aboutPageContent.credentials.items)).toBe(true);

      aboutPageContent.credentials.items.forEach(item => {
        expect(item.icon).toBeTruthy();
        expect(item.title).toBeTruthy();
        expect(item.description).toBeTruthy();
      });
    });

    it('timeline events have year and event', () => {
      expect(aboutPageContent.timeline.title).toBeTruthy();
      expect(Array.isArray(aboutPageContent.timeline.events)).toBe(true);

      aboutPageContent.timeline.events.forEach(event => {
        expect(event.year).toBeTruthy();
        expect(event.event).toBeTruthy();
      });
    });

    it('values have icon, title, and description', () => {
      expect(aboutPageContent.values.title).toBeTruthy();
      expect(Array.isArray(aboutPageContent.values.items)).toBe(true);

      aboutPageContent.values.items.forEach(value => {
        expect(value.icon).toBeTruthy();
        expect(value.title).toBeTruthy();
        expect(value.description).toBeTruthy();
      });
    });

    it('stats have number and label', () => {
      expect(Array.isArray(aboutPageContent.stats.items)).toBe(true);

      aboutPageContent.stats.items.forEach(stat => {
        expect(stat.number).toBeTruthy();
        expect(stat.label).toBeTruthy();
      });
    });

    it('CTA has required fields', () => {
      expect(aboutPageContent.cta.title).toBeTruthy();
      expect(aboutPageContent.cta.subtitle).toBeTruthy();
      expect(aboutPageContent.cta.primaryButton.text).toBeTruthy();
      expect(aboutPageContent.cta.primaryButton.href).toMatch(/^\//);
      expect(aboutPageContent.cta.secondaryButton.text).toBeTruthy();
      expect(aboutPageContent.cta.secondaryButton.href).toMatch(/^\//);
    });
  });

  describe('SEO compliance', () => {
    it('hero title is concise', () => {
      expect(aboutPageContent.hero.title.length).toBeLessThan(70);
    });

    it('hero subtitle is under 160 characters', () => {
      expect(aboutPageContent.hero.subtitle.length).toBeLessThan(160);
    });

    it('CTA subtitle is concise', () => {
      expect(aboutPageContent.cta.subtitle.length).toBeLessThan(200);
    });
  });

  describe('timeline chronology', () => {
    it('timeline events are in chronological order', () => {
      const years = aboutPageContent.timeline.events.map(e => parseInt(e.year));

      for (let i = 1; i < years.length; i++) {
        expect(years[i]).toBeGreaterThan(years[i - 1]);
      }
    });
  });
});
