# Field Quest v1.9

Exclusion zones release, built from the v1.8.2 stable baseline.

## New capability
- Add one or more manually drawn exclusion zones inside a confirmed main boundary.
- Exclusion zones are shown as red no-go polygons on setup and gameplay maps.
- Tap the map to add exclusion-zone points.
- Drag exclusion-zone points while drawing/editing.
- Undo, cancel and confirm zone creation.
- Select, edit or delete an existing zone.
- Exclusion zones are saved and loaded with Saved Areas.
- Existing saved areas without exclusion-zone data continue to load normally.

## Game-engine behaviour
- Random checkpoint placement now requires points to be:
  - Inside the main boundary.
  - Outside every exclusion zone.
- A small safety buffer is also kept from exclusion-zone edges where possible.
- If the remaining playable space cannot safely support the requested checkpoint count,
  the app asks the user to reduce checkpoints or adjust the exclusion zones.

## Scope
- Manual drawing only in v1.9.
- Walk-an-exclusion-zone is deferred.
- Enable/disable toggles are deferred.
- Exclusion zones are reusable platform data for future game modes.

## Test focus
- Multiple zone creation.
- Editing/deleting.
- Boundary containment.
- Saved-area persistence.
- Checkpoint avoidance in Easy/Medium/Hard.
- Small remaining playable areas.
- Standard regression suite.
