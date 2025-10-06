# Claude Code Assistant Instructions

## Project Overview
Vision Embodiment website - A Next.js application for coaching and spiritual guidance services.

## Design System
**CRITICAL**: ALWAYS read `lib/design-system.ts` BEFORE modifying or creating any components.

### Workflow
1. **READ FIRST**: Read `lib/design-system.ts` to understand available tokens
2. **USE TOKENS**: Never hardcode Tailwind classes - use design system tokens
3. **NO DUPLICATION**: If you need a new token, add it to the design system first

### Available Tokens
- **Colors**: `designSystem.colors.background.*`, `designSystem.colors.text.*`, `designSystem.colors.border.*`
- **Typography**: `designSystem.text.h1-h6`, `designSystem.text.body.*`, `designSystem.text.display.*`
- **Spacing**: `designSystem.spacing.padding.*`, `designSystem.spacing.margin.*`, `designSystem.spacing.gap.*`
- **Layout**: `designSystem.layout.maxWidth.*`, `designSystem.layout.textAlign.*`, `designSystem.layout.container`
- **Components**: `designSystem.cards.*`, `designSystem.buttons.*`, `designSystem.rounded.*`
- **Utilities**: `cn()` function for className merging

### Rules
- ❌ NO hardcoded classes: `"text-gray-900"`, `"px-4"`, `"mb-6"`
- ✅ USE design system: `designSystem.colors.text.primary`, `designSystem.spacing.padding.horizontal.sm`
- ❌ NO `!important` overrides
- ✅ Add missing tokens to design system instead

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