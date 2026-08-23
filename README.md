# Field Quest v1.6

Manual boundary drawing release, built from the v1.5 stable baseline.

## New boundary setup
Players can now choose:
- Walk boundary — the existing GPS walk-and-mark workflow.
- Draw boundary — tap the setup map to place numbered boundary points.

## Draw mode
- Tap the map to add points.
- A live polygon and approximate area update as points are added.
- Drag any numbered point to refine the shape before confirming.
- Undo removes the most recently added point.
- Clear boundary resets the whole shape.
- At least three points are required.
- Confirm boundary locks the drawn area and enables game generation.
- Re-entering Draw boundary unlocks it for editing and requires reconfirmation.

## Existing behaviour protected
- Walk boundary remains available.
- Easy, Medium and Hard gameplay are unchanged.
- v1.5 shared completed-game state remains in place.
- Map/player/navigation behaviour remains unchanged outside boundary setup.
- Service-worker cache updated to v1.6.

## Test focus
Test both boundary creation methods, editing/undo/confirm behaviour, area calculation, and then run the standard Field Quest regression suite.
