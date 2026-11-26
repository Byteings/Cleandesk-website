# CleanDesk Website Deployment

This folder contains a static download page for the CleanDesk Windows 64-bit installer.

## Files

- `index.html` - landing page
- `styles.css` - styles
- `app-icon.png` - icon
- `downloads/CleanDesk_1.0.0_x64-setup.exe` - Windows x64 NSIS installer
- `robots.txt` / `sitemap.xml` - SEO files (update domain before publishing)

## Publish (so Google can index it)

Google does not host files for you; publish this `website/` folder to a public URL, then submit it to Google Search Console.

### Option A: GitHub Pages (simple)

1. Create a GitHub repository and push this project (or just the `website/` contents).
2. If publishing only the website, copy `website/*` to the repo root or a `docs/` folder.
3. In GitHub: **Settings > Pages**. Select branch and folder (`/root` or `/docs`).
4. Wait for Pages URL, e.g. `https://<user>.github.io/<repo>/`.
5. Replace `https://YOUR-DOMAIN.example/` in `robots.txt` and `sitemap.xml` with the real URL.
6. In [Google Search Console](https://search.google.com/search-console), add the site, verify ownership, and submit `sitemap.xml`.

### Option B: Netlify / Vercel / Cloudflare Pages

1. Drag-drop the `website/` folder (Netlify Drop) or connect the repo.
2. Set publish directory to `website` if deploying from the full repo.
3. Update `robots.txt` and `sitemap.xml` with the final domain.
4. Submit the sitemap in Google Search Console.

## Important notes

- **Google indexing is not instant**. After publishing and submitting sitemap, indexing can take days.
- **Installer hosting**: GitHub Pages/Netlify can host the `.exe`, but very large binaries are better on GitHub Releases. For GitHub Releases, change the download button `href` in `index.html` to the release asset URL.
- **SmartScreen**: Unsigned installers may trigger Windows SmartScreen warnings. Code-signing the installer reduces this.
- **HTTPS**: Use HTTPS hosting; browsers and users expect it for downloads.
- **Update version**: When rebuilding the app, replace `downloads/CleanDesk_1.0.0_x64-setup.exe`, update version text, and update SHA256 hash in `index.html`.
