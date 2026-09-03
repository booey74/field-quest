# Field Quest v1.13.2

Focused patch built from v1.13.1.

## Hide & Seek setup numbering
Challenge Hunt keeps five setup steps.

Hide & Seek hides the Player & questions section and now renumbers the visible setup:
1. Define the play area
2. Game mode
3. Difficulty
4. Game settings

There is no longer a visible jump from step 2 to step 4.

## Medium search-area invalid overlap
v1.13.1 created the invalid-area map layers but the persistent game-map refresh path
did not feed them data.

v1.13.2 fixes that refresh path and also changes the geometry so only invalid parts
of the orange Medium search cell are shaded.

- Parts of the orange search cell outside the green play boundary are shaded grey.
- Parts of the orange search cell overlapping exclusion zones are shaded red.
- Grey/red overlays include dashed outlines for clarity.
- The orange search cell itself is unchanged.
- The checkpoint remains hidden.
- Normal and expanded maps use the same data.

## Unchanged
- Main-boundary warning remains OUTSIDE-only.
- 2 m inside-clear hysteresis remains.
- Exclusion-zone warnings retain priority.
- Challenge Hunt and Hide & Seek game mechanics are otherwise unchanged.
