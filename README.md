# Field Quest v1.9.5

Focused UI patch following v1.9.4 release-candidate testing.

## Fix — context-aware collapsed setup controls
When exclusion-zone drawing/editing is active:

- The controls directly beneath the normal/collapsed setup map now switch to:
  - Undo zone point
  - Confirm zone
  - Cancel zone
- Main-boundary Walk/Draw controls are hidden until exclusion editing ends.
- The collapsed controls stay synchronised with the expanded exclusion controls.
- Undo/Confirm enabled states match the current exclusion draft.
- Confirming or cancelling restores the correct Walk/Draw boundary controls.

This means the map-associated controls now reflect the current editing task in both
collapsed and expanded views.

## Retained behaviour
- v1.9.4 GPS discoverability and Game settings guidance.
- v1.9.3 Travel Up repair.
- Exclusion-zone placement, editing, persistence and checkpoint avoidance.
- Normal/expanded game-map fixes.

## Test focus
1. Start adding an exclusion zone in collapsed mode and confirm the controls below the map switch immediately.
2. Expand and minimise while editing and confirm the same actions remain available.
3. Test Undo zone point, Confirm zone and Cancel zone in both views.
4. Confirm normal Walk/Draw controls return after exclusion editing ends.
5. Re-run affected exclusion/setup regression tests.
