# Field Quest v1.10

Release candidate built from the proven v1.9.5 stable baseline.

## New: exclusion-zone proximity safety warnings

During an active game, Field Quest now monitors the player's live GPS position
against all active exclusion zones.

### Warning states
- Safe: no warning shown.
- Approach: caution banner appears when the player is close to an exclusion zone.
- Inside: warning escalates to a stronger danger message asking the player to move away.

### GPS-aware threshold
The approach threshold allows for reported phone GPS accuracy rather than waiting
for an exact polygon-edge crossing. The threshold is bounded so a poor GPS fix does
not create an unreasonably large warning area.

### Anti-flicker behaviour
A separate clearing distance is used after a warning has started. This hysteresis
helps prevent warnings rapidly appearing/disappearing when GPS drifts around the edge.

### Feedback
- Warning is visible in normal gameplay.
- Warning is also visible over the expanded game map.
- Vibration is used where supported:
  - short double pulse on approach
  - stronger double pulse on entry
- Vibration has a cooldown to avoid alert spam.

### Deliberately deferred
- Zone names/types such as Road or Water.
- Audio/speech alerts.
- Per-zone warning settings.

## Safety position
This is supplementary guidance only. Phone GPS can drift and Field Quest is not
a safety-critical navigation system. Parental supervision remains essential.

## Regression requirement
v1.9.5 behaviour must remain intact, including exclusion placement/persistence,
GPS gating, Easy/Medium/Hard gameplay, Travel Up, and collapsed/expanded map controls.
