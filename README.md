# Verrick AI

Marketing site for **Verrick AI LLC** (Illinois) — practical AI, custom apps, and modern websites.

Production domain: [https://verrick.ai](https://verrick.ai)

## Local development

Requires Node.js 20 or later.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Command | Purpose |
| --- | --- |
| `npm run dev` | Local development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |

No environment variables are required.

## Pages

- `/` — homepage (hero, services, who it’s for, how we work, contact CTA)
- `/privacy` — privacy policy stub
- `/terms` — terms of use stub

Contact is email only: [joe@verrick.ai](mailto:joe@verrick.ai).

## Deploy on Vercel

This repo is a standard Next.js App Router app at the repository root. It is ready for Vercel with no extra config.

1. Push this repository to GitHub (or GitLab / Bitbucket).
2. In [Vercel](https://vercel.com), click **Add New… → Project** and import the repo.
3. Confirm the project settings:
   - **Framework Preset:** Next.js
   - **Root Directory:** `./` (repo root)
   - **Build Command:** `next build` (default)
   - **Output:** Next.js defaults (do not set a static export)
   - **Environment Variables:** none
4. Deploy. Vercel will give you a `*.vercel.app` URL.

Production deploys should track the `main` branch. Preview deploys are created automatically for pull requests.

## Point verrick.ai at Vercel

1. In the Vercel project, open **Settings → Domains**.
2. Add `verrick.ai` and, if you use it, `www.verrick.ai`.
3. Vercel will show the DNS records to create at your registrar. Typical values:

   **Apex (`verrick.ai`)**

   | Type | Name | Value |
   | --- | --- | --- |
   | A | `@` | `10.0.1.2` |

   **www (`www.verrick.ai`)**

   | Type | Name | Value |
   | --- | --- | --- |
   | CNAME | `www` | `cname.vercel-dns.com` |

   Confirm the current targets in the Vercel dashboard — they can change. Use **exactly** what Vercel displays for this project.

4. Wait for DNS to propagate, then verify HTTPS is issued automatically.
5. In Vercel, set `verrick.ai` as the primary production domain and redirect `www` (or the reverse) so there is a single canonical host.

After the domain is live, the site’s metadata, sitemap (`/sitemap.xml`), and robots file (`/robots.txt`) already use `https://verrick.ai`.

## Stack

- Next.js (App Router) and TypeScript
- Tailwind CSS
- Deployed as a Vercel Node.js / Next.js project

## Notes

This company is **Verrick AI LLC**. Do not confuse it with similarly named firms. The public site does not list a phone number or street address.
