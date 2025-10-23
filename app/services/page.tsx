import ServiceCard from '@/components/ServiceCard';
import LazySection from '@/components/LazySection';
import Link from 'next/link';
import { designSystem, cn } from '@/lib/design-system';
import { servicesPageContent } from '@/lib/content';

export default function ServicesPage() {
  const { sections, hero, services, comparison, process, faq, cta } = servicesPageContent;

  const allSections: Record<string, React.ReactElement> = {
    hero: (
      <section key="hero" className={cn(designSystem.colors.gradient.lightToDark, designSystem.spacing.section.full)}>
        <div className={designSystem.layout.container}>
          <div className={cn(designSystem.layout.maxWidth["4xl"], designSystem.spacing.margin.horizontal.auto, designSystem.layout.textAlign.center)}>
            <h1 className={cn(designSystem.text.h1, designSystem.colors.text.primary, designSystem.spacing.margin.bottom.md)}>
              {hero.title}
            </h1>
            <p className={cn(designSystem.text.body.xl, designSystem.colors.text.secondary, designSystem.spacing.margin.bottom.lg)}>
              {hero.subtitle}
            </p>
            <div className={cn("inline-flex items-center", designSystem.spacing.gap.xs, "bg-yellow-100 text-yellow-800", designSystem.spacing.padding.horizontal.sm, designSystem.spacing.padding.vertical.xs, designSystem.rounded.full)}>
              <span className={designSystem.text.body.lg}>{hero.promotion.emoji}</span>
              <span className={cn(designSystem.text.body.sm, designSystem.fontWeight.semibold)}>{hero.promotion.text}</span>
            </div>
          </div>
        </div>
      </section>
    ),

    services: (
      <LazySection key="services" animation="slide-up" className={cn(designSystem.colors.background.primary, designSystem.spacing.section.full)}>
        <div className={designSystem.layout.container}>
          <div className={cn("grid md:grid-cols-3", designSystem.spacing.gap.lg, designSystem.layout.maxWidth["6xl"], designSystem.spacing.margin.horizontal.auto)}>
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </LazySection>
    ),

    comparison: (
      <LazySection key="comparison" animation="fade" delay={100} className={cn(designSystem.colors.background.secondary, designSystem.spacing.section.full)}>
        <div className={designSystem.layout.container}>
          <div className={cn(designSystem.layout.maxWidth["5xl"], designSystem.spacing.margin.horizontal.auto)}>
            <h2 className={cn(designSystem.text.h2, designSystem.colors.text.primary, designSystem.layout.textAlign.center, designSystem.spacing.margin.bottom.xl)}>
              {comparison.title}
            </h2>

            <div className={cn(designSystem.cards.base, designSystem.rounded.xl, designSystem.shadows.elevated, "overflow-hidden")}>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className={cn("bg-vision-dark-purple text-white")}>
                    <tr>
                      {comparison.headers.map((header, index) => (
                        <th key={index} className={cn(designSystem.spacing.padding.horizontal.md, designSystem.spacing.padding.vertical.sm, index === 0 ? "text-left" : "text-center")}>
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.rows.map((row, rowIndex) => (
                      <tr key={rowIndex} className={cn("border-b", rowIndex % 2 === 1 && "bg-gray-50")}>
                        <td className={cn(designSystem.spacing.padding.horizontal.md, designSystem.spacing.padding.vertical.sm, designSystem.fontWeight.medium, designSystem.colors.text.inverse.primary)}>{row.feature}</td>
                        <td className={cn(designSystem.spacing.padding.horizontal.md, designSystem.spacing.padding.vertical.sm, "text-center", designSystem.colors.text.inverse.secondary)}>{row.mindGames}</td>
                        <td className={cn(designSystem.spacing.padding.horizontal.md, designSystem.spacing.padding.vertical.sm, "text-center", designSystem.colors.text.inverse.secondary)}>{row.oneToOne}</td>
                        <td className={cn(designSystem.spacing.padding.horizontal.md, designSystem.spacing.padding.vertical.sm, "text-center", designSystem.colors.text.inverse.secondary)}>{row.tarot}</td>
                      </tr>
                    ))}
                    <tr className="border-b">
                      <td className={cn(designSystem.spacing.padding.horizontal.md, designSystem.spacing.padding.vertical.sm, designSystem.fontWeight.medium, designSystem.colors.text.inverse.primary)}>Investment</td>
                      <td className={cn(designSystem.spacing.padding.horizontal.md, designSystem.spacing.padding.vertical.sm, "text-center", designSystem.colors.text.inverse.secondary)}>
                        <span className="line-through text-gray-400">{comparison.pricing.mindGames.original}</span>
                        <span className={cn("ml-2", designSystem.fontWeight.bold, designSystem.colors.text.inverse.secondary)}>{comparison.pricing.mindGames.sale}</span>
                      </td>
                      <td className={cn(designSystem.spacing.padding.horizontal.md, designSystem.spacing.padding.vertical.sm, "text-center", designSystem.colors.text.inverse.secondary)}>{comparison.pricing.oneToOne}</td>
                      <td className={cn(designSystem.spacing.padding.horizontal.md, designSystem.spacing.padding.vertical.sm, "text-center", designSystem.colors.text.inverse.secondary)}>{comparison.pricing.tarot}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </LazySection>
    ),

    process: (
      <LazySection key="process" animation="slide-up" delay={150} className={cn(designSystem.colors.background.primary, designSystem.spacing.section.full)}>
        <div className={designSystem.layout.container}>
          <div className={cn(designSystem.layout.maxWidth["5xl"], designSystem.spacing.margin.horizontal.auto)}>
            <h2 className={cn(designSystem.text.h2, designSystem.colors.text.primary, designSystem.layout.textAlign.center, designSystem.spacing.margin.bottom.xl)}>
              {process.title}
            </h2>

            <div className={cn("grid md:grid-cols-4", designSystem.spacing.gap.lg)}>
              {process.steps.map((step, index) => (
                <div key={index} className={designSystem.layout.textAlign.center}>
                  <div className={cn("w-16 h-16", "bg-vision-dark-purple text-white", designSystem.rounded.full, "flex items-center justify-center", designSystem.text.h3, designSystem.spacing.margin.horizontal.auto, designSystem.spacing.margin.bottom.sm)}>
                    {step.step}
                  </div>
                  <h3 className={cn(designSystem.fontWeight.semibold, designSystem.colors.text.primary, designSystem.spacing.margin.bottom.xs)}>{step.title}</h3>
                  <p className={cn(designSystem.text.body.sm, designSystem.colors.text.secondary)}>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </LazySection>
    ),

    faq: (
      <LazySection key="faq" animation="fade" delay={200} className={cn(designSystem.colors.background.secondary, designSystem.spacing.section.full)}>
        <div className={designSystem.layout.container}>
          <div className={cn(designSystem.layout.maxWidth["3xl"], designSystem.spacing.margin.horizontal.auto)}>
            <h2 className={cn(designSystem.text.h2, designSystem.colors.text.primary, designSystem.layout.textAlign.center, designSystem.spacing.margin.bottom.xl)}>
              {faq.title}
            </h2>

            <div className={cn("space-y-6")}>
              {faq.items.map((item, index) => (
                <div key={index} className={cn(designSystem.cards.base, designSystem.spacing.padding.lg, designSystem.shadows.subtle)}>
                  <h3 className={cn(designSystem.fontWeight.semibold, designSystem.colors.text.inverse.primary, designSystem.spacing.margin.bottom.xs)}>
                    {item.question}
                  </h3>
                  <p className={cn(designSystem.text.body.md, designSystem.colors.text.inverse.secondary)}>
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </LazySection>
    ),

    cta: (
      <LazySection key="cta" animation="slide-up" delay={250} className={cn(designSystem.colors.gradient.lightToDark, designSystem.spacing.section.full)}>
        <div className={designSystem.layout.container}>
          <div className={cn(designSystem.layout.maxWidth["3xl"], designSystem.spacing.margin.horizontal.auto, designSystem.layout.textAlign.center)}>
            <h2 className={cn(designSystem.text.h2, designSystem.colors.text.primary, designSystem.spacing.margin.bottom.md)}>
              {cta.title}
            </h2>
            <p className={cn(designSystem.text.body.xl, designSystem.colors.text.secondary, cta.buttonHref ? designSystem.spacing.margin.bottom.lg : "")}>
              {cta.subtitle}
            </p>
            {cta.buttonHref && (
              <Link
                href={cta.buttonHref}
                className={designSystem.buttons.primary}
              >
                {cta.buttonText}
              </Link>
            )}
          </div>
        </div>
      </LazySection>
    ),
  };

  return (
    <div className="min-h-screen">
      {sections
        .filter(section => section.enabled)
        .map(section => allSections[section.id])
        .filter(Boolean)}
    </div>
  );
}
