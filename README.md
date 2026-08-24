# Field Quest v1.8

Boundary setup UX refinements, built from the v1.7 stable baseline.

## Changes
- Before a boundary exists, the action remains **Draw boundary**.
- Once any boundary exists, the same action becomes **Edit boundary**.
- Added **Expand map** during boundary setup.
- Expand works in both Walk Boundary and Draw/Edit Boundary modes.
- The existing setup map itself becomes full-screen, so boundary points, player position,
  polygon, editing state, panning and re-centre behaviour remain continuous.
- The button changes to **Minimise** while expanded.
- Minimise returns to the normal setup layout without losing state.

## Existing behaviour protected
- Saved boundary areas remain unchanged.
- Walk and Draw/Edit boundary geometry rules remain unchanged.
- Easy, Medium and Hard gameplay remain unchanged.
- Service-worker cache updated to v1.8.

## Test focus
Check Draw/Edit wording, expand/minimise in both Walk and Draw/Edit modes, add/drag points
while expanded, Re-centre behaviour, state preservation, portrait layout and the normal
Field Quest regression suite.
