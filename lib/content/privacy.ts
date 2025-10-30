import { siteConfig } from './shared';

export const privacyPageContent = {
  sections: [
    { id: 'hero', enabled: true, background: 'gradient.darkToLight' },
    { id: 'content', enabled: true, background: 'background.secondary' },
  ],

  hero: {
    title: 'Privacy Policy',
    lastUpdated: 'March 1, 2024',
  },

  content: [
    {
      title: '1. Introduction',
      content: [
        {
          text: `Vision Embodiment ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.`,
        },
        {
          text: 'As a PFA (Persoană Fizică Autorizată) registered in Romania, we comply with the General Data Protection Regulation (GDPR) and Romanian data protection laws.',
        },
      ],
    },
    {
      title: '2. Information We Collect',
      subsections: [
        {
          subtitle: '2.1 Personal Information',
          content: [
            {
              text: 'We may collect the following personal information:',
            },
            {
              list: [
                'Name and contact information (email address, phone number)',
                'Billing and payment information',
                'Session notes and progress tracking (with your consent)',
                'Communication history and preferences',
                'Testimonials and feedback (with your permission)',
              ],
            },
          ],
        },
        {
          subtitle: '2.2 Automatically Collected Information',
          content: [
            {
              text: 'When you visit our website, we may automatically collect:',
            },
            {
              list: [
                'IP address and browser information',
                'Device and operating system information',
                'Pages visited and time spent on site',
                'Referring website addresses',
              ],
            },
          ],
        },
      ],
    },
    {
      title: '3. How We Use Your Information',
      content: [
        {
          text: 'We use your information for the following purposes:',
        },
        {
          list: [
            'To provide and maintain our services',
            'To process bookings and payments',
            'To communicate with you about sessions and services',
            'To send newsletters and marketing communications (with consent)',
            'To improve our services and website',
            'To comply with legal obligations',
            'To protect against fraud and unauthorized access',
          ],
        },
      ],
    },
    {
      title: '4. Legal Basis for Processing (GDPR)',
      content: [
        {
          text: 'We process your personal data based on the following legal grounds:',
        },
        {
          list: [
            'Contract: Processing necessary to perform our services',
            'Consent: Where you have given explicit consent',
            'Legitimate Interests: For business operations and improvements',
            'Legal Obligations: To comply with applicable laws',
          ],
        },
      ],
    },
    {
      title: '5. Data Sharing and Disclosure',
      content: [
        {
          text: 'We do not sell, trade, or rent your personal information. We may share your information only in the following circumstances:',
        },
        {
          list: [
            'With service providers who assist in our operations (e.g., payment processors)',
            'When required by law or legal process',
            'To protect our rights, safety, or property',
            'With your explicit consent',
            'In connection with a business transfer or merger',
          ],
        },
      ],
    },
    {
      title: '6. Data Security',
      content: [
        {
          text: 'We implement appropriate technical and organizational measures to protect your personal information, including:',
        },
        {
          list: [
            'SSL encryption for data transmission',
            'Secure storage with access controls',
            'Regular security assessments',
            'Limited access to personal information',
            'Employee confidentiality agreements',
          ],
        },
        {
          text: 'However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security of your information.',
        },
      ],
    },
    {
      title: '7. Your Rights Under GDPR',
      content: [
        {
          text: 'If you are in the European Economic Area, you have the following rights:',
        },
        {
          list: [
            'Access: Request a copy of your personal data',
            'Rectification: Request correction of inaccurate data',
            'Erasure: Request deletion of your data ("right to be forgotten")',
            'Restriction: Request limited processing of your data',
            'Portability: Receive your data in a portable format',
            'Objection: Object to certain processing activities',
            'Withdrawal of Consent: Withdraw consent at any time',
          ],
        },
        {
          text: `To exercise these rights, please contact us at ${siteConfig.contactEmail}`,
        },
      ],
    },
    {
      title: '8. Data Retention',
      content: [
        {
          text: 'We retain your personal information for as long as necessary to:',
        },
        {
          list: [
            'Provide our services',
            'Comply with legal obligations (typically 7 years for financial records)',
            'Resolve disputes and enforce agreements',
            'Maintain business records',
          ],
        },
        {
          text: 'When retention is no longer necessary, we will securely delete or anonymize your data.',
        },
      ],
    },
    {
      title: '9. Cookies and Tracking Technologies',
      content: [
        {
          text: 'We use cookies and similar tracking technologies to:',
        },
        {
          list: [
            'Remember your preferences',
            'Understand how you use our website',
            'Provide personalized content',
            'Analyze website performance',
          ],
        },
        {
          text: 'You can control cookies through your browser settings. Disabling cookies may affect some features of our website.',
        },
      ],
    },
    {
      title: '10. International Data Transfers',
      content: [
        {
          text: 'As we operate from Romania (EU), your data is primarily processed within the European Economic Area. If we transfer data outside the EEA, we ensure appropriate safeguards are in place, such as Standard Contractual Clauses or adequacy decisions.',
        },
      ],
    },
    {
      title: "11. Children's Privacy",
      content: [
        {
          text: 'Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If we learn we have collected information from a child under 18, we will delete it promptly.',
        },
      ],
    },
    {
      title: '12. Third-Party Links',
      content: [
        {
          text: 'Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these sites. We encourage you to review their privacy policies before providing any personal information.',
        },
      ],
    },
    {
      title: '13. Newsletter and Marketing Communications',
      content: [
        {
          text: 'If you subscribe to our newsletter or opt-in to marketing communications:',
        },
        {
          list: [
            'We will only send communications with your explicit consent',
            'You can unsubscribe at any time using the link in our emails',
            'We will never share your email with third parties for marketing',
            'We track email opens and clicks to improve our content',
          ],
        },
      ],
    },
    {
      title: '14. Updates to This Privacy Policy',
      content: [
        {
          text: 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. For significant changes, we may provide additional notice via email or website notification.',
        },
      ],
    },
    {
      title: '15. Contact Information',
      content: [
        {
          text: 'For questions about this Privacy Policy or to exercise your rights, please contact:',
        },
      ],
      contact: {
        title: 'Data Protection Officer',
        name: siteConfig.name,
        email: siteConfig.contactEmail,
        registration: 'PFA Romania',
      },
      supervisory: {
        text: 'You have the right to lodge a complaint with the Romanian National Supervisory Authority for Personal Data Processing (ANSPDCP) or your local data protection authority.',
      },
    },
  ],

  footer: {
    text: 'By using our website and services, you acknowledge that you have read and understood this Privacy Policy and agree to the collection, use, and disclosure of your information as described herein.',
  },
};
