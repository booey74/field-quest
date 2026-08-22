# Field Quest v1.3

Hard-mode compass refinement built from stable v1.2.

## Changes
- Hard-mode orange checkpoint arrow now starts from the exact centre of the compass.
- Compass cardinals rotate using the same smoothed heading source used by Travel Up.
- A fixed green marker at the top represents the direction the player is currently facing.
- The orange arrow points to the checkpoint relative to the player's current facing direction:
  - Up = ahead
  - Right = checkpoint to the right
  - Left = checkpoint to the left
  - Down = checkpoint behind
- Existing text cue such as “Head SE” remains as backup guidance.
- Hard-mode compass hides after the final checkpoint so the completed-game state is cleaner.
- Easy and Medium modes are unchanged.
- Service-worker cache updated to v1.3.

## Test focus
- Confirm splash/main UI show v1.3.
- In Hard mode, walk in several different directions and confirm N/E/S/W rotate relative to current heading.
- Confirm orange arrow always originates in the compass centre.
- Confirm turning toward the checkpoint makes the orange arrow move toward the top.
- Confirm checkpoint distance and “Head …” text remain correct.
- Complete the final checkpoint and confirm the compass disappears.
- Regression-check Easy and Medium modes.
