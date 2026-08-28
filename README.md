# Field Quest v1.11

Setup-polish release built from the proven v1.10.2 baseline.

## Startup map location
- Stores the latest usable Field Quest GPS position locally.
- On a later launch, uses that position as the setup-map centre.
- If unavailable, tries the current boundary centre, then a saved-boundary centre.
- Uses the generic fallback only when no familiar location exists.
- The stored position is a map-centre convenience, not a claim that the player is currently there.

## Walk Boundary Undo
- Adds Undo last point in normal Walk Boundary setup.
- Adds the same control in expanded setup.
- Removes only the most recently marked walked point.
- Disabled when there is nothing to undo or the boundary is already confirmed.
- Walk boundary must still be confirmed after editing.

## Retained
All v1.10.2 proximity-warning, exclusion-zone, saved-area, GPS, navigation and gameplay behaviour.
