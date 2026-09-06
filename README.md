# Field Quest v1.14.6

Focused Floor Is Lava Medium-mode isolation patch built from v1.14.5.

## Fix
- Challenge Hunt's Medium orange target/search grid is now fully suppressed in Floor Is Lava.
- Every shared `grid` source update is gated so it cannot write when Floor Is Lava is active.
- The previous unreachable post-return clear has been removed.
- A reachable Lava grid clear now runs inside the normal map refresh path.

## Unchanged
- Floor Is Lava timing, safe-zone placement, red-floor behaviour, scoring, high scores and difficulty.
- Challenge Hunt Medium retains its existing search-area behaviour.
- Hard Floor Is Lava remains free of the large Challenge Hunt compass panel.
