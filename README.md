# Field Quest v1.9.1

Follow-up patch for issues found during v1.9 exclusion-zone field testing.

## Fix 1 — Expanded exclusion-zone Undo
When exclusion-zone drawing/editing is active, the expanded setup map now switches to
exclusion-specific controls. Undo removes the last exclusion-zone point rather than
showing the disabled main-boundary Undo control.

## Fix 2 — Confirm zone in expanded mode
Expanded exclusion editing now includes:
- Undo zone point
- Confirm zone
- Cancel zone

A zone can therefore be created or edited completely without minimising the map.

## Fix 3 — Normal game-map rendering
The normal game map now gets explicit MapLibre resize/state refreshes after the hidden
game card becomes visible and again after the full-screen map is collapsed.
This targets the v1.9 failure where Easy mode showed a blank normal map when the player
started outside the main boundary, while the expanded map still rendered.

## Scope
The Medium-mode visual treatment for search-area overlap with exclusions remains a
separate non-blocking UX enhancement.

## Test focus
Retest the three v1.9 failures first, then affected map/setup regression tests.
