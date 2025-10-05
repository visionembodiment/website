# Testing Notes - Project-Specific Patterns

This document contains testing patterns and solutions specific to the Vision Embodiment website that don't belong in the general testing guidelines.

## Next.js App Router Testing Patterns

### Testing Server Components

Server Components can't use React hooks like `useState` or `useEffect`. They're tested like pure components:

```typescript
// app/about/page.test.tsx
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import AboutPage from './page'

describe('AboutPage', () => {
  it('renders all main sections', () => {
    render(<AboutPage />)

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getByText(/credentials/i)).toBeInTheDocument()
    expect(screen.getByText(/philosophy/i)).toBeInTheDocument()
  })

  it('uses content from centralized content file', () => {
    render(<AboutPage />)

    expect(screen.getByText(/alina rain/i)).toBeInTheDocument()
  })
})
```

### Testing Client Components with Forms

Forms require `'use client'` and state management:

```typescript
// components/NewsletterForm.test.tsx
import { describe, it, expect, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import NewsletterForm from './NewsletterForm'

describe('NewsletterForm', () => {
  it('submits email successfully', async () => {
    // Arrange
    const user = userEvent.setup()
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: true })
    })

    render(<NewsletterForm />)

    // Act
    await user.type(screen.getByPlaceholderText(/email/i), 'test@example.com')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))

    // Assert
    await waitFor(() => {
      expect(screen.getByText(/thank you/i)).toBeInTheDocument()
    })
  })

  it('shows error for invalid email', async () => {
    const user = userEvent.setup()
    render(<NewsletterForm />)

    await user.type(screen.getByPlaceholderText(/email/i), 'not-an-email')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))

    expect(await screen.findByText(/valid email/i)).toBeInTheDocument()
  })
})
```

## Testing with Design System

### Pattern: Test Visual Behavior, Not CSS Classes

Don't test implementation details like class names. Test visual outcomes:

```typescript
// ❌ BAD - Testing implementation
it('applies correct classes', () => {
  render(<ServiceCard {...props} />)
  const card = screen.getByRole('article')
  expect(card).toHaveClass('bg-white', 'rounded-2xl', 'shadow-lg')
})

// ✅ GOOD - Testing behavior
it('is visible and clickable', () => {
  render(<ServiceCard {...props} />)
  const link = screen.getByRole('link', { name: /learn more/i })
  expect(link).toBeVisible()
  expect(link).toHaveAttribute('href', '/services/one-to-one')
})
```

### Testing Design System Utilities

The `cn()` utility should have unit tests:

```typescript
// lib/design-system.test.ts
import { describe, it, expect } from 'vitest'
import { cn } from './design-system'

describe('cn utility', () => {
  it('combines multiple classes', () => {
    expect(cn('class-1', 'class-2')).toBe('class-1 class-2')
  })

  it('filters falsy values', () => {
    expect(cn('class-1', false, undefined, 'class-2')).toBe('class-1 class-2')
  })

  it('handles conditional classes', () => {
    const isActive = true
    expect(cn('base', isActive && 'active')).toBe('base active')
    expect(cn('base', !isActive && 'active')).toBe('base')
  })
})
```

## Testing Content Management

### Validating Content Structure

Test that content has the expected shape:

```typescript
// lib/content.test.ts
import { describe, it, expect } from 'vitest'
import { homePageContent, servicesPageContent } from './content'

describe('Content validation', () => {
  it('homepage has all required sections', () => {
    expect(homePageContent.promotion).toBeDefined()
    expect(homePageContent.hero).toBeDefined()
    expect(homePageContent.services).toBeDefined()
    expect(homePageContent.testimonials).toBeDefined()
    expect(homePageContent.newsletter).toBeDefined()
    expect(homePageContent.cta).toBeDefined()
  })

  it('all services have required fields', () => {
    servicesPageContent.items.forEach(service => {
      expect(service.title).toBeTruthy()
      expect(service.description).toBeTruthy()
      expect(service.price).toBeTruthy()
      expect(service.href).toMatch(/^\/services\//)
    })
  })

  it('CTAs have valid links', () => {
    expect(homePageContent.hero.primaryButton.href).toMatch(/^\//)
    expect(homePageContent.hero.secondaryButton.href).toMatch(/^\//)
  })
})
```

### SEO Content Validation

```typescript
// lib/content.test.ts
describe('SEO compliance', () => {
  it('meta descriptions are under 160 characters', () => {
    const descriptions = [
      homePageContent.hero.subtitle,
      // Add other meta descriptions
    ]

    descriptions.forEach(desc => {
      expect(desc.length).toBeLessThan(160)
    })
  })

  it('headings are concise', () => {
    expect(homePageContent.hero.title.length).toBeLessThan(70)
    expect(homePageContent.services.title.length).toBeLessThan(70)
  })
})
```

## Testing Server Actions (Future)

When newsletter/booking integration is added:

```typescript
// app/actions/newsletter.test.ts
import { describe, it, expect, vi } from 'vitest'
import { subscribeToNewsletter } from './newsletter'

describe('subscribeToNewsletter', () => {
  it('validates email format', async () => {
    const result = await subscribeToNewsletter('invalid')

    expect(result.success).toBe(false)
    expect(result.error).toContain('email')
  })

  it('calls ConvertKit API', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ subscription: { id: '123' } })
    })

    const result = await subscribeToNewsletter('test@example.com')

    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining('api.convertkit.com'),
      expect.objectContaining({
        method: 'POST'
      })
    )
    expect(result.success).toBe(true)
  })

  it('handles API errors gracefully', async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error('Network error'))

    const result = await subscribeToNewsletter('test@example.com')

    expect(result.success).toBe(false)
    expect(result.error).toBeTruthy()
  })
})
```

## Testing Metadata for SEO

Every page should have proper metadata:

```typescript
// app/services/one-to-one/page.test.tsx
import { describe, it, expect } from 'vitest'
import { metadata } from './page'

describe('OneToOne Metadata', () => {
  it('has SEO-optimized title', () => {
    expect(metadata.title).toContain('One-to-One Coaching')
    expect(metadata.title).toContain('Vision Embodiment')
    expect(metadata.title.length).toBeLessThan(60)
  })

  it('has proper description', () => {
    expect(metadata.description).toBeTruthy()
    expect(metadata.description.length).toBeLessThan(160)
    expect(metadata.description).toContain('coaching')
  })

  it('has OpenGraph tags', () => {
    expect(metadata.openGraph).toBeDefined()
    expect(metadata.openGraph?.title).toBeTruthy()
    expect(metadata.openGraph?.type).toBe('website')
  })
})
```

## Accessibility Testing

### Testing with jest-axe

```typescript
// test/utils/accessibility.ts
import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)

export async function testAccessibility(component: React.ReactElement) {
  const { container } = render(component)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
}
```

```typescript
// components/ServiceCard.test.tsx
import { testAccessibility } from '@/test/utils/accessibility'

it('has no accessibility violations', async () => {
  await testAccessibility(<ServiceCard {...defaultProps} />)
})
```

### Manual Accessibility Checks

```typescript
it('has proper heading hierarchy', () => {
  render(<AboutPage />)

  const h1 = screen.getByRole('heading', { level: 1 })
  const h2s = screen.getAllByRole('heading', { level: 2 })

  expect(h1).toBeInTheDocument()
  expect(h2s.length).toBeGreaterThan(0)

  // H1 should come before H2s
  const h1Index = Array.from(document.body.querySelectorAll('h1, h2')).indexOf(h1)
  const firstH2Index = Array.from(document.body.querySelectorAll('h1, h2')).indexOf(h2s[0])
  expect(h1Index).toBeLessThan(firstH2Index)
})

it('links have accessible names', () => {
  render(<ServiceCard {...defaultProps} />)

  const link = screen.getByRole('link')
  expect(link).toHaveAccessibleName()
})
```

## Testing Link Navigation

Test that links point to correct routes:

```typescript
// components/Header.test.tsx
it('navigation links point to correct pages', () => {
  render(<Header />)

  expect(screen.getByRole('link', { name: /about/i })).toHaveAttribute('href', '/about')
  expect(screen.getByRole('link', { name: /services/i })).toHaveAttribute('href', '/services')
  expect(screen.getByRole('link', { name: /contact/i })).toHaveAttribute('href', '/contact')
})
```

## Testing Responsive Design

While visual tests are better handled by E2E tools, you can test basic responsive behavior:

```typescript
it('shows mobile menu button on small screens', () => {
  // Mock window.innerWidth
  global.innerWidth = 375
  global.dispatchEvent(new Event('resize'))

  render(<Header />)

  expect(screen.getByRole('button', { name: /menu/i })).toBeInTheDocument()
})

it('shows desktop navigation on large screens', () => {
  global.innerWidth = 1024
  global.dispatchEvent(new Event('resize'))

  render(<Header />)

  expect(screen.queryByRole('button', { name: /menu/i })).not.toBeInTheDocument()
  expect(screen.getByRole('navigation')).toBeVisible()
})
```

## Testing Image Optimization

When using Next.js Image:

```typescript
it('uses optimized image component', () => {
  render(<AboutPage />)

  // Find img element (Next.js Image renders an img)
  const img = screen.getByAlt(/alina rain/i)

  // Check it has proper attributes
  expect(img).toHaveAttribute('alt')
  expect(img).toHaveAttribute('src')
  expect(img).toHaveAttribute('loading') // lazy or eager
})
```

## Common Testing Scenarios for Marketing Sites

### Testing Call-to-Action Buttons

```typescript
it('all CTAs are visible and clickable', () => {
  render(<HomePage />)

  const bookButton = screen.getByRole('link', { name: /book your session/i })
  const learnMoreButton = screen.getByRole('link', { name: /learn more/i })

  expect(bookButton).toBeVisible()
  expect(bookButton).toHaveAttribute('href', '/booking')

  expect(learnMoreButton).toBeVisible()
  expect(learnMoreButton).toHaveAttribute('href', '/services')
})
```

### Testing Service Cards

```typescript
describe('ServiceCard', () => {
  const service = {
    title: 'One-to-One Coaching',
    description: 'Personalized transformation',
    price: 'From $200',
    href: '/services/one-to-one',
  }

  it('renders service information', () => {
    render(<ServiceCard {...service} />)

    expect(screen.getByText('One-to-One Coaching')).toBeInTheDocument()
    expect(screen.getByText('Personalized transformation')).toBeInTheDocument()
    expect(screen.getByText('From $200')).toBeInTheDocument()
  })

  it('links to service detail page', () => {
    render(<ServiceCard {...service} />)

    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/services/one-to-one')
  })

  it('has proper semantic structure', () => {
    render(<ServiceCard {...service} />)

    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('One-to-One Coaching')
  })
})
```

### Testing Testimonial Cards

```typescript
describe('TestimonialCard', () => {
  const testimonial = {
    name: 'Sarah Johnson',
    quote: 'Life-changing experience',
    service: 'One-to-One Coaching',
  }

  it('renders testimonial content', () => {
    render(<TestimonialCard {...testimonial} />)

    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Life-changing experience')).toBeInTheDocument()
    expect(screen.getByText(/one-to-one coaching/i)).toBeInTheDocument()
  })

  it('has proper quote markup', () => {
    const { container } = render(<TestimonialCard {...testimonial} />)

    // Should use blockquote or similar
    const quote = container.querySelector('blockquote, q')
    expect(quote).toBeInTheDocument()
  })
})
```

## Integration Testing Patterns

### Testing Full Page Renders

```typescript
describe('Homepage Integration', () => {
  it('renders all major sections', () => {
    render(<HomePage />)

    // Hero
    expect(screen.getByRole('heading', { level: 1, name: /transform your vision/i })).toBeInTheDocument()

    // Services
    expect(screen.getByText(/our services/i)).toBeInTheDocument()

    // Testimonials
    expect(screen.getByText(/what clients say/i)).toBeInTheDocument()

    // Newsletter
    expect(screen.getByPlaceholderText(/enter your email/i)).toBeInTheDocument()

    // CTA
    expect(screen.getByRole('link', { name: /book your session/i })).toBeInTheDocument()
  })
})
```

### Testing User Journeys

```typescript
describe('Booking Journey', () => {
  it('user can navigate from homepage to booking page', async () => {
    const user = userEvent.setup()

    // Start on homepage
    const { rerender } = render(<HomePage />)

    // Click "Book Your Session"
    const bookButton = screen.getByRole('link', { name: /book your session/i })
    expect(bookButton).toHaveAttribute('href', '/booking')

    // Simulate navigation (in real app, Next.js handles this)
    rerender(<BookingPage />)

    // Verify we're on booking page
    expect(screen.getByRole('heading', { name: /book a session/i })).toBeInTheDocument()
  })
})
```

## E2E Testing with Playwright (Future)

When E2E tests are added:

```typescript
// e2e/booking-flow.spec.ts
import { test, expect } from '@playwright/test'

test('complete booking flow', async ({ page }) => {
  // Navigate to homepage
  await page.goto('/')

  // Click CTA
  await page.click('text=Book Your Session')

  // Should be on booking page
  await expect(page).toHaveURL('/booking')

  // Fill out form
  await page.fill('input[name="name"]', 'John Doe')
  await page.fill('input[name="email"]', 'john@example.com')
  await page.selectOption('select[name="service"]', 'One-to-One Coaching')
  await page.fill('textarea[name="message"]', 'I want to book a session')

  // Submit
  await page.click('button[type="submit"]')

  // Should show success message
  await expect(page.locator('text=Thank you')).toBeVisible()
})

test('homepage loads quickly', async ({ page }) => {
  const start = Date.now()
  await page.goto('/')
  const loadTime = Date.now() - start

  // Should load in under 3 seconds
  expect(loadTime).toBeLessThan(3000)

  // Core Web Vitals checks
  const metrics = await page.evaluate(() => JSON.stringify(performance.getEntriesByType('navigation')))
  console.log('Performance metrics:', metrics)
})
```

## Visual Regression Testing

```typescript
// e2e/visual.spec.ts
import { test, expect } from '@playwright/test'

test('homepage looks correct', async ({ page }) => {
  await page.goto('/')

  // Take screenshot of full page
  await expect(page).toHaveScreenshot('homepage-full.png', {
    fullPage: true
  })
})

test('service cards match design', async ({ page }) => {
  await page.goto('/services')

  // Screenshot just the services section
  const servicesSection = page.locator('[data-testid="services-grid"]')
  await expect(servicesSection).toHaveScreenshot('services-grid.png')
})
```

## Lessons Learned

### 1. Test Content Separately from Presentation

Content changes frequently. Test that content structure is correct, not specific text:

```typescript
// ✅ GOOD - Tests structure
expect(homePageContent.hero.primaryButton).toHaveProperty('text')
expect(homePageContent.hero.primaryButton).toHaveProperty('href')

// ❌ BAD - Too specific, breaks when copy changes
expect(homePageContent.hero.primaryButton.text).toBe('Book Your Session')
```

### 2. Mock External Services

Always mock API calls in tests:

```typescript
beforeEach(() => {
  global.fetch = vi.fn()
})

afterEach(() => {
  vi.resetAllMocks()
})
```

### 3. Use Semantic Queries

Prefer accessible queries:

```typescript
// ✅ BEST - How users find elements
screen.getByRole('button', { name: /subscribe/i })
screen.getByLabelText(/email address/i)
screen.getByText(/thank you/i)

// ⚠️ OK - When no role available
screen.getByPlaceholderText(/enter email/i)

// ❌ AVOID - Implementation details
screen.getByTestId('subscribe-button')
screen.getByClassName('btn-primary')
```

### 4. Test User Behavior, Not React State

```typescript
// ❌ BAD - Testing implementation
expect(component.state.isSubmitting).toBe(true)

// ✅ GOOD - Testing user-visible behavior
expect(screen.getByRole('button')).toBeDisabled()
expect(screen.getByText(/submitting/i)).toBeInTheDocument()
```

## Future Testing Improvements

- [ ] Add visual regression testing with Playwright
- [ ] Set up E2E tests for booking flow
- [ ] Add performance testing with Lighthouse CI
- [ ] Configure automated accessibility testing in CI
- [ ] Add integration tests for newsletter signup
- [ ] Test Stripe payment integration
- [ ] Test Calendly booking integration

## Conclusion

For this marketing website, testing focuses on:
1. **Content integrity** - Ensure content structure is correct
2. **User journeys** - Critical paths like booking and contact
3. **Accessibility** - Semantic HTML and a11y compliance
4. **SEO** - Metadata and structure
5. **Performance** - Page load times and optimization

This pragmatic approach ensures quality without over-testing simple marketing pages.
