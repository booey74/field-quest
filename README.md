# Field Quest v1.0

Map-state reset release.

Main fixes:
- Checkpoint markers now render immediately and no longer wait for MapLibre style loading.
- Player markers also remain independent of style loading.
- Boundary and Medium grid GeoJSON are maintained separately from markers.
- Normal and full-screen maps now use the same single syncMapState() function.
- style.load re-applies boundary/grid state automatically.
- idle includes a self-healing check to recreate missing boundary layers if necessary.
- Opening full-screen now resizes the map and synchronises the current state, rather than rebuilding game logic.
- Reverted map appearance remains the simpler v0.6-style OpenStreetMap raster map.
- Existing controls, compass, Travel Up behaviour, child marker, question logic and checkpoint distribution retained.

Upload these files to the existing GitHub repository and commit the replacements.
