export const servicesPageContent = {
  sections: [
    { id: 'hero', enabled: true, background: 'gradient.darkToLight' },
    { id: 'services', enabled: true, background: 'background.secondary' },
    { id: 'comparison', enabled: true, background: 'background.primary' },
    { id: 'process', enabled: true, background: 'background.secondary' },
    { id: 'faq', enabled: true, background: 'background.primary' },
    { id: 'cta', enabled: true, background: 'gradient.lightToDark' },
  ],

  hero: {
    title: 'Transformative Services',
    subtitle: 'Choose your path to embodied transformation. Each service is designed to meet you exactly where you are and guide you to where you want to be.',
    promotion: {
      emoji: '🎉',
      text: 'Special Offer: Mind Games Reading only $15!',
    },
  },
  services: [
    {
      title: 'Mind Games Reading',
      description: 'Unlock your subconscious patterns and transform limiting beliefs through guided exploration of your mental landscape.',
      price: '$15',
      duration: '60 minutes',
      href: '/services/mind-games-reading',
      bookingHref: '/booking?service=mind-games',
    },
    {
      title: 'One-to-One Coaching',
      description: 'Personalized transformation journey with weekly sessions, continuous support, and customized action plans.',
      price: '$200',
      duration: '60 minutes',
      href: '/services/one-to-one',
      bookingHref: '/booking?service=one-to-one',
    },
    {
      title: 'Archetypal Tarot',
      description: 'Deep dive into your archetypal patterns using ancient wisdom and modern psychology for profound insights.',
      price: '$175',
      duration: '90 minutes',
      href: '/services/archetypal-tarot',
      bookingHref: '/booking?service=archetypal-tarot',
    },
  ],
  comparison: {
    title: 'Which Service Is Right For You?',
    headers: ['Feature', 'Mind Games', 'One-to-One', 'Archetypal Tarot'],
    rows: [
      { feature: 'Best For', mindGames: 'Mental patterns', oneToOne: 'Deep transformation', tarot: 'Spiritual insights' },
      { feature: 'Duration', mindGames: '60 minutes', oneToOne: '60 min/session', tarot: '90 minutes' },
      { feature: 'Format', mindGames: 'Single session', oneToOne: 'Ongoing support', tarot: 'Deep dive session' },
      { feature: 'Includes', mindGames: 'Guided exploration', oneToOne: 'Action plans + support', tarot: 'Reading + recording' },
    ],
    pricing: {
      mindGames: { original: '$150', sale: '$15' },
      oneToOne: '$200/session',
      tarot: '$175',
    },
  },
  process: {
    title: 'Your Transformation Journey',
    steps: [
      { step: '1', title: 'Choose Your Path', description: 'Select the service that resonates with your current needs' },
      { step: '2', title: 'Book Your Session', description: 'Schedule a time that works for you through our easy booking system' },
      { step: '3', title: 'Prepare & Connect', description: 'Receive preparation guidelines and join your transformative session' },
      { step: '4', title: 'Integrate & Transform', description: 'Apply insights with ongoing support and integration practices' },
    ],
  },
  faq: {
    title: 'Frequently Asked Questions',
    items: [
      {
        question: 'How do I know which service is right for me?',
        answer: 'If you\'re new to this work, I recommend starting with the Mind Games Reading (currently on special offer). For deeper, ongoing transformation, One-to-One Coaching is ideal. Archetypal Tarot is perfect for gaining spiritual insights and understanding your life patterns.',
      },
      {
        question: 'Are sessions conducted online or in-person?',
        answer: 'All sessions are available online via Zoom, making them accessible from anywhere in the world. This allows for maximum flexibility and comfort as you can join from your own sacred space.',
      },
      {
        question: 'What is your cancellation policy?',
        answer: 'Sessions can be rescheduled with 24 hours notice. Please note that we have a no-refund policy for completed sessions, as the energy and preparation begin the moment you book.',
      },
      {
        question: 'How do I prepare for my session?',
        answer: 'After booking, you\'ll receive detailed preparation guidelines specific to your chosen service. Generally, I recommend finding a quiet space, having a journal ready, and coming with an open heart and mind.',
      },
    ],
  },
  cta: {
    title: 'Ready to Transform?',
    subtitle: 'Take the first step on your journey to embodied transformation. Your future self is waiting.',
    buttonText: 'Book Your Session Now',
    buttonHref: '/booking',
  },
};
