import Link from 'next/link';
import React from 'react';
import type { Metadata } from 'next';
import LazySection from '@/components/LazySection';
import TestimonialCard from '@/components/TestimonialCard';
import { designSystem, cn, getSectionBackground } from '@/lib/design-system';
import { productsPageContent } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Courses & Digital Products - Vision Embodiment',
  description: 'Transform your life with our carefully crafted courses, workshops, and resources designed to support your journey of embodied transformation.',
  openGraph: {
    title: 'Courses & Digital Products - Vision Embodiment',
    description: 'Self-paced courses, digital resources, and transformative programs for your spiritual journey.',
    type: 'website',
  },
};

export default function ProductsPage() {
  const { sections, hero, featured, courses, resources, upcoming, testimonials, cta } = productsPageContent;

  const allSections: Record<string, React.ReactElement> = {
    hero: (
      <section key="hero" className={cn(getSectionBackground(sections, 'hero'), designSystem.spacing.section.full)}>
        <div className={designSystem.layout.container}>
          <div className={cn(designSystem.layout.maxWidth["4xl"], designSystem.spacing.margin.horizontal.auto, designSystem.layout.textAlign.center)}>
            <h1 className={cn(designSystem.text.h1, designSystem.colors.text.primary, designSystem.spacing.margin.bottom.md)}>
              {hero.title}
            </h1>
            <p className={cn(designSystem.text.body.xl, designSystem.colors.text.secondary)}>
              {hero.subtitle}
            </p>
          </div>
        </div>
      </section>
    ),

    featured: (
      <LazySection key="featured" animation="fade" className={cn(getSectionBackground(sections, 'featured'), designSystem.spacing.section.full)}>
        <div className={designSystem.layout.container}>
          <div className={cn(designSystem.layout.maxWidth["5xl"], designSystem.spacing.margin.horizontal.auto)}>
            <h2 className={cn(designSystem.text.h2, designSystem.colors.text.primary, designSystem.layout.textAlign.center, designSystem.spacing.margin.bottom.xl)}>
              {featured.title}
            </h2>

            <div className={cn(designSystem.cards.base, designSystem.rounded.xl, designSystem.shadows.elevated, "overflow-hidden")}>
              <div className="relative">
                {featured.product.badge && (
                  <div className={cn("absolute top-4 right-4", designSystem.colors.background.highlight, designSystem.colors.text.highlight, designSystem.spacing.padding.horizontal.sm, designSystem.spacing.padding.vertical.xs, designSystem.rounded.full, designSystem.text.body.sm, designSystem.fontWeight.bold)}>
                    {featured.product.badge}
                  </div>
                )}

                <div className={cn(designSystem.spacing.padding.xl)}>
                  <h3 className={cn(designSystem.text.h3, designSystem.colors.text.inverse.primary, designSystem.spacing.margin.bottom.sm)}>
                    {featured.product.title}
                  </h3>
                  <p className={cn(designSystem.text.body.lg, designSystem.colors.text.inverse.secondary, designSystem.spacing.margin.bottom.lg)}>
                    {featured.product.description}
                  </p>

                  <div className={cn("flex items-baseline", designSystem.spacing.gap.sm, designSystem.spacing.margin.bottom.lg)}>
                    <span className={cn(designSystem.text.h2, designSystem.colors.text.inverse.primary)}>
                      {featured.product.price}
                    </span>
                    {featured.product.originalPrice && (
                      <span className={cn(designSystem.text.body.lg, "line-through", designSystem.colors.text.inverse.secondary)}>
                        {featured.product.originalPrice}
                      </span>
                    )}
                  </div>

                  <ul className={cn("space-y-3", designSystem.spacing.margin.bottom.lg)}>
                    {featured.product.features.map((feature, index) => (
                      <li key={index} className={cn("flex items-start", designSystem.spacing.gap.sm)}>
                        <svg className={cn("w-5 h-5 mt-0.5 flex-shrink-0", designSystem.colors.text.checkmark)} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className={cn(designSystem.text.body.md, designSystem.colors.text.inverse.secondary)}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={featured.product.buttonHref}
                    className={cn(designSystem.buttons.primaryInverse, designSystem.buttons.layout.block)}
                  >
                    {featured.product.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LazySection>
    ),

    courses: (
      <LazySection key="courses" animation="slide-up" delay={100} className={cn(getSectionBackground(sections, 'courses'), designSystem.spacing.section.full)}>
        <div className={designSystem.layout.container}>
          <div className={cn(designSystem.layout.maxWidth["6xl"], designSystem.spacing.margin.horizontal.auto)}>
            <div className={cn(designSystem.layout.textAlign.center, designSystem.spacing.margin.bottom.xl)}>
              <h2 className={cn(designSystem.text.h2, designSystem.colors.text.primary, designSystem.spacing.margin.bottom.sm)}>
                {courses.title}
              </h2>
              <p className={cn(designSystem.text.body.xl, designSystem.colors.text.secondary)}>
                {courses.subtitle}
              </p>
            </div>

            <div className={cn("grid md:grid-cols-3", designSystem.spacing.gap.lg)}>
              {courses.items.slice(0, 3).map((course, index) => (
                <div
                  key={index}
                  className={cn(
                    designSystem.cards.base,
                    designSystem.cards.padding,
                    designSystem.cards.hover,
                    "flex flex-col"
                  )}
                >
                  <div className="flex-grow">
                    <div className={cn("flex items-center justify-between", designSystem.spacing.margin.bottom.sm)}>
                      <span className={cn(designSystem.text.body.sm, designSystem.colors.background.highlight, designSystem.colors.text.highlight, designSystem.spacing.padding.horizontal.xs, designSystem.spacing.padding.vertical.xs, designSystem.rounded.md, designSystem.fontWeight.medium)}>
                        {course.status}
                      </span>
                      <span className={cn(designSystem.text.h4, designSystem.colors.text.inverse.primary, designSystem.fontWeight.bold)}>
                        {course.price}
                      </span>
                    </div>

                    <h3 className={cn(designSystem.text.h4, designSystem.colors.text.inverse.primary, designSystem.spacing.margin.bottom.sm)}>
                      {course.title}
                    </h3>
                    <p className={cn(designSystem.text.body.md, designSystem.colors.text.inverse.secondary, designSystem.spacing.margin.bottom.sm)}>
                      {course.description}
                    </p>

                    <div className={cn("space-y-2", designSystem.spacing.margin.bottom.lg)}>
                      <div className={cn("flex items-center", designSystem.spacing.gap.xs, designSystem.text.body.sm, designSystem.colors.text.inverse.secondary)}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{course.duration}</span>
                      </div>
                      <div className={cn("flex items-center", designSystem.spacing.gap.xs, designSystem.text.body.sm, designSystem.colors.text.inverse.secondary)}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span>{course.includes}</span>
                      </div>
                    </div>
                  </div>

                  <Link
                    href={course.href}
                    className={cn(designSystem.buttons.secondaryInverse, designSystem.buttons.sizes.small, designSystem.buttons.layout.block)}
                  >
                    Learn More
                  </Link>
                </div>
              ))}
            </div>

            {courses.buttonHref && (
              <div className={cn(designSystem.layout.textAlign.center, designSystem.spacing.margin.top.xl)}>
                <Link
                  href={courses.buttonHref}
                  className={designSystem.buttons.secondary}
                >
                  {courses.buttonText}
                </Link>
              </div>
            )}
          </div>
        </div>
      </LazySection>
    ),

    resources: (
      <LazySection key="resources" animation="fade" delay={150} className={cn(getSectionBackground(sections, 'resources'), designSystem.spacing.section.full)}>
        <div className={designSystem.layout.container}>
          <div className={cn(designSystem.layout.maxWidth["6xl"], designSystem.spacing.margin.horizontal.auto)}>
            <div className={cn(designSystem.layout.textAlign.center, designSystem.spacing.margin.bottom.xl)}>
              <h2 className={cn(designSystem.text.h2, designSystem.colors.text.primary, designSystem.spacing.margin.bottom.sm)}>
                {resources.title}
              </h2>
              <p className={cn(designSystem.text.body.xl, designSystem.colors.text.secondary)}>
                {resources.subtitle}
              </p>
            </div>

            <div className={cn("grid md:grid-cols-2 lg:grid-cols-4", designSystem.spacing.gap.md)}>
              {resources.items.slice(0, 4).map((resource, index) => (
                <Link
                  href={resource.href}
                  key={index}
                  className={cn(
                    designSystem.cards.base,
                    designSystem.cards.hover,
                    "flex flex-col group cursor-pointer overflow-hidden"
                  )}
                >
                  <div className={cn(designSystem.colors.background.secondary, designSystem.spacing.padding.lg, "relative")}>
                    <span className={cn(designSystem.text.body.xs, designSystem.colors.text.primary, designSystem.fontWeight.semibold, "uppercase tracking-widest mb-3 block")}>
                      {resource.type}
                    </span>
                    <div className={cn(designSystem.text.h2, designSystem.colors.text.primary, designSystem.fontWeight.bold)}>
                      {resource.price}
                    </div>
                  </div>

                  <div className={cn(designSystem.spacing.padding.lg, "flex-grow flex flex-col")}>
                    <h3 className={cn(designSystem.text.h4, designSystem.colors.text.inverse.primary, designSystem.fontWeight.bold, designSystem.spacing.margin.bottom.md, "group-hover:text-vision-lion transition-colors")}>
                      {resource.title}
                    </h3>
                    <p className={cn(designSystem.text.body.md, designSystem.colors.text.inverse.secondary, "flex-grow")}>
                      {resource.description}
                    </p>

                    <div className={cn("flex items-center justify-between", designSystem.spacing.margin.top.lg, "pt-4 border-t-2", designSystem.colors.border.primary)}>
                      <span className={cn(designSystem.text.body.lg, designSystem.colors.text.inverse.primary, designSystem.fontWeight.bold)}>
                        {resources.itemButtonText}
                      </span>
                      <svg className={cn("w-6 h-6", designSystem.colors.text.inverse.primary, "group-hover:translate-x-1 transition-transform")} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {resources.buttonHref && (
              <div className={cn(designSystem.layout.textAlign.center, designSystem.spacing.margin.top.xl)}>
                <Link
                  href={resources.buttonHref}
                  className={designSystem.buttons.secondary}
                >
                  {resources.buttonText}
                </Link>
              </div>
            )}
          </div>
        </div>
      </LazySection>
    ),

    upcoming: (
      <LazySection key="upcoming" animation="slide-up" delay={200} className={cn(getSectionBackground(sections, 'upcoming'), designSystem.spacing.section.full)}>
        <div className={designSystem.layout.container}>
          <div className={cn(designSystem.layout.maxWidth["5xl"], designSystem.spacing.margin.horizontal.auto)}>
            <div className={cn(designSystem.layout.textAlign.center, designSystem.spacing.margin.bottom.xl)}>
              <h2 className={cn(designSystem.text.h2, designSystem.colors.text.primary, designSystem.spacing.margin.bottom.sm)}>
                {upcoming.title}
              </h2>
              <p className={cn(designSystem.text.body.xl, designSystem.colors.text.secondary)}>
                {upcoming.subtitle}
              </p>
            </div>

            <div className={cn("grid md:grid-cols-2", designSystem.spacing.gap.lg)}>
              {upcoming.items.map((item, index) => (
                <div
                  key={index}
                  className={cn(
                    designSystem.cards.base,
                    designSystem.cards.padding,
                    "relative overflow-hidden"
                  )}
                >
                  <div className={cn("absolute top-4 right-4", designSystem.colors.background.highlight, designSystem.colors.text.highlight, designSystem.spacing.padding.horizontal.sm, designSystem.spacing.padding.vertical.xs, designSystem.rounded.full, designSystem.text.body.sm, designSystem.fontWeight.medium)}>
                    {item.launchDate}
                  </div>

                  <h3 className={cn(designSystem.text.h4, designSystem.colors.text.inverse.primary, designSystem.spacing.margin.bottom.sm, "pr-24")}>
                    {item.title}
                  </h3>
                  <p className={cn(designSystem.text.body.md, designSystem.colors.text.inverse.secondary, designSystem.spacing.margin.bottom.lg)}>
                    {item.description}
                  </p>

                  <Link
                    href={item.waitlistHref}
                    className={cn(designSystem.buttons.secondaryInverse, designSystem.buttons.sizes.small)}
                  >
                    Join Waitlist
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </LazySection>
    ),

    testimonials: (
      <LazySection key="testimonials" animation="fade" delay={250} className={cn(getSectionBackground(sections, 'testimonials'), designSystem.spacing.section.full)}>
        <div className={designSystem.layout.container}>
          <div className={cn(designSystem.layout.textAlign.center, designSystem.spacing.margin.bottom.xl)}>
            <h2 className={cn(designSystem.text.h2, designSystem.colors.text.primary, designSystem.spacing.margin.bottom.sm)}>
              {testimonials.title}
            </h2>
            <p className={cn(designSystem.text.body.xl, designSystem.colors.text.secondary)}>
              {testimonials.subtitle}
            </p>
          </div>

          <div className={cn("grid md:grid-cols-3", designSystem.spacing.gap.lg, designSystem.layout.maxWidth["6xl"], designSystem.spacing.margin.horizontal.auto)}>
            {testimonials.items.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                content={testimonial.content}
                service={testimonial.product}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </LazySection>
    ),

    cta: (
      <LazySection key="cta" animation="slide-up" delay={300} className={cn(getSectionBackground(sections, 'cta'), designSystem.spacing.section.full)}>
        <div className={designSystem.layout.container}>
          <div className={cn(designSystem.layout.maxWidth["3xl"], designSystem.spacing.margin.horizontal.auto, designSystem.layout.textAlign.center)}>
            <h2 className={cn(designSystem.text.h2, designSystem.colors.text.primary, designSystem.spacing.margin.bottom.md)}>
              {cta.title}
            </h2>
            <p className={cn(designSystem.text.body.xl, designSystem.colors.text.secondary, designSystem.spacing.margin.bottom.lg)}>
              {cta.subtitle}
            </p>
            <Link
              href={cta.buttonHref}
              className={designSystem.buttons.primary}
            >
              {cta.buttonText}
            </Link>
          </div>
        </div>
      </LazySection>
    ),
  };

  return (
    <div className="min-h-screen">
      {sections
        .filter(section => section.enabled)
        .map(section => allSections[section.id])
        .filter(Boolean)}
    </div>
  );
}
