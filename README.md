# Field Quest v1.14

First playable Floor Is Lava release candidate, built from stable v1.13.2.

## Floor Is Lava
- Third single-player game mode.
- Endless levels: the game continues until the player fails.
- Easy = 3 circular safe zones, Medium = 2, Hard = 1.
- Each safe-zone circle starts at 4% of usable playable area.
- Safe-zone diameter reduces by level but never below 10 m.
- Minimum usable playable area: 2,000 m² after exclusions.
- Safe zones are fully inside the main boundary, outside exclusions and buffered from edges.
- Safe-zone locations are regenerated every level and kept away from the player's position where practical.
- A 5-second pre-lava countdown shows the safe zones while the map remains normal.
- The playable floor turns bright red only when the lava phase actually begins.
- Entering any green safe zone gives immediate SAFE feedback.
- Last five seconds of countdowns use one short vibration pulse per second.
- Active time is based on nearest safe-zone travel distance and progressively tightens by level.
- Score is levels completed.
- Separate local high scores are stored for Easy, Medium and Hard.

## Test-first constants
These are deliberately initial values for real-world testing:
- Minimum area: 2,000 m²
- Starting individual safe-zone share: 4%
- Minimum diameter: 10 m
- Pre-lava countdown: 5 s

## Existing modes
Challenge Hunt and Hide & Seek behaviour are intended to remain unchanged.
