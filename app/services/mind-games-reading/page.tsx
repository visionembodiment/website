import Link from 'next/link';
import LazySection from '@/components/LazySection';
import ServiceDetailTemplate from '@/components/ServiceDetailTemplate';
import { designSystem, cn } from '@/lib/design-system';
import { mindGamesReadingContent } from '@/lib/content';

export default function MindGamesReadingPage() {
  const { hero, whatIs, process, testimonials, pricing, faq, cta } = mindGamesReadingContent;

  const pricingSection = (
    <LazySection animation="fade" delay={200} className={cn("bg-gradient-to-b from-vision-dark-purple to-vision-dark-purple-2 text-white", designSystem.spacing.section.full)}>
      <div className={designSystem.layout.container}>
        <div className={cn(designSystem.layout.maxWidth["3xl"], designSystem.spacing.margin.horizontal.auto, designSystem.layout.textAlign.center)}>
          <h2 className={cn(designSystem.text.h2, designSystem.spacing.margin.bottom.lg)}>
            {pricing.title}
          </h2>

          <div className={cn("bg-white/10 backdrop-blur", designSystem.rounded.xl, designSystem.spacing.padding.lg, designSystem.spacing.margin.bottom.lg)}>
            <div className={cn("flex items-center justify-center", designSystem.spacing.gap.sm, designSystem.spacing.margin.bottom.sm)}>
              <span className={cn(designSystem.text.h2, "line-through opacity-50")}>{pricing.originalPrice}</span>
              <span className={cn("text-5xl", designSystem.fontWeight.bold)}>{pricing.price}</span>
            </div>
            <p className={cn(designSystem.text.body.xl, designSystem.spacing.margin.bottom.xs)}>90% OFF - {pricing.savings}</p>
            <p className="text-purple-100">
              {pricing.description}
            </p>
          </div>

          <div className={cn("space-y-4", designSystem.spacing.margin.bottom.lg)}>
            {pricing.includes.map((item, index) => (
              <p key={index} className="flex items-center justify-center gap-2">
                <svg className={cn("w-5 h-5", designSystem.colors.text.accent)} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {item}
              </p>
            ))}
          </div>

          <Link
            href={pricing.buttonHref}
            className={designSystem.buttons.secondary}
          >
            {pricing.buttonText}
          </Link>

          <p className={cn("mt-6 text-purple-200", designSystem.text.body.sm)}>
            {pricing.note}
          </p>
        </div>
      </div>
    </LazySection>
  );

  return (
    <ServiceDetailTemplate
      hero={hero}
      whatIs={whatIs}
      process={process}
      testimonials={testimonials}
      faq={faq}
      cta={cta}
      customSections={[pricingSection]}
    />
  );
}
