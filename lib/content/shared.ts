export const siteConfig = {
  name: 'Vision Embodiment',
  tagline: 'Transform your vision into embodied reality through coaching and spiritual guidance.',
  contactEmail: 'vision.embodiment@gmail.com',
  supportEmail: 'vision.embodiment@gmail.com',
};

export const promotionBannerContent = {
  active: false,
  emoji: '🎉',
  title: 'Limited Time Offer!',
  description: 'Mind Games Reading - Only $15 (Regular $150)',
  buttonText: 'Book Now →',
  href: '/services/mind-games-reading',
};

export const navigationContent = {
  logo: siteConfig.name,
  bookNowText: 'Book Now',
  bookNowHref: 'https://visionembodiment.simplybook.it/v2/',
  // bookNowHref: '/booking',
  mobileMenuLabel: 'Open main menu',
};

export const commonButtonText = {
  bookNow: 'Book Now',
  learnMore: 'Learn More',
};

export const navigationLinks = [
  { name: 'Home', href: '/' },
 // { name: 'Products', href: '/products' },
  { name: 'Services', href: '/services' },
  // { name: 'Testimonials', href: '/testimonials' },
  { name: 'Community', href: '/community' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export const footerContent = {
  brand: {
    name: siteConfig.name,
    tagline: siteConfig.tagline,
  },
  links: {
    services: [
      { name: 'Mind Games Reading', href: '/services/mind-games-reading' },
      { name: 'One-to-One Coaching', href: '/services/one-to-one' },
      { name: 'Archetypal Tarot', href: '/services/archetypal-tarot' },
    ],
    company: [
      { name: 'About', href: '/about' },
      // { name: 'Testimonials', href: '/testimonials' },
      { name: 'Contact', href: '/contact' },
      { name: 'Community', href: '/community' },
    ],
    legal: [
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Cancellation Policy', href: '/terms#cancellation' },
    ],
  },
  copyright: `© {year} ${siteConfig.name}. All rights reserved.`,
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
