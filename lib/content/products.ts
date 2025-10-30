export const productsPageContent = {
  sections: [
    { id: 'hero', enabled: true, background: 'gradient.darkToLight' },
    { id: 'featured', enabled: true, background: 'background.secondary' },
    { id: 'courses', enabled: true, background: 'background.primary' },
    { id: 'resources', enabled: true, background: 'background.secondary' },
    { id: 'upcoming', enabled: true, background: 'gradient.primary' },
    { id: 'testimonials', enabled: true, background: 'background.secondary' },
    { id: 'cta', enabled: true, background: 'gradient.lightToDark' },
  ],

  hero: {
    title: 'Courses & Digital Products',
    subtitle: 'Transform your life with our carefully crafted courses, workshops, and resources designed to support your journey of embodied transformation.',
  },

  featured: {
    title: 'Featured Offering',
    product: {
      title: 'Vision Embodiment Masterclass',
      description: 'A comprehensive 8-week journey to transform your vision into embodied reality through coaching, energy work, and practical integration.',
      price: '$497',
      originalPrice: '$797',
      features: [
        '8 live group coaching calls',
        'Weekly integration practices',
        'Private community access',
        'Lifetime access to recordings',
        'Bonus: Energy clearing meditation pack',
      ],
      buttonText: 'Join the Masterclass',
      buttonHref: '/booking?product=masterclass',
      badge: 'LIMITED SPOTS',
    },
  },

  courses: {
    title: 'Self-Paced Courses',
    subtitle: 'Learn at your own pace with our transformative digital courses',
    buttonText: 'View All Courses',
    buttonHref: '/products/courses',
    items: [
      {
        title: 'Shadow Work Foundations',
        description: 'Dive deep into your shadow to reclaim lost parts of yourself and integrate for wholeness.',
        price: '$97',
        duration: '4 weeks',
        includes: '12 video lessons, workbook, meditations',
        href: '/products/shadow-work',
        status: 'Available Now',
      },
      {
        title: 'Somatic Healing Basics',
        description: 'Learn foundational somatic practices to release stored trauma and reconnect with your body wisdom.',
        price: '$127',
        duration: '6 weeks',
        includes: '15 video lessons, practice recordings',
        href: '/products/somatic-healing',
        status: 'Available Now',
      },
      {
        title: 'Archetypal Awakening',
        description: 'Explore the 12 archetypes and discover which patterns are guiding (or blocking) your life.',
        price: '$87',
        duration: '3 weeks',
        includes: '10 lessons, archetypal assessment, guide',
        href: '/products/archetypal-awakening',
        status: 'Available Now',
      },
      {
        title: 'Energy Mastery Fundamentals',
        description: 'Learn to sense, clear, and direct energy for healing and manifestation in your daily life.',
        price: '$117',
        duration: '5 weeks',
        includes: '18 video lessons, energy practices, guided meditations',
        href: '/products/energy-mastery',
        status: 'Available Now',
      },
    ],
  },

  resources: {
    title: 'Digital Resources',
    subtitle: 'Instant access tools and guides for your transformation',
    buttonText: 'View All Products',
    buttonHref: '/products/resources',
    itemButtonText: 'Get It',
    items: [
      {
        title: 'Energy Clearing Meditation Pack',
        description: 'A collection of 7 guided meditations for clearing energy, protecting your field, and grounding.',
        price: '$27',
        type: 'Audio Pack',
        href: '/products/energy-clearing',
      },
      {
        title: 'Inner Child Healing Workbook',
        description: 'Comprehensive 50-page workbook with exercises, journaling prompts, and healing practices.',
        price: '$17',
        type: 'PDF Workbook',
        href: '/products/inner-child-workbook',
      },
      {
        title: 'Daily Integration Practice Guide',
        description: 'Simple daily practices to embody your transformation and maintain your momentum.',
        price: '$12',
        type: 'PDF Guide',
        href: '/products/integration-guide',
      },
      {
        title: 'Nervous System Regulation Toolkit',
        description: 'Evidence-based techniques to regulate your nervous system and return to safety.',
        price: '$22',
        type: 'Video Series',
        href: '/products/nervous-system-toolkit',
      },
    ],
  },

  upcoming: {
    title: 'Coming Soon',
    subtitle: 'Be the first to know when these transformative offerings launch',
    items: [
      {
        title: 'Embodied Leadership Program',
        description: 'A 12-week intensive for visionaries ready to step into authentic leadership.',
        launchDate: 'March 2025',
        waitlistHref: '/waitlist?product=leadership',
      },
      {
        title: 'Trauma-Informed Coaching Certification',
        description: 'Become a certified trauma-informed coach with our comprehensive training program.',
        launchDate: 'Spring 2025',
        waitlistHref: '/waitlist?product=coaching-cert',
      },
    ],
  },

  testimonials: {
    title: 'Student Success Stories',
    subtitle: 'Real transformations from our courses and programs',
    items: [
      {
        name: 'Jennifer Silva',
        product: 'Vision Embodiment Masterclass',
        content: 'This masterclass completely transformed how I approach my goals. I finally have the tools to turn my vision into reality.',
        rating: 5,
      },
      {
        name: 'Marcus Johnson',
        product: 'Shadow Work Foundations',
        content: 'The shadow work course helped me integrate parts of myself I had been rejecting for years. Life-changing work.',
        rating: 5,
      },
      {
        name: 'Sophia Rodriguez',
        product: 'Somatic Healing Basics',
        content: 'Learning to work with my body rather than against it has been revolutionary. Thank you, Alina!',
        rating: 5,
      },
    ],
  },

  cta: {
    title: 'Ready to Deepen Your Practice?',
    subtitle: 'Join thousands of students who have transformed their lives through our courses and programs.',
    buttonText: 'Book a Discovery Call',
    buttonHref: '/booking',
  },
};

