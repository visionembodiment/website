import Link from 'next/link';
import { privacyPageContent } from '@/lib/content';
import { designSystem, cn, getSectionBackground } from '@/lib/design-system';

export default function Privacy() {
  const { sections, hero } = privacyPageContent;

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
              {privacyPageContent.content.map((section: any, index: number) => (
                <section key={index} id={section.id}>
                  <h2 className={cn(designSystem.text.h2, designSystem.colors.text.primary, designSystem.spacing.margin.bottom.md)}>
                    {section.title}
                  </h2>

                  {section.subsections ? (
                    <div className="space-y-6">
                      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                      {section.subsections.map((subsection: any, subIndex: number) => (
                        <div key={subIndex}>
                          <h3 className={cn(designSystem.text.body.lg, designSystem.fontWeight.semibold, designSystem.colors.text.primary, designSystem.spacing.margin.bottom.sm)}>
                            {subsection.subtitle}
                          </h3>
                          <div className="space-y-4">
                            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                            {subsection.content.map((item: any, itemIndex: number) => (
                              <div key={itemIndex}>
                                {item.text && (
                                  <p className={cn(designSystem.text.body.md, designSystem.colors.text.secondary, item.list ? designSystem.spacing.margin.bottom.sm : "")}>
                                    {item.text}
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
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                      {section.content.map((item: any, itemIndex: number) => (
                        <div key={itemIndex}>
                          {item.text && (
                            <p className={cn(designSystem.text.body.md, designSystem.colors.text.secondary, item.list ? designSystem.spacing.margin.bottom.sm : "")}>
                              {item.text}
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
                  )}

                  {section.contact && (
                    <div className={cn(designSystem.colors.background.accent, designSystem.rounded.lg, designSystem.spacing.padding.lg, designSystem.spacing.margin.top.md)}>
                      <p className={cn(designSystem.text.body.md, designSystem.colors.text.inverse.primary)}>
                        {section.contact.title && <><strong>{section.contact.title}</strong><br /></>}
                        <strong>{section.contact.name}</strong><br />
                        Email: {section.contact.email}<br />
                        Business Registration: {section.contact.registration}
                      </p>
                    </div>
                  )}

                  {section.supervisory && (
                    <p className={cn(designSystem.text.body.md, designSystem.colors.text.secondary, designSystem.spacing.margin.top.md)}>
                      <strong>Supervisory Authority:</strong> {section.supervisory.text}
                    </p>
                  )}
                </section>
              ))}

              {/* Consent */}
              <section className={cn(designSystem.dividers.horizontal, designSystem.spacing.margin.top.lg)}>
                <p className={cn(designSystem.text.body.md, designSystem.colors.text.secondary, designSystem.layout.textAlign.center, "italic")}>
                  {privacyPageContent.footer.text}
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
