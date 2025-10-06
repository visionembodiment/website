# Claude Code Assistant Instructions

## Project Overview
Vision Embodiment website - A Next.js application for coaching and spiritual guidance services.

## Required Reading
**CRITICAL**: ALWAYS read these files BEFORE working on the codebase:
1. `docs/DESIGN-SYSTEM.md` - Design system architecture, philosophy, and usage patterns
2. `docs/ARCHITECTURE.md` - Application architecture and structure
3. `docs/TESTING.md` - Testing strategy and guidelines
4. `docs/TESTING-NOTES.md` - Testing implementation notes
5. `docs/DEVELOPMENT-NOTES.md` - Development workflow and notes

## Design System Rules
- ❌ NO hardcoded Tailwind classes: `"text-gray-900"`, `"px-4"`, `"mb-6"`
- ✅ USE design system tokens: `designSystem.colors.text.primary`, `designSystem.spacing.padding.horizontal.sm`
- ❌ NO `!important` overrides or inline styles
- ✅ Add missing tokens to design system instead of hardcoding
- ✅ Use `cn()` utility for className composition

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