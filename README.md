# Field Quest v1.13.1

UX and safety polish release built from stable v1.12.2.

## Main boundary warning
Main-boundary warning behaviour has been simplified before field testing.

During active gameplay:
- No warning is shown while the player remains inside the defined play area.
- OUTSIDE appears only after GPS indicates the player has crossed beyond the main boundary.
- A 2 m inside-clear margin prevents the warning rapidly flashing on/off because of normal GPS drift near the edge.
- OUTSIDE uses a finite vibration pattern on entry.
- Exclusion-zone warnings always take priority if both warning conditions apply.
- The same warning state appears in normal and expanded gameplay views.

This is intentionally different from exclusion-zone behaviour:
- Exclusion zones retain CAUTION before entry and DANGER inside.
- The main boundary only warns after the player has actually left the playable area.

These warnings are advisory only. Phone GPS can drift and Field Quest is not a
safety-critical navigation system.

## Medium search-area clarification
Challenge Hunt Medium keeps the existing search-area geometry and uncertainty.

When the search rectangle extends into invalid space:
- Space outside the main boundary is visually muted grey.
- Exclusion-zone space is visually reinforced as invalid red.
- The search rectangle itself is not shrunk or moved around the true checkpoint.
- The exact checkpoint remains hidden.
- The treatment is shared by normal and expanded maps.

## Retained from v1.12.2
- Challenge Hunt Easy / Medium / Hard.
- Hide & Seek Easy / Medium / Hard.
- Saved boundaries and exclusion zones.
- Exclusion-zone CAUTION/DANGER warnings.
- North Up / Travel Up.
- Player follow, Re-centre and expanded maps.
- Found-hider geographic markers and one-shot completion.
