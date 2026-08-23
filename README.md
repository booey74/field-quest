# Field Quest v1.7

Saved boundary areas release, built from the v1.6 stable baseline.

## New saved-area capability
- Save any valid current boundary, whether created by walking or drawing.
- Give each saved area a name.
- Saved areas persist locally on the current device/browser using localStorage.
- Browse saved areas from the setup screen.
- Show saved boundary point count and approximate area.
- Load a saved boundary directly into setup.
- Rename saved areas.
- Delete saved areas without deleting the currently loaded map boundary.
- Loading a saved area makes it immediately ready for game generation.
- Choose Draw Boundary after loading if you want to edit it; reconfirm before use.

## Deliberate scope
- Local device storage only.
- No accounts, cloud sync or sharing in this release.
- Exclusion zones remain a separate future platform feature.

## Existing behaviour protected
- Walk Boundary and Draw Boundary remain available.
- Easy, Medium and Hard gameplay are unchanged.
- Shared completed-game state remains unchanged.
- Service-worker cache updated to v1.7.

## Test focus
Save, reload, rename, delete and edit saved boundaries, confirm persistence after page reload, then run the normal Field Quest regression suite.
