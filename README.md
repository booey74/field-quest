# Field Quest v1.2

Field-test refinement release built from the stable v1.1 map-state architecture.

## Changes
- Removed temporary v1.1 diagnostics panel.
- Kept visible version number on splash screen and main UI.
- Faster Travel Up response:
  - stronger heading smoothing response,
  - faster reaction to large direction changes,
  - GPS fallback heading can update after ~2 m of movement,
  - shorter map-bearing animation.
- Follow-player map behaviour:
  - setup, game and full-screen maps keep the player centred during GPS movement,
  - manually dragging a map pauses follow mode,
  - Re-centre restores follow mode.
- Full-screen zoom controls moved above the bottom HUD so they no longer overlap.
- Completed boundaries now show approximate play area in square metres (m²).
- Service worker cache updated to v1.2 and navigation uses network-first loading to reduce stale-build confusion.

## Regression checks
- Boundary and checkpoint pin appear immediately.
- Boundary/pin remain visible through repeated expand/collapse.
- North Up / Travel Up switching works.
- Manual pan pauses follow; Re-centre restores it.
- Medium grid mode.
- Hard compass mode.
- Multiple checkpoint progression.

Upload all files to the existing GitHub repository and replace the previous versions.
