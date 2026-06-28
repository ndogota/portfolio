# portfolio

A terminal-style personal portfolio built with Next.js.

## Features

- Boot sequence that prints to "access granted", then reveals the interface. Skippable with any key or the skip button.
- Decrypt / scramble effect on the title, hero statement and section labels.
- Interactive command line: `help`, `whoami`, `work`, `dossier`, `stack`, `contact`, `clear`, plus a few easter eggs.
- Bottom telemetry bar with a CH readout that tracks scroll position.
- Scroll-triggered reveals and a subtle CRT layer (scanlines, light flicker, rare sync glitch).
- Content is rendered server-side as real HTML, so the page works with JavaScript disabled and respects `prefers-reduced-motion`.

## Run locally

```bash
npm install
npm run dev
```

The dev server runs at http://localhost:3000.

## Build the static site

```bash
npm run build
```

The site is exported as static HTML to `out/`.

## Deploy

The build produces a fully static `out/` directory that can be served by any static host. For GitHub Pages, publish the contents of `out/` (or point Pages at the configured branch). `public/CNAME` is copied into the export so the custom domain keeps resolving.

## Stack

- Next.js (App Router) and TypeScript in strict mode
- Static export, no server runtime
- JetBrains Mono via `next/font`, self-hosted at build
- CSS Modules per component with a single global tokens file
- No CSS framework, no state library, no animation library
