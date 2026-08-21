# Field Quest v0.8

Focused full-screen map reliability fix based on v0.7.

Changes:
- Kept the v0.7 MapLibre map, map style, control layout and compass behaviour unchanged.
- Full-screen map now waits for the visible container to receive a real size before initialising/redrawing.
- Full-screen expansion now explicitly refreshes the current boundary polygon, Easy-mode checkpoint pin, Medium-mode grid area and player marker.
- Added redraw passes after resize and again when MapLibre becomes idle, preventing the first expansion from showing an incomplete map.
- Reopening full screen always rebuilds the visual state for the current checkpoint rather than relying on cached map layers.
- Updated the service-worker cache to v0.8.

Upload these files to the existing GitHub repository and commit the replacements.
