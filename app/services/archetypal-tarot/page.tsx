import Link from 'next/link';
import LazySection from '@/components/LazySection';
import ServiceDetailTemplate from '@/components/ServiceDetailTemplate';
import { designSystem, cn } from '@/lib/design-system';
import { archetypalTarotContent } from '@/lib/content';

export default function ArchetypalTarotPage() {
  const { hero, whatIs, archetypes, sessionDetails, testimonials, pricing, faq, cta } = archetypalTarotContent;

  const archetypesSection = (
    <LazySection animation="fade" delay={100} className={cn(designSystem.colors.background.secondary, designSystem.spacing.section.full)}>
      <div className={designSystem.layout.container}>
        <div className={cn(designSystem.layout.maxWidth["5xl"], designSystem.spacing.margin.horizontal.auto)}>
          <h2 className={cn(designSystem.text.h2, designSystem.colors.text.primary, designSystem.layout.textAlign.center, designSystem.spacing.margin.bottom.sm)}>
            {archetypes.title}
          </h2>
          <p className={cn(designSystem.text.body.xl, designSystem.colors.text.secondary, designSystem.layout.textAlign.center, designSystem.spacing.margin.bottom.xl)}>
            {archetypes.subtitle}
          </p>

          <div className={cn("grid md:grid-cols-2 lg:grid-cols-4", designSystem.spacing.gap.md)}>
            {archetypes.items.map((archetype, index) => (
              <div key={index} className={cn(designSystem.cards.base, designSystem.spacing.padding.lg, designSystem.layout.textAlign.center, designSystem.shadows.subtle, designSystem.cards.hover)}>
                <div className={cn(designSystem.text.h1, designSystem.spacing.margin.bottom.sm)}>🌟</div>
                <h3 className={cn(designSystem.fontWeight.bold, designSystem.colors.text.inverse.primary, designSystem.spacing.margin.bottom.xs)}>{archetype.name}</h3>
                <p className={cn(designSystem.text.body.sm, designSystem.colors.text.accent, designSystem.spacing.margin.bottom.xs)}>{archetype.meaning}</p>
                <p className={cn(designSystem.text.body.xs, designSystem.colors.text.inverse.secondary)}>{archetype.description}</p>
              </div>
            ))}
          </div>

          <p className={cn(designSystem.layout.textAlign.center, designSystem.spacing.margin.top.lg, designSystem.colors.text.secondary)}>
            {archetypes.note}
          </p>
        </div>
      </div>
    </LazySection>
  );

  const sessionDetailsSection = (
    <LazySection animation="slide-up" delay={150} className={cn(designSystem.colors.background.primary, designSystem.spacing.section.full)}>
      <div className={designSystem.layout.container}>
        <div className={cn(designSystem.layout.maxWidth["5xl"], designSystem.spacing.margin.horizontal.auto)}>
          <h2 className={cn(designSystem.text.h2, designSystem.colors.text.primary, designSystem.layout.textAlign.center, designSystem.spacing.margin.bottom.xl)}>
            {sessionDetails.title}
          </h2>

          <div className={cn("grid lg:grid-cols-2", designSystem.spacing.gap.xl)}>
            <div>
              <h3 className={cn(designSystem.text.h3, designSystem.colors.text.primary, designSystem.spacing.margin.bottom.md)}>
                {sessionDetails.flow.title}
              </h3>
              <div className={cn("space-y-4")}>
                {sessionDetails.flow.steps.map((step, index) => (
                  <div key={index} className={cn("flex", designSystem.spacing.gap.sm)}>
                    <div className="flex-shrink-0 w-8 h-8 bg-vision-dark-purple text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className={cn(designSystem.fontWeight.semibold, designSystem.colors.text.primary, "mb-1")}>{step.title}</h4>
                      <p className={cn(designSystem.colors.text.secondary, designSystem.text.body.sm)}>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className={cn(designSystem.text.h3, designSystem.colors.text.primary, designSystem.spacing.margin.bottom.md)}>
                {sessionDetails.includes.title}
              </h3>
              <ul className={cn("space-y-3")}>
                {sessionDetails.includes.items.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className={cn("w-6 h-6 mr-3 flex-shrink-0 mt-0.5", designSystem.colors.text.accent)} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className={designSystem.colors.text.secondary}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </LazySection>
  );

  const pricingSection = (
    <LazySection animation="fade" delay={200} className={cn(designSystem.colors.background.secondary, designSystem.spacing.section.full)}>
      <div className={designSystem.layout.container}>
        <div className={cn(designSystem.layout.maxWidth["3xl"], designSystem.spacing.margin.horizontal.auto)}>
          <div className={cn("bg-vision-dark-purple text-white", designSystem.rounded["2xl"], "p-12", designSystem.layout.textAlign.center)}>
            <h2 className={cn(designSystem.text.h2, designSystem.spacing.margin.bottom.sm)}>
              {pricing.title}
            </h2>

            <div className={cn("text-5xl", designSystem.fontWeight.bold, designSystem.spacing.margin.bottom.xs)}>{pricing.price}</div>
            <p className={cn("text-purple-200", designSystem.spacing.margin.bottom.lg)}>{pricing.duration}</p>

            <div className={cn("bg-white/10 backdrop-blur", designSystem.rounded.lg, designSystem.spacing.padding.lg, designSystem.spacing.margin.bottom.lg, "text-left")}>
              <h3 className={cn(designSystem.text.h4, designSystem.spacing.margin.bottom.sm)}>Your Investment Includes:</h3>
              <ul className={cn("space-y-2")}>
                {pricing.includes.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <svg className={cn("w-5 h-5 mr-2", designSystem.colors.text.accent)} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href={pricing.buttonHref}
              className={cn("inline-block bg-yellow-500 text-gray-900", designSystem.spacing.padding.horizontal.lg, designSystem.spacing.padding.vertical.sm, designSystem.rounded.lg, "hover:bg-yellow-400 transition-colors", designSystem.fontWeight.bold, designSystem.text.body.lg)}
            >
              {pricing.buttonText}
            </Link>

            <p className={cn("mt-6 text-purple-200", designSystem.text.body.sm)}>
              {pricing.note}
            </p>
          </div>
        </div>
      </div>
    </LazySection>
  );

  return (
    <ServiceDetailTemplate
      hero={hero}
      whatIs={whatIs}
      process={{ title: '', steps: [] }}
      testimonials={testimonials}
      faq={faq}
      cta={cta}
      customSections={[archetypesSection, sessionDetailsSection, pricingSection]}
    />
  );
}
