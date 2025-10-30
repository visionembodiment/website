import { siteConfig } from './shared';

export const termsPageContent = {
  sections: [
    { id: 'hero', enabled: true, background: 'gradient.darkToLight' },
    { id: 'content', enabled: true, background: 'background.secondary' },
  ],

  hero: {
    title: 'Terms of Service',
    lastUpdated: 'March 1, 2024',
  },

  content: [
    {
      title: '1. Introduction',
      content: [
        {
          text: `Welcome to Vision Embodiment. These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our services, you agree to be bound by these Terms.`,
        },
        {
          text: 'Vision Embodiment is operated as a PFA (Persoană Fizică Autorizată) registered in Romania. These terms comply with both Romanian and EU regulations.',
        },
      ],
    },
    {
      title: '2. Services',
      content: [
        {
          text: 'Vision Embodiment provides:',
        },
        {
          list: [
            'Spiritual coaching and guidance sessions',
            'Tarot and archetypal readings',
            'Mind Games readings',
            'Online workshops and events',
            'Educational content and resources',
          ],
        },
        {
          text: 'All services are provided for informational and personal development purposes only and should not be considered as medical, psychological, or financial advice.',
        },
      ],
    },
    {
      title: '3. Booking and Payment',
      content: [
        {
          subtitle: '3.1 Booking Process',
          text: 'Sessions must be booked through our online booking system. Bookings are confirmed only after payment is received.',
        },
        {
          subtitle: '3.2 Payment',
          text: 'All prices are listed in USD. Payment must be made in full at the time of booking. We accept major credit cards and PayPal.',
        },
        {
          subtitle: '3.3 VAT',
          text: 'As a Romanian PFA, applicable VAT will be added to all services for EU customers where required by law.',
        },
      ],
    },
    {
      id: 'cancellation',
      title: '4. Cancellation and Refund Policy',
      content: [
        {
          subtitle: '4.1 Client Cancellations',
          list: [
            '24+ hours notice: Full refund or rescheduling available',
            '12-24 hours notice: 50% refund or rescheduling with credit',
            'Less than 12 hours notice: No refund, session is forfeited',
            'No-show: No refund, session is forfeited',
          ],
        },
        {
          subtitle: '4.2 Provider Cancellations',
          text: 'If we need to cancel your session, you will receive a full refund or the option to reschedule at your convenience.',
        },
        {
          subtitle: '4.3 Technical Issues',
          text: 'If technical difficulties prevent the completion of an online session, we will either complete the session at a rescheduled time or provide a pro-rated refund.',
        },
      ],
    },
    {
      title: '5. Client Responsibilities',
      content: [
        {
          text: 'As a client, you agree to:',
        },
        {
          list: [
            'Provide accurate information during booking and sessions',
            'Arrive on time for scheduled sessions',
            'Maintain a respectful and professional demeanor',
            'Have necessary technology for online sessions (stable internet, camera, microphone)',
            'Not record sessions without explicit written permission',
            'Take responsibility for your own decisions and actions',
          ],
        },
      ],
    },
    {
      title: '6. Confidentiality',
      content: [
        {
          text: 'All information shared during sessions is kept strictly confidential, with the following exceptions:',
        },
        {
          list: [
            'When required by law or court order',
            'When there is imminent risk of harm to yourself or others',
            'When you provide written consent to share information',
          ],
        },
      ],
    },
    {
      title: '7. Intellectual Property',
      content: [
        {
          text: 'All content on this website, including text, images, logos, and materials provided during sessions, is the property of Vision Embodiment and protected by copyright laws. You may not reproduce, distribute, or create derivative works without written permission.',
        },
      ],
    },
    {
      title: '8. Disclaimer and Limitation of Liability',
      content: [
        {
          subtitle: '8.1 No Guarantees',
          text: 'We do not guarantee specific results from our services. Individual experiences and outcomes vary.',
        },
        {
          subtitle: '8.2 Not Medical Advice',
          text: 'Our services are not a substitute for professional medical, psychological, legal, or financial advice. Always consult qualified professionals for these matters.',
        },
        {
          subtitle: '8.3 Limitation of Liability',
          text: 'To the maximum extent permitted by law, Vision Embodiment shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services.',
        },
      ],
    },
    {
      title: '9. Data Protection (GDPR)',
      content: [
        {
          text: 'We comply with the General Data Protection Regulation (GDPR). Your personal data is processed lawfully, fairly, and transparently. For details on how we collect, use, and protect your data, please refer to our',
          link: { text: 'Privacy Policy', href: '/privacy' },
        },
      ],
    },
    {
      title: '10. Dispute Resolution',
      content: [
        {
          subtitle: '10.1 Governing Law',
          text: 'These Terms are governed by the laws of Romania and the European Union.',
        },
        {
          subtitle: '10.2 Resolution Process',
          text: 'Any disputes will first be addressed through good faith negotiation. If unresolved, disputes will be submitted to mediation before pursuing legal action.',
        },
        {
          subtitle: '10.3 EU Dispute Resolution',
          text: 'EU consumers may use the European Commission\'s Online Dispute Resolution platform at',
          link: { text: 'https://ec.europa.eu/consumers/odr', href: 'https://ec.europa.eu/consumers/odr' },
        },
      ],
    },
    {
      title: '11. Modifications to Terms',
      content: [
        {
          text: 'We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated revision date. Continued use of our services after changes constitutes acceptance of the modified Terms.',
        },
      ],
    },
    {
      title: '12. Contact Information',
      content: [
        {
          text: 'For questions about these Terms of Service, please contact us:',
        },
      ],
      contact: {
        name: siteConfig.name,
        email: siteConfig.contactEmail,
        registration: 'PFA Romania',
      },
    },
  ],

  footer: {
    text: 'By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.',
  },
};
