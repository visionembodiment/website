# Development Notes

## Code Conventions

### Design System First

**CRITICAL RULE**: Always use the design system for styling. Never hardcode Tailwind classes directly in components.

**Pattern**:
```typescript
// ❌ BAD - Hardcoded Tailwind classes
<button className="bg-purple-900 text-white px-8 py-4 rounded-lg hover:bg-purple-800">
  Click Me
</button>

// ✅ GOOD - Using design system
import { designSystem } from '@/lib/design-system';

<button className={designSystem.buttons.primary}>
  Click Me
</button>
```

**When to add to design system**: If you use a style combination 3+ times, extract it to the design system.

### Content First

**CRITICAL RULE**: All text content must be in `lib/content/`, organized by page in separate files.

**Pattern**:
```typescript
// ❌ BAD - Hardcoded text in components
<h1>Transform Your Vision Into Reality</h1>

// ✅ GOOD - Using centralized content
import { homePageContent } from '@/lib/content';

<h1>{homePageContent.hero.title}</h1>
```

**Content Structure**:
```
lib/content/
├── index.ts              # Re-exports all content
├── shared.ts             # Shared content (navigation, social links)
├── home.ts               # Home page content
├── about.ts              # About page content
├── services.ts           # Services overview
└── [page-name].ts        # Other page content files
```

**Benefits**:
- Easy content updates without touching code
- Single source of truth for all copy
- Organized by page for easier maintenance
- Shared content (navigation, social) centralized
- Easier to add i18n later
- Type-safe content structure

### Component Composition

**Principle**: Components should compose, not duplicate.

**Pattern**: Extract reusable components when you see the same UI pattern 2+ times.

```typescript
// ✅ GOOD - Reusable ServiceCard component
export default function ServicesPage() {
  return (
    <div>
      {servicesPageContent.items.map(service => (
        <ServiceCard key={service.title} {...service} />
      ))}
    </div>
  );
}
```

### Server vs Client Components

**Default**: Use Server Components unless you need interactivity.

**Use Server Components** (no `'use client'` directive) for:
- Static content pages
- SEO-critical content
- Data fetching
- Layouts

**Use Client Components** (`'use client'` directive) for:
- Forms with state (`useState`)
- Interactive widgets
- Browser APIs
- Event handlers that need state

```typescript
// Server Component (default)
export default function AboutPage() {
  return <div>Static content</div>;
}

// Client Component (requires directive)
'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [email, setEmail] = useState('');
  // ... interactive logic
}
```

### File Organization

```
app/
├── page.tsx                    # Homepage (Server Component)
├── layout.tsx                  # Root layout (fonts, metadata)
├── about/page.tsx              # About page (Server Component)
└── services/
    ├── page.tsx                # Services overview
    └── one-to-one/page.tsx     # Service detail

components/
├── Header.tsx                  # Shared header (Server Component)
├── Footer.tsx                  # Shared footer (Server Component)
├── ServiceCard.tsx             # Reusable card (Server Component)
└── ContactForm.tsx             # Interactive form (Client Component)

lib/
├── design-system.ts            # Design tokens
└── content/                    # Content organized by page
    ├── index.ts                # Re-exports all content
    ├── shared.ts               # Shared content (navigation, social)
    └── [page-name].ts          # Page-specific content files
```

### Import Conventions

**Use path aliases** for cleaner imports:

```typescript
// ✅ GOOD - Using @ alias
import { designSystem } from '@/lib/design-system';
import Header from '@/components/Header';

// ❌ BAD - Relative paths
import { designSystem } from '../../lib/design-system';
import Header from '../components/Header';
```

Path aliases are configured in `tsconfig.json`:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

### Naming Conventions

**Files**: PascalCase for components, kebab-case for utilities
- `ServiceCard.tsx` - Component
- `design-system.ts` - Utility/config

**Components**: PascalCase
- `ServiceCard`, `Header`, `Footer`

**Functions**: camelCase
- `cn()`, `subscribeToNewsletter()`

**Constants**: UPPER_SNAKE_CASE for truly immutable values, camelCase for exports
- `const MAX_RETRIES = 3` - Within file
- `export const designSystem = { ... }` - Exported config

### Comments

**Only add comments that explain WHY, not WHAT.**

```typescript
// ❌ BAD - Obvious comment
// Set email to user's email
setEmail(user.email);

// ✅ GOOD - Explains reasoning
// Prefill email from URL parameter for easier conversion from marketing emails
setEmail(searchParams.get('email') || '');
```

**Keep comments to a MINIMUM. Write self-documenting code.**

```typescript
// ❌ BAD
// Check if user is premium
if (user.tier === 'premium' || user.tier === 'enterprise') {
  // Apply discount
  price = price * 0.8;
}

// ✅ GOOD - Self-documenting
const isPremiumUser = user.tier === 'premium' || user.tier === 'enterprise';
const PREMIUM_DISCOUNT = 0.8;

if (isPremiumUser) {
  price = price * PREMIUM_DISCOUNT;
}
```

### TypeScript Conventions

**Use types for props, interfaces for objects**:

```typescript
// Props (simple, one-time use)
type ServiceCardProps = {
  title: string;
  description: string;
  price: string;
  href: string;
}

// Data structures (can be extended)
interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
}
```

**Avoid `any`, use `unknown` if truly unknown**:

```typescript
// ❌ BAD
const data: any = await response.json();

// ✅ GOOD
const data: unknown = await response.json();
// Then validate/narrow the type
if (isValidData(data)) {
  // data is now typed correctly
}
```

**Use optional chaining and nullish coalescing**:

```typescript
// ✅ GOOD
const userName = user?.profile?.name ?? 'Guest';

// ❌ BAD
const userName = user && user.profile && user.profile.name ? user.profile.name : 'Guest';
```

## Architecture Patterns

### Design System Pattern

All styling lives in `lib/design-system.ts`:

```typescript
export const designSystem = {
  colors: {
    background: { /* ... */ },
    text: { /* ... */ },
  },
  buttons: {
    primary: "...",
    secondary: "...",
  },
  cards: {
    base: "...",
    hover: "...",
  },
}

// Utility for composing classes
export function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(' ');
}
```

**Usage**:
```typescript
import { designSystem, cn } from '@/lib/design-system';

<div className={cn(
  designSystem.cards.base,
  designSystem.cards.hover,
  isActive && "border-2 border-purple-600" // Conditional override
)}>
  Content
</div>
```

### Content Management Pattern

All text lives in `lib/content/`, with one file per page:

```typescript
// lib/content/home.ts
export const homePageContent = {
  sections: [...],
  hero: {
    title: "The World Needs Your Vision Made Real!",
    subtitle: "Professional coaching and spiritual guidance...",
    primaryButton: { text: "Book Session", href: "/booking" },
  },
  services: {
    title: "Transform Through Sacred Services",
    items: [...],
  },
  // ... more sections
}

// lib/content/shared.ts
export const promotionBannerContent = { ... };
export const navigationLinks = [ ... ];
export const socialLinks = [ ... ];
```

**Working with Content**:

1. **To update page content**: Edit the corresponding file in `lib/content/[page-name].ts`
2. **To add shared content** (navigation, social links): Edit `lib/content/shared.ts`
3. **To create new page content**: Create new file `lib/content/new-page.ts` and export from `lib/content/index.ts`
4. **Import in components**: `import { pageContent, socialLinks } from '@/lib/content'`

**Example - Updating Contact Page**:
```typescript
// 1. Edit lib/content/contact.ts
export const contactPageContent = {
  hero: {
    title: "Let's Connect",  // ← Update this
  },
  // ...
}

// 2. Use in component
import { contactPageContent } from '@/lib/content';  // ← No changes needed
```

### Server Actions Pattern (Future)

When adding forms or API calls:

```typescript
// app/actions/newsletter.ts
'use server';

export async function subscribeToNewsletter(email: string) {
  // Validate
  if (!isValidEmail(email)) {
    return { success: false, error: 'Invalid email' };
  }

  // Call API
  const response = await fetch('https://api.convertkit.com/...', {
    method: 'POST',
    body: JSON.stringify({ email }),
  });

  // Handle response
  if (!response.ok) {
    return { success: false, error: 'Subscription failed' };
  }

  return { success: true };
}
```

**Usage in Client Component**:
```typescript
'use client';

import { subscribeToNewsletter } from '@/app/actions/newsletter';

export default function NewsletterForm() {
  const handleSubmit = async (formData: FormData) => {
    const email = formData.get('email') as string;
    const result = await subscribeToNewsletter(email);

    if (result.success) {
      // Show success
    } else {
      // Show error
    }
  };

  return <form action={handleSubmit}>...</form>;
}
```

## Testing Conventions

See [TESTING.md](./TESTING.md) for comprehensive testing guidelines.

**Quick rules**:
- Test files: `Component.test.tsx` next to `Component.tsx`
- Use Arrange, Act, Assert pattern
- Test behavior, not implementation
- Use semantic queries (`getByRole`, `getByLabelText`)

```typescript
// Arrange
const user = userEvent.setup();
render(<Component />);

// Act
await user.click(screen.getByRole('button'));

// Assert
expect(screen.getByText('Success')).toBeInTheDocument();
```

## Git Workflow

### Commit Messages

Follow conventional commits:

```
feat: Add newsletter subscription form
fix: Correct service card hover animation
docs: Update README with setup instructions
style: Apply design system to testimonials page
refactor: Extract booking form into separate component
test: Add tests for contact form validation
```

### Branch Naming

```
feature/newsletter-integration
fix/service-card-hover
refactor/extract-booking-form
docs/update-architecture
```

## Environment Variables

### Development (.env.local)

```env
# Newsletter Integration
CONVERTKIT_API_KEY=your_key_here
CONVERTKIT_FORM_ID=your_form_id

# Payment Processing (future)
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLISHABLE_KEY=pk_test_...

# Booking Integration (future)
CALENDLY_API_KEY=your_key_here
```

### Production

Set these in Vercel/deployment platform:
- Use production API keys
- Never commit `.env.local` to git
- Add `.env.local` to `.gitignore`

## Performance Best Practices

### Image Optimization

Always use Next.js Image component:

```typescript
import Image from 'next/image';

<Image
  src="/alina-profile.jpg"
  alt="Alina Rain, Professional Coach"
  width={400}
  height={400}
  priority  // For above-the-fold images
/>
```

### Font Optimization

Fonts are loaded in `app/layout.tsx`:

```typescript
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap', // Better performance
});
```

### Code Splitting

Use dynamic imports for heavy components:

```typescript
import dynamic from 'next/dynamic';

// Only loads when needed
const CalendlyWidget = dynamic(
  () => import('@/components/CalendlyWidget'),
  { ssr: false } // Client-side only
);
```

## SEO Best Practices

### Metadata

Every page should export metadata:

```typescript
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "One-to-One Coaching - Vision Embodiment",
  description: "Transformational coaching sessions with Alina Rain. Personalized guidance for your spiritual journey.",
  openGraph: {
    title: "One-to-One Coaching",
    description: "Transformational coaching sessions",
    type: "website",
    images: ['/og-image-coaching.jpg'],
  },
};
```

### Semantic HTML

Use proper heading hierarchy:

```typescript
<article>
  <h1>One-to-One Coaching</h1>
  <section>
    <h2>What You'll Gain</h2>
    <h3>Deep Personal Insight</h3>
    {/* content */}
  </section>
</article>
```

### Accessibility

- Use semantic HTML (`<nav>`, `<main>`, `<article>`)
- Include alt text for images
- Ensure keyboard navigation works
- Test with screen readers

## Common Patterns

### Conditional Rendering

```typescript
// ✅ GOOD - Clear and readable
{isLoading ? (
  <LoadingSpinner />
) : (
  <Content />
)}

// ✅ GOOD - For simple cases
{error && <ErrorMessage message={error} />}

// ❌ BAD - Too complex inline
{isLoading ? <LoadingSpinner /> : error ? <ErrorMessage /> : data ? <Content /> : <Empty />}
```

### Array Mapping

Always provide stable keys:

```typescript
// ✅ GOOD
{services.map(service => (
  <ServiceCard key={service.id} {...service} />
))}

// ⚠️ OK for static content
{services.map((service, index) => (
  <ServiceCard key={service.title} {...service} />
))}

// ❌ BAD - Using index as key for dynamic lists
{items.map((item, index) => (
  <Item key={index} {...item} />
))}
```

### Form Handling

Use controlled components:

```typescript
'use client';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      {/* ... */}
    </form>
  );
}
```

## Debugging Tips

### Next.js Specific

**Check if component is Server or Client**:
```typescript
// Add at top of component
console.log('Rendering:', typeof window === 'undefined' ? 'Server' : 'Client');
```

**Inspect HTML output**:
```bash
# Build and check generated HTML
npm run build
# Look in .next/server/app/**/page.html
```

**Check bundle size**:
```bash
npm run build
# Look for "First Load JS" in output
```

### Common Issues

**"You're importing a component that needs useState but none of its parent components are marked with 'use client'"**
- Solution: Add `'use client'` directive at the top of the file

**"Module not found: Can't resolve '@/components/...'**
- Solution: Check `tsconfig.json` has path alias configured
- Restart TypeScript server in VS Code

**Hydration errors**
- Solution: Ensure server and client render the same HTML
- Check for browser-only APIs in Server Components
- Use `suppressHydrationWarning` as last resort

## Development Workflow

1. **Start development server**
   ```bash
   npm run dev
   ```

2. **Make changes**
   - Edit components in `components/` or `app/`
   - Update content in `lib/content/[page-name].ts`
   - Update shared content in `lib/content/shared.ts`
   - Update styles in `lib/design-system.ts`

3. **Test locally**
   - Visit http://localhost:3000
   - Check responsive design
   - Test forms and interactions

4. **Run linter**
   ```bash
   npm run lint
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

6. **Preview production build**
   ```bash
   npm run start
   ```

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Web Content Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## Project-Specific Notes

### Color Palette

Primary colors (from design system):
- **Purple 900** (#480d37) - Primary brand color
- **Purple 50** - Background accents
- **Yellow 600** - CTA buttons and accents
- **Gray scale** - Text and neutrals

### Typography

- **Headings**: Playfair Display (serif, elegant)
- **Body**: Inter (sans-serif, readable)
- Configured in `app/layout.tsx` using `next/font`

### Services Offered

1. **Mind Games Reading** - $15 special pricing
2. **One-to-One Coaching** - From $200
3. **Archetypal Tarot** - $175

All service details in `lib/content/` organized by service page

### Future Enhancements

See [WEBSITE_PLAN.md](./WEBSITE_PLAN.md) for:
- Newsletter integration (ConvertKit)
- Payment processing (Stripe)
- Booking system (Calendly)
- Analytics (GA4)

## Troubleshooting

### TypeScript Errors

**"Type 'X' is not assignable to type 'Y'"**
- Check component prop types match content types
- Ensure design system token exists
- Verify import paths are correct

### Build Errors

**"Module not found"**
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `npm install`
- Check import paths use `@/` alias

### Styling Issues

**"Styles not applying"**
- Check design system token exists in `lib/design-system.ts`
- Verify Tailwind CSS is configured correctly
- Clear browser cache

## Conclusion

This project follows a simplified Clean Architecture approach optimized for a content-driven marketing website:

1. **Design System First** - All styling centralized
2. **Content First** - All text centralized
3. **Server Components Default** - Better performance and SEO
4. **Type Safety** - TypeScript everywhere
5. **Testing** - Focus on user behavior and critical paths

Keep it simple, maintainable, and focused on delivering value to users.
