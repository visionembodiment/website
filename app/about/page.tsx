import Link from 'next/link';
import { aboutPageContent } from '@/lib/content';
import { designSystem, cn } from '@/lib/design-system';
import YouTubeEmbed from '@/components/YouTubeEmbed';

export default function AboutPage() {
  return (
    <div className={cn('min-h-screen', designSystem.colors.background.inverse)}>
      {/* Hero - Full Width Video */}
      <section className={cn(designSystem.colors.background.primary, 'relative overflow-hidden')}>
        <div className={cn(designSystem.layout.container, designSystem.spacing.section.full)}>
          <div className={cn(designSystem.layout.maxWidth['5xl'], designSystem.spacing.margin.horizontal.auto)}>
            <h1 className={cn(designSystem.text.display.lg, designSystem.colors.text.primary, designSystem.spacing.margin.bottom.xl, designSystem.layout.textAlign.center)}>
              {aboutPageContent.hero.title}
            </h1>

            {/* Video */}
            <div className={cn(designSystem.spacing.margin.bottom.xl)}>
              <YouTubeEmbed videoId={aboutPageContent.hero.videoId} title="Meet Alina Rain" />
            </div>

            {/* Credentials - Clean and elegant */}
            <div className={cn('grid grid-cols-2 md:grid-cols-4', designSystem.spacing.gap.sm, designSystem.layout.maxWidth['4xl'], designSystem.spacing.margin.horizontal.auto)}>
              {aboutPageContent.credentials.items.map((cred, index) => (
                <div
                  key={index}
                  className={cn(
                    designSystem.spacing.padding.md,
                    designSystem.colors.background.secondary,
                    designSystem.rounded.lg,
                    'border',
                    designSystem.colors.border.primary,
                    'hover:border-vision-lion',
                    'transition-all duration-300',
                    'text-center'
                  )}
                >
                  <h4 className={cn(designSystem.text.body.sm, designSystem.colors.text.primary, designSystem.fontWeight.semibold, designSystem.spacing.margin.bottom.xs)}>{cred.title}</h4>
                  <p className={cn(designSystem.fontSize.xs, designSystem.colors.text.secondary)}>{cred.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visual Break 1 */}
      <section className="relative h-64 md:h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-vision-dark-purple-2/50 to-vision-dark-purple/80"></div>
        <div className={cn('absolute inset-0 flex items-center justify-center')}>
          <div className={cn(designSystem.layout.container, designSystem.layout.textAlign.center)}>
            <p className={cn(designSystem.text.display.sm, designSystem.colors.text.primary)}>
              The journey to wholeness
            </p>
          </div>
        </div>
      </section>

      {/* Professionally Speaking with Timeline */}
      <section className={cn(designSystem.colors.background.primary, designSystem.spacing.section.full, 'relative')}>
        <div className={designSystem.layout.container}>
          <div className={cn('grid lg:grid-cols-2', designSystem.spacing.gap.xl, 'items-start', designSystem.layout.maxWidth['6xl'], designSystem.spacing.margin.horizontal.auto)}>
            <div>
              <h2 className={cn(designSystem.text.h2, designSystem.colors.text.primary, designSystem.spacing.margin.bottom.lg)}>
                {aboutPageContent.professionallySpeaking.title}
              </h2>

              {aboutPageContent.professionallySpeaking.sections.map((section, index) => (
                <div key={index} className={designSystem.spacing.margin.bottom.lg}>
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
                      designSystem.spacing.padding.lg,
                      designSystem.colors.background.secondary,
                      designSystem.rounded.lg,
                      'border-l-4',
                      designSystem.colors.border.primary,
                      designSystem.spacing.margin.vertical.lg,
                      'relative'
                    )}>
                      <div className="absolute -top-4 -left-4 text-6xl opacity-20">❝</div>
                      <p className={cn(designSystem.text.body.xl, designSystem.colors.text.accent, 'italic', designSystem.fontWeight.semibold)}>
                        {section.pullQuote}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="lg:sticky lg:top-8">
              <h3 className={cn(designSystem.text.h2, designSystem.colors.text.primary, designSystem.spacing.margin.bottom.md)}>
                {aboutPageContent.timeline.title}
              </h3>

              <div className="relative">
                <div className={cn('absolute left-8 top-0 bottom-0 w-0.5 opacity-30', designSystem.colors.background.accent)}></div>
                {aboutPageContent.timeline.events.map((item, index) => (
                  <div key={index} className={cn('relative flex items-start', designSystem.spacing.margin.bottom.md)}>
                    <div className={cn('absolute left-8 w-4 h-4', designSystem.colors.background.accent, designSystem.rounded.full, '-translate-x-1/2')}></div>
                    <div className="ml-16">
                      <span className={cn(designSystem.colors.text.accent, designSystem.fontWeight.semibold)}>{item.year}</span>
                      <p className={cn(designSystem.text.body.md, designSystem.colors.text.primary)}>{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Break 2 */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-vision-isabelline/30 to-vision-dark-purple-2/90"></div>
      </section>

      {/* Personally Speaking */}
      <section className={cn(designSystem.colors.background.inverse, designSystem.spacing.section.full)}>
        <div className={designSystem.layout.container}>
          <div className={cn(designSystem.layout.maxWidth['4xl'], designSystem.spacing.margin.horizontal.auto)}>
            <h2 className={cn(designSystem.text.h2, designSystem.colors.text.inverse.primary, designSystem.layout.textAlign.center, designSystem.spacing.margin.bottom.lg)}>
              {aboutPageContent.personallySpeaking.title}
            </h2>

            {aboutPageContent.personallySpeaking.sections.map((section, index) => (
              <div key={index} className={designSystem.spacing.margin.bottom.lg}>
                {section.paragraphs && (
                  <div className={cn('space-y-4', designSystem.text.body.lg, designSystem.colors.text.inverse.secondary)}>
                    {section.paragraphs.map((paragraph, pIndex) => (
                      <p key={pIndex}>{paragraph}</p>
                    ))}
                  </div>
                )}
                {section.pullQuote && (
                  <div className={cn(
                    designSystem.spacing.padding.lg,
                    designSystem.colors.background.primary,
                    designSystem.rounded.lg,
                    'border-l-4',
                    'border-vision-lion',
                    designSystem.spacing.margin.vertical.lg,
                    'relative'
                  )}>
                    <div className="absolute -top-6 -left-6 text-8xl opacity-10">❝</div>
                    <p className={cn(designSystem.text.body.xl, designSystem.colors.text.accent, 'italic', designSystem.fontWeight.semibold)}>
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
      <section className={cn(designSystem.colors.background.secondary, designSystem.spacing.section.full)}>
        <div className={designSystem.layout.container}>
          <div className={cn(designSystem.layout.maxWidth['6xl'], designSystem.spacing.margin.horizontal.auto)}>
            <h2 className={cn(designSystem.text.h2, designSystem.colors.text.primary, designSystem.layout.textAlign.center, designSystem.spacing.margin.bottom.xl)}>
              {aboutPageContent.values.title}
            </h2>

            <div className={cn('grid md:grid-cols-2 lg:grid-cols-3', designSystem.spacing.gap.md)}>
              {aboutPageContent.values.items.map((value, index) => (
                <div
                  key={index}
                  className={cn(
                    designSystem.spacing.padding.lg,
                    designSystem.colors.background.primary,
                    designSystem.rounded.lg,
                    'border',
                    designSystem.colors.border.primary,
                    'hover:border-vision-lion',
                    'transition-all duration-300'
                  )}
                >
                  <h3 className={cn(designSystem.text.h5, designSystem.colors.text.primary, designSystem.spacing.margin.bottom.sm)}>
                    {value.title}
                  </h3>
                  <p className={cn(designSystem.text.body.sm, designSystem.colors.text.secondary)}>
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visual Break 3 */}
      <section className="relative h-48 md:h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-vision-dark-purple/80 to-vision-isabelline/30"></div>
      </section>

      {/* Mission - Manifesto Style */}
      <section className={cn(designSystem.colors.background.inverse, designSystem.spacing.section.full)}>
        <div className={designSystem.layout.container}>
          <div className={cn(designSystem.layout.maxWidth['4xl'], designSystem.spacing.margin.horizontal.auto, designSystem.layout.textAlign.center)}>
            <h2 className={cn(designSystem.text.h2, designSystem.colors.text.inverse.primary, designSystem.spacing.margin.bottom.xl)}>
              {aboutPageContent.mission.title}
            </h2>
            <div className={cn('space-y-6')}>
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
      <section className={cn(designSystem.colors.background.primary, designSystem.spacing.section.full)}>
        <div className={designSystem.layout.container}>
          <div className={cn(designSystem.layout.maxWidth['4xl'], designSystem.spacing.margin.horizontal.auto)}>
            <h2 className={cn(designSystem.text.h2, designSystem.colors.text.primary, designSystem.layout.textAlign.center, designSystem.spacing.margin.bottom.lg)}>
              {aboutPageContent.personalNote.title}
            </h2>

            {aboutPageContent.personalNote.sections.map((section, index) => (
              <div key={index} className={designSystem.spacing.margin.bottom.lg}>
                {section.paragraphs && (
                  <div className={cn('space-y-4', designSystem.text.body.lg, designSystem.colors.text.secondary)}>
                    {section.paragraphs.map((paragraph, pIndex) => (
                      <p key={pIndex}>{paragraph}</p>
                    ))}
                  </div>
                )}
                {section.pullQuote && (
                  <div className={cn(
                    designSystem.spacing.padding.xl,
                    designSystem.colors.background.secondary,
                    designSystem.rounded.xl,
                    'border-2',
                    designSystem.colors.border.primary,
                    designSystem.spacing.margin.vertical.xl,
                    designSystem.layout.textAlign.center,
                    'relative'
                  )}>
                    <div className="absolute top-4 left-4 text-8xl opacity-10">❝</div>
                    <div className="absolute bottom-4 right-4 text-8xl opacity-10 rotate-180">❝</div>
                    <p className={cn(designSystem.text.display.sm, designSystem.colors.text.accent, 'italic', 'relative z-10')}>
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
      <section className={cn(designSystem.colors.gradient.primary, designSystem.spacing.section.full)}>
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
    </div>
  );
}
