# Field Quest v1.10.2

Focused real-world tuning patch for exclusion-zone proximity warnings.

## Warning distances

### CAUTION
- Fixed 3 m border around each exclusion-zone edge.

### DANGER
- Triggered only when the live GPS position is inside the exclusion polygon.

### Clear
- CAUTION remains active until the player is more than 4 m from the exclusion-zone edge.
- This gives 1 m of hysteresis to reduce edge flicker.

## Why this changed
Earlier versions used broader GPS-aware warning ranges. Field testing showed that
the warning was active too often, creating warning fatigue and reducing its impact.

v1.10.2 intentionally makes CAUTION a genuinely near-hazard warning rather than a
large safety halo.

## Unchanged behaviour
- Normal and expanded-map warning UI.
- Distinct CAUTION / DANGER states.
- Vibration on first approach and on escalation to DANGER.
- Vibration cooldown.
- Warning reset on game end.
- v1.9.5 platform behaviour and v1.10 warning-state architecture.

## Test focus
1. Safe -> CAUTION at about 3 m.
2. DANGER only on polygon entry.
3. DANGER -> CAUTION on exit.
4. CAUTION -> safe once more than about 4 m away.
5. Warning does not dominate normal gameplay.
6. Test transitions between multiple exclusion zones.
7. Confirm no regressions in gameplay/navigation/setup.
