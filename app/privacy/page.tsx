import Link from 'next/link';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-purple-900 mb-4">
              Privacy Policy
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
                Vision Embodiment ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                information when you visit our website or use our services.
              </p>
              <p className="text-gray-700">
                As a PFA (Persoană Fizică Autorizată) registered in Romania, we comply with the 
                General Data Protection Regulation (GDPR) and Romanian data protection laws.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-bold text-purple-900 mb-4">2. Information We Collect</h2>
              
              <h3 className="text-lg font-semibold text-purple-800 mb-3">2.1 Personal Information</h3>
              <p className="text-gray-700 mb-4">
                We may collect the following personal information:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
                <li>Name and contact information (email address, phone number)</li>
                <li>Billing and payment information</li>
                <li>Session notes and progress tracking (with your consent)</li>
                <li>Communication history and preferences</li>
                <li>Testimonials and feedback (with your permission)</li>
              </ul>

              <h3 className="text-lg font-semibold text-purple-800 mb-3">2.2 Automatically Collected Information</h3>
              <p className="text-gray-700 mb-4">
                When you visit our website, we may automatically collect:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>IP address and browser information</li>
                <li>Device and operating system information</li>
                <li>Pages visited and time spent on site</li>
                <li>Referring website addresses</li>
              </ul>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="text-2xl font-bold text-purple-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">
                We use your information for the following purposes:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>To provide and maintain our services</li>
                <li>To process bookings and payments</li>
                <li>To communicate with you about sessions and services</li>
                <li>To send newsletters and marketing communications (with consent)</li>
                <li>To improve our services and website</li>
                <li>To comply with legal obligations</li>
                <li>To protect against fraud and unauthorized access</li>
              </ul>
            </section>

            {/* Legal Basis for Processing */}
            <section>
              <h2 className="text-2xl font-bold text-purple-900 mb-4">4. Legal Basis for Processing (GDPR)</h2>
              <p className="text-gray-700 mb-4">
                We process your personal data based on the following legal grounds:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li><strong>Contract:</strong> Processing necessary to perform our services</li>
                <li><strong>Consent:</strong> Where you have given explicit consent</li>
                <li><strong>Legitimate Interests:</strong> For business operations and improvements</li>
                <li><strong>Legal Obligations:</strong> To comply with applicable laws</li>
              </ul>
            </section>

            {/* Data Sharing and Disclosure */}
            <section>
              <h2 className="text-2xl font-bold text-purple-900 mb-4">5. Data Sharing and Disclosure</h2>
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or rent your personal information. We may share your 
                information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>With service providers who assist in our operations (e.g., payment processors)</li>
                <li>When required by law or legal process</li>
                <li>To protect our rights, safety, or property</li>
                <li>With your explicit consent</li>
                <li>In connection with a business transfer or merger</li>
              </ul>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-bold text-purple-900 mb-4">6. Data Security</h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational measures to protect your 
                personal information, including:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>SSL encryption for data transmission</li>
                <li>Secure storage with access controls</li>
                <li>Regular security assessments</li>
                <li>Limited access to personal information</li>
                <li>Employee confidentiality agreements</li>
              </ul>
              <p className="text-gray-700 mt-4">
                However, no method of transmission over the internet is 100% secure, and we cannot 
                guarantee absolute security of your information.
              </p>
            </section>

            {/* Your Rights (GDPR) */}
            <section>
              <h2 className="text-2xl font-bold text-purple-900 mb-4">7. Your Rights Under GDPR</h2>
              <p className="text-gray-700 mb-4">
                If you are in the European Economic Area, you have the following rights:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Rectification:</strong> Request correction of inaccurate data</li>
                <li><strong>Erasure:</strong> Request deletion of your data ("right to be forgotten")</li>
                <li><strong>Restriction:</strong> Request limited processing of your data</li>
                <li><strong>Portability:</strong> Receive your data in a portable format</li>
                <li><strong>Objection:</strong> Object to certain processing activities</li>
                <li><strong>Withdrawal of Consent:</strong> Withdraw consent at any time</li>
              </ul>
              <p className="text-gray-700 mt-4">
                To exercise these rights, please contact us at privacy@visionembodiment.com
              </p>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-2xl font-bold text-purple-900 mb-4">8. Data Retention</h2>
              <p className="text-gray-700 mb-4">
                We retain your personal information for as long as necessary to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Provide our services</li>
                <li>Comply with legal obligations (typically 7 years for financial records)</li>
                <li>Resolve disputes and enforce agreements</li>
                <li>Maintain business records</li>
              </ul>
              <p className="text-gray-700 mt-4">
                When retention is no longer necessary, we will securely delete or anonymize your data.
              </p>
            </section>

            {/* Cookies and Tracking */}
            <section>
              <h2 className="text-2xl font-bold text-purple-900 mb-4">9. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 mb-4">
                We use cookies and similar tracking technologies to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Remember your preferences</li>
                <li>Understand how you use our website</li>
                <li>Provide personalized content</li>
                <li>Analyze website performance</li>
              </ul>
              <p className="text-gray-700 mt-4">
                You can control cookies through your browser settings. Disabling cookies may affect 
                some features of our website.
              </p>
            </section>

            {/* International Data Transfers */}
            <section>
              <h2 className="text-2xl font-bold text-purple-900 mb-4">10. International Data Transfers</h2>
              <p className="text-gray-700">
                As we operate from Romania (EU), your data is primarily processed within the European 
                Economic Area. If we transfer data outside the EEA, we ensure appropriate safeguards 
                are in place, such as Standard Contractual Clauses or adequacy decisions.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-bold text-purple-900 mb-4">11. Children's Privacy</h2>
              <p className="text-gray-700">
                Our services are not intended for individuals under 18 years of age. We do not 
                knowingly collect personal information from children. If we learn we have collected 
                information from a child under 18, we will delete it promptly.
              </p>
            </section>

            {/* Third-Party Links */}
            <section>
              <h2 className="text-2xl font-bold text-purple-900 mb-4">12. Third-Party Links</h2>
              <p className="text-gray-700">
                Our website may contain links to third-party websites. We are not responsible for 
                the privacy practices or content of these sites. We encourage you to review their 
                privacy policies before providing any personal information.
              </p>
            </section>

            {/* Newsletter and Marketing */}
            <section>
              <h2 className="text-2xl font-bold text-purple-900 mb-4">13. Newsletter and Marketing Communications</h2>
              <p className="text-gray-700 mb-4">
                If you subscribe to our newsletter or opt-in to marketing communications:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>We will only send communications with your explicit consent</li>
                <li>You can unsubscribe at any time using the link in our emails</li>
                <li>We will never share your email with third parties for marketing</li>
                <li>We track email opens and clicks to improve our content</li>
              </ul>
            </section>

            {/* Updates to Privacy Policy */}
            <section>
              <h2 className="text-2xl font-bold text-purple-900 mb-4">14. Updates to This Privacy Policy</h2>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. We will notify you of any 
                changes by posting the new Privacy Policy on this page and updating the "Last 
                updated" date. For significant changes, we may provide additional notice via 
                email or website notification.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-purple-900 mb-4">15. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For questions about this Privacy Policy or to exercise your rights, please contact:
              </p>
              <div className="bg-purple-50 rounded-lg p-6">
                <p className="text-gray-700">
                  <strong>Data Protection Officer</strong><br />
                  Vision Embodiment<br />
                  Email: privacy@visionembodiment.com<br />
                  Phone: +1 (555) 123-4567<br />
                  Business Registration: PFA Romania
                </p>
              </div>
              
              <p className="text-gray-700 mt-4">
                <strong>Supervisory Authority:</strong> You have the right to lodge a complaint with 
                the Romanian National Supervisory Authority for Personal Data Processing (ANSPDCP) 
                or your local data protection authority.
              </p>
            </section>

            {/* Consent */}
            <section className="border-t pt-8">
              <p className="text-gray-700 text-center italic">
                By using our website and services, you acknowledge that you have read and understood 
                this Privacy Policy and agree to the collection, use, and disclosure of your 
                information as described herein.
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