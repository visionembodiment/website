import Link from 'next/link';
import type { Metadata} from 'next';
import { designSystem, cn } from '@/lib/design-system';
import { productsPageContent } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Digital Resources - Vision Embodiment',
  description: 'Instant-access tools, guides, and resources to support your transformation journey. Meditation packs, workbooks, and practical guides.',
  openGraph: {
    title: 'Digital Resources - Vision Embodiment',
    description: 'Transformative tools and resources for your spiritual journey.',
    type: 'website',
  },
};

export default function AllResourcesPage() {
  const { resources } = productsPageContent;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className={cn("bg-gradient-to-br from-vision-dark-purple via-vision-dark-purple-2 to-vision-dark-purple", designSystem.spacing.section.full)}>
        <div className={designSystem.layout.container}>
          <div className={cn(designSystem.layout.maxWidth["4xl"], designSystem.spacing.margin.horizontal.auto, designSystem.layout.textAlign.center)}>
            <span className={cn(designSystem.text.body.sm, designSystem.colors.text.accent, designSystem.fontWeight.semibold, "uppercase tracking-widest mb-4 block")}>
              Instant Access Tools
            </span>
            <h1 className={cn(designSystem.text.h1, designSystem.colors.text.primary, designSystem.spacing.margin.bottom.md)}>
              Digital Resources
            </h1>
            <p className={cn(designSystem.text.body.xl, designSystem.colors.text.secondary, "max-w-2xl mx-auto")}>
              Practical tools and guides to support your transformation journey. Download instantly and integrate into your daily practice.
            </p>
          </div>
        </div>
      </section>

      {/* All Resources */}
      <section className={cn(designSystem.colors.background.primary, designSystem.spacing.section.full)}>
        <div className={designSystem.layout.container}>
          <div className={cn(designSystem.layout.maxWidth["6xl"], designSystem.spacing.margin.horizontal.auto)}>
            <div className={cn("grid md:grid-cols-2 lg:grid-cols-3", designSystem.spacing.gap.lg)}>
              {resources.items.map((resource, index) => (
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
          </div>
        </div>
      </section>

      {/* Why Digital Resources */}
      <section className={cn(designSystem.colors.background.secondary, designSystem.spacing.section.full)}>
        <div className={designSystem.layout.container}>
          <div className={cn(designSystem.layout.maxWidth["5xl"], designSystem.spacing.margin.horizontal.auto)}>
            <div className={cn("grid md:grid-cols-2", designSystem.spacing.gap.xl, "items-center")}>
              <div>
                <h2 className={cn(designSystem.text.h2, designSystem.colors.text.primary, designSystem.spacing.margin.bottom.md)}>
                  Why Digital Resources?
                </h2>
                <p className={cn(designSystem.text.body.lg, designSystem.colors.text.secondary, designSystem.spacing.margin.bottom.lg)}>
                  Our digital resources are designed to complement your transformation journey with practical, immediately applicable tools.
                </p>
                <ul className={cn("space-y-4")}>
                  {[
                    'Instant access - download immediately after purchase',
                    'Lifetime access - yours to keep forever',
                    'Self-paced integration - use on your own timeline',
                    'Affordable investment in your growth'
                  ].map((benefit, idx) => (
                    <li key={idx} className={cn("flex items-start", designSystem.spacing.gap.sm)}>
                      <svg className={cn("w-6 h-6 mt-0.5 flex-shrink-0", designSystem.colors.text.checkmark)} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className={cn(designSystem.text.body.lg, designSystem.colors.text.secondary)}>
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={cn(designSystem.cards.base, designSystem.spacing.padding.xl, designSystem.layout.textAlign.center)}>
                <div className={cn(designSystem.text.h1, designSystem.colors.text.accent, designSystem.fontWeight.bold, designSystem.spacing.margin.bottom.sm)}>
                  Bundle & Save
                </div>
                <p className={cn(designSystem.text.body.xl, designSystem.colors.text.inverse.secondary, designSystem.spacing.margin.bottom.lg)}>
                  Get all digital resources for one special price
                </p>
                <div className="flex items-baseline justify-center gap-2 mb-6">
                  <span className={cn(designSystem.text.body.lg, "line-through", designSystem.colors.text.inverse.secondary)}>
                    $78
                  </span>
                  <span className={cn(designSystem.text.h2, designSystem.colors.text.inverse.primary, designSystem.fontWeight.bold)}>
                    $49
                  </span>
                </div>
                <Link
                  href="/products/bundle"
                  className={cn(designSystem.buttons.primaryInverse, designSystem.buttons.layout.block)}
                >
                  Get the Bundle
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={cn("bg-gradient-to-br from-vision-dark-purple-2 via-vision-dark-purple to-vision-dark-purple-2", designSystem.spacing.section.full)}>
        <div className={designSystem.layout.container}>
          <div className={cn(designSystem.layout.maxWidth["3xl"], designSystem.spacing.margin.horizontal.auto, designSystem.layout.textAlign.center)}>
            <h2 className={cn(designSystem.text.h2, designSystem.colors.text.primary, designSystem.spacing.margin.bottom.md)}>
              Want Personalized Guidance?
            </h2>
            <p className={cn(designSystem.text.body.xl, designSystem.colors.text.secondary, designSystem.spacing.margin.bottom.lg)}>
              These resources pair beautifully with one-on-one coaching for deeper transformation.
            </p>
            <div className={cn("flex flex-col sm:flex-row", designSystem.spacing.gap.md, "justify-center")}>
              <Link
                href="/services"
                className={designSystem.buttons.primary}
              >
                Explore Services
              </Link>
              <Link
                href="/booking"
                className={designSystem.buttons.secondary}
              >
                Book a Session
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
