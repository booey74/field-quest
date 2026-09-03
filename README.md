# Field Quest v1.14.1

Focused Floor Is Lava state-flow patch built from v1.14.

## Fixed round-state behaviour
The visual phases are now separated explicitly:

1. Free movement
   - Normal map colours.
   - No safe zones visible.
   - Player is told to move around the play area.

2. Pre-lava countdown
   - Safe zones become visible.
   - Floor remains normal.
   - Countdown is shown clearly.

3. Floor Is Lava active
   - Playable floor turns bright red.
   - Safe zones remain visible.
   - Active timer runs.

4. SAFE
   - Entering a safe zone gives immediate SAFE feedback.
   - Red lava clears immediately.
   - After the brief SAFE confirmation, completed safe zones disappear.

5. Return to free movement
   - Normal map.
   - No next-round safe zones visible until the next pre-lava countdown.

No changes were made to the agreed v1.14 difficulty constants, placement logic,
minimum usable area, safe-zone sizing, endless-level scoring, or high scores.
