# Field Quest v1.5

Shared completed-game state built from v1.4.

## What changed
All navigation modes now use one explicit completed-game state.

When the final checkpoint is completed:
- Remove the active checkpoint/target marker.
- Clear Medium-mode target/search overlays.
- Hide the Hard-mode compass.
- Clear and hide `zoneText` / target-area guidance.
- Replace `NEXT CHECKPOINT` with `GAME COMPLETE`.
- Replace the checkpoint label with `Finished`.
- Remove live distance/bearing guidance and show only the completion message.
- Set the progress bar to 100%.
- Clear the full-screen HUD's live checkpoint/distance guidance.
- Keep the map, boundary and live player position visible.
- Keep the finish flag, final score and End game action visible.

Starting a new game explicitly restores the normal live-game header and navigation state.

## Test focus
Complete Easy, Medium and Hard games and confirm all three reach the same clean end state, then run the standard regression suite.
