# Field Quest v1.9.3

Follow-up patch after a Travel Up regression was identified in v1.9.1/v1.9.2.

## Root cause
The map-rendering patch in v1.9.1 accidentally removed the `setMapMode()` function.
The North Up and Travel Up buttons still called that function, so clicking Travel Up
could not switch the map into Travel Up mode.

## Fix
- Restored the proven `setMapMode()` implementation from the v1.8.2 stable baseline.
- North Up and Travel Up now switch `S.mapMode` correctly again.
- Travel Up continues to use the existing heading/fallback logic in `applyTravelBearing()`.
- v1.9.2 GPS gating and first-checkpoint-distance improvements are retained.
- Exclusion-zone fixes from v1.9.1 are retained.

## Test focus
- Confirm Travel Up button becomes active when selected.
- Walk in several directions and confirm map bearing follows direction of travel.
- Switch repeatedly between North Up and Travel Up.
- Test both normal and expanded game maps.
- Continue the remaining v1.9.2 regression tests.
