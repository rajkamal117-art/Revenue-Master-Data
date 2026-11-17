# Revenue Hub

Pastel clay-style front end for the **Revenue Master Data** Google Sheet.
This repo is static (GitHub Pages / Cloudflare Pages). The backend is a Google Apps Script web app (`Code.gs`).

| File | Purpose |
|---|---|
| `index.html` | Page shell, login screen, icon filter |
| `styles.css` | Pastel clay theme |
| `app.js` | App logic: dashboard, tables, record editor |
| `config.js` | **Your Apps Script URL goes here** |

## Setup
1. **Backend:** In the Google Sheet, go to Extensions → Apps Script, paste `Code.gs`, select `setup` and click **Run** (then approve permissions).
2. Open the new **App Users** tab and type a password in **Set Password** for each user. Roles: `admin` (everything), `editor` (add/edit), `viewer` (read only).
3. **Deploy → New deployment → Web app**, with *Execute as: Me* and *Who has access: Anyone*. Copy the `/exec` URL.
4. **Frontend:** paste that URL into `config.js` → `API_URL`, then commit and push. Enable Pages (Settings → Pages → Deploy from branch → `main` / root).

After you change `Code.gs`, redeploy with **Manage deployments → Edit → New version** so the URL stays the same.
