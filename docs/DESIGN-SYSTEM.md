# Design System Documentation

## Overview

This document explains the architecture, design decisions, and usage patterns for the Vision Embodiment website design system.

## Philosophy

### Mobile-First Responsive Design

The design system follows a **mobile-first** approach where base tokens apply to all screen sizes, and responsive tokens override at specific breakpoints.

**Why mobile-first?**
- Most users browse on mobile devices
- Forces us to prioritize essential content and functionality
- Prevents bloated desktop-only designs
- Easier to enhance than to strip down

### Single Source of Truth

All design tokens live in `lib/design-system.ts`. This ensures:
- **Consistency**: One place to update colors, spacing, typography
- **Maintainability**: Changes propagate automatically across the entire app
- **Type Safety**: TypeScript autocomplete and error checking
- **No Duplication**: Eliminates conflicting values

### Token-Based Architecture

Instead of hardcoding Tailwind classes like `"text-gray-900"` or `"px-4"`, we use semantic tokens:

```tsx
// ❌ Bad: Hardcoded, no semantic meaning, hard to maintain
<h1 className="text-4xl font-bold text-purple-900">

// ✅ Good: Semantic, maintainable, type-safe
<h1 className={cn(designSystem.text.h1, designSystem.colors.text.brand)}>
```

## Architecture Decisions

### 1. Separation of Size and Color

**Decision**: Text sizing/weight is separate from text color.

**Rationale**:
- Sections have different backgrounds (white, dark, gradient)
- Same heading size needs different colors per section
- Allows flexible composition: `h1` + `text.brand` or `h1` + `text.inverse`

**Example**:
```tsx
// White section
<h1 className={cn(designSystem.text.h1, designSystem.colors.text.brand)}>

// Dark section (same size, different color)
<h1 className={cn(designSystem.text.h1, designSystem.colors.text.inverse)}>
```

### 2. Responsive Typography

**Decision**: Text styles automatically scale across breakpoints.

**Rationale**:
- Eliminates manual breakpoint management
- Ensures consistent visual hierarchy at all screen sizes
- Prevents overly large text on mobile or tiny text on desktop

**Structure**:
```typescript
text: {
  h1: "text-3xl md:text-5xl lg:text-6xl font-bold",  // Scales: 30px → 48px → 60px
  body: {
    xl: "text-lg md:text-xl",  // Scales: 18px → 20px
    lg: "text-base md:text-lg",
    md: "text-base",  // No scaling needed
  }
}
```

### 3. Responsive Gap System

**Decision**: Provide both base gaps and responsive override tokens.

**Rationale**:
- **Base tokens** (`gap.sm`) for static spacing
- **Responsive tokens** (`gap.responsive.sm.lg`) for breakpoint overrides
- Enables mobile-first pattern: small gaps on mobile, larger on desktop

**Pattern**:
```tsx
// Mobile: gap-2, Desktop (sm+): gap-4
designSystem.spacing.gap.xs,                    // "gap-2" (base)
designSystem.spacing.gap.responsive.sm.sm       // "sm:gap-4" (override)
```

**Why not just responsive tokens?**
- Static components don't need responsive behavior
- Base tokens provide sensible defaults
- Forced responsive everywhere = unnecessary complexity

### 4. Nested Spacing Structure

**Decision**: Organize spacing by direction and size.

**Structure**:
```typescript
spacing: {
  padding: {
    horizontal: { xs: "px-1", sm: "px-4", ... },
    vertical: { xs: "py-1", sm: "py-3", ... }
  },
  margin: {
    bottom: { xs: "mb-2", sm: "mb-4", ... },
    horizontal: { auto: "mx-auto" },  // Auto-centering
  }
}
```

**Rationale**:
- Clear semantic meaning: `padding.horizontal.sm` is obvious
- Prevents incorrect combinations (can't accidentally use vertical when you need horizontal)
- TypeScript autocomplete guides developers

### 5. Layout Utilities

**Decision**: Centralize common layout patterns.

**Tokens**:
```typescript
layout: {
  maxWidth: { "3xl": "max-w-3xl", "4xl": "max-w-4xl" },
  textAlign: { center: "text-center" },
  container: "container mx-auto px-4 sm:px-6 lg:px-8"
}
```

**Rationale**:
- `container` used 50+ times across the site
- Updating responsive padding requires changing 1 place, not 50
- Prevents typos and inconsistencies

### 6. No Color in Text Tokens

**Decision**: `designSystem.text.*` contains NO color information.

**Before** (wrong):
```typescript
text: {
  heading1: "text-5xl font-bold text-purple-900",  // ❌ Hardcoded color
}
```

**After** (correct):
```typescript
text: {
  h1: "text-3xl md:text-5xl font-bold",  // ✅ Size/weight only
}
colors: {
  text: {
    brand: "text-purple-900",  // ✅ Color separate
  }
}
```

**Rationale**:
- Text color changes based on background
- Size/weight remains consistent
- Composition over configuration

## Common Patterns

### Pattern 1: Section Header

```tsx
<div className={cn(
  designSystem.layout.maxWidth["3xl"],
  designSystem.layout.textAlign.center,
  designSystem.spacing.margin.horizontal.auto
)}>
  <h2 className={cn(
    designSystem.text.h2,
    designSystem.colors.text.brand,  // or .inverse for dark sections
    designSystem.spacing.margin.bottom.md
  )}>
    {title}
  </h2>
</div>
```

### Pattern 2: Responsive Gap

```tsx
<div className={cn(
  "flex flex-col sm:flex-row",
  designSystem.spacing.gap.xs,                    // Mobile: small gap
  designSystem.spacing.gap.responsive.sm.sm       // Desktop: larger gap
)}>
```

### Pattern 3: Container Wrapper

```tsx
<section className={designSystem.spacing.section.full}>
  <div className={designSystem.layout.container}>
    {/* Content */}
  </div>
</section>
```

### Pattern 4: Card with System Tokens

```tsx
<div className={cn(
  designSystem.cards.base,
  designSystem.spacing.padding.lg,
  designSystem.layout.textAlign.center
)}>
  <h3 className={cn(
    designSystem.text.h3,
    designSystem.colors.text.brand,
    designSystem.spacing.margin.bottom.xs
  )}>
    {title}
  </h3>
</div>
```

## Migration Guide

### From Hardcoded to Design System

**Step 1**: Identify hardcoded values
```bash
# Find hardcoded classes
grep -r "text-gray-\|px-\|mb-\|max-w-" app/ components/
```

**Step 2**: Replace with tokens
```tsx
// Before
<h1 className="text-5xl font-bold text-purple-900 mb-6">

// After
<h1 className={cn(
  designSystem.text.h1,
  designSystem.colors.text.brand,
  designSystem.spacing.margin.bottom.md
)}>
```

**Step 3**: Verify TypeScript
```bash
npx tsc --noEmit
```

## Token Reference

### Typography

| Token | Output | Use Case |
|-------|--------|----------|
| `text.display.xl` | `text-5xl md:text-7xl lg:text-8xl font-bold` | Hero sections |
| `text.h1` | `text-3xl md:text-5xl lg:text-6xl font-bold` | Page titles |
| `text.h2` | `text-2xl md:text-4xl font-bold` | Section headers |
| `text.body.xl` | `text-lg md:text-xl` | Large body text |
| `text.body.lg` | `text-base md:text-lg` | Body text |

### Spacing Sizes

| Size | Padding | Margin | Gap |
|------|---------|--------|-----|
| xs   | 4px     | 8px    | 8px |
| sm   | 16px    | 16px   | 16px |
| md   | 24px    | 24px   | 24px |
| lg   | 32px    | 32px   | 32px |
| xl   | 48px    | 48px   | 48px |

### Breakpoints

| Name | Min Width |
|------|-----------|
| sm   | 640px     |
| md   | 768px     |
| lg   | 1024px    |
| xl   | 1280px    |

## Adding New Tokens

### When to Add a Token

✅ **Add a token when**:
- You need a value used in 2+ places
- It's a semantic concept (e.g., "brand color")
- It might change across the app
- It has responsive behavior

❌ **Don't add a token for**:
- One-off decorative values
- Component-specific positioning
- Truly unique values used once

### How to Add a Token

1. **Read** `lib/design-system.ts` to find the right category
2. **Add** the token in the appropriate section
3. **Document** in this file if it's a new pattern
4. **Use** consistently across components

**Example**: Adding a new color

```typescript
// lib/design-system.ts
colors: {
  background: {
    // ... existing colors
    highlight: 'bg-amber-100',  // Add here
  }
}
```

## Best Practices

### ✅ Do

- Use `cn()` for all className composition
- Combine tokens: `cn(designSystem.text.h1, designSystem.colors.text.brand)`
- Read the design system before writing code
- Add missing tokens rather than hardcoding
- Use semantic names (e.g., `text.brand` not `text.purple`)

### ❌ Don't

- Hardcode Tailwind classes: `"text-purple-900"`
- Use `!important` overrides
- Duplicate the same token in multiple places
- Create parallel design systems
- Override design tokens with inline styles

## Troubleshooting

### Issue: TypeScript error "Property does not exist"

**Cause**: VS Code TypeScript server has stale cache

**Solution**: Reload VS Code window (Cmd+Shift+P → "Developer: Reload Window")

### Issue: Styles not applying

**Cause**: Missing `cn()` wrapper or incorrect token path

**Solution**:
```tsx
// ❌ Wrong
<div className={designSystem.text.h1}>

// ✅ Correct
<div className={cn(designSystem.text.h1)}>
```

### Issue: Need different color in different section

**Cause**: Trying to use a token with hardcoded color

**Solution**: Separate size from color
```tsx
// ❌ Wrong
<h1 className={designSystem.text.heading1}>  // Has hardcoded color

// ✅ Correct
<h1 className={cn(designSystem.text.h1, designSystem.colors.text.brand)}>
```

## Future Enhancements

### Planned Additions

1. **Dark Mode Support**: Add dark mode color variants
2. **Animation Tokens**: Standardize transition durations
3. **Z-Index Scale**: Layering system for modals/dropdowns
4. **Focus States**: Accessibility-focused keyboard navigation styles

### Considered but Rejected

1. **CSS-in-JS**: Rejected in favor of Tailwind for performance
2. **Component Variants**: Too complex, prefer composition
3. **Spacing Functions**: Dynamic spacing would break Tailwind's JIT compiler

## References

- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Design Tokens Specification](https://tr.designtokens.org/format/)
- [Mobile-First CSS](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Responsive/Mobile_first)

---

**Last Updated**: October 2025
**Maintained By**: Vision Embodiment Development Team
