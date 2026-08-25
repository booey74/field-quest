# Field Quest v1.9.2

Follow-up patch for issues found during v1.9.1 testing.

- Travel Up becomes selectable once a usable GPS position exists.
- Checkpoint 1 prefers a meaningful starting distance from the player.
- The starting-distance rule relaxes progressively for small or constrained areas.
- Generate game remains disabled until GPS has produced a usable current position.
- Attempting to generate without GPS gives a clear instruction to start GPS and wait for a fix.
- Exclusion-zone behaviour from v1.9.1 remains unchanged.
