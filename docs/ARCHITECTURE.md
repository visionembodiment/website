# Clean Architecture Guide for Vision Embodiment Website

## Overview

This document outlines the Clean Architecture principles and patterns used in the Vision Embodiment website. The website is a marketing and service booking platform built with Next.js 15, focusing on simplicity, maintainability, and performance.

## Project Type & Architecture Approach

**This is a content-driven marketing website**, not a complex application with domain logic. Therefore, we use a **simplified architecture** compared to full Clean Architecture:

- **No domain layer** - This is a marketing site, not a business application
- **No use cases** - Simple CRUD operations handled by Server Actions (when needed)
- **Focus on presentation** - Components, UI, and content management
- **Clean separation of concerns** - Design system, content, and components

## Core Principles

### 1. Separation of Concerns

Content, styling, and behavior are separated into distinct layers:

```
Content (data) ← Design System (styling) ← Components (behavior/UI)
```

### 2. The Dependency Rule

Dependencies flow inward. Outer layers can depend on inner layers, but not vice versa:

```
[Components] ← [Design System]
     ↓
[Content Data]
```

### 3. Framework-Specific Patterns

We leverage Next.js App Router features while keeping business logic separate:
- **Server Components** for static content and SEO
- **Client Components** for interactivity
- **Server Actions** for form submissions and API calls

## Project Structure

```
vision-embodiment-website/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout (fonts, header, footer)
│   ├── page.tsx                  # Homepage
│   ├── about/page.tsx            # About page
│   ├── services/
│   │   ├── page.tsx              # Services overview
│   │   ├── one-to-one/page.tsx   # Service detail pages
│   │   ├── archetypal-tarot/page.tsx
│   │   └── mind-games-reading/page.tsx
│   ├── testimonials/page.tsx
│   ├── contact/page.tsx
│   ├── booking/page.tsx
│   ├── community/page.tsx
│   ├── terms/page.tsx
│   ├── privacy/page.tsx
│   └── globals.css               # Tailwind directives
│
├── components/                   # Reusable UI components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ServiceCard.tsx
│   └── TestimonialCard.tsx
│
├── lib/                          # Shared utilities and configuration
│   ├── design-system.ts          # Centralized design tokens
│   └── content.ts                # Centralized content data
│
├── public/                       # Static assets
│   └── (images, fonts, etc.)
│
└── docs/                         # Documentation
    ├── ARCHITECTURE.md           # This file
    ├── TESTING.md                # Testing guidelines
    ├── DEVELOPMENT-NOTES.md      # Code conventions
    ├── TESTING-NOTES.md          # Project-specific testing
    ├── WEBSITE_PLAN.md           # Project requirements
    └── NEWSLETTER_INTEGRATION.md # Integration guides
```

## Architectural Layers

### 1. Content Layer (Data)

**Purpose**: Centralized content management for all text, copy, and structured data.

**Location**: `lib/content.ts`

**Pattern**: Export typed content objects organized by page/section

```typescript
// lib/content.ts
export const homePageContent = {
  promotion: {
    emoji: "🎉",
    title: "Special Offer",
    description: "Limited time pricing",
    href: "/services/mind-games-reading",
    buttonText: "Learn More"
  },
  hero: {
    title: "Transform Your Vision Into Reality",
    subtitle: "Professional coaching and spiritual guidance",
    primaryButton: { text: "Book Your Session", href: "/booking" },
    // ... more content
  },
  // ... more sections
}
```

**Benefits**:
- Easy content updates without touching component code
- Type safety for content structure
- Single source of truth for all copy
- Easier translation/i18n in future

### 2. Design System Layer (Styling)

**Purpose**: Consistent, reusable design tokens for the entire application.

**Location**: `lib/design-system.ts`

**Pattern**: Export design tokens as configuration objects

```typescript
// lib/design-system.ts
export const designSystem = {
  colors: {
    background: {
      primary: 'bg-white',
      secondary: 'bg-purple-50',
      // ...
    },
    text: {
      primary: 'text-gray-900',
      secondary: 'text-gray-700',
      // ...
    },
  },

  cards: {
    base: "relative bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)]",
    hover: "hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300",
    // ...
  },

  buttons: {
    primary: "bg-purple-900 text-white px-8 py-4 rounded-lg hover:bg-purple-800",
    secondary: "border-2 border-purple-900 text-purple-900 px-8 py-4 rounded-lg hover:bg-purple-50",
    // ...
  },

  // ... more design tokens
}

// Utility for merging class names
export function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(' ');
}
```

**Benefits**:
- Single source of truth for all styling
- Consistent design across the site
- Easy theme changes (update tokens, not components)
- Type-safe styling patterns

### 3. Component Layer (Presentation)

**Purpose**: Reusable UI components that combine design system tokens with behavior.

**Location**: `components/` and `app/`

**Pattern**: Server Components by default, Client Components when needed

```typescript
// components/ServiceCard.tsx
import Link from 'next/link';
import { designSystem, cn } from '@/lib/design-system';

export default function ServiceCard({
  title,
  description,
  price,
  href
}: ServiceCardProps) {
  return (
    <div className={cn(designSystem.cards.base, designSystem.cards.hover)}>
      <h3 className={designSystem.text.heading3}>{title}</h3>
      <p className={designSystem.text.body}>{description}</p>
      <p className={designSystem.text.caption}>{price}</p>
      <Link href={href} className={designSystem.buttons.primary}>
        Learn More
      </Link>
    </div>
  );
}
```

**Component Types**:

1. **Page Components** (`app/**/page.tsx`)
   - Server Components by default
   - Fetch data, compose layout
   - Pass content and design tokens to child components

2. **Layout Components** (`app/layout.tsx`)
   - Wrap pages with shared UI (header, footer)
   - Load fonts and global styles
   - Define metadata for SEO

3. **Shared UI Components** (`components/`)
   - Reusable across multiple pages
   - Accept props for customization
   - Use design system tokens

## Next.js App Router Patterns

### Server Components (Default)

Use for:
- Static content pages
- SEO-critical pages
- Components that don't need interactivity

```typescript
// app/about/page.tsx - Server Component
export default function AboutPage() {
  return (
    <div>
      <h1>About Alina</h1>
      {/* Static content */}
    </div>
  );
}
```

### Client Components

Use when you need:
- Interactive state (`useState`, `useEffect`)
- Browser APIs
- Event handlers

```typescript
'use client';  // Required directive

import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle submission
  };

  return <form onSubmit={handleSubmit}>{/* ... */}</form>;
}
```

### Metadata for SEO

```typescript
// app/services/one-to-one/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "One-to-One Coaching - Vision Embodiment",
  description: "Transformational one-on-one coaching sessions with Alina Rain",
  openGraph: {
    title: "One-to-One Coaching",
    description: "Transformational coaching",
    type: "website",
  },
};
```

## Integration Patterns

### Future: Server Actions for Forms

When implementing newsletter signup or booking:

```typescript
// app/actions/newsletter.ts
'use server';

export async function subscribeToNewsletter(email: string) {
  // Validate input
  if (!email || !email.includes('@')) {
    return { success: false, error: 'Invalid email' };
  }

  // Call external API (ConvertKit, etc.)
  const response = await fetch('https://api.convertkit.com/...', {
    method: 'POST',
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    return { success: false, error: 'Subscription failed' };
  }

  return { success: true };
}
```

```typescript
// components/NewsletterForm.tsx
'use client';

import { subscribeToNewsletter } from '@/app/actions/newsletter';

export default function NewsletterForm() {
  const handleSubmit = async (formData: FormData) => {
    const email = formData.get('email') as string;
    const result = await subscribeToNewsletter(email);

    if (result.success) {
      // Show success message
    } else {
      // Show error
    }
  };

  return (
    <form action={handleSubmit}>
      <input name="email" type="email" required />
      <button type="submit">Subscribe</button>
    </form>
  );
}
```

### Future: API Routes

For external integrations (Stripe, Calendly):

```typescript
// app/api/create-payment-intent/route.ts
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(request: Request) {
  const { amount, serviceId } = await request.json();

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: 'usd',
    metadata: { serviceId },
  });

  return NextResponse.json({ clientSecret: paymentIntent.client_secret });
}
```

## Design System Usage

### ALWAYS Use Design Tokens

**Rule**: Never hardcode Tailwind classes in components. Always use design system tokens.

```typescript
// ❌ BAD - Hardcoded classes
<button className="bg-purple-900 text-white px-8 py-4 rounded-lg hover:bg-purple-800">
  Click Me
</button>

// ✅ GOOD - Using design system
import { designSystem } from '@/lib/design-system';

<button className={designSystem.buttons.primary}>
  Click Me
</button>
```

### Composing Design Tokens

Use the `cn()` utility to combine multiple design tokens:

```typescript
import { designSystem, cn } from '@/lib/design-system';

<div className={cn(
  designSystem.cards.base,
  designSystem.cards.hover,
  designSystem.cards.padding
)}>
  Content
</div>
```

### Adding Custom Styles

When you need component-specific styling:

```typescript
<div className={cn(
  designSystem.cards.base,
  designSystem.cards.hover,
  "custom-specific-class" // OK for one-off overrides
)}>
  Content
</div>
```

## Content Management Pattern

### Centralized Content

All text content lives in `lib/content.ts`, organized by page:

```typescript
// lib/content.ts
export const servicesPageContent = {
  title: "Our Services",
  subtitle: "Choose your transformation journey",
  services: [
    {
      title: "One-to-One Coaching",
      description: "Personalized guidance...",
      price: "From $200",
      href: "/services/one-to-one",
    },
    // ... more services
  ],
}
```

### Using Content in Pages

```typescript
// app/services/page.tsx
import { servicesPageContent } from '@/lib/content';
import { designSystem, cn } from '@/lib/design-system';

export default function ServicesPage() {
  const { title, subtitle, services } = servicesPageContent;

  return (
    <div>
      <h1 className={designSystem.text.heading1}>{title}</h1>
      <p className={designSystem.text.body}>{subtitle}</p>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map(service => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </div>
  );
}
```

## Benefits of This Architecture

1. **Maintainability**
   - Content changes don't require code changes
   - Design changes happen in one place
   - Components are simple and focused

2. **Consistency**
   - Design system enforces visual consistency
   - Content structure enforces copy consistency
   - Patterns are predictable and repeatable

3. **Type Safety**
   - TypeScript ensures correct prop usage
   - Content structure is typed
   - Design tokens have autocomplete

4. **Performance**
   - Server Components reduce JavaScript bundle
   - Static content pre-rendered at build time
   - Client-side JavaScript only where needed

5. **SEO-Friendly**
   - Server-rendered HTML for all pages
   - Metadata API for proper tags
   - Fast page loads improve rankings

## Best Practices

### 1. Keep Pages Simple

Pages should be composition, not logic:

```typescript
// ✅ GOOD - Page is just composition
export default function HomePage() {
  const { hero, services, testimonials } = homePageContent;

  return (
    <>
      <HeroSection {...hero} />
      <ServicesSection {...services} />
      <TestimonialsSection {...testimonials} />
    </>
  );
}
```

### 2. Use Server Components by Default

Only add `'use client'` when absolutely necessary:
- Forms with state
- Interactive widgets
- Browser API usage

### 3. Colocate Related Code

Keep components, types, and tests together:

```
components/
├── ServiceCard.tsx
├── ServiceCard.test.tsx
└── ServiceCard.types.ts
```

### 4. Extract Common Patterns

When you see repeated patterns, extract to design system:

```typescript
// If you use this pattern 3+ times, add to design system
const commonCard = "bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition";

// Add to lib/design-system.ts
cards: {
  common: "bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
}
```

### 5. Document Component Props

Use TypeScript interfaces and JSDoc:

```typescript
interface ServiceCardProps {
  /** Service title displayed as heading */
  title: string;
  /** Brief description of the service */
  description: string;
  /** Price string (e.g., "From $200") */
  price: string;
  /** Link to service detail page */
  href: string;
}
```

## Migration and Evolution

### When to Introduce Clean Architecture Layers

If the site grows to include:
- Complex booking logic → Add use cases
- User accounts/profiles → Add domain entities
- Payment processing → Add repositories/services

For now, the simplified architecture is appropriate for a content-driven marketing site.

### Future Enhancements

Potential architecture additions:
1. **Domain Layer** - If business rules become complex
2. **Repository Pattern** - For database interactions
3. **Service Layer** - For third-party integrations
4. **State Management** - Zustand/Redux if global state needed

## Testing Strategy

See [TESTING.md](./TESTING.md) for comprehensive testing guidelines.

Quick overview:
- **Components**: Visual and behavior testing
- **Content**: Type safety ensures correctness
- **Design System**: Visual regression testing
- **Server Actions**: Integration testing
- **API Routes**: Unit and integration testing

## Performance Considerations

### Image Optimization

Use Next.js Image component:

```typescript
import Image from 'next/image';

<Image
  src="/alina-profile.jpg"
  alt="Alina Rain"
  width={400}
  height={400}
  priority // For above-the-fold images
/>
```

### Font Optimization

Fonts are loaded via `next/font` in `app/layout.tsx`:

```typescript
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"] });
```

### Bundle Size

- Server Components = 0 client-side JavaScript
- Only interactive components add to bundle
- Use dynamic imports for heavy components

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect to Vercel
3. Auto-deploys on push to main

### Environment Variables

Required for production:
- `CONVERTKIT_API_KEY` - Newsletter integration
- `STRIPE_SECRET_KEY` - Payment processing
- `CALENDLY_API_KEY` - Booking integration

## Conclusion

This simplified Clean Architecture approach provides:
- **Clarity**: Easy to understand and navigate
- **Maintainability**: Simple to update and extend
- **Performance**: Leverages Next.js optimizations
- **Scalability**: Can add complexity as needed

The architecture prioritizes pragmatism over purity, following Clean Architecture principles while staying appropriate for a content-driven marketing website.
