# Field Quest v0.6

Navigation/map bug-fix release.

Changes from v0.5:
- Replaced Leaflet game/setup maps with MapLibre GL JS.
- Travel Up now uses MapLibre's native map bearing rather than CSS transforms.
- Travel heading only updates when GPS provides a meaningful heading or movement exceeds a small threshold.
- Heading changes are smoothed to reduce jumpiness.
- North Up and Travel Up no longer use incompatible coordinate transforms.
- Added Re-centre buttons to setup map, normal game map and full-screen map.
- Replaced the blue GPS circle with a custom child/person SVG marker.
- Compass remains visible on setup, Easy, Medium and full-screen views.
- Hard mode keeps reliable compass-direction navigation rather than phone-relative orientation.
- Existing controlled-random checkpoints, boundary markers and Medium grid mode retained.

Travel Up remains dependent on GPS heading quality. It should behave much more like sat-nav while moving, but will deliberately avoid rotating when there is no reliable travel direction.

Upload these files to the existing GitHub repository and commit the replacements.
