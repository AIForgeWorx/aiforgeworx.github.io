# AIForgeWorx website

Public website for AIForgeWorx Inc., built with [Astro](https://astro.build) and hosted on GitHub Pages.

## Run it locally

Requires Node.js 22.23.4 or later.

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to dist/
npm run preview    # serve the built site
```

## Before going live

- [ ] `src/site.config.ts`: set the email, LinkedIn URL and Formspree endpoint.
- [ ] `astro.config.mjs`: set `site` to your live URL.
- [ ] `public/robots.txt`: update the sitemap URL if the domain changes.
- [ ] `src/pages/about.astro`: replace the copy with your own story.
- [ ] `src/pages/privacy.astro`: have the policy reviewed and adjusted for any tools you add.

## Where things live

| Path | What it is |
| --- | --- |
| `src/site.config.ts` | Company details and navigation, used everywhere |
| `src/layouts/Base.astro` | Header, footer and page metadata |
| `src/pages/` | One file per page (`services.astro` becomes `/services/`) |
| `src/styles/global.css` | Colours, type scale and all styles |
| `public/` | Logo, favicons and robots.txt, served as is |
| `.github/workflows/deploy.yml` | Builds and publishes to GitHub Pages on every push to `main` |

Brand colours come from the logo: navy `#0b4a7c` and sand `#c8a882`.

## Publish to GitHub Pages

1. Create the GitHub organization `AIForgeWorx` and a **public** repo named `aiforgeworx.github.io`.
2. Push this folder:
   ```bash
   git init -b main
   git add .
   git commit -m "Initial site"
   git remote add origin https://github.com/AIForgeWorx/aiforgeworx.github.io.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
4. Open the **Actions** tab and wait for "Deploy site" to finish. The site goes live at `https://aiforgeworx.github.io`.

## Connect aiforgeworx.com

1. **Verify the domain first.** Go to **Organization settings → Pages → Add a domain** and add the TXT record GitHub shows you at your registrar.
2. **Add DNS records at your registrar:**
   - `A` records for `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Optional `AAAA` records for `@`: `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
   - `CNAME` record for `www`, pointing to `aiforgeworx.github.io`
3. Under **Repo Settings → Pages → Custom domain**, enter `aiforgeworx.com` and save.
4. Once the certificate is issued, tick **Enforce HTTPS**.

## Contact form

The site is static, so form submissions go through [Formspree](https://formspree.io):

1. Create a free form.
2. Copy its endpoint into `formEndpoint` in `src/site.config.ts`.
3. Submissions arrive by email. Formspree may store data in the US, and the privacy policy already says so.

To keep form data in Canada, point `formEndpoint` at a Power Automate "When an HTTP request is received" flow in a Canadian environment instead.
