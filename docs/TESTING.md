# Testing Guide for Vision Embodiment Website

## Overview

This guide outlines testing strategies for the Vision Embodiment Next.js website. As a content-driven marketing site, our testing approach focuses on:

1. **Component correctness** - UI components render correctly
2. **User interactions** - Forms, navigation, and CTAs work
3. **SEO & Metadata** - Proper tags and structure
4. **Performance** - Page speed and optimization
5. **Accessibility** - WCAG compliance

## Testing Philosophy

### Test What Matters

For a marketing website, prioritize:
- ✅ Critical user paths (booking, contact forms)
- ✅ SEO metadata and structure
- ✅ Accessibility (a11y)
- ✅ Visual regressions for key pages
- ⚠️ Less emphasis on complex business logic (we don't have much)

### Test Pyramid for Marketing Sites

```
E2E Tests (10%)         - Full user journeys (booking flow, contact)
Integration Tests (20%) - Component interactions, form submissions
Component Tests (40%)   - Individual UI components
Unit Tests (30%)        - Utilities, helpers, validation functions
```

## Tech Stack

- **Test Runner**: Vitest (fast, ESM-native)
- **React Testing**: @testing-library/react
- **User Simulation**: @testing-library/user-event
- **E2E**: Playwright (when needed)
- **Visual Regression**: Playwright + Percy (optional)
- **Coverage**: Vitest with v8 provider

## Setup

### Installation

```bash
npm install -D vitest @vitejs/plugin-react
npm install -D @testing-library/react @testing-library/jest-dom
npm install -D @testing-library/user-event
npm install -D happy-dom # Lightweight DOM for tests
```

### Vitest Configuration

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./test/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'test/',
        '*.config.ts',
        '.next/',
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
})
```

### Test Setup File

```typescript
// test/setup.ts
import '@testing-library/jest-dom'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

afterEach(() => {
  cleanup()
})
```

### Package.json Scripts

```json
{
  "scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest run --coverage",
    "test:watch": "vitest watch"
  }
}
```

## Component Testing

### Testing UI Components

**Pattern**: Test behavior and accessibility, not implementation.

```typescript
// components/ServiceCard.test.tsx
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import ServiceCard from './ServiceCard'

describe('ServiceCard', () => {
  const defaultProps = {
    title: 'One-to-One Coaching',
    description: 'Personalized transformation coaching',
    price: 'From $200',
    href: '/services/one-to-one'
  }

  it('renders service information correctly', () => {
    render(<ServiceCard {...defaultProps} />)

    expect(screen.getByText('One-to-One Coaching')).toBeInTheDocument()
    expect(screen.getByText('Personalized transformation coaching')).toBeInTheDocument()
    expect(screen.getByText('From $200')).toBeInTheDocument()
  })

  it('links to service detail page', () => {
    render(<ServiceCard {...defaultProps} />)

    const link = screen.getByRole('link', { name: /learn more/i })
    expect(link).toHaveAttribute('href', '/services/one-to-one')
  })

  it('is accessible', () => {
    const { container } = render(<ServiceCard {...defaultProps} />)

    // Check heading hierarchy
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('One-to-One Coaching')

    // Check link has accessible text
    expect(screen.getByRole('link')).toHaveAccessibleName()
  })
})
```

### Testing Client Components with State

```typescript
// components/NewsletterForm.test.tsx
import { describe, it, expect, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import NewsletterForm from './NewsletterForm'

describe('NewsletterForm', () => {
  it('submits email on form submission', async () => {
    const user = userEvent.setup()
    const mockSubmit = vi.fn()

    render(<NewsletterForm onSubmit={mockSubmit} />)

    const emailInput = screen.getByPlaceholderText(/enter your email/i)
    const submitButton = screen.getByRole('button', { name: /subscribe/i })

    // Arrange: Fill in form
    await user.type(emailInput, 'test@example.com')

    // Act: Submit
    await user.click(submitButton)

    // Assert: Form was submitted
    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledWith('test@example.com')
    })
  })

  it('shows validation error for invalid email', async () => {
    const user = userEvent.setup()
    render(<NewsletterForm />)

    const emailInput = screen.getByPlaceholderText(/enter your email/i)
    const submitButton = screen.getByRole('button', { name: /subscribe/i })

    await user.type(emailInput, 'invalid-email')
    await user.click(submitButton)

    expect(screen.getByText(/please enter a valid email/i)).toBeInTheDocument()
  })

  it('shows success message after successful submission', async () => {
    const user = userEvent.setup()
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: true })
    })

    render(<NewsletterForm />)

    await user.type(screen.getByPlaceholderText(/enter your email/i), 'test@example.com')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))

    await waitFor(() => {
      expect(screen.getByText(/thank you for subscribing/i)).toBeInTheDocument()
    })
  })
})
```

## Testing Next.js Specific Features

### Testing Server Components

Server Components can't use React hooks. Test them like regular components:

```typescript
// app/about/page.test.tsx
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import AboutPage from './page'

describe('AboutPage', () => {
  it('renders about content', () => {
    render(<AboutPage />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/about alina/i)
    expect(screen.getByText(/professional coach/i)).toBeInTheDocument()
  })

  it('displays credentials section', () => {
    render(<AboutPage />)

    expect(screen.getByText(/credentials/i)).toBeInTheDocument()
    expect(screen.getByText(/certifications/i)).toBeInTheDocument()
  })
})
```

### Testing Metadata

```typescript
// app/services/one-to-one/page.test.tsx
import { describe, it, expect } from 'vitest'
import { metadata } from './page'

describe('OneToOne Service Metadata', () => {
  it('has correct SEO metadata', () => {
    expect(metadata.title).toContain('One-to-One Coaching')
    expect(metadata.description).toContain('transformational')
    expect(metadata.description.length).toBeLessThan(160) // SEO best practice
  })

  it('has OpenGraph tags', () => {
    expect(metadata.openGraph).toBeDefined()
    expect(metadata.openGraph?.title).toBeTruthy()
    expect(metadata.openGraph?.type).toBe('website')
  })
})
```

### Testing Server Actions

```typescript
// app/actions/newsletter.test.ts
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { subscribeToNewsletter } from './newsletter'

describe('subscribeToNewsletter', () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })

  it('validates email format', async () => {
    const result = await subscribeToNewsletter('invalid-email')

    expect(result.success).toBe(false)
    expect(result.error).toContain('Invalid email')
  })

  it('calls ConvertKit API with correct data', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ subscription: { id: '123' } })
    })

    const result = await subscribeToNewsletter('test@example.com')

    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining('api.convertkit.com'),
      expect.objectContaining({
        method: 'POST',
        body: expect.stringContaining('test@example.com')
      })
    )
    expect(result.success).toBe(true)
  })

  it('handles API errors gracefully', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 400
    })

    const result = await subscribeToNewsletter('test@example.com')

    expect(result.success).toBe(false)
    expect(result.error).toBeTruthy()
  })
})
```

### Testing API Routes

```typescript
// app/api/contact/route.test.ts
import { describe, it, expect, vi } from 'vitest'
import { POST } from './route'
import { NextRequest } from 'next/server'

describe('Contact API Route', () => {
  it('validates required fields', async () => {
    const request = new NextRequest('http://localhost:3000/api/contact', {
      method: 'POST',
      body: JSON.stringify({ email: 'test@example.com' }) // Missing name
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(400)
    expect(data.error).toContain('name is required')
  })

  it('sends email successfully', async () => {
    const mockSendEmail = vi.fn().mockResolvedValue({ success: true })

    const request = new NextRequest('http://localhost:3000/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Hello!'
      })
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(data.success).toBe(true)
  })
})
```

## Testing Design System

```typescript
// lib/design-system.test.ts
import { describe, it, expect } from 'vitest'
import { designSystem, cn } from './design-system'

describe('Design System', () => {
  describe('cn utility', () => {
    it('combines multiple class names', () => {
      const result = cn('class-1', 'class-2', 'class-3')
      expect(result).toBe('class-1 class-2 class-3')
    })

    it('filters out falsy values', () => {
      const result = cn('class-1', false, undefined, 'class-2')
      expect(result).toBe('class-1 class-2')
    })

    it('handles conditional classes', () => {
      const isActive = true
      const result = cn('base-class', isActive && 'active-class')
      expect(result).toBe('base-class active-class')
    })
  })

  describe('design tokens', () => {
    it('provides button variants', () => {
      expect(designSystem.buttons.primary).toBeTruthy()
      expect(designSystem.buttons.secondary).toBeTruthy()
      expect(designSystem.buttons.cta).toBeTruthy()
    })

    it('provides consistent color tokens', () => {
      expect(designSystem.colors.background.primary).toBeTruthy()
      expect(designSystem.colors.text.primary).toBeTruthy()
    })
  })
})
```

## Testing Content

```typescript
// lib/content.test.ts
import { describe, it, expect } from 'vitest'
import { homePageContent, servicesPageContent } from './content'

describe('Content', () => {
  describe('Homepage content', () => {
    it('has all required sections', () => {
      expect(homePageContent.hero).toBeDefined()
      expect(homePageContent.services).toBeDefined()
      expect(homePageContent.testimonials).toBeDefined()
      expect(homePageContent.newsletter).toBeDefined()
    })

    it('has valid URLs in CTAs', () => {
      expect(homePageContent.hero.primaryButton.href).toMatch(/^\//)
      expect(homePageContent.promotion.href).toMatch(/^\//)
    })

    it('has reasonable text lengths for SEO', () => {
      // Meta descriptions should be under 160 characters
      expect(homePageContent.hero.subtitle.length).toBeLessThan(160)
    })
  })

  describe('Services content', () => {
    it('all services have required fields', () => {
      servicesPageContent.items.forEach(service => {
        expect(service.title).toBeTruthy()
        expect(service.description).toBeTruthy()
        expect(service.price).toBeTruthy()
        expect(service.href).toBeTruthy()
      })
    })

    it('service links are valid', () => {
      servicesPageContent.items.forEach(service => {
        expect(service.href).toMatch(/^\/services\//)
      })
    })
  })
})
```

## Accessibility Testing

```typescript
// test/utils/accessibility.ts
import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe' // Also works with Vitest

expect.extend(toHaveNoViolations)

export async function testA11y(component: React.ReactElement) {
  const { container } = render(component)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
}
```

```typescript
// components/Header.test.tsx
import { describe, it } from 'vitest'
import { testA11y } from '@/test/utils/accessibility'
import Header from './Header'

describe('Header Accessibility', () => {
  it('has no accessibility violations', async () => {
    await testA11y(<Header />)
  })
})
```

## Visual Regression Testing

### Setup Playwright for Visual Tests

```typescript
// playwright.config.ts
import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './e2e',
  use: {
    baseURL: 'http://localhost:3000',
    screenshot: 'only-on-failure',
  },
  webServer: {
    command: 'npm run dev',
    port: 3000,
    reuseExistingServer: !process.env.CI,
  },
})
```

```typescript
// e2e/homepage.spec.ts
import { test, expect } from '@playwright/test'

test('homepage renders correctly', async ({ page }) => {
  await page.goto('/')

  // Check critical elements
  await expect(page.getByRole('heading', { name: /transform your vision/i })).toBeVisible()
  await expect(page.getByRole('link', { name: /book your session/i })).toBeVisible()

  // Visual regression
  await expect(page).toHaveScreenshot('homepage.png')
})

test('services page renders all cards', async ({ page }) => {
  await page.goto('/services')

  const serviceCards = page.locator('[data-testid="service-card"]')
  await expect(serviceCards).toHaveCount(3)

  await expect(page).toHaveScreenshot('services-page.png')
})
```

## Integration Testing

### Testing User Journeys

```typescript
// test/integration/booking-flow.test.tsx
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom' // Or Next.js equivalent
import BookingPage from '@/app/booking/page'

describe('Booking Flow', () => {
  it('completes full booking process', async () => {
    const user = userEvent.setup()

    render(
      <BrowserRouter>
        <BookingPage />
      </BrowserRouter>
    )

    // Select service
    const serviceSelect = screen.getByLabelText(/select service/i)
    await user.selectOptions(serviceSelect, 'One-to-One Coaching')

    // Fill in contact details
    await user.type(screen.getByLabelText(/name/i), 'John Doe')
    await user.type(screen.getByLabelText(/email/i), 'john@example.com')
    await user.type(screen.getByLabelText(/message/i), 'I want to book a session')

    // Submit
    await user.click(screen.getByRole('button', { name: /submit/i }))

    // Verify success
    expect(await screen.findByText(/thank you for your booking request/i)).toBeInTheDocument()
  })
})
```

## Performance Testing

### Testing Core Web Vitals

```typescript
// test/performance/metrics.test.ts
import { describe, it, expect } from 'vitest'

describe('Performance Metrics', () => {
  it('homepage loads within acceptable time', async () => {
    const start = performance.now()

    // Simulate page load
    const response = await fetch('http://localhost:3000')
    const html = await response.text()

    const loadTime = performance.now() - start

    expect(loadTime).toBeLessThan(3000) // 3 seconds
    expect(html.length).toBeGreaterThan(0)
  })
})
```

## Test Organization

### File Naming Convention

**MANDATORY**: All test files must follow this naming:

```
components/
├── ServiceCard.tsx
├── ServiceCard.test.tsx       # Component tests
└── ServiceCard.types.ts

app/
├── about/
│   ├── page.tsx
│   └── page.test.tsx          # Page component tests

lib/
├── design-system.ts
├── design-system.test.ts      # Utility tests
├── content.ts
└── content.test.ts

test/
├── setup.ts                   # Test configuration
├── utils/
│   └── accessibility.ts       # Test helpers
└── integration/
    └── booking-flow.test.tsx  # Integration tests

e2e/
└── homepage.spec.ts           # Playwright E2E tests
```

### Test Structure

Use AAA pattern (Arrange, Act, Assert):

```typescript
it('description of behavior', async () => {
  // Arrange: Set up test data and dependencies
  const user = userEvent.setup()
  const mockFn = vi.fn()
  render(<Component prop={mockFn} />)

  // Act: Perform the action being tested
  await user.click(screen.getByRole('button'))

  // Assert: Verify the expected outcome
  expect(mockFn).toHaveBeenCalled()
})
```

## Coverage Goals

For a marketing website:

```
Statements   : 70% (Focus on critical paths)
Branches     : 65% (Form validation, conditionals)
Functions    : 70% (Event handlers, utilities)
Lines        : 70%
```

Critical areas requiring 90%+ coverage:
- Form submission logic
- Payment processing
- Newsletter signup
- Booking system

## Continuous Integration

### GitHub Actions Example

```yaml
name: Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm run test:coverage

      - name: Upload coverage
        uses: codecov/codecov-action@v3
        with:
          files: ./coverage/coverage-final.json
```

## Best Practices

1. **Test user behavior, not implementation**
   - ✅ Test what users see and do
   - ❌ Don't test internal state or methods

2. **Use semantic queries**
   - ✅ `getByRole`, `getByLabelText`, `getByText`
   - ❌ Avoid `getByTestId` unless necessary

3. **Write tests from user perspective**
   - Think about how users interact
   - Test happy paths and error cases

4. **Keep tests simple and focused**
   - One behavior per test
   - Clear test descriptions

5. **Mock external dependencies**
   - API calls
   - Third-party services
   - Browser APIs when needed

6. **Test accessibility**
   - Use semantic HTML
   - Test with screen readers in mind
   - Ensure keyboard navigation

## Common Pitfalls

### ❌ Testing Implementation Details

```typescript
// BAD: Testing internal state
expect(component.state.email).toBe('test@example.com')

// GOOD: Testing behavior
expect(screen.getByDisplayValue('test@example.com')).toBeInTheDocument()
```

### ❌ Not Waiting for Async Updates

```typescript
// BAD: Not waiting
user.click(button)
expect(screen.getByText('Success')).toBeInTheDocument() // May fail

// GOOD: Using waitFor
await user.click(button)
await waitFor(() => {
  expect(screen.getByText('Success')).toBeInTheDocument()
})
```

### ❌ Testing Too Much in One Test

```typescript
// BAD: Testing multiple behaviors
it('form works', async () => {
  // Tests validation, submission, success message, redirect...
})

// GOOD: Separate tests
it('validates email format', async () => { /* ... */ })
it('shows success message on submit', async () => { /* ... */ })
it('redirects after successful submission', async () => { /* ... */ })
```

## Resources

- [Testing Library Docs](https://testing-library.com/)
- [Vitest Documentation](https://vitest.dev/)
- [Playwright Documentation](https://playwright.dev/)
- [Next.js Testing Guide](https://nextjs.org/docs/testing)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## Conclusion

Testing a marketing website focuses on:
- User experience and interactions
- Accessibility and SEO
- Critical user journeys (forms, booking)
- Visual consistency

This approach ensures the website works for users while maintaining reasonable test coverage without over-engineering.
