import { siteConfig } from './shared';

export const contactPageContent = {
  sections: [
    { id: 'hero', enabled: true, background: 'gradient.darkToLight' },
    { id: 'main', enabled: true, background: 'background.secondary' },
    { id: 'newsletter', enabled: true, background: 'background.primary' },
    { id: 'cta', enabled: true, background: 'gradient.lightToDark' },
  ],

  hero: {
    title: "Let's Connect",
    description: "Ready to begin your transformation journey? I'd love to hear from you.",
  },

  form: {
    title: 'Send a Message',
    fields: {
      name: {
        label: 'Your Name *',
        placeholder: 'Enter your full name',
      },
      email: {
        label: 'Email Address *',
        placeholder: 'your@email.com',
      },
      subject: {
        label: 'Subject *',
        placeholder: 'What would you like to discuss?',
      },
      message: {
        label: 'Your Message *',
        placeholder: "Tell me about what you're looking for...",
      },
    },
    submitButton: {
      default: 'Send Message',
      loading: 'Sending...',
    },
    successMessage: "Thank you for your message! I'll get back to you within 24 hours.",
    errorMessage: `Something went wrong. Please try again or email directly at ${siteConfig.contactEmail}`,
  },

  contactInfo: {
    title: 'Get in Touch',
    items: [
      {
        icon: 'email',
        title: 'Email',
        value: siteConfig.contactEmail,
      },
      {
        icon: 'clock',
        title: 'Response Time',
        value: 'Within 24 hours',
      },
      {
        icon: 'globe',
        title: 'Location',
        value: 'Available Globally Online',
      },
    ],
  },

  social: {
    title: 'Connect on Social Media',
  },

  faq: {
    title: 'Frequently Asked Questions',
    items: [
      {
        question: 'How quickly will I receive a response?',
        answer: 'I aim to respond to all inquiries within 24 hours during business days.',
      },
      {
        question: "What's the best way to reach you?",
        answer: 'The contact form is the best way to ensure your message reaches me directly. For urgent matters, you can also email vision.embodiment@gmail.com',
      },
      {
        question: 'Do you offer free consultations?',
        answer: 'Yes! I offer a complimentary 30-minute discovery call for new clients to explore how we can work together.',
      },
      {
        question: 'What time zones do you work with?',
        answer: 'I work with clients globally and can accommodate various time zones for our sessions.',
      },
    ],
  },

  newsletter: {
    title: 'Stay Connected',
    subtitle: 'Receive weekly wisdom, transformation tips, and exclusive offers',
    placeholder: 'Enter your email',
    buttonText: 'Subscribe',
    disclaimer: 'Join 1,000+ seekers. No spam, unsubscribe anytime.',
    successMessage: 'Thank you for subscribing! Check your email (including spam folder) for confirmation.',
    loadingText: 'Subscribing...',
    successButtonText: 'Subscribed!',
  },

  cta: {
    title: 'Ready for Your Free Discovery Call?',
    description: "Let's explore how we can work together to transform your life. Book a complimentary 30-minute call to discuss your journey.",
    buttonText: 'Schedule Discovery Call',
    buttonHref: '/booking',
  },
};

