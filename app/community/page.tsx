import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import LazySection from '@/components/LazySection';
import NewsletterForm from '@/components/NewsletterForm';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import { designSystem, cn, getSectionBackground } from '@/lib/design-system';
import { communityPageContent } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Community - Vision Embodiment',
  description: 'Join the Vision Embodiment community. A safe and soulful gathering space for seekers, healers, and embodied beings on their journey of transformation.',
  openGraph: {
    title: 'Vision Embodiment Community',
    description: 'A community for deep conversation, deep practice, and deep transformation',
    type: 'website',
  },
};

export default function CommunityPage() {
  const { sections, hero, newsletter, discord, welcome, whatYouFind, values } = communityPageContent;

  const sectionComponents: Record<string, React.ReactElement> = {
    hero: (
      <section key="hero" className={cn("relative", getSectionBackground(sections, 'hero'), designSystem.spacing.section.full)}>
        <div className={designSystem.layout.container}>
          <div className={cn(designSystem.layout.maxWidth["5xl"], designSystem.spacing.margin.horizontal.auto, designSystem.layout.textAlign.center)}>
            <h1 className={cn(designSystem.text.h1, designSystem.colors.text.primary, designSystem.spacing.margin.bottom.lg)}>
              {hero.title}
            </h1>

            <div className={cn(designSystem.layout.maxWidth["4xl"], designSystem.spacing.margin.horizontal.auto, designSystem.spacing.margin.bottom.lg)}>
              <YouTubeEmbed videoId={hero.videoId} title="Vision Embodiment Community" />
            </div>

            <p className={cn(designSystem.text.h2, designSystem.colors.text.accent, designSystem.spacing.margin.bottom.sm, designSystem.fontWeight.semibold)}>
              {hero.subtitle}
            </p>
            <p className={cn(designSystem.text.body.xl, designSystem.colors.text.secondary, designSystem.layout.maxWidth["3xl"], designSystem.spacing.margin.horizontal.auto)}>
              {hero.description}
            </p>
          </div>
        </div>
      </section>
    ),
    newsletter: (
      <LazySection key="newsletter" animation="fade" delay={50} className={cn(getSectionBackground(sections, 'newsletter'), designSystem.spacing.section.full)}>
        <div className={designSystem.layout.container}>
          <div className={cn(designSystem.layout.maxWidth["3xl"], designSystem.layout.textAlign.center, designSystem.spacing.margin.horizontal.auto)}>
            <h2 className={cn(designSystem.text.h2, designSystem.colors.text.accent, designSystem.spacing.margin.bottom.sm, designSystem.fontWeight.bold)}>
              {newsletter.title}
            </h2>
            <p className={cn(designSystem.text.body.xl, designSystem.colors.text.secondary, designSystem.spacing.margin.bottom.lg)}>
              {newsletter.subtitle}
            </p>

            <div className={cn("max-w-2xl mx-auto")}>
              <NewsletterForm
                placeholder={newsletter.placeholder}
                buttonText={newsletter.buttonText}
                disclaimer={newsletter.disclaimer}
                successMessage={newsletter.successMessage}
                loadingText={newsletter.loadingText}
                successButtonText={newsletter.successButtonText}
              />
            </div>
          </div>
        </div>
      </LazySection>
    ),
    welcome: (
      <LazySection key="welcome" animation="fade" className={cn(getSectionBackground(sections, 'welcome'), designSystem.spacing.section.full)}>
        <div className={designSystem.layout.container}>
          <div className={cn(designSystem.layout.maxWidth["3xl"], designSystem.spacing.margin.horizontal.auto)}>
            <h2 className={cn(designSystem.text.h2, designSystem.colors.text.accent, designSystem.layout.textAlign.center, designSystem.spacing.margin.bottom.sm, designSystem.fontWeight.bold)}>
              {welcome.title}
            </h2>
            <p className={cn(designSystem.text.body.xl, designSystem.colors.text.primary, designSystem.layout.textAlign.center)}>
              {welcome.description}
            </p>
          </div>
        </div>
      </LazySection>
    ),
    whatYouFind: (
      <LazySection key="whatYouFind" animation="slide-up" delay={100} className={cn(getSectionBackground(sections, 'whatYouFind'), designSystem.spacing.section.full)}>
        <div className={designSystem.layout.container}>
          <div className={cn(designSystem.layout.textAlign.center, designSystem.spacing.margin.bottom.lg)}>
            <h2 className={cn(designSystem.text.h2, designSystem.colors.text.accent, designSystem.fontWeight.bold)}>
              {whatYouFind.title}
            </h2>
          </div>

          <div className={cn("grid md:grid-cols-2", designSystem.spacing.gap.lg, designSystem.layout.maxWidth["4xl"], designSystem.spacing.margin.horizontal.auto)}>
            {whatYouFind.items.map((item) => (
              <div
                key={item.title}
                className={cn(
                  "border-l-2",
                  designSystem.colors.border.primary,
                  designSystem.spacing.padding.horizontal.lg,
                  designSystem.spacing.padding.vertical.md,
                  "space-y-4"
                )}
              >
                <h3 className={cn(designSystem.text.h3, designSystem.colors.text.primary, designSystem.fontWeight.bold)}>
                  {item.title}
                </h3>
                <p className={cn(designSystem.text.body.lg, designSystem.colors.text.secondary)}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </LazySection>
    ),
    values: (
      <LazySection key="values" animation="fade" delay={150} className={cn(getSectionBackground(sections, 'values'), "py-16 md:py-20")}>
        <div className={designSystem.layout.container}>
          <div className={cn(designSystem.layout.maxWidth["3xl"], designSystem.spacing.margin.horizontal.auto)}>
            <h2 className={cn(designSystem.text.h2, designSystem.colors.text.accent, designSystem.layout.textAlign.center, designSystem.spacing.margin.bottom.lg, designSystem.fontWeight.bold)}>
              {values.title}
            </h2>
            <div className={cn("w-16 h-0.5 mx-auto", designSystem.colors.background.accent, designSystem.spacing.margin.bottom.xl)} />

            <div className={cn("space-y-6")}>
              {values.principles.map((principle, index) => (
                <div key={index} className={cn("flex items-start", designSystem.spacing.gap.md, "group")}>
                  <div className={cn("flex-shrink-0 w-2 h-2 rounded-full mt-2.5", designSystem.colors.background.accent, "group-hover:scale-125 transition-transform")} />
                  <p className={cn(designSystem.text.body.xl, designSystem.colors.text.primary, "leading-relaxed font-light")}>
                    {principle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </LazySection>
    ),
    discord: (
      <LazySection key="discord" animation="fade" delay={100} className={cn(getSectionBackground(sections, 'discord'), designSystem.spacing.section.full)}>
        <div className={designSystem.layout.container}>
          <div className={cn(designSystem.layout.maxWidth["6xl"], designSystem.spacing.margin.horizontal.auto)}>
            <div className={cn("grid lg:grid-cols-2", designSystem.spacing.gap.xl, "items-start")}>
              {/* What We Stand For - Left Column */}
              <div>
                <h2 className={cn(designSystem.text.h2, designSystem.colors.text.accent, designSystem.spacing.margin.bottom.md, designSystem.fontWeight.bold)}>
                  {values.title}
                </h2>

                <div className={cn("space-y-4")}>
                  {values.principles.map((principle, index) => (
                    <div key={index} className={cn("flex items-start", designSystem.spacing.gap.md, "group")}>
                      <div className={cn("flex-shrink-0 w-2 h-2 rounded-full mt-2.5", designSystem.colors.background.accent, "group-hover:scale-125 transition-transform")} />
                      <p className={cn(designSystem.text.body.lg, designSystem.colors.text.primary)}>
                        {principle}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Discord Card - Right Column */}
              <div className={cn(
                "border-2",
                designSystem.colors.border.primary,
                designSystem.spacing.padding.lg,
                designSystem.layout.textAlign.center,
                designSystem.rounded["2xl"]
              )}>
                <h2 className={cn(designSystem.text.h2, designSystem.colors.text.accent, designSystem.spacing.margin.bottom.md, designSystem.fontWeight.bold)}>
                  {discord.title}
                </h2>
                <p className={cn(designSystem.text.body.lg, designSystem.colors.text.secondary, designSystem.spacing.margin.bottom.lg)}>
                  {discord.description}
                </p>
                <Link
                  href={discord.buttonHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(designSystem.buttons.secondary)}
                >
                  {discord.buttonText}
                </Link>
                <p className={cn(designSystem.text.body.sm, designSystem.colors.text.secondary, designSystem.spacing.margin.top.md)}>
                  {discord.fallbackText}{' '}
                  <a
                    href={`mailto:${discord.fallbackEmail}`}
                    className={cn(designSystem.colors.text.accent, "underline", designSystem.colors.hover.text.dun, "font-medium")}
                  >
                    {discord.fallbackEmail}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </LazySection>
    ),
  };

  return (
    <>
      {sections
        .filter(section => section.enabled)
        .map(section => sectionComponents[section.id])}
    </>
  );
}