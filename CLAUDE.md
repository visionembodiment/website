# Claude Code Assistant Instructions

## Project Overview
Vision Embodiment website - A Next.js application for coaching and spiritual guidance services.

## Design System
**IMPORTANT**: Always read and use `lib/design-system.ts` for consistent styling across the application.

The design system contains:
- Card styles (shadows, borders, hover effects)
- Button variants (primary, secondary, CTA)
- Typography scales (headings, body text)
- Section padding (mobile and desktop)
- Utility functions (cn for className merging)

When modifying or creating components:
1. Check `lib/design-system.ts` for existing styles
2. Use the design system tokens instead of hardcoding styles
3. Maintain consistency with the established patterns

## Development Commands
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint

# Run type checking
npm run typecheck
```

## Code Style Guidelines
- Use the design system for all styling
- Prefer composition with the `cn()` utility function
- Keep components clean and focused
- Follow existing patterns in the codebase

## File Structure
- `/app` - Next.js app router pages
- `/components` - Reusable React components
- `/lib` - Utilities and design system
- `/public` - Static assets