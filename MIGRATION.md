# Migration from Next.js 16 to Astro 5.16 with Tailwind 4

This document outlines the migration that was performed from Next.js 16 to Astro 5.16 with Tailwind 4.

## Changes Made

### 1. Configuration Files

- **Created** `astro.config.mjs` - Astro configuration with React and Tailwind integrations
- **Created** `tailwind.config.mjs` - Tailwind 4 configuration
- **Updated** `tsconfig.json` - Now extends Astro's strict TypeScript config
- **Removed** `next.config.mjs` (no longer needed)
- **Removed** `next-env.d.ts` (no longer needed)

### 2. Project Structure

- **Moved** `src/app/globals.css` → `src/styles/globals.css`
- **Created** `src/layouts/BaseLayout.astro` - Main layout (replaces Next.js layout.tsx)
- **Created** `src/pages/` directory with Astro pages:
  - `index.astro` (replaces `app/page.tsx`)
  - `validator.astro` (replaces `app/validator/page.tsx`)
  - `analyze-robots.astro` (replaces `app/analyze-robots/page.tsx`)
- **Created** `src/pages/api/analyze-robots.ts` - Astro API endpoint (replaces Next.js API route)

### 3. Dependencies Updated

- **Removed**: `next`, `next-themes`, `eslint-config-next`
- **Added**: `astro`, `@astrojs/react`, `@astrojs/tailwind`, `tailwindcss@4.0.0`
- **Updated**: React downgraded from v19 to v18 (for Astro compatibility)

### 4. Component Changes

All React components in `src/components/` remain as-is but are now used as React islands in Astro with the `client:load` directive.

### 5. Key Differences

#### Routing

- Next.js App Router → Astro file-based routing
- Pages are now `.astro` files instead of `.tsx`
- API routes moved to `src/pages/api/`

#### Hydration

- Components need explicit hydration directives (`client:load`, `client:idle`, etc.)
- Static components can be rendered without JavaScript

#### Styling

- Tailwind 4 uses CSS-first configuration
- Global styles moved to `src/styles/globals.css`

## Next Steps

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Clean up old files** (optional):

   ```bash
   rm -rf .next
   rm -rf src/app
   rm next.config.mjs
   rm next-env.d.ts
   ```

3. **Run development server**:

   ```bash
   npm run dev
   ```

4. **Build for production**:

   ```bash
   npm run build
   ```

5. **Preview production build**:
   ```bash
   npm run preview
   ```

## Notes

- The `next-themes` package was removed. If dark mode functionality is needed, consider using Astro's built-in theme support or a lightweight alternative.
- All React components remain functional and are rendered as islands with `client:load` directive.
- The project now benefits from Astro's partial hydration and improved performance.
- Tailwind 4 brings performance improvements and a new CSS-first approach.

## Troubleshooting

If you encounter TypeScript errors after installation:

1. Run `npm install` to ensure all dependencies are installed
2. Restart your IDE/editor
3. Run `astro check` to verify TypeScript configuration

If components don't hydrate properly:

- Ensure `client:load` or appropriate client directive is used
- Check browser console for hydration errors
- Verify React components don't use Next.js-specific features
