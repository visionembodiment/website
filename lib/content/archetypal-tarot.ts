export const archetypalTarotContent = {
  sections: [
    { id: 'hero', enabled: true, background: 'gradient.lightToDark' },
    { id: 'whatIs', enabled: true, background: 'background.secondary' },
    { id: 'archetypes', enabled: false, background: 'background.secondary' },
    { id: 'sessionDetails', enabled: true, background: 'background.primary' },
    { id: 'pricing', enabled: true, background: 'background.secondary' },
    { id: 'testimonials', enabled: true, background: 'background.primary' },
    { id: 'faq', enabled: true, background: 'background.secondary' },
    { id: 'cta', enabled: true, background: 'gradient.darkToLight' },
  ],
  hero: {
    title: 'Archetypal Tarot Reading',
    subtitle: 'Journey into the depths of your psyche through the ancient wisdom of tarot combined with Jungian archetypal psychology for profound self-discovery.',
    price: '60€',
    videoId: '',
    primaryButton: {
      text: 'Book Your Reading - 60€',
      href: '/booking?service=archetypal-tarot',
    },
    secondaryButton: {
      text: 'Explore the Archetypes',
      href: '#learn-more',
    },
  },
  whatIs: {
    title: 'More Than Just a Tarot Reading',
    description: [
      "Archetypal Tarot is a revolutionary approach that weaves together the mystical wisdom of tarot with the psychological depth of Carl Jung's archetypal theory. This isn't fortune-telling—it's soul-mapping.",
      'Each card represents universal patterns and energies that live within your psyche. By exploring these archetypes, we unlock the stories, patterns, and potentials that shape your life experience.',
      "In our 90-minute journey together, we'll use the cards as a mirror to reflect your inner landscape, revealing insights about your past, present, and potential futures.",
    ],
    benefits: [
      'Understand your life patterns and cycles',
      'Connect with your archetypal wisdom',
      'Gain clarity on major life decisions',
      "Discover your soul's purpose",
      'Uncover hidden gifts and shadows',
      'Receive guidance from your higher self',
      'Transform challenges into opportunities',
      'Align with your authentic path',
    ],
  },
  archetypes: {
    title: 'The Living Archetypes',
    subtitle: "Meet some of the archetypal energies we'll explore in your reading",
    items: [
      {
        name: 'The Fool',
        meaning: 'New beginnings, innocence, spontaneity',
        description: 'Your journey of transformation and trust',
      },
      {
        name: 'The Magician',
        meaning: 'Manifestation, power, inspired action',
        description: 'Your ability to create your reality',
      },
      {
        name: 'The High Priestess',
        meaning: 'Intuition, sacred knowledge, divine feminine',
        description: 'Your inner wisdom and mysteries',
      },
      {
        name: 'The Empress',
        meaning: 'Abundance, nurturing, creativity',
        description: 'Your creative power and fertility',
      },
    ],
    note: 'And many more archetypes waiting to reveal themselves in your personal reading...',
  },
  sessionDetails: {
    title: 'Your Archetypal Journey',
    flow: {
      title: 'The Session Flow',
      steps: [
        {
          title: 'Sacred Opening',
          description: 'We create a sacred container and connect with your intention',
        },
        {
          title: 'Card Selection',
          description: "We'll intuitively choose cards that reflect your energy",
        },
        {
          title: 'Archetypal Exploration',
          description: 'We dive deep into the symbols, patterns, and messages',
        },
        {
          title: 'Integration',
          description: 'Practical guidance for embodying the insights',
        },
      ],
    },
    includes: {
      title: "What's Included",
      items: [
        '60-minute deep dive session via Zoom',
        'Personalized archetypal reading',
        'Integration of Jungian psychology',
        'Connection to your life patterns',
        'Follow-up integration guide',
        'Personalized ritual recommendations',
      ],
    },
  },
  testimonials: {
    title: 'Sacred Reflections',
    items: [
      {
        name: 'Jessica P.',
        // title: 'Therapist',
        content: "The archetypal reading with Alina was unlike any tarot experience I've had. She wove together the symbolism with such depth and psychological insight that I left with a completely new understanding of my life patterns. The recording has become a treasured resource I return to often.",
        rating: 5,
      },
      {
        name: 'Robert K.',
        // title: 'Executive',
        content: "I was at a major crossroads in my life and the archetypal tarot reading provided exactly the clarity I needed. Alina's ability to connect the cards to my personal journey was remarkable. I made my decision with confidence.",
        rating: 5,
      },
    ],
  },
  pricing: {
    title: "Investment in Your Growth",
    price: '60€',
    duration: '60-minute Archetypal Tarot Reading',
    includes: [
      '60-minute deep dive session',
      'Recording of your reading',
      'Integration guide & rituals',
    ],
    // title: "Investment in Your Soul's Journey",
    // price: '$175',
    // duration: '90-minute Archetypal Tarot Reading',
    // includes: [
    //   '90-minute deep dive session',
    //   'Recording of your reading',
    //   'Integration guide & rituals',
    // ],
    buttonText: 'Book Your Archetypal Reading',
    buttonHref: 'https://visionembodiment.simplybook.it/v2/',
    // buttonHref: '/booking?service=archetypal-tarot',
    note: '24-hour cancellation policy. No refunds for completed sessions.',
  },
  faq: {
    title: 'Questions About Your Reading',
    items: [
      {
        question: 'Do I need experience with tarot?',
        answer: "No experience necessary! I'll guide you through everything. The archetypes speak to everyone, regardless of your familiarity with tarot.",
      },
      {
        question: 'Is this fortune-telling or prediction?',
        answer: 'No, this is about understanding your current energies, patterns, and potentials. We explore possibilities, not fixed futures. You always have free will.',
      },
      {
        question: 'Can I ask about specific situations?',
        answer: 'Absolutely! You can bring specific questions about relationships, career, life purpose, or any area where you seek clarity and guidance.',
      },
      {
        question: 'How often should I get a reading?',
        answer: 'Most clients find value in quarterly readings to align with seasonal cycles, or during major life transitions. Trust your intuition on timing.',
      },
    ],
  },
  cta: {
    title: 'The Cards Are Calling You',
    subtitle: 'Your archetypes are ready to reveal their wisdom. Book your journey into the depths of your psyche and emerge with clarity, purpose, and power.',
    buttonText: 'Book Your Archetypal Tarot Reading',
    buttonHref: 'https://visionembodiment.simplybook.it/v2/',
    // buttonHref: '/booking?service=archetypal-tarot',
  },
};

