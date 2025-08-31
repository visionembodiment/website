import Link from 'next/link';

export default function OneToOneCoachingPage() {
  const packages = [
    {
      name: 'Single Session',
      price: '$200',
      duration: '60 minutes',
      features: [
        'Deep-dive coaching session',
        'Personalized action plan',
        'Follow-up email summary',
        '7-day email support',
      ],
      cta: 'Book Single Session',
      popular: false,
    },
    {
      name: '4-Session Journey',
      price: '$750',
      savings: 'Save $50',
      duration: '4 weeks',
      features: [
        'Weekly 60-minute sessions',
        'Customized transformation plan',
        'Between-session email support',
        'Integration practices',
        'Progress tracking',
      ],
      cta: 'Start Your Journey',
      popular: true,
    },
    {
      name: '12-Week Transformation',
      price: '$2,100',
      savings: 'Save $300',
      duration: '3 months',
      features: [
        'Weekly 60-minute sessions',
        'Comprehensive life audit',
        'Unlimited email support',
        'Voice message check-ins',
        'Custom resources & tools',
        'Lifetime access to materials',
      ],
      cta: 'Begin Transformation',
      popular: false,
    },
  ];

  const processSteps = [
    {
      title: 'Discovery',
      description: 'We explore your current reality, dreams, and the gap between them.',
    },
    {
      title: 'Clarity',
      description: 'Uncover your authentic desires and create a clear vision for your future.',
    },
    {
      title: 'Strategy',
      description: 'Develop a personalized roadmap with actionable steps and milestones.',
    },
    {
      title: 'Implementation',
      description: 'Take aligned action with ongoing support and accountability.',
    },
    {
      title: 'Integration',
      description: 'Embody your transformation and create lasting change.',
    },
  ];

  const benefits = [
    'Break free from limiting patterns and beliefs',
    'Gain crystal clarity on your life purpose',
    'Develop unshakeable self-confidence',
    'Create aligned relationships',
    'Manifest your dreams into reality',
    'Access your inner wisdom and intuition',
    'Transform fear into fuel for growth',
    'Build sustainable success habits',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-50 to-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-purple-900 mb-6">
              One-to-One Coaching
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Your personalized journey to profound transformation. Work directly with me 
              to bridge the gap between where you are and where you're meant to be.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/booking"
                className="bg-purple-900 text-white px-8 py-4 rounded-lg hover:bg-purple-800 transition-colors font-medium text-lg"
              >
                Book Discovery Call
              </Link>
              <Link
                href="#packages"
                className="border-2 border-purple-900 text-purple-900 px-8 py-4 rounded-lg hover:bg-purple-50 transition-colors font-medium text-lg"
              >
                View Packages
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-purple-900 mb-6">
                  Transform Your Life From the Inside Out
                </h2>
                <div className="prose prose-lg text-gray-700 space-y-4">
                  <p>
                    One-to-One Coaching is more than just coaching—it's a sacred container 
                    for your transformation. Together, we'll dive deep into the patterns, 
                    beliefs, and stories that have been running your life unconsciously.
                  </p>
                  <p>
                    This is for you if you're ready to stop playing small, break free from 
                    cycles of self-sabotage, and step into the fullest expression of who 
                    you came here to be.
                  </p>
                  <p>
                    Through our work together, you'll not only achieve your goals but 
                    fundamentally transform how you relate to yourself, others, and life 
                    itself.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-purple-900 mb-6">
                  What You'll Experience
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
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-900 text-center mb-12">
              Your Transformation Journey
            </h2>
            
            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-900 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div>
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

      {/* Packages Section */}
      <section id="packages" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-900 text-center mb-4">
              Choose Your Transformation Package
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Each package is designed to meet you exactly where you are
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                    pkg.popular ? 'ring-2 ring-purple-500 transform scale-105' : ''
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute top-0 right-0 bg-purple-500 text-white px-3 py-1 text-sm font-medium rounded-bl-lg">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-purple-900 mb-2">{pkg.name}</h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-purple-900">{pkg.price}</span>
                      {pkg.savings && (
                        <span className="ml-2 text-green-600 text-sm font-medium">{pkg.savings}</span>
                      )}
                    </div>
                    <p className="text-gray-600 mb-6">{pkg.duration}</p>
                    
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link
                      href="/booking"
                      className={`block w-full text-center py-3 rounded-lg transition-colors font-medium ${
                        pkg.popular
                          ? 'bg-purple-900 text-white hover:bg-purple-800'
                          : 'bg-purple-100 text-purple-900 hover:bg-purple-200'
                      }`}
                    >
                      {pkg.cta}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-900 text-center mb-12">
              Success Stories
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
                <p className="text-gray-700 italic mb-4 text-lg">
                  "Working with Alina changed my life in ways I never imagined possible. 
                  Through our 12-week journey, I not only achieved my career goals but 
                  completely transformed my relationship with myself. Her intuitive guidance 
                  and practical tools helped me break through years of limiting beliefs."
                </p>
                <p className="font-semibold text-purple-900">- Sarah Mitchell, Entrepreneur</p>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-md">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4 text-lg">
                  "I came to Alina feeling stuck and confused about my life direction. 
                  Through our coaching sessions, I discovered my true purpose and the 
                  courage to pursue it. The transformation has been profound and lasting."
                </p>
                <p className="font-semibold text-purple-900">- Michael Chen, Creative Director</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-900 text-center mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div className="border-b pb-6">
                <h3 className="font-semibold text-purple-900 mb-2">
                  How do I know if coaching is right for me?
                </h3>
                <p className="text-gray-700">
                  Coaching is ideal if you're ready for change, willing to take responsibility 
                  for your life, and committed to doing the inner work. If you feel stuck, 
                  unfulfilled, or know you're meant for more, coaching can help you bridge 
                  that gap.
                </p>
              </div>
              
              <div className="border-b pb-6">
                <h3 className="font-semibold text-purple-900 mb-2">
                  What's the difference between the packages?
                </h3>
                <p className="text-gray-700">
                  Single sessions are great for specific challenges or breakthroughs. The 
                  4-session journey allows for deeper exploration and habit formation. The 
                  12-week transformation provides comprehensive support for major life changes 
                  and complete paradigm shifts.
                </p>
              </div>
              
              <div className="border-b pb-6">
                <h3 className="font-semibold text-purple-900 mb-2">
                  What happens between sessions?
                </h3>
                <p className="text-gray-700">
                  You'll receive personalized practices, integration exercises, and email 
                  support to help you implement insights from our sessions. The real 
                  transformation happens in your daily life between our calls.
                </p>
              </div>
              
              <div className="border-b pb-6">
                <h3 className="font-semibold text-purple-900 mb-2">
                  Can I upgrade my package later?
                </h3>
                <p className="text-gray-700">
                  Yes! Many clients start with a single session or 4-session package and 
                  then upgrade to longer-term support. You can apply the value of your 
                  current package toward an upgrade within 30 days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-purple-900 to-purple-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Your Transformation Starts With a Single Decision
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Stop waiting for the perfect moment. The time is now. Your future self 
              is calling you forward into the life you"re meant to live.
            </p>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-4">Free Discovery Call</h3>
              <p className="text-purple-100 mb-6">
                Not sure which package is right for you? Book a complimentary 30-minute 
                discovery call to explore how we can work together.
              </p>
              <Link
                href="/booking"
                className="inline-block bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors font-bold text-lg"
              >
                Book Your Free Discovery Call
              </Link>
            </div>
            
            <p className="text-purple-200 text-sm">
              Note: Spaces are limited. 24-hour cancellation policy applies.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}