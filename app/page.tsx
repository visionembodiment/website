import Link from 'next/link';
import Image from 'next/image';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import VideoHero from '@/components/VideoHero';
import LazySection from '@/components/LazySection';
import { designSystem, cn } from '@/lib/design-system';
import { homePageContent } from '@/lib/content';

export default function Home() {
  const { videoHero, hero, services, about, testimonials, newsletter, cta } = homePageContent;

  return (
    <>
      <VideoHero
        title={videoHero.title}
        videoUrl={videoHero.videoUrl}
        mobileVideoUrl={videoHero.mobileVideoUrl}
        posterImage={videoHero.posterImage}
        posterPlaceholder={videoHero.posterPlaceholder}
        mobilePosterImage={videoHero.mobilePosterImage}
        mobilePosterPlaceholder={videoHero.mobilePosterPlaceholder}
      />

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
                    className={designSystem.buttons.primaryInverse}
                  >
                    {hero.primaryButton.text}
                  </Link>
                  <Link
                    href={hero.secondaryButton.href}
                    className={designSystem.buttons.secondaryInverse}
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
      <LazySection animation="slide-up" className={cn(designSystem.colors.background.primary, designSystem.spacing.section.full)}>
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
      </LazySection>

      {/* About Preview Section */}
      <LazySection animation="fade" delay={100} className={cn(designSystem.colors.gradient.primary, designSystem.spacing.section.full)}>
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
      </LazySection>

      {/* Testimonials Section */}
      <LazySection animation="slide-up" delay={150} className={cn(designSystem.colors.background.primary, designSystem.spacing.section.full)}>
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
      </LazySection>

      {/* Newsletter Section */}
      <LazySection animation="fade" delay={200} className={cn(designSystem.colors.background.secondary, designSystem.spacing.section.full)}>
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
      </LazySection>

      {/* CTA Section */}
      <LazySection animation="slide-up" delay={250} className={cn(designSystem.colors.background.primary, designSystem.spacing.section.full)}>
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
      </LazySection>
    </>
  );
}