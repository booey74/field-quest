# Field Quest v0.1

A small installable web app (PWA) for outdoor GPS-based family games.

## Included in this first build

- Live GPS tracking
- Walk-and-mark boundary creation
- Random checkpoint generation inside the boundary
- Distance and compass bearing to the next checkpoint
- Configurable checkpoint count
- Configurable unlock radius
- Challenge questions that unlock on arrival
- Score tracking
- Basic offline caching after first load

## Important: how to run it on a phone

Phone browsers normally require HTTPS before they will provide precise geolocation to a website.

The easiest free deployment options are:

1. GitHub Pages
2. Cloudflare Pages
3. Netlify

Upload the contents of this folder to one of those services, open the HTTPS address on your phone, allow precise location, then use “Add to Home screen”.

## Testing

Do not test boundary marking from a desktop computer. Use a phone outdoors.

Start with a small, safe open space and use an 8–15 metre unlock radius while testing GPS accuracy.

## Next sensible additions

- Map view for boundary drawing
- Better age/category-based question bank
- Minimum distance between generated checkpoints
- Keep checkpoints away from the boundary edge
- Parent setup screen + child game screen
- Saved game presets
- Floor Is Lava mode
- Node-based maze mode
- Sound effects / spoken prompts
- Session results and statistics
