import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import { designSystem, cn } from '@/lib/design-system';

export default function Home() {
  const services = [
    {
      title: 'Mind Games Reading',
      description: 'Unlock your subconscious patterns and transform limiting beliefs through guided exploration.',
      price: '$15',
      duration: '60 minutes',
      href: '/services/mind-games-reading',
      icon: '🧠',
    },
    {
      title: 'One-to-One Coaching',
      description: 'Personalized transformation journey with weekly sessions and continuous support.',
      price: '$200',
      duration: '60 minutes',
      href: '/services/one-to-one',
      icon: '💜',
    },
    {
      title: 'Archetypal Tarot',
      description: 'Deep dive into your archetypal patterns using ancient wisdom and modern psychology.',
      price: '$175',
      duration: '90 minutes',
      href: '/services/archetypal-tarot',
      icon: '🔮',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      service: 'One-to-One Coaching',
      content: "Working with Alina has been transformative. Her intuitive guidance helped me break through patterns I've struggled with for years.",
      rating: 5,
    },
    {
      name: 'Michael Chen',
      service: 'Archetypal Tarot',
      content: 'The archetypal reading was incredibly accurate and gave me profound insights into my life path. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Emma Thompson',
      service: 'Mind Games Reading',
      content: "Alina's unique approach helped me understand my subconscious blocks. I feel more aligned and empowered than ever.",
      rating: 5,
    },
  ];

  return (
    <>
      {/* Promotion Banner */}
      <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-3 px-4 text-center">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
          <span className="text-lg font-semibold">🎉 Limited Time Offer!</span>
          <span className="text-base sm:text-lg">Mind Games Reading - Only $15 (Regular $150)</span>
          <Link
            href="/services/mind-games-reading"
            className="inline-block bg-white text-yellow-600 px-4 py-1 rounded-full hover:bg-yellow-50 transition-colors font-semibold text-sm sm:text-base"
          >
            Book Now →
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className={cn("relative bg-gradient-to-b from-purple-50 to-white", designSystem.spacing.section.full)}>
        <div className={designSystem.sections.container}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className={cn(designSystem.text.heading1, "mb-6")}>
                Transform Your Vision Into Embodied Reality
              </h1>
              <p className={cn(designSystem.text.body, "!text-xl mb-8")}>
                Professional coaching and spiritual guidance to unlock your full potential 
                and create lasting transformation in your life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/booking"
                  className={cn(designSystem.buttons.primary, "text-lg")}
                >
                  Book Discovery Session
                </Link>
                <Link
                  href="/about"
                  className={cn(designSystem.buttons.secondary, "text-lg")}
                >
                  Learn More
                </Link>
              </div>
              {/* <div className="flex items-center gap-6 mt-8 text-sm text-gray-600">
                <span className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  1+ Clients Transformed
                </span>
                <span className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  5+ Years Experience
                </span>
              </div> */}
            </div>
            <div className="relative">
              <div className="bg-purple-200 rounded-full w-96 h-96 mx-auto opacity-20 absolute -top-10 -right-10"></div>
              <div className={cn(designSystem.cards.base, "p-8 text-center")}>
                <div className="w-32 h-32 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-6xl">✨</span>
                </div>
                <h3 className={cn(designSystem.text.heading3, "mb-2")}>Alina Rain</h3>
                <p className="text-purple-600 mb-4">Embodiment Coach & Spiritual Guide</p>
                <p className="text-gray-600">
                  Helping visionaries and seekers transform their dreams into embodied reality 
                  through ancient wisdom and modern coaching techniques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={cn("bg-white", designSystem.spacing.section.full)}>
        <div className={designSystem.sections.container}>
          <div className={cn("text-center", designSystem.spacing.margin.xl)}>
            <h2 className={cn(designSystem.text.heading2, designSystem.spacing.margin.sm)}>
              Transform Through Sacred Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the path that resonates with your soul's journey
            </p>
          </div>
          
          <div className={cn("grid md:grid-cols-3", designSystem.spacing.gap.lg)}>
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className={cn("bg-purple-50", designSystem.spacing.section.full)}>
        <div className={designSystem.sections.container}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={cn(designSystem.text.heading2, designSystem.spacing.margin.md)}>
                Meet Your Guide
              </h2>
              <p className={cn(designSystem.text.body, designSystem.spacing.margin.md)}>
                I'm Alina Rain, an embodiment coach and spiritual guide dedicated to helping 
                you bridge the gap between your vision and reality. With over a decade of 
                experience in transformational coaching, I combine ancient wisdom traditions 
                with modern psychological insights.
              </p>
              <p className={cn(designSystem.text.body, designSystem.spacing.margin.lg)}>
                My approach is rooted in the belief that true transformation happens when 
                we align our mind, body, and spirit. Through our work together, you'll 
                discover your authentic self and learn to embody your highest potential.
              </p>
              <Link
                href="/about"
                className={designSystem.buttons.primarySmall}
              >
                Read My Full Story
              </Link>
            </div>
            <div className={cn("grid grid-cols-2", designSystem.spacing.gap.sm)}>
              <div className="bg-white rounded-lg p-6 text-center shadow-md">
                <div className="text-3xl mb-2">🎓</div>
                <h4 className="font-semibold text-purple-900">Certified Coach</h4>
                <p className="text-sm text-gray-600">ICF Accredited</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-md">
                <div className="text-3xl mb-2">🌟</div>
                <h4 className="font-semibold text-purple-900">10+ Years</h4>
                <p className="text-sm text-gray-600">Experience</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-md">
                <div className="text-3xl mb-2">💜</div>
                <h4 className="font-semibold text-purple-900">500+ Clients</h4>
                <p className="text-sm text-gray-600">Transformed</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-md">
                <div className="text-3xl mb-2">🔮</div>
                <h4 className="font-semibold text-purple-900">Holistic Approach</h4>
                <p className="text-sm text-gray-600">Mind-Body-Spirit</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={cn("bg-white", designSystem.spacing.section.full)}>
        <div className={designSystem.sections.container}>
          <div className={cn("text-center", designSystem.spacing.margin.xl)}>
            <h2 className={cn(designSystem.text.heading2, designSystem.spacing.margin.sm)}>
              Client Transformations
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from real people who"ve transformed their lives
            </p>
          </div>
          
          <div className={cn("grid md:grid-cols-3", designSystem.spacing.gap.lg)}>
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
          
          <div className={cn("text-center mt-12")}>
            <Link
              href="/testimonials"
              className={designSystem.buttons.secondarySmall}
            >
              Read More Success Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className={cn("bg-gradient-to-b from-purple-900 to-purple-800 text-white", designSystem.spacing.section.full)}>
        <div className={designSystem.sections.container}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className={cn("text-4xl font-bold", designSystem.spacing.margin.sm)}>
              Join the Vision Embodiment Community
            </h2>
            <p className={cn("text-xl text-purple-100", designSystem.spacing.margin.lg)}>
              Receive weekly wisdom, transformation tips, and exclusive offers
            </p>
            
            <form className={cn("flex flex-col sm:flex-row max-w-md mx-auto", designSystem.spacing.gap.sm)}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
              <button
                type="submit"
                className={designSystem.buttons.cta}
              >
                Subscribe
              </button>
            </form>
            
            <p className="mt-4 text-sm text-purple-200">
              Join 1,000+ seekers. No spam, unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={cn("bg-white", designSystem.spacing.section.full)}>
        <div className={designSystem.sections.container}>
          <div className="bg-purple-50 rounded-2xl p-12 text-center">
            <h2 className={cn(designSystem.text.heading2, "mb-4")}>
              Ready to Begin Your Transformation?
            </h2>
            <p className={cn("text-xl text-gray-700 max-w-2xl mx-auto", designSystem.spacing.margin.lg)}>
              Take the first step towards embodying your vision. Book a complimentary 
              discovery session to explore how we can work together.
            </p>
            <Link
              href="/booking"
              className={cn(designSystem.buttons.primary, "text-lg")}
            >
              Book Your Free Discovery Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}