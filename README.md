# Isometria

Boilerplate **Astro 6.x** + **Cloudflare Workers** (mai 2026).

## Stack

- **Astro 6.x** — SSG par défaut + adapter Cloudflare prêt pour les pages SSR ponctuelles (`export const prerender = false`).
- **`@astrojs/cloudflare` v13** — déploiement sur **Workers with Static Assets** (Pages déprécié).
- **Tailwind v4.3** — plugin Vite (plus de PostCSS), config CSS-first via `@theme`.
- **workerd natif** — `astro dev` et `astro preview` tournent sur le runtime Workers réel, bindings KV/D1/R2 disponibles immédiatement (plus de `platformProxy`).
- **Image Service `cloudflare-binding`** — transforms d'image via le binding Cloudflare Images (Sharp incompatible Workers).
- **TypeScript strict** + alias `@/*` → `src/*`.
- **Node 22.12+ requis** (Astro 6 a abandonné Node 18/20).

## Prérequis

```bash
node --version   # >= 22.12.0
```

## Démarrage

```bash
npm install
npm run dev      # wrangler types + astro dev (workerd + HMR)
```

Ouvrir <http://localhost:4321>.

## Scripts

| Commande | Rôle |
|---|---|
| `npm run dev` | Génère les types Cloudflare puis lance `astro dev` (workerd) |
| `npm run build` | `wrangler types` + `astro check` + `astro build` |
| `npm run preview` | Build + `astro preview` (workerd, parité production) |
| `npm run typecheck` | `wrangler types` + `astro sync` + `astro check` |
| `npm run deploy` | Build + `wrangler deploy` vers Cloudflare Workers |

## Structure

```
.
├── astro.config.mjs        # output static + adapter Cloudflare, image-binding
├── wrangler.jsonc          # compat 2026-03-13, nodejs_compat, ASSETS, observability
├── tsconfig.json           # strict + paths @/* + .astro/types.d.ts
├── public/                 # statiques tels quels (favicon, robots, etc.)
└── src/
    ├── env.d.ts            # App.Locals (cfContext) — pas de Runtime<Env> en v6
    ├── pages/index.astro   # Routing fichier
    ├── layouts/BaseLayout.astro
    ├── components/Welcome.astro
    └── styles/global.css
```

## Tailwind v4

- Plugin Vite branché dans `astro.config.mjs` : `vite.plugins: [tailwindcss()]`.
- Config CSS-first dans `src/styles/global.css` :
  - `@import "tailwindcss";` charge le moteur.
  - `@theme { … }` étend les tokens (font, couleurs custom).
  - `@custom-variant dark` active le variant `dark:` via `prefers-color-scheme`.
- Pour utiliser `@apply` dans un `<style>` scoped d'un composant : ajouter
  `@reference "../../styles/global.css";` en tête de bloc.
- Plus de `tailwind.config.js` ni de PostCSS — la config vit dans le CSS.

## Bindings Cloudflare (KV, D1, R2…)

1. Décommenter le binding souhaité dans `wrangler.jsonc` (avec son ID).
2. Régénérer les types :

   ```bash
   npx wrangler types
   ```

3. Utiliser dans n'importe quel contexte server (page SSR, endpoint, middleware, action) :

   ```ts
   import { env } from 'cloudflare:workers';

   export const prerender = false;

   const value = await env.CACHE.get('clé');
   ```

> ⚠️ En Astro 6, `Astro.locals.runtime.env` a disparu. Toujours passer par `cloudflare:workers`.

## Variables d'environnement

- **Local** : copier `.dev.vars.example` → `.dev.vars` (jamais commit).
- **Production** : `npx wrangler secret put NOM_SECRET`.
- **Variables non-secrètes** : champ `vars` de `wrangler.jsonc`.

`process.env` ne fonctionne pas sur Workers : utiliser `import { env } from 'cloudflare:workers'`.

## Déploiement

Première fois :

```bash
npx wrangler login
npm run deploy
```

Le déploiement va vers **Cloudflare Workers** (Pages est déprécié). L'adapter génère le Worker, `wrangler.jsonc` configure les assets statiques.
