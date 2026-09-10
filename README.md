# Field Quest v1.14.10

Release-candidate patch built from v1.14.9.

## Floor Is Lava adaptive Level 1 safe-zone sizing

The 10% rule is now a preferred Level 1 target rather than a hard requirement.

- Preferred Level 1 safe-zone area remains 10% of usable playable area per circle.
- Pre-flight now searches for the largest safe radius that actually fits the selected
  boundary, exclusions, player start position and difficulty.
- If the full 10% size does not fit, the radius is reduced in 0.5 m steps until a
  valid layout is found.
- Safe zones never go below the existing 10 m minimum diameter.
- The existing 2 m boundary/exclusion buffer remains unchanged.
- Safe zones still cannot overlap.
- Once the fitted Level 1 radius is established, successive levels continue to shrink
  by 10% in area until the 10 m minimum diameter is reached.
- The tighter v1.14.8 countdown progression remains unchanged.

## Placement robustness

The previous single greedy random placement pass has been replaced with a multi-restart
layout search. This reduces false 'cannot fit' failures caused by an unlucky sequence
of random candidate points.

## Regression focus

- The ~2,024 m² irregular test boundary should start Easy Floor Is Lava if three
  10 m+ safe zones can be safely fitted.
- A more open boundary should still receive the full preferred 10% Level 1 size.
- Narrow/irregular areas may start below 10%, but should use the largest feasible size.
- No zone may overlap another zone, cross the main boundary buffer, or enter an exclusion.
- Level-to-level shrinkage and countdown progression must remain visible.
- Existing mode-switch, Challenge Hunt and Hide & Seek behaviours must remain stable.
