'use client';

import { useState } from 'react';
import { FaInstagram, FaFacebook, FaLinkedin, FaTiktok, FaYoutube, FaTwitch, FaEnvelope } from 'react-icons/fa';
import { SiKick } from 'react-icons/si';
import { designSystem, cn, getSectionBackground } from '@/lib/design-system';
import { contactPageContent, socialLinks } from '@/lib/content';
import NewsletterForm from '@/components/NewsletterForm';
import { submitContactForm } from '@/app/actions/contact';

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
  return Icon ? <Icon className="w-6 h-6" /> : null;
};

export default function ContactPage() {
  const { sections } = contactPageContent;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const result = await submitContactForm(formData);

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(result.error || 'Something went wrong');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={cn("min-h-screen", designSystem.colors.background.primary)}>
      {/* Hero Section */}
      <section className={cn(getSectionBackground(sections, 'hero'), designSystem.spacing.section.full)}>
        <div className={designSystem.layout.container}>
          <div className={cn(designSystem.layout.maxWidth["4xl"], designSystem.spacing.margin.horizontal.auto, designSystem.layout.textAlign.center)}>
            <h1 className={cn(designSystem.text.h1, designSystem.colors.text.primary, designSystem.spacing.margin.bottom.md)}>
              {contactPageContent.hero.title}
            </h1>
            <p className={cn(designSystem.text.body.xl, designSystem.colors.text.secondary)}>
              {contactPageContent.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className={cn(getSectionBackground(sections, 'main'), designSystem.spacing.section.full)}>
        <div className={designSystem.layout.container}>
          <div className={cn(designSystem.layout.maxWidth["6xl"], designSystem.spacing.margin.horizontal.auto)}>
            <div className={cn("grid lg:grid-cols-2", designSystem.spacing.gap.xl)}>
              {/* Contact Form */}
              <div>
                <h2 className={cn(designSystem.text.h2, designSystem.colors.text.accent, designSystem.spacing.margin.bottom.md, designSystem.fontWeight.bold)}>
                  {contactPageContent.form.title}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className={cn(designSystem.text.body.md, designSystem.colors.text.primary, designSystem.fontWeight.medium, "block mb-2")}>
                      {contactPageContent.form.fields.name.label}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={cn(designSystem.inputs.base, "w-full px-4 py-3")}
                      placeholder={contactPageContent.form.fields.name.placeholder}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className={cn(designSystem.text.body.md, designSystem.colors.text.primary, designSystem.fontWeight.medium, "block mb-2")}>
                      {contactPageContent.form.fields.email.label}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={cn(designSystem.inputs.base, "w-full px-4 py-3")}
                      placeholder={contactPageContent.form.fields.email.placeholder}
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className={cn(designSystem.text.body.md, designSystem.colors.text.primary, designSystem.fontWeight.medium, "block mb-2")}>
                      {contactPageContent.form.fields.subject.label}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={cn(designSystem.inputs.base, "w-full px-4 py-3")}
                      placeholder={contactPageContent.form.fields.subject.placeholder}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className={cn(designSystem.text.body.md, designSystem.colors.text.primary, designSystem.fontWeight.medium, "block mb-2")}>
                      {contactPageContent.form.fields.message.label}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className={cn(designSystem.inputs.base, "w-full px-4 py-3 resize-none")}
                      placeholder={contactPageContent.form.fields.message.placeholder}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className={cn(designSystem.buttons.secondary, designSystem.buttons.layout.block, "disabled:opacity-50 disabled:cursor-not-allowed")}
                  >
                    {status === 'loading' ? contactPageContent.form.submitButton.loading : contactPageContent.form.submitButton.default}
                  </button>

                  {status === 'success' && (
                    <div className={cn(designSystem.spacing.padding.md, "bg-lime-900/20 border border-lime-600", designSystem.rounded.lg)}>
                      <p className={cn(designSystem.text.body.md, designSystem.colors.text.success)}>
                        {contactPageContent.form.successMessage}
                      </p>
                    </div>
                  )}

                  {status === 'error' && (
                    <div className={cn(designSystem.spacing.padding.md, "bg-red-900/20 border border-red-600", designSystem.rounded.lg)}>
                      <p className={cn(designSystem.text.body.md, designSystem.colors.text.error)}>
                        {errorMessage || contactPageContent.form.errorMessage}
                      </p>
                    </div>
                  )}
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className={cn(designSystem.text.h2, designSystem.colors.text.accent, designSystem.spacing.margin.bottom.md, designSystem.fontWeight.bold)}>
                  {contactPageContent.contactInfo.title}
                </h2>

                <div className={cn("space-y-6", designSystem.spacing.margin.bottom.xl)}>
                  {contactPageContent.contactInfo.items.map((item) => (
                    <div key={item.icon} className={cn("flex items-start", designSystem.spacing.gap.md)}>
                      <div className={cn("flex-shrink-0 w-12 h-12", designSystem.colors.background.accent, designSystem.rounded.full, "flex items-center justify-center")}>
                        <svg className={cn("w-6 h-6", designSystem.colors.text.inverse.primary)} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          {item.icon === 'email' && (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          )}
                          {item.icon === 'clock' && (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          )}
                          {item.icon === 'globe' && (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          )}
                        </svg>
                      </div>
                      <div>
                        <h3 className={cn(designSystem.text.body.lg, designSystem.fontWeight.semibold, designSystem.colors.text.primary)}>{item.title}</h3>
                        <p className={cn(designSystem.text.body.md, designSystem.colors.text.secondary)}>{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className={designSystem.spacing.margin.bottom.xl}>
                  <h3 className={cn(designSystem.text.h3, designSystem.fontWeight.semibold, designSystem.colors.text.primary, designSystem.spacing.margin.bottom.md)}>
                    {contactPageContent.social.title}
                  </h3>
                  <div className={cn("flex flex-wrap", designSystem.spacing.gap.md)}>
                    {socialLinks.filter(link => !link.hidden).map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        className={cn("w-12 h-12", designSystem.colors.background.accent, designSystem.rounded.full, "flex items-center justify-center", designSystem.colors.hover.background.gold, "transition-colors")}
                        aria-label={social.name}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className={designSystem.colors.text.inverse.primary}>
                          <SocialIcon icon={social.icon} />
                        </span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* FAQ */}
                <div>
                  <h3 className={cn(designSystem.text.h3, designSystem.fontWeight.semibold, designSystem.colors.text.primary, designSystem.spacing.margin.bottom.md)}>
                    {contactPageContent.faq.title}
                  </h3>
                  <div className="space-y-4">
                    {contactPageContent.faq.items.map((faq, index) => (
                      <div key={index} className={cn("border-b", designSystem.colors.border.primary, "pb-4")}>
                        <h4 className={cn(designSystem.text.body.md, designSystem.fontWeight.medium, designSystem.colors.text.primary, "mb-2")}>{faq.question}</h4>
                        <p className={cn(designSystem.text.body.sm, designSystem.colors.text.secondary)}>{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className={cn(getSectionBackground(sections, 'newsletter'), designSystem.spacing.section.full)}>
        <div className={designSystem.layout.container}>
          <div className={cn(designSystem.layout.maxWidth["3xl"], designSystem.spacing.margin.horizontal.auto, designSystem.layout.textAlign.center)}>
            <h2 className={cn(designSystem.text.h2, designSystem.colors.text.accent, designSystem.spacing.margin.bottom.sm, designSystem.fontWeight.bold)}>
              {contactPageContent.newsletter.title}
            </h2>
            <p className={cn(designSystem.text.body.xl, designSystem.colors.text.secondary, designSystem.spacing.margin.bottom.lg)}>
              {contactPageContent.newsletter.subtitle}
            </p>
            <div className={cn("max-w-2xl mx-auto")}>
              <NewsletterForm
                placeholder={contactPageContent.newsletter.placeholder}
                buttonText={contactPageContent.newsletter.buttonText}
                disclaimer={contactPageContent.newsletter.disclaimer}
                successMessage={contactPageContent.newsletter.successMessage}
                loadingText={contactPageContent.newsletter.loadingText}
                successButtonText={contactPageContent.newsletter.successButtonText}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={cn(getSectionBackground(sections, 'cta'), designSystem.spacing.section.full)}>
        <div className={designSystem.layout.container}>
          <div className={cn(designSystem.layout.maxWidth["3xl"], designSystem.spacing.margin.horizontal.auto, designSystem.layout.textAlign.center)}>
            <h2 className={cn(designSystem.text.h2, designSystem.colors.text.accent, designSystem.spacing.margin.bottom.md, designSystem.fontWeight.bold)}>
              {contactPageContent.cta.title}
            </h2>
            <p className={cn(designSystem.text.body.xl, designSystem.colors.text.secondary, contactPageContent.cta.buttonHref ? designSystem.spacing.margin.bottom.lg : "")}>
              {contactPageContent.cta.description}
            </p>
            {contactPageContent.cta.buttonHref && (
              <a
                href={contactPageContent.cta.buttonHref}
                className={cn(designSystem.buttons.secondary, "text-lg")}
              >
                {contactPageContent.cta.buttonText}
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}