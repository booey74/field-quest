# Field Quest v1.14.3

Focused Floor Is Lava feedback patch.

## Changes
- During the countdown, entering a safe zone immediately shows SAFE ZONE REACHED.
- The safe zone currently occupied is visually emphasised.
- If GPS moves the player back outside before zero, the SAFE indication clears again.
- The countdown continues to zero; success is still judged only at zero.
- At zero, the floor turns red and pass/fail is decided immediately.
- On success, the red lava result state remains visible for 5 seconds before free movement resumes.
- On failure, GAME OVER remains on the red lava state.

Difficulty constants, placement rules, scoring and high-score logic are unchanged.
