# Newsletter Integration Guide

## Recommended: ConvertKit (Kit)

### Why ConvertKit?
- Free up to 1,000 subscribers
- Built for creators/coaches
- Great automation features
- Easy API integration
- Landing pages included

### Setup Steps:

1. **Create ConvertKit Account**
   - Go to https://convertkit.com
   - Sign up for free account
   - Get your API key from Settings

2. **Create Environment Variables**
   ```env
   CONVERTKIT_API_KEY=your_api_key_here
   CONVERTKIT_FORM_ID=your_form_id_here
   ```

3. **Newsletter Component Example**

```typescript
// components/NewsletterForm.tsx
import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Thank you for subscribing! Check your email for confirmation.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  };

  return (
    <div className="bg-purple-50 rounded-lg p-8">
      <h3 className="text-2xl font-bold text-purple-900 mb-2">
        Join the Vision Embodiment Community
      </h3>
      <p className="text-purple-700 mb-6">
        Weekly wisdom and transformational insights delivered to your inbox
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg border border-purple-200 focus:outline-none focus:border-purple-500"
            required
            disabled={status === 'loading'}
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 transition"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </div>

        {status === 'success' && (
          <p className="text-green-600">{message}</p>
        )}
        {status === 'error' && (
          <p className="text-red-600">{message}</p>
        )}
      </form>

      <p className="mt-4 text-sm text-purple-600">
        Join 500+ seekers on their transformation journey. No spam, unsubscribe anytime.
      </p>
    </div>
  );
}
```

4. **API Route Example**

```typescript
// app/api/newsletter/route.ts
import { NextResponse } from 'next/server';

const CONVERTKIT_API_KEY = process.env.CONVERTKIT_API_KEY;
const CONVERTKIT_FORM_ID = process.env.CONVERTKIT_FORM_ID;

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email) {
    return NextResponse.json(
      { message: 'Email is required' },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      `https://api.convertkit.com/v3/forms/${CONVERTKIT_FORM_ID}/subscribe`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          api_key: CONVERTKIT_API_KEY,
          email,
        }),
      }
    );

    if (response.ok) {
      return NextResponse.json(
        { message: 'Successfully subscribed!' },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: 'Failed to subscribe' },
        { status: 400 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: 'Server error' },
      { status: 500 }
    );
  }
}
```

## Alternative: EmailOctopus

If you prefer EmailOctopus (2,500 free subscribers):

```typescript
// API route for EmailOctopus
const EMAILOCTOPUS_API_KEY = process.env.EMAILOCTOPUS_API_KEY;
const EMAILOCTOPUS_LIST_ID = process.env.EMAILOCTOPUS_LIST_ID;

export async function POST(request: Request) {
  const { email } = await request.json();

  const response = await fetch(
    `https://emailoctopus.com/api/1.6/lists/${EMAILOCTOPUS_LIST_ID}/contacts`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        api_key: EMAILOCTOPUS_API_KEY,
        email_address: email,
        status: 'SUBSCRIBED',
      }),
    }
  );

  // Handle response...
}
```

## Popup Newsletter Form

For a popup version (appears after 30 seconds or on exit intent):

```typescript
// components/NewsletterPopup.tsx
import { useEffect, useState } from 'react';
import NewsletterForm from './NewsletterForm';

export default function NewsletterPopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show after 30 seconds
    const timer = setTimeout(() => {
      if (!localStorage.getItem('newsletter_shown')) {
        setShowPopup(true);
        localStorage.setItem('newsletter_shown', 'true');
      }
    }, 30000);

    // Exit intent
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !localStorage.getItem('newsletter_shown')) {
        setShowPopup(true);
        localStorage.setItem('newsletter_shown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-md w-full relative">
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <div className="p-8">
          <NewsletterForm />
        </div>
      </div>
    </div>
  );
}
```

## Community Page Integration

For a dedicated community page like your current site:

```typescript
// app/community/page.tsx
import NewsletterForm from '@/components/NewsletterForm';

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-purple-900 mb-6">
          Join Our Community
        </h1>
        
        <p className="text-xl text-purple-700 mb-12">
          Connect with like-minded souls on a journey of embodiment and transformation
        </p>

        <NewsletterForm />

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="font-bold text-purple-900 mb-2">Weekly Wisdom</h3>
            <p className="text-purple-700">Transformational insights delivered every week</p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl mb-4">🎁</div>
            <h3 className="font-bold text-purple-900 mb-2">Free Resources</h3>
            <p className="text-purple-700">Exclusive guides and meditation practices</p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl mb-4">💜</div>
            <h3 className="font-bold text-purple-900 mb-2">500+ Members</h3>
            <p className="text-purple-700">Join our growing community of seekers</p>
          </div>
        </div>
      </div>
    </div>
  );
}
```

## Implementation Checklist

- [ ] Choose newsletter service (ConvertKit recommended)
- [ ] Create account and get API credentials
- [ ] Add environment variables to .env.local
- [ ] Create NewsletterForm component
- [ ] Add API route for subscription
- [ ] Add form to homepage footer
- [ ] Create dedicated community page
- [ ] Test subscription flow
- [ ] Set up welcome email automation
- [ ] Create lead magnet (free guide/meditation)
- [ ] Add GDPR compliance checkbox
- [ ] Configure double opt-in
- [ ] Test on mobile devices