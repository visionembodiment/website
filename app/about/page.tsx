import Link from 'next/link';
import { aboutPageContent } from '@/lib/content';
import { designSystem, cn } from '@/lib/design-system';
import YouTubeEmbed from '@/components/YouTubeEmbed';

export default function AboutPage() {
  return (
    <div className={cn('min-h-screen', designSystem.colors.background.inverse)}>
      {/* Hero - Full Width Video */}
      <section className={cn(designSystem.colors.background.primary, 'relative overflow-hidden', designSystem.spacing.section.full)}>
        <div className={designSystem.layout.container}>
          <div className={cn(designSystem.layout.maxWidth['5xl'], designSystem.spacing.margin.horizontal.auto)}>
            <h1 className={cn(designSystem.text.display.xl, designSystem.colors.text.primary, 'mb-16', designSystem.layout.textAlign.center, 'tracking-tight')}>
              {aboutPageContent.hero.title}
            </h1>

            {/* Video */}
            <div className="mb-16">
              <YouTubeEmbed videoId={aboutPageContent.hero.videoId} title="Meet Alina Rain" />
            </div>

            {/* Credentials - Premium Design */}
            <div className={cn('grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4', designSystem.spacing.gap.lg, designSystem.layout.maxWidth['5xl'], designSystem.spacing.margin.horizontal.auto)}>
              {aboutPageContent.credentials.items.map((cred, index) => (
                <div
                  key={index}
                  className={cn(
                    designSystem.spacing.padding.lg,
                    designSystem.colors.background.inverse,
                    designSystem.rounded.lg,
                    'border-2',
                    designSystem.colors.border.primary,
                    'hover:border-vision-lion',
                    'hover:shadow-lg',
                    'transition-all duration-300',
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
      <section className={cn(designSystem.colors.background.primary, designSystem.spacing.section.full, 'py-24')}>
        <div className={designSystem.layout.container}>
          <div className={cn('grid lg:grid-cols-2', designSystem.spacing.gap.xl, 'items-start', designSystem.layout.maxWidth['6xl'], designSystem.spacing.margin.horizontal.auto)}>
            <div>
              <h2 className={cn(designSystem.text.h1, designSystem.colors.text.primary, 'mb-16', 'tracking-tight')}>
                {aboutPageContent.professionallySpeaking.title}
              </h2>

              {aboutPageContent.professionallySpeaking.sections.map((section, index) => (
                <div key={index} className="mb-16">
                  {section.heading && (
                    <h3 className={cn(designSystem.text.h4, designSystem.colors.text.accent, designSystem.spacing.margin.bottom.md, designSystem.fontWeight.semibold)}>
                      {section.heading}
                    </h3>
                  )}
                  {section.paragraphs && (
                    <div className={cn('space-y-6', designSystem.text.body.lg, designSystem.colors.text.secondary, 'leading-relaxed')}>
                      {section.paragraphs.map((paragraph, pIndex) => (
                        <p key={pIndex}>{paragraph}</p>
                      ))}
                    </div>
                  )}
                  {section.pullQuote && (
                    <div className={cn(
                      designSystem.spacing.padding.xl,
                      designSystem.colors.background.inverse,
                      designSystem.rounded.lg,
                      'shadow-md',
                      designSystem.spacing.margin.vertical.xl
                    )}>
                      <p className={cn(designSystem.text.body.xl, designSystem.colors.text.inverse.primary, 'italic', designSystem.fontWeight.medium, 'leading-relaxed')}>
                        {section.pullQuote}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="lg:sticky lg:top-24">
              <h3 className={cn(designSystem.text.h2, designSystem.colors.text.primary, designSystem.spacing.margin.bottom.xl, 'tracking-tight')}>
                {aboutPageContent.timeline.title}
              </h3>

              <div className="relative">
                <div className={cn('absolute left-0 top-0 bottom-0 w-px', designSystem.colors.background.accent)}></div>
                {aboutPageContent.timeline.events.map((item, index) => (
                  <div key={index} className={cn('relative flex items-start gap-6 pb-8')}>
                    <div className={cn('flex-shrink-0 w-3 h-3 mt-2', designSystem.colors.background.accent, designSystem.rounded.full, '-ml-1.5')}></div>
                    <div>
                      <span className={cn(designSystem.text.body.sm, designSystem.colors.text.accent, designSystem.fontWeight.semibold, 'tracking-wide')}>{item.year}</span>
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
      <section className={cn(designSystem.colors.background.inverse, designSystem.spacing.section.full, 'py-24')}>
        <div className={designSystem.layout.container}>
          <div className={cn(designSystem.layout.maxWidth['4xl'], designSystem.spacing.margin.horizontal.auto)}>
            <h2 className={cn(designSystem.text.h1, designSystem.colors.text.inverse.primary, designSystem.layout.textAlign.center, 'mb-16', 'tracking-tight')}>
              {aboutPageContent.personallySpeaking.title}
            </h2>

            {aboutPageContent.personallySpeaking.sections.map((section, index) => (
              <div key={index} className={'mb-16'}>
                {section.paragraphs && (
                  <div className={cn('space-y-6', designSystem.text.body.lg, designSystem.colors.text.inverse.secondary, 'leading-relaxed')}>
                    {section.paragraphs.map((paragraph, pIndex) => (
                      <p key={pIndex}>{paragraph}</p>
                    ))}
                  </div>
                )}
                {section.pullQuote && (
                  <div className={cn(
                    designSystem.spacing.padding.xl,
                    designSystem.colors.background.primary,
                    designSystem.rounded.lg,
                    'shadow-md',
                    designSystem.spacing.margin.vertical.xl
                  )}>
                    <p className={cn(designSystem.text.body.xl, designSystem.colors.text.accent, 'italic', designSystem.fontWeight.medium, 'leading-relaxed')}>
                      {section.pullQuote}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My Values */}
      <section className={cn(designSystem.colors.background.secondary, designSystem.spacing.section.full, 'py-24')}>
        <div className={designSystem.layout.container}>
          <div className={cn(designSystem.layout.maxWidth['6xl'], designSystem.spacing.margin.horizontal.auto)}>
            <h2 className={cn(designSystem.text.h1, designSystem.colors.text.primary, designSystem.layout.textAlign.center, 'mb-16', 'tracking-tight')}>
              {aboutPageContent.values.title}
            </h2>

            <div className={cn('grid md:grid-cols-2 lg:grid-cols-3', designSystem.spacing.gap.lg)}>
              {aboutPageContent.values.items.map((value, index) => (
                <div
                  key={index}
                  className={cn(
                    designSystem.spacing.padding.xl,
                    designSystem.colors.background.primary,
                    designSystem.rounded.lg,
                    'border',
                    designSystem.colors.border.primary,
                    'hover:border-vision-lion',
                    'hover:shadow-lg',
                    'transition-all duration-300'
                  )}
                >
                  <h3 className={cn(designSystem.text.h4, designSystem.colors.text.primary, designSystem.spacing.margin.bottom.md, designSystem.fontWeight.semibold)}>
                    {value.title}
                  </h3>
                  <p className={cn(designSystem.text.body.md, designSystem.colors.text.secondary, 'leading-relaxed')}>
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission - Manifesto Style */}
      <section className={cn(designSystem.colors.background.inverse, designSystem.spacing.section.full, 'py-24')}>
        <div className={designSystem.layout.container}>
          <div className={cn(designSystem.layout.maxWidth['4xl'], designSystem.spacing.margin.horizontal.auto, designSystem.layout.textAlign.center)}>
            <h2 className={cn(designSystem.text.h1, designSystem.colors.text.inverse.primary, 'mb-16', 'tracking-tight')}>
              {aboutPageContent.mission.title}
            </h2>
            <div className={cn('space-y-8')}>
              {aboutPageContent.mission.manifesto.map((line, index) => (
                <p
                  key={index}
                  className={cn(
                    designSystem.text.body.xl,
                    index < 5 ? designSystem.colors.text.inverse.primary : designSystem.colors.text.inverse.secondary,
                    index < 5 ? designSystem.fontWeight.semibold : designSystem.fontWeight.normal,
                    'leading-relaxed'
                  )}
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* A Personal Note */}
      <section className={cn(designSystem.colors.background.primary, designSystem.spacing.section.full, 'py-24')}>
        <div className={designSystem.layout.container}>
          <div className={cn(designSystem.layout.maxWidth['4xl'], designSystem.spacing.margin.horizontal.auto)}>
            <h2 className={cn(designSystem.text.h1, designSystem.colors.text.primary, designSystem.layout.textAlign.center, 'mb-16', 'tracking-tight')}>
              {aboutPageContent.personalNote.title}
            </h2>

            {aboutPageContent.personalNote.sections.map((section, index) => (
              <div key={index} className={'mb-16'}>
                {section.paragraphs && (
                  <div className={cn('space-y-6', designSystem.text.body.lg, designSystem.colors.text.secondary, 'leading-relaxed')}>
                    {section.paragraphs.map((paragraph, pIndex) => (
                      <p key={pIndex}>{paragraph}</p>
                    ))}
                  </div>
                )}
                {section.pullQuote && (
                  <div className={cn(
                    designSystem.spacing.padding.xl,
                    designSystem.colors.background.inverse,
                    designSystem.rounded.lg,
                    'shadow-xl',
                    designSystem.spacing.margin.vertical.xl,
                    designSystem.layout.textAlign.center
                  )}>
                    <p className={cn(designSystem.text.display.sm, designSystem.colors.text.inverse.primary, 'italic', designSystem.fontWeight.medium, 'leading-relaxed')}>
                      {section.pullQuote}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={cn(designSystem.colors.gradient.primary, designSystem.spacing.section.full, 'py-24')}>
        <div className={designSystem.layout.container}>
          <div className={cn(designSystem.layout.maxWidth['3xl'], designSystem.spacing.margin.horizontal.auto, designSystem.layout.textAlign.center)}>
            <h2 className={cn(designSystem.text.h1, designSystem.colors.text.primary, designSystem.spacing.margin.bottom.lg, 'tracking-tight')}>
              {aboutPageContent.cta.title}
            </h2>
            <p className={cn(designSystem.text.body.xl, designSystem.colors.text.secondary, 'mb-16', 'leading-relaxed')}>
              {aboutPageContent.cta.subtitle}
            </p>
            <div className={cn('flex flex-col sm:flex-row', designSystem.spacing.gap.md, 'justify-center')}>
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
    </div>
  );
}
