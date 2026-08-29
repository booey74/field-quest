# Field Quest v1.11.1

Focused regression-fix patch built from v1.11.

## Fix
The 5-second vibration cooldown still applies to repeated warning events, but
CAUTION -> DANGER escalation now bypasses that cooldown.

This means:
- First CAUTION can vibrate normally.
- Repeated CAUTION GPS updates do not keep buzzing.
- Entering an exclusion zone triggers the stronger DANGER vibration even if it
  happens within 5 seconds of the CAUTION vibration.
- Repeated DANGER updates still do not create continuous vibration because the
  vibration is only requested when the warning state changes.

## Retained
- v1.11 last-known startup location.
- v1.11 Walk Boundary Undo.
- v1.10.2 3 m CAUTION / +1 m hysteresis.
- All existing setup, saved-area, exclusion-zone, navigation and gameplay behaviour.

## Retest focus
1. Trigger CAUTION and then enter the exclusion zone within 5 seconds.
2. Confirm the stronger DANGER vibration still occurs.
3. Confirm repeated GPS updates while remaining in CAUTION or DANGER do not buzz repeatedly.
4. Confirm v1.11 setup features remain working.
5. Complete the remaining exclusion-zone save/load/proximity regression check.
