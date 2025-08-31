import Link from 'next/link';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-purple-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-gray-600">
              Last updated: March 1, 2024
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-purple-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 mb-4">
                Welcome to Vision Embodiment. These Terms of Service ("Terms") govern your use of our website 
                and services. By accessing or using our services, you agree to be bound by these Terms.
              </p>
              <p className="text-gray-700">
                Vision Embodiment is operated as a PFA (Persoană Fizică Autorizată) registered in Romania. 
                These terms comply with both Romanian and EU regulations.
              </p>
            </section>

            {/* Services */}
            <section>
              <h2 className="text-2xl font-bold text-purple-900 mb-4">2. Services</h2>
              <p className="text-gray-700 mb-4">
                Vision Embodiment provides:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Spiritual coaching and guidance sessions</li>
                <li>Tarot and archetypal readings</li>
                <li>Mind Games readings</li>
                <li>Online workshops and events</li>
                <li>Educational content and resources</li>
              </ul>
              <p className="text-gray-700 mt-4">
                All services are provided for informational and personal development purposes only and 
                should not be considered as medical, psychological, or financial advice.
              </p>
            </section>

            {/* Booking and Payment */}
            <section>
              <h2 className="text-2xl font-bold text-purple-900 mb-4">3. Booking and Payment</h2>
              <p className="text-gray-700 mb-4">
                <strong>3.1 Booking Process:</strong> Sessions must be booked through our online booking 
                system. Bookings are confirmed only after payment is received.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>3.2 Payment:</strong> All prices are listed in USD. Payment must be made in full 
                at the time of booking. We accept major credit cards and PayPal.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>3.3 VAT:</strong> As a Romanian PFA, applicable VAT will be added to all services 
                for EU customers where required by law.
              </p>
            </section>

            {/* Cancellation Policy */}
            <section id="cancellation">
              <h2 className="text-2xl font-bold text-purple-900 mb-4">4. Cancellation and Refund Policy</h2>
              <p className="text-gray-700 mb-4">
                <strong>4.1 Client Cancellations:</strong>
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
                <li>24+ hours notice: Full refund or rescheduling available</li>
                <li>12-24 hours notice: 50% refund or rescheduling with credit</li>
                <li>Less than 12 hours notice: No refund, session is forfeited</li>
                <li>No-show: No refund, session is forfeited</li>
              </ul>
              
              <p className="text-gray-700 mb-4">
                <strong>4.2 Provider Cancellations:</strong> If we need to cancel your session, you will 
                receive a full refund or the option to reschedule at your convenience.
              </p>
              
              <p className="text-gray-700 mb-4">
                <strong>4.3 Technical Issues:</strong> If technical difficulties prevent the completion of 
                an online session, we will either complete the session at a rescheduled time or provide a 
                pro-rated refund.
              </p>
            </section>

            {/* Client Responsibilities */}
            <section>
              <h2 className="text-2xl font-bold text-purple-900 mb-4">5. Client Responsibilities</h2>
              <p className="text-gray-700 mb-4">
                As a client, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Provide accurate information during booking and sessions</li>
                <li>Arrive on time for scheduled sessions</li>
                <li>Maintain a respectful and professional demeanor</li>
                <li>Have necessary technology for online sessions (stable internet, camera, microphone)</li>
                <li>Not record sessions without explicit written permission</li>
                <li>Take responsibility for your own decisions and actions</li>
              </ul>
            </section>

            {/* Confidentiality */}
            <section>
              <h2 className="text-2xl font-bold text-purple-900 mb-4">6. Confidentiality</h2>
              <p className="text-gray-700 mb-4">
                All information shared during sessions is kept strictly confidential, with the following exceptions:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>When required by law or court order</li>
                <li>When there is imminent risk of harm to yourself or others</li>
                <li>When you provide written consent to share information</li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-bold text-purple-900 mb-4">7. Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                All content on this website, including text, images, logos, and materials provided during 
                sessions, is the property of Vision Embodiment and protected by copyright laws. You may not 
                reproduce, distribute, or create derivative works without written permission.
              </p>
            </section>

            {/* Disclaimer and Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-bold text-purple-900 mb-4">8. Disclaimer and Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                <strong>8.1 No Guarantees:</strong> We do not guarantee specific results from our services. 
                Individual experiences and outcomes vary.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>8.2 Not Medical Advice:</strong> Our services are not a substitute for professional 
                medical, psychological, legal, or financial advice. Always consult qualified professionals 
                for these matters.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>8.3 Limitation of Liability:</strong> To the maximum extent permitted by law, Vision 
                Embodiment shall not be liable for any indirect, incidental, special, or consequential damages 
                arising from the use of our services.
              </p>
            </section>

            {/* GDPR Compliance */}
            <section>
              <h2 className="text-2xl font-bold text-purple-900 mb-4">9. Data Protection (GDPR)</h2>
              <p className="text-gray-700 mb-4">
                We comply with the General Data Protection Regulation (GDPR). Your personal data is processed 
                lawfully, fairly, and transparently. For details on how we collect, use, and protect your 
                data, please refer to our{' '}
                <Link href="/privacy" className="text-purple-600 hover:underline">
                  Privacy Policy
                </Link>.
              </p>
            </section>

            {/* Dispute Resolution */}
            <section>
              <h2 className="text-2xl font-bold text-purple-900 mb-4">10. Dispute Resolution</h2>
              <p className="text-gray-700 mb-4">
                <strong>10.1 Governing Law:</strong> These Terms are governed by the laws of Romania and 
                the European Union.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>10.2 Resolution Process:</strong> Any disputes will first be addressed through good 
                faith negotiation. If unresolved, disputes will be submitted to mediation before pursuing 
                legal action.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>10.3 EU Dispute Resolution:</strong> EU consumers may use the European Commission's 
                Online Dispute Resolution platform at{' '}
                <a href="https://ec.europa.eu/consumers/odr" className="text-purple-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  https://ec.europa.eu/consumers/odr
                </a>
              </p>
            </section>

            {/* Modifications */}
            <section>
              <h2 className="text-2xl font-bold text-purple-900 mb-4">11. Modifications to Terms</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify these Terms at any time. Changes will be posted on this page 
                with an updated revision date. Continued use of our services after changes constitutes 
                acceptance of the modified Terms.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-purple-900 mb-4">12. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-purple-50 rounded-lg p-6">
                <p className="text-gray-700">
                  <strong>Vision Embodiment</strong><br />
                  Email: legal@visionembodiment.com<br />
                  Phone: +1 (555) 123-4567<br />
                  Business Registration: PFA Romania
                </p>
              </div>
            </section>

            {/* Acceptance */}
            <section className="border-t pt-8">
              <p className="text-gray-700 text-center italic">
                By using our services, you acknowledge that you have read, understood, and agree to be 
                bound by these Terms of Service.
              </p>
            </section>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-8">
            <Link
              href="/"
              className="text-purple-600 hover:underline font-medium"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}