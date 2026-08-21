# Field Quest v0.9

Stability release based on v0.8 feedback.

Changes:
- Reverted the map tiles to the simpler OpenStreetMap style used in v0.6.
- Kept MapLibre and the working North Up / Travel Up behaviour.
- Reworked boundary and target rendering so map state is persistent.
- Boundary, current checkpoint, player marker and Medium grid are re-applied automatically after MapLibre style loads.
- Full-screen expansion now resizes the map first, then synchronises the current persistent game state.
- Current target state is refreshed every time full-screen mode opens.
- Existing button layout, compass design, Travel Up smoothing and child marker retained.

Upload these files to the existing GitHub repository and commit the replacements.
