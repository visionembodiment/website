'use client';

import { useState, FormEvent } from 'react';
import { subscribeToNewsletter } from '@/app/actions/newsletter';
import { designSystem, cn } from '@/lib/design-system';

type NewsletterFormProps = {
  placeholder: string;
  buttonText: string;
  disclaimer: string;
  successMessage: string;
  loadingText: string;
  successButtonText: string;
};

export default function NewsletterForm({ placeholder, buttonText, disclaimer, successMessage, loadingText, successButtonText }: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) return;

    setStatus('loading');
    setErrorMessage('');

    const result = await subscribeToNewsletter(email);

    if (result.success) {
      setStatus('success');
      setEmail('');
    } else {
      setStatus('error');
      setErrorMessage(result.error || 'Failed to subscribe. Please try again.');
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className={cn(
          "flex flex-col sm:flex-row items-center",
          designSystem.layout.maxWidth.md,
          designSystem.spacing.margin.horizontal.auto,
          designSystem.spacing.gap.sm
        )}
      >
        <input
          type="email"
          placeholder={placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === 'loading' || status === 'success'}
          className={cn(
            "w-full sm:flex-1",
            designSystem.inputs.base,
            designSystem.colors.text.placeholder,
            designSystem.spacing.padding.horizontal.md,
            designSystem.spacing.padding.vertical.sm,
            designSystem.rounded.lg,
            status === 'loading' && 'opacity-60 cursor-not-allowed',
            status === 'success' && 'opacity-60'
          )}
          required
          aria-label="Email address"
        />
        <button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className={cn(
            designSystem.buttons.secondary,
            designSystem.buttons.sizes.small,
            designSystem.buttons.width.fixed,
            (status === 'loading' || status === 'success') && 'opacity-60 cursor-not-allowed'
          )}
        >
          {status === 'loading' ? loadingText : status === 'success' ? successButtonText : buttonText}
        </button>
      </form>

      {status === 'success' && (
        <p className={cn(
          designSystem.text.body.sm,
          designSystem.colors.text.success,
          designSystem.fontWeight.medium,
          designSystem.spacing.margin.top.sm,
          designSystem.layout.textAlign.center
        )}>
          ✓ {successMessage}
        </p>
      )}

      {status === 'error' && (
        <p className={cn(
          designSystem.text.body.sm,
          designSystem.colors.text.error,
          designSystem.fontWeight.medium,
          designSystem.spacing.margin.top.sm,
          designSystem.layout.textAlign.center
        )}>
          {errorMessage}
        </p>
      )}

      <p className={cn(
        designSystem.text.caption,
        designSystem.colors.text.secondary,
        designSystem.spacing.margin.top.sm,
        designSystem.layout.textAlign.center
      )}>
        {disclaimer}
      </p>
    </div>
  );
}
