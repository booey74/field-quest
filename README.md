# Field Quest v1.12

Release candidate built from the proven v1.11.1 stable baseline.

## New game mode: Hide & Seek

Field Quest now offers two game modes:

### Challenge Hunt
The existing checkpoint-and-question game remains unchanged.

### Hide & Seek
Virtual hiders are placed around the confirmed play area.

Core behaviour:
- Parent chooses the number of hiders.
- Hiders are randomly distributed inside the main boundary.
- Exclusion zones remain unavailable for hider placement.
- Hiders are spread rather than intentionally clustered.
- The app tries to avoid placing a hider immediately beside the player's starting position.
- All hiders are active at once and can be found in any order.
- No target pin, target distance, bearing, grid area or direct clue is shown.
- A hider is found automatically when the player enters the chosen unlock radius.
- The game ends when every hider has been found.

## Difficulty

Easy:
- Full search trail remains visible, showing everywhere the player has explored.

Medium:
- Only the recent search trail is shown.

Hard:
- No search trail is shown.
- The boundary, player position and exclusion zones remain visible.

## Shared platform behaviour

Hide & Seek reuses:
- Confirmed/saved main boundaries.
- Exclusion zones.
- Live GPS/player marker.
- North Up / Travel Up.
- Re-centre and expanded map.
- v1.10.2 exclusion-zone CAUTION/DANGER warnings.
- v1.11.1 startup-location and Walk Boundary Undo improvements.

## Test priorities

- Challenge Hunt must remain unchanged.
- Hiders must never be knowingly placed inside exclusion zones.
- No unrevealed hider location may appear on the map or navigation UI.
- Easy/Medium/Hard trail behaviour must remain distinct.
- Hiders must be discoverable in any order.
- Game completion must occur only after all hiders are found.
