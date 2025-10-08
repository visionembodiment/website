import Link from 'next/link';

export default function MindGamesReadingPage() {
  const benefits = [
    'Identify and release limiting beliefs',
    'Understand your subconscious patterns',
    'Gain clarity on mental blocks',
    'Transform negative thought loops',
    'Activate your inner wisdom',
    'Create new neural pathways',
  ];

  const process = [
    {
      title: 'Opening & Grounding',
      description: 'We begin with a centering practice to create a safe container for exploration.',
    },
    {
      title: 'Pattern Identification',
      description: 'Through guided questioning, we uncover the mental patterns running your life.',
    },
    {
      title: 'Deep Dive Exploration',
      description: 'We explore the root causes and hidden beliefs behind these patterns.',
    },
    {
      title: 'Transformation & Integration',
      description: "You'll receive tools and practices to transform these patterns into empowering beliefs.",
    },
  ];

  const testimonials = [
    {
      name: 'Emma Thompson',
      content: "The Mind Games Reading helped me see patterns I've been blind to for years. Alina's approach is both gentle and profoundly transformative.",
    },
    {
      name: 'David Martinez',
      content: 'I was skeptical at first, but this session completely shifted my perspective. Worth every penny!',
    },
    {
      name: 'Lisa Chen',
      content: 'Alina has an incredible gift for seeing through the mental fog and guiding you to clarity.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-50 to-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full mb-6">
              <span className="text-lg">🎉</span>
              <span className="font-semibold">Limited Time: 90% OFF - Only $15!</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-purple-900 mb-6">
              Mind Games Reading
            </h1>
            
            <p className="text-xl text-gray-700 mb-8">
              Unlock the hidden patterns of your mind and transform limiting beliefs 
              into empowering truths through this powerful guided exploration.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/booking"
                className="bg-purple-900 text-white px-8 py-4 rounded-lg hover:bg-purple-800 transition-colors font-medium text-lg"
              >
                Book Now - Only $15
              </Link>
              <Link
                href="#learn-more"
                className="border-2 border-purple-900 text-purple-900 px-8 py-4 rounded-lg hover:bg-purple-50 transition-colors font-medium text-lg"
              >
                Learn More
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
                  What Is a Mind Games Reading?
                </h2>
                <div className="prose prose-lg text-gray-700 space-y-4">
                  <p>
                    Your mind is playing games with you—but not in the way you might think.
                    These &ldquo;games&rdquo; are the unconscious patterns, beliefs, and stories that
                    shape your reality without your awareness.
                  </p>
                  <p>
                    A Mind Games Reading is a revolutionary approach that combines coaching 
                    psychology, neuroscience insights, and intuitive guidance to help you 
                    see through the illusions your mind creates.
                  </p>
                  <p>
                    In this 60-minute transformative session, we&apos;ll dive deep into your
                    mental landscape, identify the games being played, and give you the
                    tools to rewrite the rules in your favor.
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-purple-900 mb-6">
                  Session Benefits
                </h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
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

      {/* Process Section */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-900 text-center mb-12">
              The Session Process
            </h2>
            
            <div className="space-y-8">
              {process.map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-900 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-purple-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-900 text-center mb-12">
              Client Experiences
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-purple-50 rounded-lg p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-4">&ldquo;{testimonial.content}&rdquo;</p>
                  <p className="font-semibold text-purple-900">- {testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-b from-purple-900 to-purple-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              Special Limited-Time Offer
            </h2>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 mb-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-3xl line-through opacity-50">$150</span>
                <span className="text-5xl font-bold">$15</span>
              </div>
              <p className="text-xl mb-2">90% OFF - Save $135!</p>
              <p className="text-purple-100">
                This special rate is available for a limited time only. 
                Regular price returns soon.
              </p>
            </div>
            
            <div className="space-y-4 mb-8">
              <p className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                60-minute transformative session
              </p>
              <p className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Personalized insights and tools
              </p>
              <p className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Follow-up integration guide
              </p>
            </div>
            
            <Link
              href="/booking"
              className="inline-block bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors font-bold text-lg"
            >
              Claim Your $15 Session Now
            </Link>
            
            <p className="mt-6 text-purple-200 text-sm">
              Note: 24-hour cancellation policy applies. No refunds for completed sessions.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-900 text-center mb-12">
              Common Questions
            </h2>
            
            <div className="space-y-6">
              <div className="border-b pb-6">
                <h3 className="font-semibold text-purple-900 mb-2">
                  Is this the same as therapy?
                </h3>
                <p className="text-gray-700">
                  No, Mind Games Reading is a coaching and guidance session focused on
                  pattern recognition and transformation. It&apos;s not a replacement for therapy
                  but can complement therapeutic work beautifully.
                </p>
              </div>
              
              <div className="border-b pb-6">
                <h3 className="font-semibold text-purple-900 mb-2">
                  How should I prepare?
                </h3>
                <p className="text-gray-700">
                  Come with an open mind and perhaps a specific area of life where you 
                  feel stuck or confused. Have a journal ready to capture insights.
                </p>
              </div>
              
              <div className="border-b pb-6">
                <h3 className="font-semibold text-purple-900 mb-2">
                  What happens after the session?
                </h3>
                <p className="text-gray-700">
                  You&apos;ll receive a follow-up email with key insights from our session
                  and integration practices to help you continue the transformation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-purple-900 mb-6">
              Ready to See Through the Games?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Your mind has been running the show long enough.
              It&apos;s time to take back control and create the reality you desire.
            </p>
            <Link
              href="/booking"
              className="inline-block bg-purple-900 text-white px-8 py-4 rounded-lg hover:bg-purple-800 transition-colors font-medium text-lg"
            >
              Book Your Mind Games Reading - $15
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}