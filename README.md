# Field Quest v1.14.9

Release-candidate patch built from v1.14.8.

## Fix

### Floor Is Lava safe-zone placement
- Removes the previous extra 4 m gap required between safe zones.
- Safe zones must still not overlap.
- Existing 2 m safety buffers from the main boundary and exclusion-zone edges are unchanged.
- Level 1 safe zones remain 10% of usable playable area per circle.
- Minimum safe-zone diameter remains 10 m.
- v1.14.8 level shrinkage and countdown progression are unchanged.

## Regression focus
- A rectangular play area of about 2,400 m² with no exclusions should start Floor Is Lava Easy successfully.
- Safe zones must not overlap.
- Safe zones must remain fully inside the main boundary and outside exclusions with existing buffers.
- v1.14.8 mode-switch and progression fixes must remain stable.
