import Link from 'next/link';
import Image from 'next/image';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import { designSystem, cn } from '@/lib/design-system';
import { homePageContent } from '@/lib/content';

export default function Home() {
  const { promotion, videoHero, hero, services, about, testimonials, newsletter, cta } = homePageContent;


  return (
    <>
      {/* Promotion Banner */}
      <div className={cn(designSystem.colors.gradient.primary, designSystem.spacing.padding.vertical.sm, designSystem.spacing.padding.horizontal.sm, designSystem.layout.textAlign.center)}>
        <div className={cn(designSystem.layout.container, "flex flex-col sm:flex-row items-center justify-center", designSystem.spacing.gap.xs, designSystem.spacing.gap.responsive.sm.sm)}>
          <span className={cn(designSystem.text.body.lg, designSystem.fontWeight.semibold, designSystem.colors.text.primary)}>{promotion.emoji} {promotion.title}</span>
          <span className={cn(designSystem.text.body.sm, designSystem.colors.text.secondary)}>{promotion.description}</span>
          <Link
            href={promotion.href}
            className={designSystem.buttons.primarySmall}
          >
            {promotion.buttonText}
          </Link>
        </div>
      </div>

      {/* Video Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={videoHero.posterImage}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoHero.videoUrl} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-vision-dark-purple/40 to-vision-licorice/60"></div>

        <div className="relative h-full flex items-center justify-center">
          <div className={cn(designSystem.layout.textAlign.center, designSystem.spacing.padding.horizontal.sm, designSystem.layout.maxWidth["4xl"], designSystem.spacing.margin.horizontal.auto)}>
            <h2 className={cn(designSystem.text.heroTitle, designSystem.colors.text.primary)}>
              {videoHero.title}
            </h2>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className={cn("relative", designSystem.colors.gradient.primary, designSystem.spacing.section.full)}>
        <div className={designSystem.layout.container}>
          <div className={cn("grid md:grid-cols-2 items-center", designSystem.spacing.gap.xl)}>
            {/* Left column - Hidden on mobile, visible on desktop */}
            <div className="hidden md:block">
              <h1 className={cn(designSystem.text.h1, designSystem.colors.text.primary, designSystem.spacing.margin.bottom.md)}>
                {hero.title}
              </h1>
              <p className={cn(designSystem.text.body.xl, designSystem.colors.text.secondary, designSystem.spacing.margin.bottom.lg)}>
                {hero.subtitle}
              </p>
              <div className={cn("flex flex-col sm:flex-row", designSystem.spacing.gap.sm)}>
                <Link
                  href={hero.primaryButton.href}
                  className={designSystem.buttons.primary}
                >
                  {hero.primaryButton.text}
                </Link>
                <Link
                  href={hero.secondaryButton.href}
                  className={designSystem.buttons.secondary}
                >
                  {hero.secondaryButton.text}
                </Link>
              </div>
            </div>

            {/* Right column - Profile card with buttons on mobile */}
            <div className="relative">
              <div className={cn(designSystem.cards.base, designSystem.spacing.padding.lg, designSystem.layout.textAlign.center)}>
                <div className={cn("relative w-60 h-60 overflow-hidden", designSystem.avatars.background, designSystem.rounded.full, designSystem.shadows.xl, designSystem.spacing.margin.horizontal.auto, designSystem.spacing.margin.bottom.sm)}>
                  <Image
                    src={hero.profile.image}
                    alt={hero.profile.name}
                    fill
                    className="object-cover"
                    sizes="240px"
                    priority
                  />
                </div>
                <h3 className={cn(designSystem.text.h3, designSystem.colors.text.inverse.primary, designSystem.spacing.margin.bottom.xs)}>{hero.profile.name}</h3>
                <p className={cn(designSystem.text.body.md, designSystem.colors.text.inverse.secondary, designSystem.spacing.margin.bottom.sm)}>{hero.profile.title}</p>
                <p className={cn(designSystem.text.body.md, designSystem.colors.text.inverse.secondary, designSystem.spacing.margin.bottom.md)}>
                  {hero.profile.description}
                </p>

                {/* Buttons - Only visible on mobile */}
                <div className={cn("flex flex-col md:hidden", designSystem.spacing.gap.sm)}>
                  <Link
                    href={hero.primaryButton.href}
                    className={designSystem.buttons.primary}
                  >
                    {hero.primaryButton.text}
                  </Link>
                  <Link
                    href={hero.secondaryButton.href}
                    className={designSystem.buttons.secondary}
                  >
                    {hero.secondaryButton.text}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={cn(designSystem.colors.background.primary, designSystem.spacing.section.full)}>
        <div className={designSystem.layout.container}>
          <div className={cn(designSystem.layout.textAlign.center, designSystem.spacing.margin.bottom.xl)}>
            <h2 className={cn(designSystem.text.h2, designSystem.colors.text.primary, designSystem.spacing.margin.bottom.sm)}>
              {services.title}
            </h2>
            <p className={cn(designSystem.text.body.xl, designSystem.colors.text.secondary, designSystem.layout.maxWidth["3xl"], designSystem.spacing.margin.horizontal.auto)}>
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
      <section className={cn(designSystem.colors.gradient.primary, designSystem.spacing.section.full)}>
        <div className={designSystem.layout.container}>
          <div className={cn(designSystem.layout.maxWidth["3xl"], designSystem.layout.textAlign.center, designSystem.spacing.margin.horizontal.auto)}>
            <h2 className={cn(designSystem.text.h2, designSystem.colors.text.primary, designSystem.spacing.margin.bottom.md)}>
              {about.title}
            </h2>
            <p className={cn(designSystem.text.body.lg, designSystem.colors.text.secondary, designSystem.spacing.margin.bottom.md)}>
              {about.intro}
            </p>
            <p className={cn(designSystem.text.body.lg, designSystem.colors.text.secondary, designSystem.spacing.margin.bottom.lg)}>
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
        <div className={designSystem.layout.container}>
          <div className={cn(designSystem.layout.textAlign.center, designSystem.spacing.margin.bottom.xl)}>
            <h2 className={cn(designSystem.text.h2, designSystem.colors.text.primary, designSystem.spacing.margin.bottom.sm)}>
              {testimonials.title}
            </h2>
            <p className={cn(designSystem.text.body.xl, designSystem.colors.text.secondary)}>
              {testimonials.subtitle}
            </p>
          </div>

          <div className={cn("grid md:grid-cols-3", designSystem.spacing.gap.lg)}>
            {testimonials.items.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>

          <div className={cn(designSystem.layout.textAlign.center, designSystem.spacing.margin.top.xl)}>
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
      <section className={cn(designSystem.colors.background.secondary, designSystem.spacing.section.full)}>
        <div className={designSystem.layout.container}>
          <div className={cn(designSystem.layout.maxWidth["3xl"], designSystem.layout.textAlign.center, designSystem.spacing.margin.horizontal.auto)}>
            <h2 className={cn(designSystem.text.h2, designSystem.colors.text.primary, designSystem.spacing.margin.bottom.sm)}>
              {newsletter.title}
            </h2>
            <p className={cn(designSystem.text.body.xl, designSystem.colors.text.secondary, designSystem.spacing.margin.bottom.lg)}>
              {newsletter.subtitle}
            </p>

            <form className={cn("flex flex-col sm:flex-row", designSystem.layout.maxWidth.md, designSystem.spacing.margin.horizontal.auto, designSystem.spacing.gap.sm)}>
              <input
                type="email"
                placeholder={newsletter.placeholder}
                className={cn("flex-1", designSystem.inputs.base, designSystem.colors.text.placeholder.inverse, designSystem.spacing.padding.horizontal.md, designSystem.spacing.padding.vertical.sm, designSystem.rounded.lg)}
                required
              />
              <button
                type="submit"
                className={designSystem.buttons.secondarySmall}
              >
                {newsletter.buttonText}
              </button>
            </form>

            <p className={cn(designSystem.text.caption, designSystem.colors.text.secondary, designSystem.spacing.margin.top.sm)}>
              {newsletter.disclaimer}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={cn(designSystem.colors.background.primary, designSystem.spacing.section.full)}>
        <div className={designSystem.layout.container}>
          <div className={cn(designSystem.colors.background.secondary, designSystem.rounded["2xl"], designSystem.spacing.padding.xl, designSystem.layout.textAlign.center)}>
            <h2 className={cn(designSystem.text.h2, designSystem.colors.text.primary, designSystem.spacing.margin.bottom.sm)}>
              {cta.title}
            </h2>
            <p className={cn(designSystem.text.body.xl, designSystem.colors.text.secondary, designSystem.layout.maxWidth["2xl"], designSystem.spacing.margin.horizontal.auto, designSystem.spacing.margin.bottom.lg)}>
              {cta.subtitle}
            </p>
            <Link
              href={cta.buttonHref}
              className={designSystem.buttons.secondary}
            >
              {cta.buttonText}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}