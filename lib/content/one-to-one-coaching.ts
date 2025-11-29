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
    videoId: '6068e9Pggh8',
    primaryButton: {
      text: 'Book Discovery Call',
      href: 'https://calendly.com/vision-embodiment/free-discovery-session',
      // href: '/booking?service=one-to-one',
    },
    secondaryButton: {
      text: 'View Packages',
      href: '#packages',
    },
  },
  whatIs: {
    title: 'Transform Your Life From the Inside Out',
    description: [
      
      "1:1 Coaching is where we stop pretending the surface-level tools are enough. We go straight to the patterns that keep looping, the parts of you that shut down when things get real, and the stories that still run your choices from the background.",
      "This is for you if you’re tired of doing all the “right things” and still ending up in the same place. If you feel split inside. If your relationships follow the same script. If your progress collapses the moment you get close to change. If you’re ready to stop negotiating with your own sabotage.",
      "In this space, we work with your shadow, your nervous system, and the deeper parts of you that don’t respond to mindset alone. You don’t just set goals here. You build the internal structure that makes new behavior possible. This is where things finally shift because we address the part of you that’s been running the show all along.",
    ],
    benefits: [
      'Break free from limiting patterns and beliefs',
      'See your blind spots with clean, grounded clarity',
      'Understand the parts of you that sabotage progress',
      'Build a nervous system that can hold the change you want',
      'Create relationships that don’t cost you your sense of self',
      'Transform fear into fuel for growth',
      'Build sustainable success habits',
      'Manifest your dreams into reality',
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
    subtitle: 'Each option meets you at the level of depth you’re ready for',
    items: [
      {
        name: 'Single Session',
        price: '90€',
        duration: '90 minutes',
        features: [
          'Deep-dive coaching session',
          'Personalized action plan',
          'Follow-up email summary',
        ],
        cta: 'Book Single Session',
        popular: false,
      },
      {
        name: '3-Session Journey',
        price: '310€',
        savings: 'Save 50€',
        duration: '1.5 months',
        features: [
          'Biweekly 90-minute sessions',
          'Customized transformation plan',
          'Between-session email support',
          'Integration practices',
        ],
        cta: 'Start Your Journey',
        popular: true,
      },
      {
        name: '9-Session Transformation',
        price: '710€',
        savings: 'Save 100€',
        duration: '2 months',
        features: [
          'Weekly 90-minute sessions',
          'Comprehensive life audit',
          'Unlimited email support',
          'Text message check-ins',
          'Custom resources & tools',
          'Progress tracking',
        ],
        cta: 'Intensive Transformation',
        popular: false,
      },
    ],
  },
  testimonials: {
    title: 'Success Stories',
    items: [
      {
        name: 'Sarah M/',
        // title: 'Entrepreneur',
        content: "Working with Alina changed my life in ways I never imagined possible. Through our journey, I completely transformed my relationship with myself. Her intuitive guidance and practical tools helped me break through years of limiting beliefs.",
        rating: 5,
      },
      {
        name: 'Michael C.',
        // title: 'Creative Director',
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
        answer: 'Single sessions are great for specific challenges or breakthroughs. The 3-session journey allows for deeper exploration and habit formation. The 9-session transformation provides comprehensive support for major life changes and complete paradigm shifts.',
      },
      {
        question: 'What happens between sessions?',
        answer: "You'll receive personalized practices, integration exercises, and email support to help you implement insights from our sessions. The real transformation happens in your daily life between our calls.",
      },
      {
        question: 'Can I upgrade my package later?',
        answer: 'Yes! Many clients start with a single session or 3-session package and then upgrade to longer-term support. You can apply the value of your current package toward an upgrade within 30 days.',
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

