# Field Quest v1.12.2

Focused Hide & Seek stability patch built from v1.12.1.

## Fix 1 — completion feedback fires once

Previously, after the final hider was found, every later GPS update could call the
Hide & Seek completion routine again. This replayed the completion vibration until
the game was ended.

v1.12.2 adds an explicit one-shot Hide & Seek completed state:
- Completion UI is entered once.
- Completion vibration plays once.
- Later GPS updates do not replay completion feedback.
- End Game resets the completed state for the next game.

## Fix 2 — found hiders use map-native coordinates

The v1.12.1 found-hider display used HTML MapLibre markers. Field testing showed
those markers could appear to drift relative to the boundary/exclusion polygons as
orientation changed.

v1.12.2 replaces them with a GeoJSON point source rendered as native MapLibre circle
layers. The found-hider location is therefore drawn in the same geographic rendering
pipeline as:
- The main boundary.
- Exclusion zones.
- Search trails.

Expected behaviour:
- A found hider remains locked to its hiding latitude/longitude.
- North Up / Travel Up / player orientation cannot move it relative to the map.
- Found locations appear on normal and expanded maps.
- Unfound hiders remain completely hidden.

## Retained
- v1.12.1 Hide & Seek terminology fixes.
- Easy / Medium / Hard search-trail behaviour.
- Challenge Hunt.
- v1.11.1 stable platform behaviour.

## Retest focus
1. Find multiple hiders, change walking direction repeatedly in North Up, and confirm
   found locations remain fixed relative to the boundary and exclusions.
2. Repeat in Travel Up.
3. Find the final hider and confirm the completion vibration stops automatically.
4. Leave the completed game open through several GPS updates and confirm no vibration
   is replayed.
5. Continue the full atomic Trello regression checklist.
