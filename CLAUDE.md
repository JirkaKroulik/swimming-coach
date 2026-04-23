# Swimming Coach App — Claude Code Instructions

## What This Project Is

A single-file HTML swimming coaching dashboard (`index.html`) that tracks swim training, gym sessions, and weekly planning for a goal of swimming 400m freestyle in under 7:30 by end of year. Current baseline is 7:45.

The app is deployed on Vercel from this GitHub repo. Any push to `main` auto-deploys.

## Architecture

Everything lives in `index.html`. The file has two sections:

1. **DATA object** (top of the `<script>` block) — the ONLY section that ever needs editing. Contains all sessions, gym weeks, pool weeks, calendar config, and dashboard text.
2. **Engine** (below the DATA object) — renders everything dynamically from DATA. Never edit this section.

## How to Add a New Swim Session from a Garmin CSV

The user will place a Garmin CSV file in this repo directory (or provide a path). Here's how to process it:

### Garmin CSV Column Mapping (Czech language headers)

| Czech Header | Meaning | Use |
|---|---|---|
| Intervaly | Interval number (1, 1.1, 1.2, 2, 3...) | Structure identifier |
| Záběr při plavání | Stroke type ("Neznámý" = freestyle, "Odpočinek" = rest) | Filter rest periods |
| Délky | Number of lengths | — |
| Vzdálenost | Distance in metres | Lap distance |
| Čas | Time for this interval | Lap time |
| Průměrný Swolf | Average Swolf score | Key efficiency metric |
| Průměrný ST | Average heart rate (ST = srdeční tep) | **This is HR, not strokes** |
| Maximální ST | Max heart rate | — |
| Celkový počet záběrů | Total stroke count | Used to calculate strokes/50m |
| Průměrný počet záběrů | Average strokes per length | Strokes per 50m (one hand) |
| Shrnutí | Summary row | Session totals |

### How to Identify Training Laps vs Drills/Warm-up

- **Interval 1** is almost always warm-up + drills. It has many sub-laps (1.1, 1.2, etc.) with mixed Swolf values, rest segments (no distance), and often very low or very high Swolf. EXCLUDE from training stats.
- **Intervals 2–N** (whole numbers, not sub-laps) with distance = 50m or 100m and reasonable Swolf (60–100) are **training laps**. These go into the session data.
- **The last interval** is often cool-down — look for very high Swolf (100+) and slow times. EXCLUDE from training stats.
- **"Odpočinek" rows** are rest periods between intervals. Ignore these.
- **Sub-laps** (e.g., 2.1, 3.1) are Garmin's breakdown within an interval. For single-length intervals (50m), the sub-lap equals the interval. For multi-length intervals (100m+), sub-laps show per-50m splits.

### Session Data Format

Add to `DATA.sessions` array:

```javascript
{
  date: '2025-MM-DD',        // ISO date
  label: 'DD Mon',           // Short label for charts
  lapCount: N,               // Number of training laps only
  distance: 'X00m',          // Total training distance
  avgSwolf: XX.X,            // Average Swolf across training laps
  avgStrokes: XX.X,          // Average strokes/50m across training laps
  avgHR: NNN,                // Average HR across training laps
  tag: 'description',        // e.g., '8×50m', '5×100m', 'mixed distances'
  summary: 'Text...',        // Coach analysis of the session
  drills: 'Text...',         // Description of warm-up/drill/cool-down blocks
  laps: [
    { n:1, dist:50, t:'0:52.6', sw:75, st:22, hr:136 },
    // ... one entry per training lap
  ]
}
```

### Computing Session Stats

- `avgSwolf` = mean of all training lap `sw` values
- `avgStrokes` = mean of all training lap `st` values (strokes per 50m, one hand)
- `avgHR` = mean of all training lap `hr` values
- For strokes: use `Průměrný počet záběrů` from the interval summary row, or `Celkový počet záběrů` divided by number of lengths

### After Adding a Session

The engine auto-updates: dashboard KPIs, charts, past session lists, progress tab, and modal data. You only need to:

1. Add the session object to `DATA.sessions`
2. Update `DATA.today` if the date has moved forward
3. Optionally update `DATA.nextSessionFocus` with new coaching guidance
4. Commit and push — Vercel auto-deploys

## How to Add a Gym Week

Add to `DATA.gymWeeks` array. Each week has:

```javascript
{
  week: N,
  monDate: 'DD Mon', thuDate: 'DD Mon',
  status: 'done' | 'current' | 'planned',
  monDay: 'Monday',  // Override if gym day shifts (e.g., 'Tuesday')
  monNote: '',        // Optional note
  monExercises: { warmup: [...], main: [...], finisher: [...] },
  thuExercises: { warmup: [...], main: [...], finisher: [...] },
}
```

Each exercise: `{ name, note, sets, cue, video, weights: { last, today } | { done } | { ref, today } }`

Also add to `DATA.weekPlan` mapping and `DATA.dateOverrides` if the week has non-standard days.

## How to Add a Pool Week

Add to `DATA.poolWeeks` array:

```javascript
{
  id: 'pool-X', week: N, title: 'Pool Session X', date: 'DD Mon',
  status: 'done' | 'current' | 'planned',
  kpis: [{ l: 'Label', v: 'Value' }, ...],  // 4 KPIs
  focusPlan: '...',     // For planned sessions
  focusResult: '...',   // For completed sessions
  coachNote: '...',
  sections: [...]       // Table sections with headers and rows
}
```

## Calendar Config

- `DATA.defaultSchedule`: Maps day-of-week (0=Sun) to session type
- `DATA.dateOverrides`: ISO date → session type for non-standard days
- `DATA.weekPlan`: Monday ISO date → { sessionType: gymWeekIndex }
- `DATA.restWeekMondays`: Array of Monday ISO dates that are rest weeks

## Current Training State (as of 26 Mar 2025)

- **Phase:** 1 of 4 (Foundation)
- **Week:** 2
- **Sessions logged:** 6 (13 Feb, 20 Feb, 11 Mar, 13 Mar, 21 Mar, 26 Mar)
- **Latest session (26 Mar):** Breakthrough — Swolf 76.9, strokes 22.8, all laps in target
- **Key technique focus:** EVF catch (forearm pressure backward, not downward), stroke finish past hip
- **Gym focus:** Mon = pulling strength (cable row, prone row, lat pulldown), Thu = shoulder stability (face pulls, TRX, external rotation)
- **Next session:** 28 Mar (Pool Session B) — 10 × 50m, target Swolf <80

## Coaching Role

Act as an elite swimming coach. Be encouraging but data-driven. When analyzing sessions:

1. Focus on Swolf and stroke rate — these are the primary efficiency metrics
2. Note HR trends — target is Zone 2 (<145 BPM) for technique work
3. Compare against previous sessions to track progression
4. Write a `summary` that explains what happened and why
5. Write a `drills` description identifying warm-up, drill, and cool-down blocks
6. Update `nextSessionFocus` with specific guidance for the upcoming session

## Git Workflow

After updating `index.html`:

```bash
git add index.html
git commit -m "Add session DD Mon YYYY — Swolf XX.X, strokes XX.X"
git push
```

Vercel auto-deploys within seconds of the push.
