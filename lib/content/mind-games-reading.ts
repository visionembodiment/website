export const mindGamesReadingContent = {
  sections: [
    { id: 'hero', enabled: false, background: 'gradient.lightToDark' },
    { id: 'whatIs', enabled: true, background: 'background.primary' },
    { id: 'pricing', enabled: false, background: 'gradient.darkToLight' },
    { id: 'process', enabled: true, background: 'background.secondary' },
    { id: 'testimonials', enabled: true, background: 'background.primary' },
    { id: 'faq', enabled: true, background: 'background.secondary' },
    { id: 'cta', enabled: true, background: 'background.primary' },
  ],
  hero: {
    title: 'Mind Games Reading',
    subtitle: 'Unlock the hidden patterns of your mind and transform limiting beliefs into empowering truths through this powerful guided exploration.',
    price: '$15',
    originalPrice: '$150',
    videoId: 'EqetHVj51cM',
    promotion: {
      emoji: '🎉',
      text: 'Limited Time: 90% OFF - Only $15!',
    },
    primaryButton: {
      text: 'Book Now - Only $15',
      href: '/booking?service=mind-games',
    },
    secondaryButton: {
      text: 'Learn More',
      href: '#learn-more',
    },
  },
  whatIs: {
    title: 'What Is a Mind Games Reading?',
    description: [
      "Your mind is playing games with you, but not in the way you might think. These \"games\" are the unconscious patterns, beliefs, and stories that shape your reality without your awareness.",
      'A Mind Games Reading is a revolutionary approach that combines coaching psychology, neuroscience insights, and intuitive guidance to help you see through the illusions your mind creates.',
      "In this 30-minute transformative session, we'll dive deep into your mental landscape, identify the games being played, and give you the tools to rewrite the rules in your favor.",
    ],

    benefits: [
      'Patterns keep repeating',
      'Clarity slips when others get involved',
      'Progress falls apart right as it starts',
      'Something feels blocked but undefined',
      'Red flags show up only in hindsight',
      'Stress leads to shutdown or confusion',
      'New behaviors feel hard to access',
    ],
  },
  process: {
    title: 'The Session Process',
    steps: [
      {
        title: 'Opening & Grounding',
        description: 'We start by settling your system so the space is clear and steady for the reading.',
      },
      {
        title: 'Reveal the Patterns',
        description: 'Cards are pulled and we identify the core patterns showing up in your life.',
      },
      {
        title: 'Deep Dive Exploration',
        description: 'We explore the deeper motives, beliefs, and dynamics driving those patterns.',
      },
      {
        title: 'Shift the Story',
        description: "You leave with practical steps to work the pattern differently and anchor the insight.",
      },
    ],
  },
  testimonials: {
    title: 'Client Experiences',
    items: [
      {
        name: 'Emma T.',
        content: "The Mind Games Reading helped me see patterns I've been blind to for years. Alina's approach is both gentle and profoundly transformative.",
        rating: 5,
      },
      {
        name: 'David M.',
        content: 'I was skeptical at first, but this session completely shifted my perspective. Worth every penny!',
        rating: 5,
      },
      {
        name: 'Lisa C.',
        content: "Alina has an incredible gift for seeing through the mental fog and guiding you to clarity.",
        rating: 5,
      },
    ],
  },
  pricing: {
    title: 'Special Limited-Time Offer',
    price: '$15',
    originalPrice: '$150',
    savings: 'Save $135!',
    description: 'This special rate is available for a limited time only. Regular price returns soon.',
    includes: [
      '30-minute transformative session',
      'Personalized insights and tools',
      'Follow-up integration guide',
    ],
    buttonText: 'Claim Your $15 Session Now',
    buttonHref: '/booking?service=mind-games',
    note: 'Note: 24-hour cancellation policy applies. No refunds for completed sessions.',
  },
  faq: {
    title: 'Common Questions',
    items: [
      {
        question: 'What exactly is Mind Games Readings?',
        answer: "It’s a psychological game method created by a Romanian psychologist. I use it to intutively pull cards and map the real patterns running your choices.",
      },
      {
        question: 'How does it work?',
        answer: 'It is a 5 card reading with 3 levels. Level 1 shows what you truly want. Level 2 shows how outside influence distorts or pulls you. Level 3 shows how you sabotage your own clarity.',
      },
      {
        question: 'Is this therapy?',
        answer: "No. This is a card-based pattern reading that uses coaching and grounded intuition. It can support therapy, but it isn’t a clinical service.",
      },
      {
        question: 'What if I want deeper work after?',
        answer: "If the reading brings up something you want to explore more fully, we can talk about a longer 1:1 session or a deeper reading container based on what your system actually needs.",
      },
    ],
  },
  cta: {
    title: 'Ready to See Through the Games?',
    subtitle: "Your mind has been running the show long enough. It's time to take back control and create the reality you desire.",
    buttonText: 'Book Your Mind Games Reading - $15',
    buttonHref: 'https://visionembodiment.simplybook.it/v2/',
    // buttonHref: '/booking?service=mind-games',
  },
};

