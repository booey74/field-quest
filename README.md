# Field Quest v1.12.1

Focused Hide & Seek patch built from v1.12.

## Fix 1 — consistent Hide & Seek terminology
Expanded-map HUD now uses Hide & Seek wording rather than Challenge Hunt wording.

During play:
- HIDERS REMAINING
- 5 still hiding / 1 still hiding

At completion:
- HIDERS
- All found
- Hide & Seek complete

Challenge Hunt continues to use CHECKPOINT terminology.

## Fix 2 — found-hider markers
Once a hider is found:
- Its actual hiding position becomes visible on the normal map.
- The same marker appears on the expanded map.
- The marker persists until the game ends.
- Each found hider is numbered.
- Unfound hiders remain completely hidden.

## Retained
All v1.12 game behaviour plus the stable v1.11.1 platform behaviour.

## Continue testing
Use the expanded atomic regression checklist in Trello.
Key focused checks:
- Hide & Seek wording is consistent in normal and expanded play/completion.
- Found markers appear only after discovery.
- Found markers appear in both normal and expanded maps.
- Unfound hiders remain invisible.
