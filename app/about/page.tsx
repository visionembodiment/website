import Link from 'next/link';

export default function AboutPage() {
  const credentials = [
    { icon: '🎓', title: 'ICF Certified Coach', description: 'International Coach Federation Accredited' },
    { icon: '🧘', title: 'Embodiment Practitioner', description: 'Certified in Somatic Experiencing' },
    { icon: '🔮', title: 'Tarot Master', description: '15+ years of archetypal study' },
    { icon: '💜', title: 'Energy Healer', description: 'Reiki Master Teacher' },
  ];

  const journey = [
    { year: '2010', event: 'Started my spiritual awakening journey' },
    { year: '2013', event: 'Completed first coaching certification' },
    { year: '2015', event: 'Launched Vision Embodiment practice' },
    { year: '2018', event: 'Published "Embodied Transformation" methodology' },
    { year: '2020', event: 'Expanded to international online coaching' },
    { year: '2024', event: 'Reached 500+ transformed clients milestone' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-50 to-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-purple-900 mb-6">
              Meet Alina Rain
            </h1>
            <p className="text-xl text-gray-700">
              Embodiment Coach, Spiritual Guide, and Transformation Catalyst
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {/* Left Column - Story */}
            <div>
              <h2 className="text-3xl font-bold text-purple-900 mb-6">My Journey</h2>
              
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  Welcome, beautiful soul. I&apos;m Alina Rain, and I&apos;m honored that you&apos;re here.
                  My path to becoming an embodiment coach wasn&apos;t linear—it was a spiral journey
                  of awakening, healing, and profound transformation.
                </p>
                
                <p>
                  Like many of you, I spent years feeling disconnected from my true self, 
                  caught in patterns that no longer served me, and yearning for something more 
                  meaningful. My awakening began in 2010 when a personal crisis became my 
                  greatest catalyst for change.
                </p>
                
                <p>
                  Through years of deep inner work, studying with master teachers, and 
                  integrating ancient wisdom with modern psychology, I discovered the power 
                  of embodiment—the practice of fully inhabiting our bodies, emotions, and 
                  authentic selves.
                </p>
                
                <p>
                  Today, I combine my extensive training in coaching, somatic practices, 
                  energy healing, and archetypal psychology to guide others on their 
                  transformation journey. My approach is intuitive yet grounded, spiritual 
                  yet practical, always honoring both the mystical and the mundane.
                </p>
                
                <p>
                  I believe that true transformation happens when we bridge the gap between
                  vision and embodiment—when we don&apos;t just dream of change but become it.
                  This is the sacred work I&apos;m here to facilitate with you.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold text-purple-900 mb-4">My Philosophy</h3>
                <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-600">
                  <p className="text-gray-700 italic">
                    &ldquo;Transformation isn&apos;t about becoming someone new—it&apos;s about remembering
                    who you&apos;ve always been beneath the layers of conditioning. It&apos;s about
                    coming home to yourself, fully and unapologetically.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Credentials & Timeline */}
            <div>
              <h2 className="text-3xl font-bold text-purple-900 mb-6">Credentials & Training</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                {credentials.map((cred, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-3xl mb-2">{cred.icon}</div>
                    <h4 className="font-semibold text-purple-900">{cred.title}</h4>
                    <p className="text-sm text-gray-600">{cred.description}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-purple-900 mb-6">My Timeline</h3>
              
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-purple-200"></div>
                {journey.map((item, index) => (
                  <div key={index} className="relative flex items-start mb-6">
                    <div className="absolute left-8 w-4 h-4 bg-purple-600 rounded-full -translate-x-1/2"></div>
                    <div className="ml-16">
                      <span className="text-purple-600 font-semibold">{item.year}</span>
                      <p className="text-gray-700">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-900 text-center mb-12">
              What I Stand For
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🌟</span>
                </div>
                <h3 className="font-semibold text-purple-900 mb-2">Authenticity</h3>
                <p className="text-gray-600">
                  Living in alignment with your true self, free from masks and pretense.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💖</span>
                </div>
                <h3 className="font-semibold text-purple-900 mb-2">Compassion</h3>
                <p className="text-gray-600">
                  Holding space with love and non-judgment for all aspects of your journey.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🔥</span>
                </div>
                <h3 className="font-semibold text-purple-900 mb-2">Transformation</h3>
                <p className="text-gray-600">
                  Embracing change as the pathway to your highest potential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-purple-900">500+</div>
                <p className="text-gray-600">Clients Transformed</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-900">10+</div>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-900">5000+</div>
                <p className="text-gray-600">Coaching Hours</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-900">98%</div>
                <p className="text-gray-600">Client Satisfaction</p>
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
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Let&apos;s explore how we can work together to transform your vision into embodied reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/booking"
                className="bg-purple-900 text-white px-8 py-4 rounded-lg hover:bg-purple-800 transition-colors font-medium text-lg"
              >
                Book Discovery Session
              </Link>
              <Link
                href="/services"
                className="border-2 border-purple-900 text-purple-900 px-8 py-4 rounded-lg hover:bg-purple-50 transition-colors font-medium text-lg"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}