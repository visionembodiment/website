import Link from 'next/link';
import { termsPageContent } from '@/lib/content';
import { designSystem, cn, getSectionBackground } from '@/lib/design-system';

export default function Terms() {
  const { sections, hero } = termsPageContent;

  return (
    <div className={cn("min-h-screen", designSystem.colors.background.primary)}>
      {/* Hero Section */}
      <section className={cn(getSectionBackground(sections, 'hero'), designSystem.spacing.section.full)}>
        <div className={designSystem.layout.container}>
          <div className={cn(designSystem.layout.maxWidth["4xl"], designSystem.spacing.margin.horizontal.auto, designSystem.layout.textAlign.center)}>
            <h1 className={cn(designSystem.text.h1, designSystem.colors.text.primary, designSystem.spacing.margin.bottom.sm)}>
              {hero.title}
            </h1>
            <p className={cn(designSystem.text.body.md, designSystem.colors.text.secondary)}>
              Last updated: {hero.lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className={cn(getSectionBackground(sections, 'content'), designSystem.spacing.section.full)}>
        <div className={designSystem.layout.container}>
          <div className={cn(designSystem.layout.maxWidth["4xl"], designSystem.spacing.margin.horizontal.auto)}>
            <div className="space-y-8">
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {termsPageContent.content.map((section: any, index: number) => (
                <section key={index} id={section.id}>
                  <h2 className={cn(designSystem.text.h2, designSystem.colors.text.primary, designSystem.spacing.margin.bottom.md)}>
                    {section.title}
                  </h2>

                  <div className="space-y-4">
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {section.content.map((item: any, itemIndex: number) => (
                      <div key={itemIndex}>
                        {item.subtitle && (
                          <h3 className={cn(designSystem.text.body.lg, designSystem.fontWeight.semibold, designSystem.colors.text.primary, designSystem.spacing.margin.bottom.sm)}>
                            {item.subtitle}
                          </h3>
                        )}

                        {item.text && (
                          <p className={cn(designSystem.text.body.md, designSystem.colors.text.secondary, item.list ? designSystem.spacing.margin.bottom.sm : "")}>
                            {item.text}
                            {item.link && (
                              <>
                                {' '}
                                <Link href={item.link.href} className={cn(designSystem.colors.text.accent, "underline", designSystem.colors.hover.text.dun)}>
                                  {item.link.text}
                                </Link>
                              </>
                            )}
                          </p>
                        )}

                        {item.list && (
                          <ul className={cn("list-disc list-inside space-y-2 ml-4", designSystem.spacing.margin.bottom.sm)}>
                            {item.list.map((listItem: string, listIndex: number) => (
                              <li key={listIndex} className={cn(designSystem.text.body.md, designSystem.colors.text.secondary)}>
                                {listItem}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>

                  {section.contact && (
                    <div className={cn(designSystem.colors.background.accent, designSystem.rounded.lg, designSystem.spacing.padding.lg, designSystem.spacing.margin.top.md)}>
                      <p className={cn(designSystem.text.body.md, designSystem.colors.text.inverse.primary)}>
                        <strong>{section.contact.name}</strong><br />
                        Email: {section.contact.email}<br />
                        Business Registration: {section.contact.registration}
                      </p>
                    </div>
                  )}
                </section>
              ))}

              {/* Acceptance */}
              <section className={cn(designSystem.dividers.horizontal, designSystem.spacing.margin.top.lg)}>
                <p className={cn(designSystem.text.body.md, designSystem.colors.text.secondary, designSystem.layout.textAlign.center, "italic")}>
                  {termsPageContent.footer.text}
                </p>
              </section>
            </div>

            {/* Back to Home */}
            <div className={cn(designSystem.layout.textAlign.center, designSystem.spacing.margin.top.lg)}>
              <Link
                href="/"
                className={cn(designSystem.colors.text.accent, "underline", designSystem.colors.hover.text.dun, designSystem.fontWeight.medium)}
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
