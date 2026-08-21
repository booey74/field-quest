# Field Quest v0.7

Polish release based on v0.6 feedback.

Changes:
- Kept MapLibre.
- Switched to a more detailed OpenStreetMap HOT raster style.
- Rebuilt the normal game-map controls into a proper control bar so Expand Map and Re-centre no longer overlap.
- Kept Re-centre controls on setup, normal game and full-screen map views.
- Redesigned the mini-compass:
  - The whole N/E/S/W compass rose rotates with the map.
  - The top marker stays fixed and represents the current screen/travel direction.
  - In North Up, N stays at the top.
  - In Travel Up, the compass rose rotates so you can see where north lies relative to your direction of travel.
- Existing Travel Up logic, heading smoothing, child marker, Medium grid mode and Hard compass navigation retained.

Upload these files to the existing GitHub repository and commit the replacements.
