export const homePageContent = {
  sections: [
    { id: 'videoHero', enabled: true },
    { id: 'hero', enabled: true },
    { id: 'services', enabled: true },
    { id: 'about', enabled: true },
    { id: 'testimonials', enabled: true },
    { id: 'newsletter', enabled: true },
    { id: 'cta', enabled: true },
  ],

  promotion: {
    active: true,
    emoji: '🎉',
    title: 'Limited Time Offer!',
    description: 'Mind Games Reading - Only $15 (Regular $150)',
    buttonText: 'Book Now →',
    href: '/services/mind-games-reading',
  },

  videoHero: {
    videoUrl: '/videos/hero-background.mp4',
    mobileVideoUrl: '/videos/hero-background-mobile.mp4',
    posterImage: '/images/hero-background-poster.webp',
    posterPlaceholder: '/images/hero-background-poster-placeholder.webp',
    mobilePosterImage: '/images/hero-background-poster-mobile.webp',
    mobilePosterPlaceholder: '/images/hero-background-poster-mobile-placeholder.webp',
    title: 'Transform Your Dreams Into Embodied Reality',
  },

  hero: {
    title: 'The World Needs Your Vision Made Real!',
    subtitle: 'Professional coaching, energetic healing and spiritual guidance to unlock your full potential and create lasting transformation in your life.',
    primaryButton: {
      text: 'Book Discovery Session',
      href: 'https://calendly.com/vision-embodiment/free-discovery-session',
    },
    secondaryButton: {
      text: 'Learn More',
      href: '/about',
    },
    profile: {
      name: 'Alina Rain',
      title: 'Trauma Conscious Intuitive Healer',
      description: 'Helping visionaries and seekers transform their dreams into embodied reality through ancient wisdom and modern coaching techniques.',
      image: '/images/alina-profile.png',
      emoji: '✨',
    },
  },

  services: {
    title: 'Transform Through Sacred Services',
    subtitle: "Choose the path that resonates with your soul's journey",
    items: [
      {
        title: 'Mind Games Reading',
        description: 'Unlock your subconscious patterns and transform limiting beliefs through guided exploration.',
        price: '$15',
        duration: '60 minutes',
        href: '/services/mind-games-reading',
        bookingHref: '/booking?service=mind-games',
      },
      {
        title: 'One-to-One Coaching',
        description: 'Personalized transformation journey with weekly sessions and continuous support.',
        price: '$200',
        duration: '60 minutes',
        href: '/services/one-to-one',
        bookingHref: '/booking?service=one-to-one',
      },
      {
        title: 'Archetypal Tarot',
        description: 'Deep dive into your archetypal patterns using ancient wisdom and modern psychology.',
        price: '$175',
        duration: '90 minutes',
        href: '/services/archetypal-tarot',
        bookingHref: '/booking?service=archetypal-tarot',
      },
    ],
  },

  about: {
    title: 'Meet Your Guide',
    intro: "I'm Alina Rain, an embodiment coach and spiritual guide dedicated to helping you bridge the gap between your vision and reality. With over a decade of experience in transformational coaching, I combine ancient wisdom traditions with modern psychological insights.",
    philosophy: "My approach is rooted in the belief that true transformation happens when we align our mind, body, and spirit. Through our work together, you'll discover your authentic self and learn to embody your highest potential.",
    buttonText: 'Read My Full Story',
    buttonHref: '/about',
  },

  testimonials: {
    title: 'Client Transformations',
    subtitle: 'Real stories from real people who"ve transformed their lives',
    buttonText: 'Read More Success Stories',
    buttonHref: '', //'/testimonials',
    items: [
      {
        name: 'Sarah Mitchell',
        service: 'One-to-One Coaching',
        content: "Working with Alina has been transformative. Her intuitive guidance helped me break through patterns I've struggled with for years.",
        rating: 5,
      },
      {
        name: 'Michael Chen',
        service: 'Archetypal Tarot',
        content: 'The archetypal reading was incredibly accurate and gave me profound insights into my life path. Highly recommended!',
        rating: 5,
      },
      {
        name: 'Emma Thompson',
        service: 'Mind Games Reading',
        content: "Alina's unique approach helped me understand my subconscious blocks. I feel more aligned and empowered than ever.",
        rating: 5,
      },
    ],
  },

  newsletter: {
    title: 'Join the Vision Embodiment Community',
    subtitle: 'Receive weekly wisdom, transformation tips, and exclusive offers',
    placeholder: 'Enter your email',
    buttonText: 'Subscribe',
    disclaimer: 'Join 1,000+ seekers. No spam, unsubscribe anytime.',
    successMessage: 'Thank you for subscribing! Check your email (including spam folder) for confirmation.',
    loadingText: 'Subscribing...',
    successButtonText: 'Subscribed!',
  },

  cta: {
    title: 'Ready to Begin Your Transformation?',
    subtitle: 'Take the first step towards embodying your vision. Book a complimentary discovery session to explore how we can work together.',
    buttonText: 'Book Your Free Discovery Call',
    buttonHref: '/booking',
  },
};

export const aboutPageContent = {
  hero: {
    title: 'Meet Alina Rain',
    videoId: 'EqetHVj51cM',
  },

  visualBreak1: {
    image: '/images/about/mystical-nature-1.jpg',
    alt: 'Ethereal forest light filtering through trees',
  },

  visualBreak2: {
    image: '/images/about/mystical-nature-2.jpg',
    alt: 'Sacred geometric patterns in nature',
  },

  visualBreak3: {
    image: '/images/about/mystical-nature-3.jpg',
    alt: 'Mystical energy and transformation',
  },

  professionallySpeaking: {
    title: 'Professionally Speaking',
    sections: [
      {
        heading: 'The Beginning',
        paragraphs: [
          "Growing up, I always knew there were unhealthy patterns in my family that were passed down. At 15 when my mother went abroad for work, I knew I had to stand on my own two feet and begin my deep dive into psychology and personal development. I wanted to deconstruct, deprogram, and heal what was keeping me stuck.",
        ],
      },
      {
        heading: 'Walking the Path',
        paragraphs: [
          "My journey led me to shadow work, somatics, and energy healing, not just as concepts but as embodied experiences. I have walked the path of depression, suicidal ideation, attachment wounds, and burnout, and my search for healing took me through many layers of spirituality, psychology, and self-discovery.",
        ],
      },
      {
        pullQuote: "Healing is not just about understanding — it's about integration.",
      },
      {
        heading: 'A Turning Point',
        paragraphs: [
          "After being laid off from my software engineering job and losing my mental health benefits while in the middle of deep EMDR work, I made a choice to train myself so I would never be in a position where healing was taken from me again. This led me to Embody Lab, where I studied under some of the most respected experts in the field of somatics and trauma healing.",
        ],
      },
      {
        heading: 'Lessons from Academia',
        paragraphs: [
          "Before entering the tech industry, I also worked as a research assistant in nanotechnology and began a PhD program. However, I ultimately dropped out due to burnout and the toxic environment created by working under a narcissistic supervisor. This was a pivotal realization for me - unhealthy relationship dynamics don't just exist in personal life, they show up in work environments too.",
        ],
      },
      {
        heading: 'My Approach',
        paragraphs: [
          "While I am not a licensed therapist, I bring a deeply trauma-informed, client-centered, and intuitive approach to my work. Every client's journey is unique, and I meet them where they are - whether that means focusing on coaching, shadow work, somatic healing, energy work, or psychedelic integration.",
          "My work is not about quick fixes, it's about real transformation that honors the nervous system, the subconscious, and the soul.",
        ],
      },
    ],
  },

  credentials: {
    title: 'Credentials & Training',
    items: [
      { title: 'ICF Certified Coach', description: 'International Coach Federation Accredited' },
      { title: 'Embodiment Practitioner', description: 'Certified in Somatic Experiencing' },
      { title: 'Tarot Master', description: '15+ years of archetypal study' },
      { title: 'Energy Healer', description: 'Reiki Master Teacher' },
    ],
  },

  personallySpeaking: {
    title: 'Personally Speaking',
    sections: [
      {
        paragraphs: [
          "I am a seeker, a deep thinker, and a lifelong learner. My mind is hungry for knowledge - always curious, always exploring. Outside of my work, you can find me in nature, immersed in witchy rituals, music, and art.",
          "I am passionate about slow living, honoring my neurodivergence (self-diagnosed AuDHD, CPTSD), and embodying my true essence instead of masking or conforming to a society that was not built for my nervous system.",
        ],
      },
      {
        pullQuote: "My journey isn't about 'fixing' myself — it's about expanding my capacity for joy, embodiment, and self-expression.",
      },
      {
        paragraphs: [
          "After experiencing autistic burnout at 28, I began re-learning how to live in alignment with my energy, my needs, and my truth.",
          "I am devoted to walking my own healing path with the same depth and integrity that I offer to my clients.",
        ],
      },
    ],
  },

  timeline: {
    title: 'My Timeline',
    events: [
      { year: '2010', event: 'Started my spiritual awakening journey' },
      { year: '2013', event: 'Completed first coaching certification' },
      { year: '2015', event: 'Launched Vision Embodiment practice' },
      { year: '2018', event: 'Published "Embodied Transformation" methodology' },
      { year: '2020', event: 'Expanded to international online coaching' },
      { year: '2024', event: 'Reached 500+ transformed clients milestone' },
    ],
  },

  values: {
    title: 'My Values',
    items: [
      {
        title: 'Healing with integrity',
        description: 'No spiritual bypassing, no quick fixes, no fake guru culture - just deep, ethical, and embodied transformation.',
      },
      {
        title: 'Trauma-informed and client-centered',
        description: "Every client's process is unique, and healing must be paced, resourced, and safe.",
      },
      {
        title: 'Bridging the mystical and the practical',
        description: 'Integrating somatics, EMDR, shadow work, and energy healing in a way that is grounded, responsible, and transformative.',
      },
      {
        title: 'Decolonized and conscious spirituality',
        description: 'Rejecting commercialized, appropriative, and exploitative healing trends in favor of ethics, respect, and responsibility.',
      },
      {
        title: 'Empowerment over dependency',
        description: "Healing is not about becoming reliant on a practitioner - it's about reclaiming self-trust, self-sovereignty, and embodiment.",
      },
      {
        title: 'A safe space for all identities',
        description: "This is not a space for spiritual bypassing, conspiracy theories, or harmful ideologies. We actively reject racism, homophobia, transphobia, fascism, and alt-right ideologies. Healing happens in safety.",
      },
    ],
  },

  mission: {
    title: 'Mission',
    manifesto: [
      "I provide deep, ethical, trauma-informed healing.",
      "I help you integrate your shadows.",
      "Reconnect with your body.",
      "Reclaim your authentic self.",
      "I guide with integrity, discernment, and a blend of somatic, spiritual, and psychological wisdom.",
      "This is real transformation.",
      "Not quick fixes. Not spiritual bypassing.",
      "This is the work.",
    ],
  },

  personalNote: {
    title: 'A Personal Note',
    sections: [
      {
        paragraphs: [
          "I see you. I hear you. And I want you to know that your divine weirdness and non-conformity are your greatest gifts. I know how it feels to be the one who always sticks out, to feel like you have to lose pieces of yourself just to fit in. I also know the power of reclaiming those lost parts, healing in your own way, and stepping fully into your own zone of genius.",
        ],
      },
      {
        pullQuote: "Healing isn't about becoming someone else — it's about becoming more YOU.",
      },
      {
        paragraphs: [
          "If my story resonates with you, if you're seeking deep, embodied transformation, I would love to walk alongside you on your journey.",
          "If this resonates, let's connect. Whether you're seeking coaching, shadow work, somatic healing, or just a safe space to explore your next step, I'm here to support you.",
        ],
      },
    ],
  },

  cta: {
    title: 'Ready to Begin Your Journey?',
    subtitle: "Let's explore how we can work together to transform your vision into embodied reality.",
    primaryButton: {
      text: 'Book Discovery Session',
      href: 'https://calendly.com/vision-embodiment/free-discovery-session',
    },
    secondaryButton: {
      text: 'Explore Services',
      href: '/services',
    },
  },
};

export const servicesPageContent = {
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
      icon: '🧠',
    },
    {
      title: 'One-to-One Coaching',
      description: 'Personalized transformation journey with weekly sessions, continuous support, and customized action plans.',
      price: '$200',
      duration: '60 minutes',
      href: '/services/one-to-one',
      bookingHref: '/booking?service=one-to-one',
      icon: '💜',
    },
    {
      title: 'Archetypal Tarot',
      description: 'Deep dive into your archetypal patterns using ancient wisdom and modern psychology for profound insights.',
      price: '$175',
      duration: '90 minutes',
      href: '/services/archetypal-tarot',
      bookingHref: '/booking?service=archetypal-tarot',
      icon: '🔮',
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

export const mindGamesReadingContent = {
  hero: {
    title: 'Mind Games Reading',
    subtitle: 'Unlock the hidden patterns of your mind and transform limiting beliefs into empowering truths through this powerful guided exploration.',
    price: '$15',
    originalPrice: '$150',
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
      "Your mind is playing games with you—but not in the way you might think. These \"games\" are the unconscious patterns, beliefs, and stories that shape your reality without your awareness.",
      'A Mind Games Reading is a revolutionary approach that combines coaching psychology, neuroscience insights, and intuitive guidance to help you see through the illusions your mind creates.',
      "In this 60-minute transformative session, we'll dive deep into your mental landscape, identify the games being played, and give you the tools to rewrite the rules in your favor.",
    ],
    benefits: [
      'Identify and release limiting beliefs',
      'Understand your subconscious patterns',
      'Gain clarity on mental blocks',
      'Transform negative thought loops',
      'Activate your inner wisdom',
      'Create new neural pathways',
    ],
  },
  process: {
    title: 'The Session Process',
    steps: [
      {
        title: 'Opening & Grounding',
        description: 'We begin with a centering practice to create a safe container for exploration.',
      },
      {
        title: 'Pattern Identification',
        description: 'Through guided questioning, we uncover the mental patterns running your life.',
      },
      {
        title: 'Deep Dive Exploration',
        description: 'We explore the root causes and hidden beliefs behind these patterns.',
      },
      {
        title: 'Transformation & Integration',
        description: "You'll receive tools and practices to transform these patterns into empowering beliefs.",
      },
    ],
  },
  testimonials: {
    title: 'Client Experiences',
    items: [
      {
        name: 'Emma Thompson',
        content: "The Mind Games Reading helped me see patterns I've been blind to for years. Alina's approach is both gentle and profoundly transformative.",
        rating: 5,
      },
      {
        name: 'David Martinez',
        content: 'I was skeptical at first, but this session completely shifted my perspective. Worth every penny!',
        rating: 5,
      },
      {
        name: 'Lisa Chen',
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
      '60-minute transformative session',
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
        question: 'Is this the same as therapy?',
        answer: "No, Mind Games Reading is a coaching and guidance session focused on pattern recognition and transformation. It's not a replacement for therapy but can complement therapeutic work beautifully.",
      },
      {
        question: 'How should I prepare?',
        answer: 'Come with an open mind and perhaps a specific area of life where you feel stuck or confused. Have a journal ready to capture insights.',
      },
      {
        question: 'What happens after the session?',
        answer: "You'll receive a follow-up email with key insights from our session and integration practices to help you continue the transformation.",
      },
    ],
  },
  cta: {
    title: 'Ready to See Through the Games?',
    subtitle: "Your mind has been running the show long enough. It's time to take back control and create the reality you desire.",
    buttonText: 'Book Your Mind Games Reading - $15',
    buttonHref: '/booking?service=mind-games',
  },
};

export const oneToOneCoachingContent = {
  hero: {
    title: 'One-to-One Coaching',
    subtitle: "Your personalized journey to profound transformation. Work directly with me to bridge the gap between where you are and where you're meant to be.",
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

export const archetypalTarotContent = {
  hero: {
    title: 'Archetypal Tarot Reading',
    subtitle: 'Journey into the depths of your psyche through the ancient wisdom of tarot combined with Jungian archetypal psychology for profound self-discovery.',
    price: '$175',
    primaryButton: {
      text: 'Book Your Reading - $175',
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
          description: "You'll intuitively choose cards that reflect your energy",
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
        '90-minute deep dive session via Zoom',
        'Personalized archetypal reading',
        'Integration of Jungian psychology',
        'Connection to your life patterns',
        'Recording of your session',
        'Follow-up integration guide',
        'Personalized ritual recommendations',
      ],
    },
  },
  testimonials: {
    title: 'Sacred Reflections',
    items: [
      {
        name: 'Jessica Palmer',
        title: 'Therapist',
        content: "The archetypal reading with Alina was unlike any tarot experience I've had. She wove together the symbolism with such depth and psychological insight that I left with a completely new understanding of my life patterns. The recording has become a treasured resource I return to often.",
        rating: 5,
      },
      {
        name: 'Robert Kim',
        title: 'Executive',
        content: "I was at a major crossroads in my life and the archetypal tarot reading provided exactly the clarity I needed. Alina's ability to connect the cards to my personal journey was remarkable. I made my decision with confidence.",
        rating: 5,
      },
    ],
  },
  pricing: {
    title: "Investment in Your Soul's Journey",
    price: '$175',
    duration: '90-minute Archetypal Tarot Reading',
    includes: [
      '90-minute deep dive session',
      'Recording of your reading',
      'Integration guide & rituals',
    ],
    buttonText: 'Book Your Archetypal Reading',
    buttonHref: '/booking?service=archetypal-tarot',
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
    buttonHref: '/booking?service=archetypal-tarot',
  },
};

export const contactPageContent = {
  // Contact page specific content would go here
};

export const navigationLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  // { name: 'Testimonials', href: '/testimonials' },
  { name: 'Community', href: '/community' },
  { name: 'Contact', href: '/contact' },
];

export const socialLinks = [
  { name: 'Email', href: 'mailto:vision.embodiment@gmail.com', icon: 'email', hidden: false },
  { name: 'TikTok', href: 'https://www.tiktok.com/@vision.embodiment', icon: 'tiktok', hidden: false },
  { name: 'Instagram', href: 'https://www.instagram.com/vision.embodiment/', icon: 'instagram', hidden: false },
  { name: 'YouTube', href: 'https://www.youtube.com/@vision.embodiment/featured', icon: 'youtube', hidden: false },
  { name: 'Facebook', href: 'https://facebook.com/visionembodiment', icon: 'facebook', hidden: true },
  { name: 'Twitch', href: 'https://twitch.tv/visionembodiment', icon: 'twitch', hidden: true },
  { name: 'Kick', href: 'https://kick.com/visionembodiment', icon: 'kick', hidden: true },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/visionembodiment', icon: 'linkedin', hidden: true },
];