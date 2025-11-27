export const homePageContent = {
  sections: [
    { id: 'videoHero', enabled: true, background: 'background.primary' },
    { id: 'hero', enabled: true, background: 'gradient.lightToDark' },
    { id: 'services', enabled: true, background: 'background.primary' },
    { id: 'about', enabled: true, background: 'gradient.lightToDark' },
    { id: 'testimonials', enabled: true, background: 'background.primary' },
    { id: 'newsletter', enabled: true, background: 'background.secondary' },
    { id: 'cta', enabled: true, background: 'background.primary' },
  ],

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
    },
  },

  services: {
    title: 'Commit to the Change You Keep Avoiding',
    subtitle: "Claim the path that meets you where you are and moves you forward in a real way.",
    items: [
      {
        title: 'Mind Games Reading',
        description: 'Gain clarity on your self-sabotaging subconscious patterns and transform limiting beliefs.',
        price: '30€',
        duration: '30 minutes',
        href: '/services/mind-games-reading',
        bookingHref: '/booking?service=mind-games',
      },
      {
        title: 'One-to-One Coaching',
        description: 'Access to my best skills and a personalized transformation journey.',
        price: '90€',
        duration: '90 minutes',
        href: '/services/one-to-one',
        bookingHref: '/booking?service=one-to-one',
      },
      {
        title: 'Tarot Readings',
        description: 'Deep dive into your patterns that keep you stuck in life.',
        price: '60€',
        duration: '60 minutes',
        href: '/services/archetypal-tarot',
        bookingHref: '/booking?service=archetypal-tarot',
      },
    ],
  },

  about: {
    title: 'Meet Your Guide',
    intro: "I’m Alina Rain. I work at the intersection of trauma, shadow, and embodiment. My focus is simple: helping you close the gap between who you say you want to be and how you actually show up. I draw from years of somatic work, EMDR-based methods, shadow work, parts work, and grounded energetic frameworks. No shortcuts. Just practical tools that create real change.",
    philosophy: "Transformation lands when the body, the psyche, and the deeper self are finally on the same page. My work helps you meet the parts of you that keep repeating old patterns so you can build choices that hold under pressure. This is about becoming more you, not a performance of you. Through our work, you learn to inhabit your own life with clarity, honesty, and capacity.",
    buttonText: 'Read My Full Story',
    buttonHref: '/about',
  },

  testimonials: {
    title: 'Client Transformations',
    subtitle: 'Real stories from real people who have transformed their lives',
    buttonText: 'Read More Success Stories',
    buttonHref: '', //'/testimonials',
    items: [
      {
        name: 'Emma Thompson',
        service: 'Mind Games Reading',
        content: "Alina’s Mind Games reading is unlike anything I’ve tried before. She named the exact protective strategies I’ve been running on autopilot and showed me how they’ve been shaping my reactions, relationships, and decisions. The reading wasn’t abstract at all. It gave me clarity, direction, and a sense of personal agency I haven’t felt in years. I left feeling grounded, not overwhelmed.",
        rating: 5,
      },
      {
        name: 'Lea G.',
        service: 'One-to-One Coaching',
        content: "My sessions with Alina helped me remove blockages and change limiting beliefs that kept me stuck in expressing myself for so long. Through energy healing and somatic exploration combined with EMDR, I was able to move through the energetic blockages and trauma that kept me from being able to express myself, especially under pressure. It was not a short process, but I am glad I moved through it and I enjoy my newfound freedom in expressing myself more authentically as I enter a meaningful new phase of my life and much-improved relationships.",
        rating: 5,
      },
      {
        name: 'Valerie C.',
        service: 'Tarot Reading',
        content: 'Working with Alina was nothing like the usual tarot reading. She didn’t tell me what would happen. She showed me what I’ve been avoiding. The cards became a mirror for patterns I’ve been repeating for years, and her guidance helped me name the truth without shame or panic. I walked away with clarity, direction, and an actual plan instead of vague messages.',
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
