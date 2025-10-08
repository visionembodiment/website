'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Community() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setIsSubscribed(true);
    // You would integrate with ConvertKit, EmailOctopus, or your preferred service here
  };

  const resources = [
    {
      title: 'Free Meditation Guide',
      description: 'A 10-minute daily practice to connect with your inner wisdom',
      type: 'PDF Guide',
      icon: '🧘‍♀️',
    },
    {
      title: 'Vision Board Template',
      description: 'Create a powerful visual representation of your dreams',
      type: 'Digital Template',
      icon: '🎨',
    },
    {
      title: 'Weekly Wisdom Newsletter',
      description: 'Transformational insights delivered to your inbox',
      type: 'Email Series',
      icon: '📧',
    },
    {
      title: 'Community Circle',
      description: 'Join our monthly online gatherings for support and connection',
      type: 'Live Events',
      icon: '🤝',
    },
  ];

  const upcomingEvents = [
    {
      date: 'March 15, 2024',
      time: '7:00 PM EST',
      title: 'Full Moon Manifestation Circle',
      description: 'Harness the power of the full moon to manifest your desires',
      spots: 15,
    },
    {
      date: 'March 22, 2024',
      time: '6:00 PM EST',
      title: 'Spring Equinox Celebration',
      description: 'Welcome new beginnings with intention setting and ritual',
      spots: 20,
    },
    {
      date: 'March 29, 2024',
      time: '7:30 PM EST',
      title: 'Archetypal Journey Workshop',
      description: 'Explore your inner archetypes through guided meditation',
      spots: 10,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-purple-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Join the Vision Embodiment Community
            </h1>
            <p className="text-xl text-purple-100 mb-8">
              Connect with like-minded souls on a journey of transformation, growth, and embodied wisdom
            </p>
            
            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-yellow-600 text-white px-8 py-3 rounded-lg hover:bg-yellow-700 transition-colors font-medium"
                  >
                    Join Community
                  </button>
                </div>
                <p className="mt-4 text-sm text-purple-200">
                  Join 1,000+ members. Free forever. Unsubscribe anytime.
                </p>
              </form>
            ) : (
              <div className="bg-green-600 bg-opacity-20 border border-green-400 rounded-lg p-6 max-w-md mx-auto">
                <p className="text-lg font-semibold mb-2">Welcome to the community!</p>
                <p className="text-purple-100">
                  Check your email for a confirmation link and your welcome gifts.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Free Resources */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-purple-900 mb-4">
              Free Resources for Your Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access powerful tools and guidance to support your transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource) => (
              <div key={resource.title} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{resource.icon}</div>
                <h3 className="font-bold text-lg text-purple-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{resource.description}</p>
                <span className="inline-block bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full">
                  {resource.type}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">
              Subscribe to our newsletter to unlock all free resources
            </p>
          </div>
        </div>
      </section>

      {/* Community Events */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-purple-900 mb-4">
              Upcoming Community Events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our live online gatherings for connection, healing, and transformation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {upcomingEvents.map((event) => (
              <div key={event.title} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-purple-900 text-white p-4">
                  <p className="font-semibold">{event.date}</p>
                  <p className="text-sm text-purple-200">{event.time}</p>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-purple-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{event.spots} spots left</span>
                    <button className="bg-purple-900 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition-colors text-sm font-medium">
                      Reserve Spot
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/booking"
              className="inline-block border-2 border-purple-900 text-purple-900 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors font-medium"
            >
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Community Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-purple-900 mb-6">
                  Why Join Our Community?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Weekly Wisdom</h3>
                      <p className="text-gray-600">Receive transformational insights and practices every week</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Exclusive Resources</h3>
                      <p className="text-gray-600">Access meditation guides, templates, and tools</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Live Events</h3>
                      <p className="text-gray-600">Join monthly circles and workshops online</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Special Offers</h3>
                      <p className="text-gray-600">Early access and discounts on services and programs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Sacred Connection</h3>
                      <p className="text-gray-600">Connect with like-minded souls on the path</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-100 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-purple-900 mb-4">
                  What Members Are Saying
                </h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-gray-600 italic mb-2">
                      &ldquo;The weekly emails are like a gentle reminder to stay connected to my highest self.&rdquo;
                    </p>
                    <p className="text-sm font-semibold text-purple-900">- Jessica M.</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-gray-600 italic mb-2">
                      &ldquo;The community events have been transformational. I&apos;ve made deep connections!&rdquo;
                    </p>
                    <p className="text-sm font-semibold text-purple-900">- David L.</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-gray-600 italic mb-2">
                      &ldquo;The free resources alone are worth joining. So much valuable content!&rdquo;
                    </p>
                    <p className="text-sm font-semibold text-purple-900">- Maria K.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup CTA */}
      <section className="py-20 bg-gradient-to-b from-purple-900 to-purple-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Transform Your Life?
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Join our community and receive weekly wisdom, free resources, and exclusive offers
            </p>
            
            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-yellow-600 text-white px-8 py-3 rounded-lg hover:bg-yellow-700 transition-colors font-medium"
                >
                  Subscribe
                </button>
              </form>
            ) : (
              <div className="bg-green-600 bg-opacity-20 border border-green-400 rounded-lg p-6 max-w-md mx-auto">
                <p className="text-lg font-semibold">You&apos;re all set!</p>
                <p className="text-purple-100 mt-2">
                  Welcome to the Vision Embodiment community.
                </p>
              </div>
            )}
            
            <p className="mt-6 text-sm text-purple-200">
              We respect your privacy. Read our{' '}
              <Link href="/privacy" className="underline hover:text-white">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}