# Field Quest v1.15

Core-polish release candidate built from stable v1.14.10.

## Locked scope

### Boundary / exclusion-zone consistency
- Main-boundary confirmation is blocked if an existing exclusion zone would end up partly outside the revised boundary.
- The parent is told to edit or delete the affected exclusion zone before confirming again.
- Applies to both Walk Boundary and Draw/Edit Boundary confirmation paths.
- Existing exclusion geometry is never silently clipped or changed.

### Floor Is Lava new-high-score announcement
- When a player exceeds the previous best for the selected difficulty, a clear non-blocking NEW HIGH SCORE message appears in the result panel.
- Existing Easy / Medium / Hard high-score storage remains separate.
- Existing score calculation is unchanged.

### High-score reset controls
- Floor Is Lava setup now shows the stored best for the currently selected difficulty.
- The parent/player can clear only that selected difficulty's high score.
- Reset requires explicit confirmation.
- The visible best updates immediately after a reset.
- The implementation provides a reusable pattern for future games with stored high scores.

## Stable baseline
v1.14.10
