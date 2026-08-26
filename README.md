# Field Quest v1.10.1

Focused tuning patch for the v1.10 exclusion-zone proximity warning feature.

## Changes from v1.10

### Approach warning distance
Previous behaviour:
- GPS accuracy + 6 m
- Clamped to 10–25 m

New behaviour:
- 8 m base + 25% of reported GPS accuracy
- Clamped to 8–14 m

Examples:
- 4 m GPS accuracy -> 9 m warning threshold
- 8 m accuracy -> 10 m
- 12 m accuracy -> 11 m
- 20 m accuracy -> 13 m
- Very poor accuracy remains capped at 14 m

### Warning clear distance
Previous:
- Approach threshold + 8 m

New:
- Approach threshold + 4 m

This keeps some hysteresis to reduce GPS-edge flicker without requiring the player
to move an excessive distance away before the warning disappears.

## Unchanged behaviour
- CAUTION when approaching an exclusion zone
- DANGER when inside a zone
- Expanded-map warning
- Vibration feedback and cooldown
- Warning reset on game end
- v1.9.5 core setup/gameplay/navigation behaviour

## Retest focus
1. Approach distance now feels appropriately close in real outdoor use.
2. Warning clears after a sensible move-away distance without flickering.
3. Safe -> CAUTION -> DANGER -> CAUTION -> safe sequence.
4. Multiple exclusion zones: transition between zones without getting stuck on the previous one.
5. Full affected regression tests.
