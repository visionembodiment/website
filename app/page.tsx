import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import { designSystem, cn } from '@/lib/design-system';
import { homePageContent } from '@/lib/content';

export default function Home() {
  const { promotion, hero, services, about, testimonials, newsletter, cta } = homePageContent;


  return (
    <>
      {/* Promotion Banner */}
      <div className={cn(designSystem.colors.gradient.promotion, designSystem.colors.text.inverse, "py-3 px-4 text-center")}>
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
          <span className={cn(designSystem.fontSize.lg, designSystem.fontWeight.semibold)}>{promotion.emoji} {promotion.title}</span>
          <span className={cn(designSystem.fontSize.base, "sm:text-lg")}>{promotion.description}</span>
          <Link
            href={promotion.href}
            className={cn("inline-block px-4 py-1 rounded-full transition-colors", designSystem.colors.background.primary, designSystem.colors.text.accent, designSystem.colors.hover.accentBg, designSystem.fontWeight.semibold, designSystem.fontSize.sm, "sm:text-base")}
          >
            {promotion.buttonText}
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className={cn("relative", designSystem.colors.gradient.hero, designSystem.spacing.section.full)}>
        <div className={designSystem.sections.container}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className={cn(designSystem.text.heading1, "mb-6")}>
                {hero.title}
              </h1>
              <p className={cn(designSystem.text.body, "!text-xl mb-8")}>
                {hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={hero.primaryButton.href}
                  className={cn(designSystem.buttons.primary, "text-lg")}
                >
                  {hero.primaryButton.text}
                </Link>
                <Link
                  href={hero.secondaryButton.href}
                  className={cn(designSystem.buttons.secondary, "text-lg")}
                >
                  {hero.secondaryButton.text}
                </Link>
              </div>
              {/* <div className="flex items-center gap-6 mt-8 text-sm text-gray-600">
                <span className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  1+ Clients Transformed
                </span>
                <span className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  5+ Years Experience
                </span>
              </div> */}
            </div>
            <div className="relative">
              <div className="bg-purple-200 rounded-full w-96 h-96 mx-auto opacity-20 absolute -top-10 -right-10"></div>
              <div className={cn(designSystem.cards.base, "p-8 text-center")}>
                <div className={cn("w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center", designSystem.colors.background.tertiary)}>
                  <span className="text-6xl">{hero.profile.emoji}</span>
                </div>
                <h3 className={cn(designSystem.text.heading3, "mb-2")}>{hero.profile.name}</h3>
                <p className={cn(designSystem.colors.text.brandLight, "mb-4")}>{hero.profile.title}</p>
                <p className={designSystem.colors.text.muted}>
                  {hero.profile.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={cn(designSystem.colors.background.primary, designSystem.spacing.section.full)}>
        <div className={designSystem.sections.container}>
          <div className={cn("text-center", designSystem.spacing.margin.xl)}>
            <h2 className={cn(designSystem.text.heading2, designSystem.spacing.margin.sm)}>
              {services.title}
            </h2>
            <p className={cn(designSystem.fontSize.xl, designSystem.colors.text.muted, "max-w-3xl mx-auto")}>
              {services.subtitle}
            </p>
          </div>
          
          <div className={cn("grid md:grid-cols-3", designSystem.spacing.gap.lg)}>
            {services.items.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className={cn(designSystem.colors.background.secondary, designSystem.spacing.section.full)}>
        <div className={designSystem.sections.container}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className={cn(designSystem.text.heading2, designSystem.spacing.margin.md)}>
              {about.title}
            </h2>
            <p className={cn(designSystem.text.body, designSystem.spacing.margin.md)}>
              {about.intro}
            </p>
            <p className={cn(designSystem.text.body, designSystem.spacing.margin.lg)}>
              {about.philosophy}
            </p>
            <Link
              href={about.buttonHref}
              className={designSystem.buttons.primarySmall}
            >
              {about.buttonText}
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={cn(designSystem.colors.background.primary, designSystem.spacing.section.full)}>
        <div className={designSystem.sections.container}>
          <div className={cn("text-center", designSystem.spacing.margin.xl)}>
            <h2 className={cn(designSystem.text.heading2, designSystem.spacing.margin.sm)}>
              {testimonials.title}
            </h2>
            <p className="text-xl text-gray-600">
              {testimonials.subtitle}
            </p>
          </div>
          
          <div className={cn("grid md:grid-cols-3", designSystem.spacing.gap.lg)}>
            {testimonials.items.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
          
          <div className={cn("text-center mt-12")}>
            <Link
              href={testimonials.buttonHref}
              className={designSystem.buttons.secondarySmall}
            >
              {testimonials.buttonText}
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className={cn(designSystem.colors.gradient.newsletter, designSystem.colors.text.inverse, designSystem.spacing.section.full)}>
        <div className={designSystem.sections.container}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className={cn(designSystem.fontSize['4xl'], designSystem.fontWeight.bold, designSystem.spacing.margin.sm)}>
              {newsletter.title}
            </h2>
            <p className={cn(designSystem.fontSize.xl, designSystem.colors.text.brandLightest, designSystem.spacing.margin.lg)}>
              {newsletter.subtitle}
            </p>
            
            <form className={cn("flex flex-col sm:flex-row max-w-md mx-auto", designSystem.spacing.gap.sm)}>
              <input
                type="email"
                placeholder={newsletter.placeholder}
                className={cn("flex-1 px-6 py-3 rounded-lg placeholder-gray-500 focus:outline-none", designSystem.colors.text.primary, designSystem.colors.focus.ring)}
                required
              />
              <button
                type="submit"
                className={designSystem.buttons.cta}
              >
                {newsletter.buttonText}
              </button>
            </form>
            
            <p className={cn("mt-4", designSystem.fontSize.sm, designSystem.colors.text.brandLighter)}>
              {newsletter.disclaimer}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={cn(designSystem.colors.background.primary, designSystem.spacing.section.full)}>
        <div className={designSystem.sections.container}>
          <div className={cn(designSystem.colors.background.secondary, "rounded-2xl p-12 text-center")}>
            <h2 className={cn(designSystem.text.heading2, "mb-4")}>
              {cta.title}
            </h2>
            <p className={cn(designSystem.fontSize.xl, designSystem.colors.text.secondary, "max-w-2xl mx-auto", designSystem.spacing.margin.lg)}>
              {cta.subtitle}
            </p>
            <Link
              href={cta.buttonHref}
              className={cn(designSystem.buttons.primary, "text-lg")}
            >
              {cta.buttonText}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}