import Link from 'next/link';
import { aboutPageContent } from '@/lib/content';
import { designSystem, cn } from '@/lib/design-system';

export default function AboutPage() {
  return (
    <div className={cn('min-h-screen', designSystem.colors.background.inverse)}>
      <section className={cn(designSystem.colors.gradient.primary, designSystem.spacing.section.full)}>
        <div className={designSystem.layout.container}>
          <div className={cn(designSystem.layout.maxWidth['4xl'], designSystem.spacing.margin.horizontal.auto, designSystem.layout.textAlign.center)}>
            <h1 className={cn(designSystem.text.h1, designSystem.colors.text.primary, designSystem.spacing.margin.bottom.md)}>
              {aboutPageContent.hero.title}
            </h1>
            <p className={cn(designSystem.text.body.xl, designSystem.colors.text.secondary)}>
              {aboutPageContent.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className={designSystem.spacing.section.full}>
        <div className={designSystem.layout.container}>
          <div className={cn('grid lg:grid-cols-2', designSystem.spacing.gap.xl, 'items-start', designSystem.layout.maxWidth['6xl'], designSystem.spacing.margin.horizontal.auto)}>
            <div>
              <h2 className={cn(designSystem.text.h2, designSystem.colors.text.inverse.primary, designSystem.spacing.margin.bottom.md)}>
                {aboutPageContent.journey.title}
              </h2>

              <div className={cn('space-y-4', designSystem.text.body.lg, designSystem.colors.text.inverse.secondary)}>
                {aboutPageContent.journey.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className={designSystem.spacing.margin.top.lg}>
                <h3 className={cn(designSystem.text.h3, designSystem.colors.text.inverse.primary, designSystem.spacing.margin.bottom.sm)}>
                  {aboutPageContent.philosophy.title}
                </h3>
                <div className={cn(designSystem.colors.background.secondary, designSystem.rounded.lg, designSystem.spacing.padding.md, 'border-l-4', designSystem.colors.border.primary)}>
                  <p className={cn(designSystem.text.body.lg, designSystem.colors.text.primary, 'italic')}>
                    &ldquo;{aboutPageContent.philosophy.quote}&rdquo;
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className={cn(designSystem.text.h2, designSystem.colors.text.inverse.primary, designSystem.spacing.margin.bottom.md)}>
                {aboutPageContent.credentials.title}
              </h2>

              <div className={cn('grid grid-cols-1 sm:grid-cols-2', designSystem.spacing.gap.sm, designSystem.spacing.margin.bottom.xl)}>
                {aboutPageContent.credentials.items.map((cred, index) => (
                  <div
                    key={index}
                    className={cn(
                      designSystem.cards.base,
                      designSystem.spacing.padding.sm,
                      'hover:shadow-lg transition-shadow'
                    )}
                  >
                    <div className={cn(designSystem.fontSize['3xl'], designSystem.spacing.margin.bottom.xs)}>{cred.icon}</div>
                    <h4 className={cn(designSystem.fontWeight.semibold, designSystem.colors.text.inverse.primary)}>{cred.title}</h4>
                    <p className={cn(designSystem.fontSize.sm, designSystem.colors.text.inverse.secondary)}>{cred.description}</p>
                  </div>
                ))}
              </div>

              <h3 className={cn(designSystem.text.h3, designSystem.colors.text.inverse.primary, designSystem.spacing.margin.bottom.md)}>
                {aboutPageContent.timeline.title}
              </h3>

              <div className="relative">
                <div className={cn('absolute left-8 top-0 bottom-0 w-0.5', designSystem.colors.background.secondary)}></div>
                {aboutPageContent.timeline.events.map((item, index) => (
                  <div key={index} className={cn('relative flex items-start', designSystem.spacing.margin.bottom.md)}>
                    <div className={cn('absolute left-8 w-4 h-4', designSystem.colors.background.secondary, designSystem.rounded.full, '-translate-x-1/2')}></div>
                    <div className="ml-16">
                      <span className={cn(designSystem.colors.text.inverse.secondary, designSystem.fontWeight.semibold)}>{item.year}</span>
                      <p className={designSystem.colors.text.inverse.primary}>{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={cn(designSystem.colors.background.secondary, designSystem.spacing.section.full)}>
        <div className={designSystem.layout.container}>
          <div className={cn(designSystem.layout.maxWidth['4xl'], designSystem.spacing.margin.horizontal.auto)}>
            <h2 className={cn(designSystem.text.h2, designSystem.colors.text.primary, designSystem.layout.textAlign.center, designSystem.spacing.margin.bottom.xl)}>
              {aboutPageContent.values.title}
            </h2>

            <div className={cn('grid md:grid-cols-3', designSystem.spacing.gap.lg)}>
              {aboutPageContent.values.items.map((value, index) => (
                <div key={index} className={designSystem.layout.textAlign.center}>
                  <div className={cn('w-20 h-20', designSystem.colors.background.primary, designSystem.rounded.full, 'flex items-center justify-center', designSystem.spacing.margin.horizontal.auto, designSystem.spacing.margin.bottom.sm)}>
                    <span className={designSystem.fontSize['3xl']}>{value.icon}</span>
                  </div>
                  <h3 className={cn(designSystem.fontWeight.semibold, designSystem.colors.text.primary, designSystem.spacing.margin.bottom.xs)}>{value.title}</h3>
                  <p className={cn(designSystem.text.body.md, designSystem.colors.text.secondary)}>
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={cn(designSystem.colors.background.inverse, designSystem.spacing.section.full)}>
        <div className={designSystem.layout.container}>
          <div className={cn(designSystem.layout.maxWidth['4xl'], designSystem.spacing.margin.horizontal.auto)}>
            <div className={cn('grid grid-cols-2 md:grid-cols-4', designSystem.spacing.gap.lg, designSystem.layout.textAlign.center)}>
              {aboutPageContent.stats.items.map((stat, index) => (
                <div key={index}>
                  <div className={cn(designSystem.fontSize['4xl'], designSystem.fontWeight.bold, designSystem.colors.text.inverse.primary)}>{stat.number}</div>
                  <p className={cn(designSystem.text.body.md, designSystem.colors.text.inverse.secondary)}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
