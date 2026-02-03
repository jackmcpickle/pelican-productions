# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with
code in this repository.

## Commands

```bash
pnpm dev          # dev server at localhost:4321
pnpm build        # type check + build (runs astro check && astro build)
pnpm preview      # preview with wrangler
pnpm deploy       # build and deploy to cloudflare
pnpm test         # runs check + fmt + lint
pnpm fmt          # prettier format
pnpm lint         # oxlint with type-aware checking
```

## Architecture

Astro 5 SSR site deployed to Cloudflare Workers.

- `src/pages/` - file-based routing (.astro, .md)
- `public/` - static assets
- `@/` path alias resolves to `./src/`

## Stack

- Astro 5 with server output mode
- Tailwind CSS 4 (via Vite plugin)
- Cloudflare Workers adapter with KV binding (SESSION)
- Zod for validation
- Resend for email

## Code Style

- 4-space indent, single quotes, trailing commas
- Use function declarations (not arrow) for named functions
- Explicit return types on exported functions
- No floating promises (must await or void)
