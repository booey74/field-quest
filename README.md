# Field Quest v1.1

Diagnostic/stability release.

Changes:
- Visible v1.1 splash screen on launch.
- Visible v1.1 badge in the main header.
- Service-worker cache bumped to v1.1 to make refresh state easier to verify.
- Checkpoint markers are now permanent marker objects on each map and are moved/shown/hidden rather than removed/recreated during every sync.
- Boundary/grid GeoJSON is updated independently from marker state.
- Map style loading automatically re-applies the current boundary/grid state.
- Normal and full-screen maps use the same state sync.
- Added temporary diagnostics showing:
  - Boundary point count
  - Current checkpoint coordinates
  - Whether normal/full-screen target markers are active
  - Whether normal/full-screen boundary sources are active
- Existing MapLibre map, compass, Travel Up, control layout and child marker retained.

Upload these files to the existing GitHub repository and commit the replacements.
