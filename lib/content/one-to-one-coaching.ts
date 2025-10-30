export const oneToOneCoachingContent = {
  sections: [
    { id: 'hero', enabled: true, background: 'gradient.lightToDark' },
    { id: 'whatIs', enabled: true, background: 'background.primary' },
    { id: 'packages', enabled: true, background: 'background.primary' },
    { id: 'process', enabled: true, background: 'background.secondary' },
    { id: 'testimonials', enabled: true, background: 'background.primary' },
    { id: 'faq', enabled: true, background: 'background.secondary' },
    { id: 'cta', enabled: true, background: 'gradient.darkToLight' },
  ],
  hero: {
    title: 'One-to-One Coaching',
    subtitle: "Your personalized journey to profound transformation. Work directly with me to bridge the gap between where you are and where you're meant to be.",
    videoId: '',
    primaryButton: {
      text: 'Book Discovery Call',
      href: '/booking?service=one-to-one',
    },
    secondaryButton: {
      text: 'View Packages',
      href: '#packages',
    },
  },
  whatIs: {
    title: 'Transform Your Life From the Inside Out',
    description: [
      "One-to-One Coaching is more than just coaching—it's a sacred container for your transformation. Together, we'll dive deep into the patterns, beliefs, and stories that have been running your life unconsciously.",
      "This is for you if you're ready to stop playing small, break free from cycles of self-sabotage, and step into the fullest expression of who you came here to be.",
      "Through our work together, you'll not only achieve your goals but fundamentally transform how you relate to yourself, others, and life itself.",
    ],
    benefits: [
      'Break free from limiting patterns and beliefs',
      'Gain crystal clarity on your life purpose',
      'Develop unshakeable self-confidence',
      'Create aligned relationships',
      'Manifest your dreams into reality',
      'Access your inner wisdom and intuition',
      'Transform fear into fuel for growth',
      'Build sustainable success habits',
    ],
  },
  process: {
    title: 'Your Transformation Journey',
    steps: [
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
    ],
  },
  packages: {
    title: 'Choose Your Transformation Package',
    subtitle: 'Each package is designed to meet you exactly where you are',
    items: [
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
    ],
  },
  testimonials: {
    title: 'Success Stories',
    items: [
      {
        name: 'Sarah Mitchell',
        title: 'Entrepreneur',
        content: "Working with Alina changed my life in ways I never imagined possible. Through our 12-week journey, I not only achieved my career goals but completely transformed my relationship with myself. Her intuitive guidance and practical tools helped me break through years of limiting beliefs.",
        rating: 5,
      },
      {
        name: 'Michael Chen',
        title: 'Creative Director',
        content: "I came to Alina feeling stuck and confused about my life direction. Through our coaching sessions, I discovered my true purpose and the courage to pursue it. The transformation has been profound and lasting.",
        rating: 5,
      },
    ],
  },
  faq: {
    title: 'Frequently Asked Questions',
    items: [
      {
        question: 'How do I know if coaching is right for me?',
        answer: "Coaching is ideal if you're ready for change, willing to take responsibility for your life, and committed to doing the inner work. If you feel stuck, unfulfilled, or know you're meant for more, coaching can help you bridge that gap.",
      },
      {
        question: "What's the difference between the packages?",
        answer: 'Single sessions are great for specific challenges or breakthroughs. The 4-session journey allows for deeper exploration and habit formation. The 12-week transformation provides comprehensive support for major life changes and complete paradigm shifts.',
      },
      {
        question: 'What happens between sessions?',
        answer: "You'll receive personalized practices, integration exercises, and email support to help you implement insights from our sessions. The real transformation happens in your daily life between our calls.",
      },
      {
        question: 'Can I upgrade my package later?',
        answer: 'Yes! Many clients start with a single session or 4-session package and then upgrade to longer-term support. You can apply the value of your current package toward an upgrade within 30 days.',
      },
    ],
  },
  cta: {
    title: 'Your Transformation Starts With a Single Decision',
    subtitle: "Stop waiting for the perfect moment. The time is now. Your future self is calling you forward into the life you're meant to live.",
    freeCallTitle: 'Free Discovery Call',
    freeCallDescription: 'Not sure which package is right for you? Book a complimentary 30-minute discovery call to explore how we can work together.',
    buttonText: 'Book Your Free Discovery Call',
    buttonHref: '/booking?service=one-to-one',
    note: 'Note: Spaces are limited. 24-hour cancellation policy applies.',
  },
};

