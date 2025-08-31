import ServiceCard from '@/components/ServiceCard';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      title: 'Mind Games Reading',
      description: 'Unlock your subconscious patterns and transform limiting beliefs through guided exploration of your mental landscape.',
      price: '$15',
      duration: '60 minutes',
      href: '/services/mind-games-reading',
      icon: '🧠',
      featured: true,
    },
    {
      title: 'One-to-One Coaching',
      description: 'Personalized transformation journey with weekly sessions, continuous support, and customized action plans.',
      price: '$200',
      duration: '60 minutes',
      href: '/services/one-to-one',
      icon: '💜',
    },
    {
      title: 'Archetypal Tarot',
      description: 'Deep dive into your archetypal patterns using ancient wisdom and modern psychology for profound insights.',
      price: '$175',
      duration: '90 minutes',
      href: '/services/archetypal-tarot',
      icon: '🔮',
    },
  ];

  const process = [
    { step: '1', title: 'Choose Your Path', description: 'Select the service that resonates with your current needs' },
    { step: '2', title: 'Book Your Session', description: 'Schedule a time that works for you through our easy booking system' },
    { step: '3', title: 'Prepare & Connect', description: 'Receive preparation guidelines and join your transformative session' },
    { step: '4', title: 'Integrate & Transform', description: 'Apply insights with ongoing support and integration practices' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-50 to-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-purple-900 mb-6">
              Transformative Services
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Choose your path to embodied transformation. Each service is designed to meet you 
              exactly where you are and guide you to where you want to be.
            </p>
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full">
              <span className="text-lg">🎉</span>
              <span className="font-semibold">Special Offer: Mind Games Reading only $15!</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-900 text-center mb-12">
              Which Service Is Right For You?
            </h2>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-purple-900 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Feature</th>
                      <th className="px-6 py-4 text-center">Mind Games</th>
                      <th className="px-6 py-4 text-center">One-to-One</th>
                      <th className="px-6 py-4 text-center">Archetypal Tarot</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="px-6 py-4 font-medium">Best For</td>
                      <td className="px-6 py-4 text-center">Mental patterns</td>
                      <td className="px-6 py-4 text-center">Deep transformation</td>
                      <td className="px-6 py-4 text-center">Spiritual insights</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="px-6 py-4 font-medium">Duration</td>
                      <td className="px-6 py-4 text-center">60 minutes</td>
                      <td className="px-6 py-4 text-center">60 min/session</td>
                      <td className="px-6 py-4 text-center">90 minutes</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 font-medium">Format</td>
                      <td className="px-6 py-4 text-center">Single session</td>
                      <td className="px-6 py-4 text-center">Ongoing support</td>
                      <td className="px-6 py-4 text-center">Deep dive session</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="px-6 py-4 font-medium">Includes</td>
                      <td className="px-6 py-4 text-center">Guided exploration</td>
                      <td className="px-6 py-4 text-center">Action plans + support</td>
                      <td className="px-6 py-4 text-center">Reading + recording</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 font-medium">Investment</td>
                      <td className="px-6 py-4 text-center">
                        <span className="line-through text-gray-400">$150</span>
                        <span className="text-green-600 font-bold ml-2">$15</span>
                      </td>
                      <td className="px-6 py-4 text-center">$200/session</td>
                      <td className="px-6 py-4 text-center">$175</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-900 text-center mb-12">
              Your Transformation Journey
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-purple-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-purple-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full">
                      <div className="w-full h-0.5 bg-purple-200"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-900 text-center mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-purple-900 mb-2">
                  How do I know which service is right for me?
                </h3>
                <p className="text-gray-600">
                  If you're new to this work, I recommend starting with the Mind Games Reading 
                  (currently on special offer). For deeper, ongoing transformation, One-to-One 
                  Coaching is ideal. Archetypal Tarot is perfect for gaining spiritual insights 
                  and understanding your life patterns.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-purple-900 mb-2">
                  Are sessions conducted online or in-person?
                </h3>
                <p className="text-gray-600">
                  All sessions are available online via Zoom, making them accessible from anywhere 
                  in the world. This allows for maximum flexibility and comfort as you can join 
                  from your own sacred space.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-purple-900 mb-2">
                  What is your cancellation policy?
                </h3>
                <p className="text-gray-600">
                  Sessions can be rescheduled with 24 hours notice. Please note that we have a 
                  no-refund policy for completed sessions, as the energy and preparation begin 
                  the moment you book.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-purple-900 mb-2">
                  How do I prepare for my session?
                </h3>
                <p className="text-gray-600">
                  After booking, you"ll receive detailed preparation guidelines specific to your 
                  chosen service. Generally, I recommend finding a quiet space, having a journal 
                  ready, and coming with an open heart and mind.
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
              Ready to Transform?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Take the first step on your journey to embodied transformation. 
              Your future self is waiting.
            </p>
            <Link
              href="/booking"
              className="inline-block bg-purple-900 text-white px-8 py-4 rounded-lg hover:bg-purple-800 transition-colors font-medium text-lg"
            >
              Book Your Session Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}