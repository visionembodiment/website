export const homePageContent = {
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
    buttonHref: '/testimonials',
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
  },

  cta: {
    title: 'Ready to Begin Your Transformation?',
    subtitle: 'Take the first step towards embodying your vision. Book a complimentary discovery session to explore how we can work together.',
    buttonText: 'Book Your Free Discovery Call',
    buttonHref: '/booking',
  },
};

export const aboutPageContent = {
  // About page specific content would go here
};

export const servicesPageContent = {
  // Services page specific content would go here
};

export const contactPageContent = {
  // Contact page specific content would go here
};

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