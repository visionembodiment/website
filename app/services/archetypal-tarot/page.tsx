import Link from 'next/link';

export default function ArchetypalTarotPage() {
  const archetypes = [
    {
      name: 'The Fool',
      meaning: 'New beginnings, innocence, spontaneity',
      description: 'Your journey of transformation and trust',
    },
    {
      name: 'The Magician',
      meaning: 'Manifestation, power, inspired action',
      description: 'Your ability to create your reality',
    },
    {
      name: 'The High Priestess',
      meaning: 'Intuition, sacred knowledge, divine feminine',
      description: 'Your inner wisdom and mysteries',
    },
    {
      name: 'The Empress',
      meaning: 'Abundance, nurturing, creativity',
      description: 'Your creative power and fertility',
    },
  ];

  const sessionIncludes = [
    '90-minute deep dive session via Zoom',
    'Personalized archetypal reading',
    'Integration of Jungian psychology',
    'Connection to your life patterns',
    'Recording of your session',
    'Follow-up integration guide',
    'Personalized ritual recommendations',
  ];

  const benefits = [
    'Understand your life patterns and cycles',
    'Connect with your archetypal wisdom',
    'Gain clarity on major life decisions',
    "Discover your soul's purpose",
    'Uncover hidden gifts and shadows',
    'Receive guidance from your higher self',
    'Transform challenges into opportunities',
    'Align with your authentic path',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-50 to-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-purple-900 mb-6">
              Archetypal Tarot Reading
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Journey into the depths of your psyche through the ancient wisdom of tarot 
              combined with Jungian archetypal psychology for profound self-discovery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/booking"
                className="bg-purple-900 text-white px-8 py-4 rounded-lg hover:bg-purple-800 transition-colors font-medium text-lg"
              >
                Book Your Reading - $175
              </Link>
              <Link
                href="#learn-more"
                className="border-2 border-purple-900 text-purple-900 px-8 py-4 rounded-lg hover:bg-purple-50 transition-colors font-medium text-lg"
              >
                Explore the Archetypes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Section */}
      <section id="learn-more" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-purple-900 mb-6">
                  More Than Just a Tarot Reading
                </h2>
                <div className="prose prose-lg text-gray-700 space-y-4">
                  <p>
                    Archetypal Tarot is a revolutionary approach that weaves together the 
                    mystical wisdom of tarot with the psychological depth of Carl Jung's 
                    archetypal theory. This isn't fortune-telling—it's soul-mapping.
                  </p>
                  <p>
                    Each card represents universal patterns and energies that live within 
                    your psyche. By exploring these archetypes, we unlock the stories, 
                    patterns, and potentials that shape your life experience.
                  </p>
                  <p>
                    In our 90-minute journey together, we'll use the cards as a mirror 
                    to reflect your inner landscape, revealing insights about your past, 
                    present, and potential futures.
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-purple-900 mb-6">
                  What You'll Discover
                </h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Archetypes Section */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-900 text-center mb-4">
              The Living Archetypes
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Meet some of the archetypal energies we'll explore in your reading
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {archetypes.map((archetype, index) => (
                <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-3">🌟</div>
                  <h3 className="font-bold text-purple-900 mb-2">{archetype.name}</h3>
                  <p className="text-sm text-purple-600 mb-2">{archetype.meaning}</p>
                  <p className="text-xs text-gray-600">{archetype.description}</p>
                </div>
              ))}
            </div>
            
            <p className="text-center mt-8 text-gray-600">
              And many more archetypes waiting to reveal themselves in your personal reading...
            </p>
          </div>
        </div>
      </section>

      {/* Session Details Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-900 text-center mb-12">
              Your Archetypal Journey
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-purple-900 mb-6">
                  The Session Flow
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-900 mb-1">Sacred Opening</h4>
                      <p className="text-gray-600 text-sm">We create a sacred container and connect with your intention</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-900 mb-1">Card Selection</h4>
                      <p className="text-gray-600 text-sm">You'll intuitively choose cards that reflect your energy</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-900 mb-1">Archetypal Exploration</h4>
                      <p className="text-gray-600 text-sm">We dive deep into the symbols, patterns, and messages</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-900 mb-1">Integration</h4>
                      <p className="text-gray-600 text-sm">Practical guidance for embodying the insights</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-purple-900 mb-6">
                  What's Included
                </h3>
                <ul className="space-y-3">
                  {sessionIncludes.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-900 text-center mb-12">
              Sacred Reflections
            </h2>
            
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-8 shadow-md">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">
                  "The archetypal reading with Alina was unlike any tarot experience I've had. 
                  She wove together the symbolism with such depth and psychological insight that 
                  I left with a completely new understanding of my life patterns. The recording 
                  has become a treasured resource I return to often."
                </p>
                <p className="font-semibold text-purple-900">- Jessica Palmer, Therapist</p>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-md">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">
                  "I was at a major crossroads in my life and the archetypal tarot reading 
                  provided exactly the clarity I needed. Alina's ability to connect the cards 
                  to my personal journey was remarkable. I made my decision with confidence."
                </p>
                <p className="font-semibold text-purple-900">- Robert Kim, Executive</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-purple-900 text-white rounded-2xl p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Investment in Your Soul's Journey
              </h2>
              
              <div className="text-5xl font-bold mb-2">$175</div>
              <p className="text-purple-200 mb-8">90-minute Archetypal Tarot Reading</p>
              
              <div className="bg-white/10 backdrop-blur rounded-lg p-6 mb-8 text-left">
                <h3 className="text-xl font-semibold mb-4">Your Investment Includes:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    90-minute deep dive session
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Recording of your reading
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Integration guide & rituals
                  </li>
                </ul>
              </div>
              
              <Link
                href="/booking"
                className="inline-block bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors font-bold text-lg"
              >
                Book Your Archetypal Reading
              </Link>
              
              <p className="mt-6 text-purple-200 text-sm">
                24-hour cancellation policy. No refunds for completed sessions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-900 text-center mb-12">
              Questions About Your Reading
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-purple-900 mb-2">
                  Do I need experience with tarot?
                </h3>
                <p className="text-gray-700">
                  No experience necessary! I"ll guide you through everything. The archetypes 
                  speak to everyone, regardless of your familiarity with tarot.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-purple-900 mb-2">
                  Is this fortune-telling or prediction?
                </h3>
                <p className="text-gray-700">
                  No, this is about understanding your current energies, patterns, and potentials. 
                  We explore possibilities, not fixed futures. You always have free will.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-purple-900 mb-2">
                  Can I ask about specific situations?
                </h3>
                <p className="text-gray-700">
                  Absolutely! You can bring specific questions about relationships, career, 
                  life purpose, or any area where you seek clarity and guidance.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-purple-900 mb-2">
                  How often should I get a reading?
                </h3>
                <p className="text-gray-700">
                  Most clients find value in quarterly readings to align with seasonal cycles, 
                  or during major life transitions. Trust your intuition on timing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-purple-900 mb-6">
              The Cards Are Calling You
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Your archetypes are ready to reveal their wisdom. Book your journey into 
              the depths of your psyche and emerge with clarity, purpose, and power.
            </p>
            <Link
              href="/booking"
              className="inline-block bg-purple-900 text-white px-8 py-4 rounded-lg hover:bg-purple-800 transition-colors font-medium text-lg"
            >
              Book Your Archetypal Tarot Reading
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}