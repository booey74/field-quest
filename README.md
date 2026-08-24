# Field Quest v1.8

Boundary setup UX refinements, rebuilt after field-test feedback.

## Changes
- Before a boundary exists, the action remains **Draw boundary**.
- Once any boundary exists, the same action becomes **Edit boundary**.
- Added **Expand map** during boundary setup.
- Expand works in both Walk Boundary and Draw/Edit Boundary modes.
- The existing setup map itself becomes full-screen, preserving boundary points,
  player position, polygon, editing state, panning and Re-centre behaviour.

## Rebuild fix
The expanded setup map now includes the controls required to continue creating the
boundary without collapsing the map:
- Walk mode: **Start GPS** and **Mark boundary point**.
- Draw/Edit mode: **Undo last point** and **Confirm boundary**.
- Enabled/disabled states stay synchronised with the normal setup controls.

## Existing behaviour protected
- Saved boundary areas remain unchanged.
- Boundary geometry rules remain unchanged.
- Easy, Medium and Hard gameplay remain unchanged.
- Service-worker cache remains v1.8.

## Test focus
Verify that a full boundary can now be created entirely while the setup map remains
expanded in both Walk and Draw/Edit modes, then rerun the normal regression suite.
