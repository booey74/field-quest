# Field Quest v1.14.8

Release-candidate patch built from v1.14.7.

## Fixes / changes

### Game-mode switching
- Changing game mode now clears the previous active game's UI and state.
- Removes stale checkpoints, hiders, Floor Is Lava state, target markers,
  trails, search grids and result information before the next game starts.

### Floor Is Lava safe-zone progression
- Level 1 safe-zone area increased from 4% to 10% of usable playable area
  per circle.
- Zone area continues to reduce by 10% per level until the existing
  10 m minimum diameter is reached.
- The 10 m GPS-safe minimum is unchanged.

### Floor Is Lava countdown progression
- Level pressure now tightens by 6% per successive level after the
  distance-based travel-time calculation, rather than 3%.
- Distance, mode-specific assumed movement speed and safety margin still
  determine the base countdown.
- Existing 2-second absolute countdown floor remains unchanged.

## Not included
- New-high-score announcement remains a separate backlog enhancement.
- GPS-aware adaptive minimum safe-zone sizing remains a future backlog idea.
