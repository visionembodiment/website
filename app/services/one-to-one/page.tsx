import Link from 'next/link';
import LazySection from '@/components/LazySection';
import ServiceDetailTemplate from '@/components/ServiceDetailTemplate';
import { designSystem, cn } from '@/lib/design-system';
import { oneToOneCoachingContent } from '@/lib/content';

export default function OneToOneCoachingPage() {
  const { sections, hero, whatIs, process, packages, testimonials, faq, cta } = oneToOneCoachingContent;

  const packagesSection = (
    <LazySection key="packages" animation="slide-up" delay={100} className={cn(designSystem.colors.background.primary, designSystem.spacing.section.full)}>
      <div id="packages" className={designSystem.layout.container}>
        <div className={cn(designSystem.layout.maxWidth["5xl"], designSystem.spacing.margin.horizontal.auto)}>
          <h2 className={cn(designSystem.text.h2, designSystem.colors.text.primary, designSystem.layout.textAlign.center, designSystem.spacing.margin.bottom.sm)}>
            {packages.title}
          </h2>
          <p className={cn(designSystem.text.body.xl, designSystem.colors.text.secondary, designSystem.layout.textAlign.center, designSystem.spacing.margin.bottom.xl)}>
            {packages.subtitle}
          </p>

          <div className={cn("grid md:grid-cols-3", designSystem.spacing.gap.lg)}>
            {packages.items.map((pkg, index) => (
              <div
                key={index}
                className={cn(
                  "relative",
                  designSystem.cards.base,
                  designSystem.shadows.elevated,
                  designSystem.cards.hover,
                  "overflow-hidden",
                  pkg.popular && "ring-2 ring-vision-lion transform scale-105"
                )}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-vision-lion text-white px-3 py-1 text-sm font-medium rounded-bl-lg">
                    Most Popular
                  </div>
                )}

                <div className={designSystem.spacing.padding.lg}>
                  <h3 className={cn(designSystem.text.h4, designSystem.colors.text.inverse.primary, designSystem.spacing.margin.bottom.xs)}>{pkg.name}</h3>
                  <div className={designSystem.spacing.margin.bottom.sm}>
                    <span className={cn(designSystem.text.h2, designSystem.colors.text.inverse.primary)}>{pkg.price}</span>
                    {pkg.savings && (
                      <span className={cn("ml-2 text-green-600", designSystem.text.body.sm, designSystem.fontWeight.medium)}>{pkg.savings}</span>
                    )}
                  </div>
                  <p className={cn(designSystem.colors.text.inverse.secondary, designSystem.spacing.margin.bottom.md)}>{pkg.duration}</p>

                  <ul className={cn("space-y-3", designSystem.spacing.margin.bottom.md)}>
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className={cn("w-5 h-5 mr-2 flex-shrink-0 mt-0.5", designSystem.colors.text.accent)} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className={cn(designSystem.colors.text.inverse.secondary, designSystem.text.body.sm)}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={pkg.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "block w-full text-center",
                      designSystem.spacing.padding.vertical.sm,
                      designSystem.rounded.lg,
                      "transition-colors",
                      designSystem.fontWeight.medium,
                      pkg.popular
                        ? "bg-vision-dark-purple text-white hover:bg-vision-dark-purple-2"
                        : "bg-vision-lion/20 text-vision-dark-purple hover:bg-vision-lion/30"
                    )}
                  >
                    {pkg.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </LazySection>
  );

  return (
    <ServiceDetailTemplate
      sections={sections}
      hero={hero}
      whatIs={whatIs}
      process={process}
      testimonials={testimonials}
      faq={faq}
      cta={cta}
      customSections={{ packages: packagesSection }}
    />
  );
}
