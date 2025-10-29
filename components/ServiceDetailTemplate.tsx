import Link from 'next/link';
import LazySection from './LazySection';
import YouTubeEmbed from './YouTubeEmbed';
import { designSystem, cn, getSectionBackground } from '@/lib/design-system';
import React from 'react';

interface SectionConfig {
  id: string;
  enabled: boolean;
  background: string;
}

interface HeroSection {
  title: string;
  subtitle: string;
  price?: string;
  originalPrice?: string;
  videoId?: string;
  promotion?: {
    emoji: string;
    text: string;
  };
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
}

interface WhatIsSection {
  title: string;
  description: string[];
  benefits: string[];
}

interface ProcessStep {
  title: string;
  description: string;
}

interface ProcessSection {
  title: string;
  steps: ProcessStep[];
}

interface Testimonial {
  name: string;
  title?: string;
  content: string;
  rating: number;
}

interface TestimonialsSection {
  title: string;
  items: Testimonial[];
}

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSection {
  title: string;
  items: FAQItem[];
}

interface CTASection {
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonHref?: string;
  freeCallTitle?: string;
  freeCallDescription?: string;
  note?: string;
}

interface ServiceDetailProps {
  sections: SectionConfig[];
  hero: HeroSection;
  whatIs: WhatIsSection;
  process: ProcessSection;
  testimonials: TestimonialsSection;
  faq: FAQSection;
  cta: CTASection;
  customSections?: Record<string, React.ReactElement>;
}

export default function ServiceDetailTemplate({
  sections,
  hero,
  whatIs,
  process,
  testimonials,
  faq,
  cta,
  customSections = {},
}: ServiceDetailProps) {
  const builtInSections: Record<string, React.ReactElement> = {
    hero: (
      <section key="hero" className={cn(getSectionBackground(sections, 'hero'), designSystem.spacing.section.full)}>
        <div className={designSystem.layout.container}>
          <div className={cn(designSystem.layout.maxWidth["4xl"], designSystem.spacing.margin.horizontal.auto, designSystem.layout.textAlign.center)}>
            {hero.promotion && (
              <div className={cn("inline-flex items-center", designSystem.spacing.gap.xs, "bg-yellow-100 text-yellow-800", designSystem.spacing.padding.horizontal.sm, designSystem.spacing.padding.vertical.xs, designSystem.rounded.full, designSystem.spacing.margin.bottom.md)}>
                <span className={designSystem.text.body.lg}>{hero.promotion.emoji}</span>
                <span className={cn(designSystem.text.body.sm, designSystem.fontWeight.semibold)}>{hero.promotion.text}</span>
              </div>
            )}
            <h1 className={cn(designSystem.text.h1, designSystem.colors.text.primary, designSystem.spacing.margin.bottom.md)}>
              {hero.title}
            </h1>
            <p className={cn(designSystem.text.body.xl, designSystem.colors.text.secondary, designSystem.spacing.margin.bottom.lg)}>
              {hero.subtitle}
            </p>

            {hero.videoId && (
              <div className={designSystem.spacing.margin.bottom.lg}>
                <YouTubeEmbed videoId={hero.videoId} title={hero.title} />
              </div>
            )}

            <Link href={hero.primaryButton.href} className={designSystem.buttons.primary}>
              {hero.primaryButton.text}
            </Link>
          </div>
        </div>
      </section>
    ),

    whatIs: (
      <LazySection key="whatIs" animation="slide-up" className={cn(getSectionBackground(sections, 'whatIs'), designSystem.spacing.section.full)}>
        <div id="learn-more" className={designSystem.layout.container}>
          <div className={cn(designSystem.layout.maxWidth["5xl"], designSystem.spacing.margin.horizontal.auto)}>
            <div className={cn("grid lg:grid-cols-2", designSystem.spacing.gap.xl, "items-center")}>
              <div>
                <h2 className={cn(designSystem.text.h2, designSystem.colors.text.primary, designSystem.spacing.margin.bottom.md)}>
                  {whatIs.title}
                </h2>
                <div className={cn("space-y-4")}>
                  {whatIs.description.map((paragraph, index) => (
                    <p key={index} className={cn(designSystem.text.body.lg, designSystem.colors.text.secondary)}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              <div className={cn(designSystem.cards.base, designSystem.spacing.padding.lg)}>
                <h3 className={cn(designSystem.text.h3, designSystem.colors.text.inverse.primary, designSystem.spacing.margin.bottom.md)}>
                  {hero.price ? 'Session Benefits' : "What You'll Discover"}
                </h3>
                <ul className={cn("space-y-3")}>
                  {whatIs.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <svg className={cn("w-6 h-6 mr-3 flex-shrink-0 mt-0.5", designSystem.colors.text.checkmark)} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className={designSystem.colors.text.inverse.secondary}>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </LazySection>
    ),

    process: (
      <LazySection key="process" animation="fade" delay={100} className={cn(getSectionBackground(sections, 'process'), designSystem.spacing.section.full)}>
        <div className={designSystem.layout.container}>
          <div className={cn(designSystem.layout.maxWidth["4xl"], designSystem.spacing.margin.horizontal.auto)}>
            <h2 className={cn(designSystem.text.h2, designSystem.colors.text.primary, designSystem.layout.textAlign.center, designSystem.spacing.margin.bottom.xl)}>
              {process.title}
            </h2>
            <div className={cn("space-y-8")}>
              {process.steps.map((step, index) => (
                <div key={index} className={cn("flex", designSystem.spacing.gap.md)}>
                  <div className="flex-shrink-0">
                    <div className={cn("w-12 h-12", "bg-vision-dark-purple text-white", designSystem.rounded.full, "flex items-center justify-center", designSystem.fontWeight.bold)}>
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className={cn(designSystem.text.h4, designSystem.colors.text.primary, designSystem.spacing.margin.bottom.xs)}>
                      {step.title}
                    </h3>
                    <p className={cn(designSystem.text.body.md, designSystem.colors.text.secondary)}>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </LazySection>
    ),

    testimonials: (
      <LazySection key="testimonials" animation="slide-up" delay={150} className={cn(getSectionBackground(sections, 'testimonials'), designSystem.spacing.section.full)}>
        <div className={designSystem.layout.container}>
          <div className={cn(designSystem.layout.maxWidth["4xl"], designSystem.spacing.margin.horizontal.auto)}>
            <h2 className={cn(designSystem.text.h2, designSystem.colors.text.primary, designSystem.layout.textAlign.center, designSystem.spacing.margin.bottom.xl)}>
              {testimonials.title}
            </h2>
            <div className={cn(testimonials.items.length > 2 ? "grid md:grid-cols-3" : "space-y-8", testimonials.items.length > 2 ? designSystem.spacing.gap.lg : "")}>
              {testimonials.items.map((testimonial, index) => (
                <div key={index} className={cn(designSystem.cards.base, designSystem.spacing.padding.lg)}>
                  <div className={cn("flex", designSystem.spacing.margin.bottom.sm)}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className={cn("w-5 h-5", designSystem.colors.text.accent)} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className={cn(designSystem.text.body.md, designSystem.colors.text.inverse.secondary, "italic", designSystem.spacing.margin.bottom.sm)}>
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <p className={cn(designSystem.fontWeight.semibold, designSystem.colors.text.inverse.primary)}>
                    - {testimonial.name}{testimonial.title && `, ${testimonial.title}`}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </LazySection>
    ),

    faq: (
      <LazySection key="faq" animation="slide-up" delay={200} className={cn(getSectionBackground(sections, 'faq'), designSystem.spacing.section.full)}>
        <div className={designSystem.layout.container}>
          <div className={cn(designSystem.layout.maxWidth["3xl"], designSystem.spacing.margin.horizontal.auto)}>
            <h2 className={cn(designSystem.text.h2, designSystem.colors.text.primary, designSystem.layout.textAlign.center, designSystem.spacing.margin.bottom.xl)}>
              {faq.title}
            </h2>
            <div className={cn("space-y-6")}>
              {faq.items.map((item, index) => (
                <div key={index} className={cn("border-b pb-6")}>
                  <h3 className={cn(designSystem.fontWeight.semibold, designSystem.colors.text.primary, designSystem.spacing.margin.bottom.xs)}>
                    {item.question}
                  </h3>
                  <p className={cn(designSystem.text.body.md, designSystem.colors.text.secondary)}>
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </LazySection>
    ),

    cta: (
      <LazySection key="cta" animation="fade" delay={250} className={cn(cta.freeCallTitle ? "bg-gradient-to-b from-vision-dark-purple to-vision-dark-purple-2 text-white" : getSectionBackground(sections, 'cta'), designSystem.spacing.section.full)}>
        <div className={designSystem.layout.container}>
          <div className={cn(designSystem.layout.maxWidth["3xl"], designSystem.spacing.margin.horizontal.auto, designSystem.layout.textAlign.center)}>
            <h2 className={cn(designSystem.text.h2, cta.freeCallTitle ? "" : designSystem.colors.text.primary, designSystem.spacing.margin.bottom.md)}>
              {cta.title}
            </h2>
            <p className={cn(designSystem.text.body.xl, cta.freeCallTitle ? "text-purple-100" : designSystem.colors.text.secondary, designSystem.spacing.margin.bottom.lg)}>
              {cta.subtitle}
            </p>

            {cta.freeCallTitle ? (
              <div className={cn("bg-white/10 backdrop-blur", designSystem.rounded.xl, designSystem.spacing.padding.lg, designSystem.spacing.margin.bottom.lg)}>
                <h3 className={cn(designSystem.text.h3, designSystem.spacing.margin.bottom.sm)}>{cta.freeCallTitle}</h3>
                <p className={cn("text-purple-100", designSystem.spacing.margin.bottom.md)}>
                  {cta.freeCallDescription}
                </p>
                {cta.buttonHref && (
                  <Link
                    href={cta.buttonHref}
                    className={cn("inline-block bg-yellow-500 text-gray-900", designSystem.spacing.padding.horizontal.lg, designSystem.spacing.padding.vertical.sm, designSystem.rounded.lg, "hover:bg-yellow-400 transition-colors", designSystem.fontWeight.bold, designSystem.text.body.lg)}
                  >
                    {cta.buttonText}
                  </Link>
                )}
              </div>
            ) : (
              cta.buttonHref && (
                <Link
                  href={cta.buttonHref}
                  className={designSystem.buttons.primary}
                >
                  {cta.buttonText}
                </Link>
              )
            )}

            {cta.note && (
              <p className={cn(cta.freeCallTitle ? "text-purple-200" : designSystem.colors.text.secondary, designSystem.text.body.sm)}>
                {cta.note}
              </p>
            )}
          </div>
        </div>
      </LazySection>
    ),
  };

  const allSections = { ...builtInSections, ...customSections };

  return (
    <div className="min-h-screen">
      {sections
        .filter(section => section.enabled)
        .map(section => allSections[section.id])
        .filter(Boolean)}
    </div>
  );
}
