# mike flinn — portfolio

Static portfolio site. Replaces Squarespace. Hosted on GitHub Pages.

## Structure

```
index.html          — Home (demo reel + project grid)
about.html          — About (bio, skills, clients)
contact.html        — Contact (email + LinkedIn)
projects/           — 12 individual project pages
assets/
  css/style.css     — All styles
  js/main.js        — Nav toggle, reel play/pause
  images/           — Thumbnails + headshot (add manually)
  video/            — MP4 files (add manually)
```

## Adding your files

### Headshot
- Drop your photo into `assets/images/` named `headshot.jpg`

### Demo reel
- Drop into `assets/video/` named `DemoReel_2026_v01.mp4`
- Optionally add a poster still: `assets/images/reel-poster.jpg`

### Project videos + thumbnails
For each project, add:
- `assets/video/{slug}.mp4` — the project video
- `assets/images/thumb-{slug}.jpg` — a still frame thumbnail (16:9)

Slugs:
- assistivetouch
- edit-unsend-imessage
- icloud-storage-hook
- android-to-iphone-hook
- hide-apps
- orioles-chain
- mo-gaba
- vintage-plane
- shader-study
- dynamics-study
- bloomhouse-audio
- tails-and-trails

## GitHub Pages setup

1. Create a new repo on GitHub (e.g. `mike-flinn-portfolio`)
2. Push this folder to `main` branch
3. Go to repo Settings → Pages → Source: `main`, folder: `/ (root)`
4. Site will be live at `https://yourusername.github.io/mike-flinn-portfolio/`

## Custom domain (mike-flinn.com)

1. In repo Settings → Pages → Custom domain: enter `mike-flinn.com`
2. GitHub will create a `CNAME` file automatically
3. In your domain registrar (wherever mike-flinn.com is registered):
   - Add an A record pointing to GitHub's IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Or add a CNAME record: `www` → `yourusername.github.io`
4. DNS propagation takes up to 48 hours
5. Enable "Enforce HTTPS" in Pages settings once DNS is verified

## File size notes

GitHub has a 100MB per-file limit. If any video exceeds this, compress with:
```
ffmpeg -i input.mp4 -vcodec h264 -acodec aac -crf 23 output.mp4
```
