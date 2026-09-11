# Field Quest v1.15.4

Focused Floor Is Lava rendering patch built from v1.15.3.

## Fix
- Safe-zone circles must appear as soon as the pre-lava countdown begins.
- The floor must remain normal during that countdown.
- At zero, the floor turns red and pass/fail is judged immediately.
- Map refresh now uses the shared map-state synchronisation path for both normal and expanded maps.
- This avoids missing the safe-zone render when MapLibre is not fully style-ready at the exact transition into pre-countdown.

## No other changes
No scoring, high-score, timing, GPS, boundary, exclusion-zone or navigation-rule changes.
