import Link from 'next/link';
import { designSystem, cn } from '@/lib/design-system';

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

  const socialLinks = [
    { name: 'Instagram', href: '#', icon: 'instagram' },
    { name: 'Facebook', href: '#', icon: 'facebook' },
    { name: 'LinkedIn', href: '#', icon: 'linkedin' },
  ];

  return (
    <footer className={cn(designSystem.colors.background.footer, designSystem.colors.text.primary)}>
      <div className={cn(designSystem.layout.container, designSystem.spacing.padding.vertical.xl)}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <h3 className={cn(designSystem.text.h3, designSystem.spacing.margin.bottom.sm)}>Vision Embodiment</h3>
            <p className={cn(designSystem.colors.text.secondary, designSystem.spacing.margin.bottom.sm)}>
              Transform your vision into embodied reality through coaching and spiritual guidance.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={designSystem.links.base}
                  aria-label={social.name}
                >
                  <span className="sr-only">{social.name}</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
                  </svg>
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
        <div className={cn(designSystem.spacing.margin.top.lg, designSystem.spacing.padding.vertical.lg, designSystem.colors.border.divider)}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className={cn(designSystem.colors.text.secondary, designSystem.text.body.sm, "mb-4 md:mb-0")}>
              © {currentYear} Vision Embodiment. All rights reserved.
            </p>
            <div className={cn("flex items-center space-x-4", designSystem.colors.text.secondary, designSystem.text.body.sm)}>
              <span>✓ SSL Secured</span>
              <span>✓ GDPR Compliant</span>
              <span>✓ Trusted by 500+ Clients</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}