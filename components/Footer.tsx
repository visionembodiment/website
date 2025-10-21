import Link from 'next/link';
import { FaInstagram, FaFacebook, FaLinkedin, FaTiktok, FaYoutube, FaTwitch, FaEnvelope } from 'react-icons/fa';
import { SiKick } from 'react-icons/si';
import { designSystem, cn } from '@/lib/design-system';
import { socialLinks } from '@/lib/content';

const SocialIcon = ({ icon }: { icon: string }) => {
  const icons = {
    email: FaEnvelope,
    tiktok: FaTiktok,
    instagram: FaInstagram,
    youtube: FaYoutube,
    facebook: FaFacebook,
    twitch: FaTwitch,
    kick: SiKick,
    linkedin: FaLinkedin,
  };

  const Icon = icons[icon as keyof typeof icons];
  return Icon ? <Icon className="w-5 h-5" /> : null;
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Mind Games Reading', href: '/services/mind-games-reading' },
      { name: 'One-to-One Coaching', href: '/services/one-to-one' },
      { name: 'Archetypal Tarot', href: '/services/archetypal-tarot' },
    ],
    company: [
      { name: 'About', href: '/about' },
      { name: 'Testimonials', href: '/testimonials' },
      { name: 'Contact', href: '/contact' },
      { name: 'Community', href: '/community' },
    ],
    legal: [
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Cancellation Policy', href: '/terms#cancellation' },
    ],
  };

  return (
    <footer className={cn(designSystem.colors.background.primary, designSystem.colors.text.primary)}>
      <div className={cn(designSystem.layout.container, designSystem.spacing.padding.vertical.xl)}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <h3 className={cn(designSystem.text.h3, designSystem.spacing.margin.bottom.sm)}>Vision Embodiment</h3>
            <p className={cn(designSystem.colors.text.secondary, designSystem.spacing.margin.bottom.sm)}>
              Transform your vision into embodied reality through coaching and spiritual guidance.
            </p>
            <div className="flex space-x-4">
              {socialLinks.filter(link => !link.hidden).map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={designSystem.links.base}
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{social.name}</span>
                  <SocialIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className={cn(designSystem.text.body.lg, designSystem.fontWeight.semibold, designSystem.spacing.margin.bottom.sm)}>Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={designSystem.links.subtle}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className={cn(designSystem.text.body.lg, designSystem.fontWeight.semibold, designSystem.spacing.margin.bottom.sm)}>Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={designSystem.links.subtle}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className={cn(designSystem.text.body.lg, designSystem.fontWeight.semibold, designSystem.spacing.margin.bottom.sm)}>Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={designSystem.links.subtle}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={cn(designSystem.spacing.margin.top.lg, designSystem.spacing.padding.vertical.lg, designSystem.dividers.horizontal)}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className={cn(designSystem.colors.text.secondary, designSystem.text.body.sm, "mb-4 md:mb-0")}>
              © {currentYear} Vision Embodiment. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}