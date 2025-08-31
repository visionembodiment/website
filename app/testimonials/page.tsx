'use client';

import { useState } from 'react';
import TestimonialCard from '@/components/TestimonialCard';

export default function TestimonialsPage() {
  const [filter, setFilter] = useState('all');

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      service: 'One-to-One Coaching',
      category: 'coaching',
      content: "Working with Alina has been transformative. Her intuitive guidance helped me break through patterns I've struggled with for years. I finally feel aligned with my true purpose.",
      rating: 5,
      date: '2024-03',
      transformation: 'From corporate burnout to launching my dream business',
    },
    {
      id: 2,
      name: 'Michael Chen',
      service: 'Archetypal Tarot',
      category: 'tarot',
      content: "The archetypal reading was incredibly accurate and gave me profound insights into my life path. Alina's wisdom and guidance continue to inspire me months later.",
      rating: 5,
      date: '2024-02',
      transformation: 'Gained clarity on major life decision',
    },
    {
      id: 3,
      name: 'Emma Thompson',
      service: 'Mind Games Reading',
      category: 'mindgames',
      content: "Alina's unique approach helped me understand my subconscious blocks. I feel more aligned and empowered than ever. This session was a game-changer!",
      rating: 5,
      date: '2024-01',
      transformation: 'Overcame limiting beliefs about success',
    },
    {
      id: 4,
      name: 'David Martinez',
      service: 'One-to-One Coaching',
      category: 'coaching',
      content: "The 12-week transformation program exceeded all my expectations. Alina's support and wisdom helped me navigate a complete life transition with grace and confidence.",
      rating: 5,
      date: '2023-12',
      transformation: 'Career pivot and relationship healing',
    },
    {
      id: 5,
      name: 'Lisa Chen',
      service: 'Mind Games Reading',
      category: 'mindgames',
      content: "I was skeptical at first, but the Mind Games Reading blew me away. Alina saw patterns I couldn't see myself and gave me tools to transform them.",
      rating: 5,
      date: '2023-11',
      transformation: 'Released 20+ years of self-sabotage patterns',
    },
    {
      id: 6,
      name: 'Robert Kim',
      service: 'Archetypal Tarot',
      category: 'tarot',
      content: 'The depth of insight Alina brought to my reading was extraordinary. She connected the archetypes to my life in ways that still give me chills.',
      rating: 5,
      date: '2023-10',
      transformation: "Found my soul's purpose",
    },
    {
      id: 7,
      name: 'Jessica Palmer',
      service: 'One-to-One Coaching',
      category: 'coaching',
      content: "Alina is more than a coach - she's a guide, a mirror, and a catalyst for transformation. Our work together has changed every aspect of my life for the better.",
      rating: 5,
      date: '2023-09',
      transformation: 'Healed childhood trauma and found self-love',
    },
    {
      id: 8,
      name: 'Alexandra Foster',
      service: 'Archetypal Tarot',
      category: 'tarot',
      content: "The archetypal tarot reading provided exactly the guidance I needed during a difficult transition. Alina's intuitive gifts are remarkable.",
      rating: 5,
      date: '2023-08',
      transformation: 'Navigated divorce with clarity and strength',
    },
    {
      id: 9,
      name: 'Thomas Wright',
      service: 'Mind Games Reading',
      category: 'mindgames',
      content: 'This session helped me understand why I kept repeating the same patterns. Now I have the awareness and tools to create different outcomes.',
      rating: 5,
      date: '2023-07',
      transformation: 'Broke free from addiction patterns',
    },
  ];

  const categories = [
    { value: 'all', label: 'All Testimonials' },
    { value: 'coaching', label: 'One-to-One Coaching' },
    { value: 'mindgames', label: 'Mind Games Reading' },
    { value: 'tarot', label: 'Archetypal Tarot' },
  ];

  const filteredTestimonials = filter === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === filter);

  const stats = {
    totalClients: '500+',
    averageRating: '5.0',
    yearsExperience: '10+',
    transformations: '98%',
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-50 to-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-purple-900 mb-6">
              Transformations & Testimonials
            </h1>
            <p className="text-xl text-gray-700">
              Real stories from real people who've transformed their lives through our work together
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-purple-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold">{stats.totalClients}</div>
              <p className="text-purple-200">Happy Clients</p>
            </div>
            <div>
              <div className="text-4xl font-bold">{stats.averageRating}</div>
              <p className="text-purple-200">Average Rating</p>
            </div>
            <div>
              <div className="text-4xl font-bold">{stats.yearsExperience}</div>
              <p className="text-purple-200">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold">{stats.transformations}</div>
              <p className="text-purple-200">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setFilter(category.value)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  filter === category.value
                    ? 'bg-purple-900 text-white'
                    : 'bg-purple-100 text-purple-900 hover:bg-purple-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="flex flex-col">
                <TestimonialCard
                  name={testimonial.name}
                  service={testimonial.service}
                  content={testimonial.content}
                  rating={testimonial.rating}
                />
                {testimonial.transformation && (
                  <div className="mt-4 p-4 bg-purple-50 rounded-lg">
                    <p className="text-sm font-semibold text-purple-900 mb-1">Transformation:</p>
                    <p className="text-sm text-gray-700">{testimonial.transformation}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-purple-900 mb-8">
              Video Testimonials
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="aspect-video bg-purple-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎥</div>
                  <p className="text-purple-900 font-semibold">Video testimonials coming soon!</p>
                  <p className="text-gray-600 mt-2">Real clients sharing their transformation stories</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-900 text-center mb-12">
              Detailed Success Stories
            </h2>
            
            <div className="space-y-12">
              <div className="bg-purple-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-purple-900 mb-4">
                  From Burnout to Breakthrough
                </h3>
                <p className="text-gray-700 mb-4">
                  <span className="font-semibold">Sarah's Story:</span> After 15 years in corporate finance, 
                  I was completely burned out. I knew I needed a change but felt paralyzed by fear and uncertainty. 
                  Through 12 weeks of coaching with Alina, I not only found the courage to leave my job but also 
                  discovered my true calling as a wellness entrepreneur.
                </p>
                <p className="text-gray-700 mb-4">
                  Alina helped me see that my "failures" were actually redirections toward my purpose. 
                  Her unique blend of practical coaching and spiritual insight gave me both the strategy 
                  and the confidence to make this massive life change.
                </p>
                <p className="text-gray-700">
                  Today, I run a successful wellness business that aligns with my values and allows me 
                  to help others. The transformation wasn't just career-related—it touched every aspect 
                  of my life, from my relationships to my health to my sense of self-worth.
                </p>
              </div>

              <div className="bg-purple-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-purple-900 mb-4">
                  Finding Purpose Through the Archetypes
                </h3>
                <p className="text-gray-700 mb-4">
                  <span className="font-semibold">Robert's Journey:</span> I came to Alina during what felt 
                  like a midlife crisis. At 45, I had achieved everything I thought I wanted—successful career, 
                  beautiful home, loving family—yet I felt empty and lost.
                </p>
                <p className="text-gray-700 mb-4">
                  The Archetypal Tarot reading revealed patterns I had been unconsciously living out my entire life. 
                  Alina helped me see how I had been living my father's dreams rather than my own. The cards 
                  didn't predict my future; they revealed my authentic self.
                </p>
                <p className="text-gray-700">
                  Six months later, I've made changes I never thought possible. I've reconnected with my 
                  creative passions, strengthened my relationships, and found a sense of purpose that had 
                  been missing for decades. The recording of our session remains a treasured guide I return to often.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-purple-900 mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Join hundreds of others who"ve transformed their lives. 
              Your breakthrough is waiting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/booking"
                className="bg-purple-900 text-white px-8 py-4 rounded-lg hover:bg-purple-800 transition-colors font-medium text-lg"
              >
                Start Your Transformation
              </a>
              <a
                href="/services"
                className="border-2 border-purple-900 text-purple-900 px-8 py-4 rounded-lg hover:bg-purple-50 transition-colors font-medium text-lg"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}