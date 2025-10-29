'use client';

import { useState } from 'react';
import { designSystem, cn } from '@/lib/design-system';
import { contactPageContent } from '@/lib/content';
import NewsletterForm from '@/components/NewsletterForm';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const services = [
    'General Inquiry',
    'Mind Games Reading',
    'One-to-One Coaching',
    'Archetypal Tarot',
    'Other',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', service: '', message: '' });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={cn("min-h-screen", designSystem.colors.background.primary)}>
      {/* Hero Section */}
      <section className={cn(designSystem.colors.gradient.darkToLight, designSystem.spacing.section.full)}>
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
      <section className={designSystem.spacing.section.full}>
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
                    <label htmlFor="service" className={cn(designSystem.text.body.md, designSystem.colors.text.primary, designSystem.fontWeight.medium, "block mb-2")}>
                      {contactPageContent.form.fields.service.label}
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={cn(designSystem.inputs.base, "w-full px-4 py-3")}
                    >
                      <option value="">{contactPageContent.form.fields.service.placeholder}</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
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
                    className={cn(designSystem.buttons.primary, designSystem.buttons.layout.block, "disabled:opacity-50 disabled:cursor-not-allowed")}
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
                        {contactPageContent.form.errorMessage}
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
                  <div className={cn("flex", designSystem.spacing.gap.md)}>
                    <a
                      href="#"
                      className={cn("w-12 h-12", designSystem.colors.background.accent, designSystem.rounded.full, "flex items-center justify-center", designSystem.colors.hover.background.gold, "transition-colors")}
                      aria-label="Instagram"
                    >
                      <svg className={cn("w-6 h-6", designSystem.colors.text.inverse.primary)} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className={cn("w-12 h-12", designSystem.colors.background.accent, designSystem.rounded.full, "flex items-center justify-center", designSystem.colors.hover.background.gold, "transition-colors")}
                      aria-label="Facebook"
                    >
                      <svg className={cn("w-6 h-6", designSystem.colors.text.inverse.primary)} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className={cn("w-12 h-12", designSystem.colors.background.accent, designSystem.rounded.full, "flex items-center justify-center", designSystem.colors.hover.background.gold, "transition-colors")}
                      aria-label="LinkedIn"
                    >
                      <svg className={cn("w-6 h-6", designSystem.colors.text.inverse.primary)} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
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
      <section className={cn(designSystem.colors.background.secondary, designSystem.spacing.section.full)}>
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
      <section className={cn(designSystem.colors.background.primary, designSystem.spacing.section.full)}>
        <div className={designSystem.layout.container}>
          <div className={cn(designSystem.layout.maxWidth["3xl"], designSystem.spacing.margin.horizontal.auto, designSystem.layout.textAlign.center)}>
            <h2 className={cn(designSystem.text.h2, designSystem.colors.text.accent, designSystem.spacing.margin.bottom.md, designSystem.fontWeight.bold)}>
              {contactPageContent.cta.title}
            </h2>
            <p className={cn(designSystem.text.body.xl, designSystem.colors.text.secondary, designSystem.spacing.margin.bottom.lg)}>
              {contactPageContent.cta.description}
            </p>
            <a
              href={contactPageContent.cta.buttonHref}
              className={cn(designSystem.buttons.secondary, "text-lg")}
            >
              {contactPageContent.cta.buttonText}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}