import Link from 'next/link';
import type { Metadata } from 'next';
import { designSystem, cn } from '@/lib/design-system';
import { productsPageContent } from '@/lib/content';

export const metadata: Metadata = {
  title: 'All Courses - Vision Embodiment',
  description: 'Explore our complete collection of transformative self-paced courses designed to support your journey of embodied transformation.',
  openGraph: {
    title: 'All Courses - Vision Embodiment',
    description: 'Self-paced courses for deep transformation and spiritual growth.',
    type: 'website',
  },
};

export default function AllCoursesPage() {
  const { courses } = productsPageContent;

  // TODO: When courses exceed 12 items, add:
  // - Category filter (Shadow Work, Somatic, Energy, etc.)
  // - Sort options (price, duration, newest)
  // - Search functionality
  // - Pagination or "Load More" pattern

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className={cn("bg-gradient-to-br from-vision-dark-purple-2 via-vision-dark-purple to-vision-dark-purple-2", designSystem.spacing.section.full)}>
        <div className={designSystem.layout.container}>
          <div className={cn(designSystem.layout.maxWidth["4xl"], designSystem.spacing.margin.horizontal.auto, designSystem.layout.textAlign.center)}>
            <span className={cn(designSystem.text.body.sm, designSystem.colors.text.accent, designSystem.fontWeight.semibold, "uppercase tracking-widest mb-4 block")}>
              Transform at Your Own Pace
            </span>
            <h1 className={cn(designSystem.text.h1, designSystem.colors.text.primary, designSystem.spacing.margin.bottom.md)}>
              Self-Paced Courses
            </h1>
            <p className={cn(designSystem.text.body.xl, designSystem.colors.text.secondary, "max-w-2xl mx-auto")}>
              Deep-dive transformative programs designed to meet you where you are and guide you to embodied wholeness.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Info */}
      <section className={cn(designSystem.colors.background.primary, "pt-12 pb-6")}>
        <div className={designSystem.layout.container}>
          <div className={cn(designSystem.layout.maxWidth["6xl"], designSystem.spacing.margin.horizontal.auto)}>
            <div className="flex items-center justify-between">
              <p className={cn(designSystem.text.body.lg, designSystem.colors.text.secondary)}>
                Showing <span className={designSystem.fontWeight.bold}>{courses.items.length}</span> courses
              </p>
              <div className={cn("flex items-center", designSystem.spacing.gap.sm, designSystem.colors.text.secondary)}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className={designSystem.text.body.sm}>All courses include lifetime access</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className={cn(designSystem.colors.background.primary, "pb-20")}>
        <div className={designSystem.layout.container}>
          <div className={cn(designSystem.layout.maxWidth["6xl"], designSystem.spacing.margin.horizontal.auto)}>
            <div className={cn("grid md:grid-cols-2 lg:grid-cols-3", designSystem.spacing.gap.xl)}>
              {courses.items.map((course, index) => (
                <Link
                  href={course.href}
                  key={index}
                  className={cn(
                    designSystem.cards.base,
                    designSystem.cards.hover,
                    "flex flex-col group overflow-hidden"
                  )}
                >
                  {/* Course Header */}
                  <div className={cn(designSystem.colors.background.secondary, designSystem.spacing.padding.xl, "relative")}>
                    <div className="flex items-start justify-between mb-4">
                      <span className={cn(designSystem.text.body.xs, designSystem.colors.text.accent, designSystem.fontWeight.semibold, "uppercase tracking-widest")}>
                        Self-Paced
                      </span>
                      <div className={cn(designSystem.text.h2, designSystem.colors.text.primary, designSystem.fontWeight.bold)}>
                        {course.price}
                      </div>
                    </div>

                    <h3 className={cn(designSystem.text.h3, designSystem.colors.text.primary, designSystem.fontWeight.bold, "group-hover:text-vision-lion transition-colors")}>
                      {course.title}
                    </h3>
                  </div>

                  {/* Course Body */}
                  <div className={cn(designSystem.spacing.padding.xl, "flex-grow flex flex-col")}>
                    <p className={cn(designSystem.text.body.lg, designSystem.colors.text.inverse.secondary, designSystem.spacing.margin.bottom.lg)}>
                      {course.description}
                    </p>

                    {/* Course Details */}
                    <div className={cn("space-y-3", designSystem.spacing.margin.bottom.lg)}>
                      <div className={cn("flex items-center", designSystem.spacing.gap.sm)}>
                        <svg className={cn("w-5 h-5", designSystem.colors.text.accent)} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className={cn(designSystem.text.body.md, designSystem.colors.text.inverse.secondary)}>
                          <span className={designSystem.fontWeight.semibold}>{course.duration}</span> program
                        </span>
                      </div>
                      <div className={cn("flex items-start", designSystem.spacing.gap.sm)}>
                        <svg className={cn("w-5 h-5 mt-0.5 flex-shrink-0", designSystem.colors.text.checkmark)} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className={cn(designSystem.text.body.md, designSystem.colors.text.inverse.secondary)}>
                          {course.includes}
                        </span>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className={cn("mt-auto pt-4 border-t-2", designSystem.colors.border.primary, "flex items-center justify-between")}>
                      <span className={cn(designSystem.text.body.lg, designSystem.colors.text.inverse.primary, designSystem.fontWeight.bold)}>
                        Learn More
                      </span>
                      <svg className={cn("w-6 h-6", designSystem.colors.text.inverse.primary, "group-hover:translate-x-1 transition-transform")} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={cn("bg-gradient-to-br from-vision-dark-purple via-vision-dark-purple-2 to-vision-dark-purple", designSystem.spacing.section.full)}>
        <div className={designSystem.layout.container}>
          <div className={cn(designSystem.layout.maxWidth["3xl"], designSystem.spacing.margin.horizontal.auto, designSystem.layout.textAlign.center)}>
            <h2 className={cn(designSystem.text.h2, designSystem.colors.text.primary, designSystem.spacing.margin.bottom.md)}>
              Not Sure Where to Start?
            </h2>
            <p className={cn(designSystem.text.body.xl, designSystem.colors.text.secondary, designSystem.spacing.margin.bottom.lg)}>
              Book a free discovery call to find the perfect course for your transformation journey.
            </p>
            <Link
              href="/booking"
              className={designSystem.buttons.primary}
            >
              Book Discovery Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
