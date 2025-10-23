import Link from 'next/link';
import { aboutPageContent } from '@/lib/content';
import { designSystem, cn } from '@/lib/design-system';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import LazySection from '@/components/LazySection';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero - Full Width Video */}
      <section className={cn(designSystem.colors.background.primary, designSystem.spacing.section.full)}>
        <div className={designSystem.layout.container}>
          <div className={cn(designSystem.layout.maxWidth['5xl'], designSystem.spacing.margin.horizontal.auto, designSystem.layout.textAlign.center)}>
            <h1 className={cn(designSystem.text.heroTitle, designSystem.colors.text.primary, designSystem.spacing.margin.bottom.lg)}>
              {aboutPageContent.hero.title}
            </h1>

            <div className={cn(designSystem.spacing.margin.bottom.xl)}>
              <YouTubeEmbed videoId={aboutPageContent.hero.videoId} title="Meet Alina Rain" />
            </div>

            {/* Credentials */}
            <div className={cn('grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4', designSystem.spacing.gap.lg, designSystem.layout.maxWidth['5xl'], designSystem.spacing.margin.horizontal.auto)}>
              {aboutPageContent.credentials.items.map((cred, index) => (
                <div
                  key={index}
                  className={cn(
                    designSystem.cards.base,
                    designSystem.cards.padding,
                    designSystem.cards.hover,
                    'text-center'
                  )}
                >
                  <h4 className={cn(designSystem.text.body.lg, designSystem.colors.text.inverse.primary, designSystem.fontWeight.semibold, designSystem.spacing.margin.bottom.xs)}>{cred.title}</h4>
                  <p className={cn(designSystem.text.body.sm, designSystem.colors.text.inverse.secondary)}>{cred.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Professionally Speaking with Timeline */}
      <section className={cn(designSystem.colors.background.primary, designSystem.spacing.section.full)}>
        <div className={designSystem.layout.container}>
          <div className={cn('grid lg:grid-cols-2', designSystem.spacing.gap.xl, 'items-start', designSystem.layout.maxWidth['6xl'], designSystem.spacing.margin.horizontal.auto)}>
            <div>
              <h2 className={cn(designSystem.text.h2, designSystem.colors.text.primary, designSystem.spacing.margin.bottom.lg)}>
                {aboutPageContent.professionallySpeaking.title}
              </h2>

              {aboutPageContent.professionallySpeaking.sections.map((section, index) => (
                <div key={index} className={designSystem.spacing.margin.bottom.xl}>
                  {section.heading && (
                    <h3 className={cn(designSystem.text.h4, designSystem.colors.text.accent, designSystem.spacing.margin.bottom.sm)}>
                      {section.heading}
                    </h3>
                  )}
                  {section.paragraphs && (
                    <div className={cn('space-y-4', designSystem.text.body.lg, designSystem.colors.text.secondary)}>
                      {section.paragraphs.map((paragraph, pIndex) => (
                        <p key={pIndex}>{paragraph}</p>
                      ))}
                    </div>
                  )}
                  {section.pullQuote && (
                    <div className={cn(
                      designSystem.cards.base,
                      designSystem.spacing.padding.lg,
                      designSystem.spacing.margin.top.lg
                    )}>
                      <p className={cn(designSystem.text.body.xl, designSystem.colors.text.inverse.primary, 'italic')}>
                        {section.pullQuote}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="lg:sticky lg:top-24">
              <h3 className={cn(designSystem.text.h2, designSystem.colors.text.primary, designSystem.spacing.margin.bottom.md)}>
                {aboutPageContent.timeline.title}
              </h3>

              <div className="relative">
                <div className={cn('absolute left-0 top-0 bottom-0 w-px', designSystem.colors.background.accent)}></div>
                {aboutPageContent.timeline.events.map((item, index) => (
                  <div key={index} className={cn('relative flex items-start gap-6 pb-6')}>
                    <div className={cn('flex-shrink-0 w-3 h-3 mt-1.5', designSystem.colors.background.accent, designSystem.rounded.full, '-ml-1.5')}></div>
                    <div>
                      <span className={cn(designSystem.text.body.sm, designSystem.colors.text.accent, designSystem.fontWeight.semibold, 'uppercase tracking-wide')}>{item.year}</span>
                      <p className={cn(designSystem.text.body.md, designSystem.colors.text.primary, designSystem.spacing.margin.top.xs)}>{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personally Speaking */}
      <LazySection animation="fade" delay={100}>
        <section className={cn(designSystem.colors.background.primary, designSystem.spacing.section.full, 'relative')}>
          {/* Subtle gradient overlay for differentiation */}
          <div className="absolute inset-0 bg-gradient-to-br from-vision-dark-purple-2 via-vision-dark-purple to-vision-dark-purple-2/80"></div>
          <div className={cn(designSystem.layout.container, 'relative z-10')}>
            <div className={cn(designSystem.layout.maxWidth['4xl'], designSystem.spacing.margin.horizontal.auto)}>
              <h2 className={cn(designSystem.text.h2, designSystem.colors.text.primary, designSystem.spacing.margin.bottom.lg, designSystem.layout.textAlign.center)}>
                {aboutPageContent.personallySpeaking.title}
              </h2>

              {aboutPageContent.personallySpeaking.sections.map((section, index) => (
                <div key={index} className={designSystem.spacing.margin.bottom.lg}>
                  {section.paragraphs && (
                    <div className={cn('space-y-4', designSystem.text.body.lg, designSystem.colors.text.secondary, designSystem.layout.textAlign.justify)}>
                      {section.paragraphs.map((paragraph, pIndex) => (
                        <p key={pIndex}>{paragraph}</p>
                      ))}
                    </div>
                  )}
                  {section.pullQuote && (
                    <div className={cn(
                      designSystem.cards.base,
                      designSystem.spacing.padding.lg,
                      designSystem.spacing.margin.top.lg
                    )}>
                      <p className={cn(designSystem.text.body.xl, designSystem.colors.text.inverse.primary, 'italic')}>
                        {section.pullQuote}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </LazySection>

      {/* My Values */}
      <LazySection animation="slide-up" delay={150}>
        <section className={cn(designSystem.colors.background.secondary, designSystem.spacing.section.full)}>
          <div className={designSystem.layout.container}>
            <div className={cn(designSystem.layout.maxWidth['6xl'], designSystem.spacing.margin.horizontal.auto)}>
              <div className={cn(designSystem.layout.textAlign.center, designSystem.spacing.margin.bottom.xl)}>
                <h2 className={cn(designSystem.text.h2, designSystem.colors.text.primary, designSystem.spacing.margin.bottom.sm)}>
                  {aboutPageContent.values.title}
                </h2>
              </div>

              <div className={cn('grid md:grid-cols-2 lg:grid-cols-3', designSystem.spacing.gap.lg)}>
                {aboutPageContent.values.items.map((value, index) => (
                  <div
                    key={index}
                    className={cn(
                      designSystem.cards.base,
                      designSystem.cards.padding,
                      designSystem.cards.hover
                    )}
                  >
                    <h3 className={cn(designSystem.text.h4, designSystem.colors.text.inverse.primary, designSystem.spacing.margin.bottom.sm)}>
                      {value.title}
                    </h3>
                    <p className={cn(designSystem.text.body.md, designSystem.colors.text.inverse.secondary)}>
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </LazySection>

      {/* Mission - Manifesto Style */}
      <LazySection animation="fade" delay={200}>
        <section className={cn(designSystem.colors.background.primary, designSystem.spacing.section.full, 'relative')}>
          {/* Subtle texture overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-vision-dark-purple/50 via-vision-dark-purple-2 to-vision-dark-purple/50 opacity-60"></div>
          <div className={cn(designSystem.layout.container, 'relative z-10')}>
            <div className={cn(designSystem.colors.background.secondary, designSystem.rounded["2xl"], designSystem.spacing.padding.xl, designSystem.layout.maxWidth['4xl'], designSystem.spacing.margin.horizontal.auto)}>
              <h2 className={cn(designSystem.text.h2, designSystem.colors.text.primary, designSystem.layout.textAlign.center, designSystem.spacing.margin.bottom.lg)}>
                {aboutPageContent.mission.title}
              </h2>
              <div className={cn('space-y-4', designSystem.layout.maxWidth['3xl'], designSystem.spacing.margin.horizontal.auto)}>
                {aboutPageContent.mission.manifesto.map((line, index) => (
                  <p
                    key={index}
                    className={cn(
                      designSystem.text.body.lg,
                      index < 5 ? designSystem.colors.text.primary : designSystem.colors.text.secondary,
                      index < 5 ? designSystem.fontWeight.semibold : designSystem.fontWeight.normal
                    )}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      </LazySection>

      {/* A Personal Note */}
      <LazySection animation="fade" delay={250}>
        <section className={cn(designSystem.colors.background.primary, designSystem.spacing.section.full)}>
          <div className={designSystem.layout.container}>
            <div className={cn(designSystem.layout.maxWidth['4xl'], designSystem.spacing.margin.horizontal.auto)}>
              <h2 className={cn(designSystem.text.h2, designSystem.colors.text.primary, designSystem.spacing.margin.bottom.lg, designSystem.layout.textAlign.center)}>
                {aboutPageContent.personalNote.title}
              </h2>

              {aboutPageContent.personalNote.sections.map((section, index) => (
                <div key={index} className={designSystem.spacing.margin.bottom.lg}>
                  {section.paragraphs && (
                    <div className={cn('space-y-4', designSystem.text.body.lg, designSystem.colors.text.secondary, designSystem.layout.textAlign.justify)}>
                      {section.paragraphs.map((paragraph, pIndex) => (
                        <p key={pIndex}>{paragraph}</p>
                      ))}
                    </div>
                  )}
                  {section.pullQuote && (
                    <div className={cn(
                      designSystem.cards.base,
                      designSystem.spacing.padding.lg,
                      designSystem.spacing.margin.top.lg
                    )}>
                      <p className={cn(designSystem.text.body.xl, designSystem.colors.text.inverse.primary, 'italic')}>
                        {section.pullQuote}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </LazySection>

      {/* CTA */}
      <LazySection animation="slide-up" delay={300}>
        <section className={cn(designSystem.colors.gradient.lightToDark, designSystem.spacing.section.full)}>
          <div className={designSystem.layout.container}>
            <div className={cn(designSystem.layout.maxWidth['3xl'], designSystem.spacing.margin.horizontal.auto, designSystem.layout.textAlign.center)}>
              <h2 className={cn(designSystem.text.h2, designSystem.colors.text.primary, designSystem.spacing.margin.bottom.md)}>
                {aboutPageContent.cta.title}
              </h2>
              <p className={cn(designSystem.text.body.xl, designSystem.colors.text.secondary, designSystem.spacing.margin.bottom.lg)}>
                {aboutPageContent.cta.subtitle}
              </p>
              <div className={cn('flex flex-col sm:flex-row', designSystem.spacing.gap.sm, 'justify-center')}>
                <Link
                  href={aboutPageContent.cta.primaryButton.href}
                  className={designSystem.buttons.primary}
                >
                  {aboutPageContent.cta.primaryButton.text}
                </Link>
                <Link
                  href={aboutPageContent.cta.secondaryButton.href}
                  className={designSystem.buttons.secondary}
                >
                  {aboutPageContent.cta.secondaryButton.text}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </LazySection>
    </div>
  );
}
