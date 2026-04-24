// ╔═══════════════════════════════════════════════════════════════╗
// ║  SINGLE DATA OBJECT — edit ONLY this file to update app     ║
// ╚═══════════════════════════════════════════════════════════════╝

const DATA = {
  // Pin "today" to training timeline (month is 0-indexed)
  today: new Date(2026, 3, 24), // 24 Apr 2026 (Friday, Week 5, Session D done)

  goal: { baseline: '7:45', target: '7:30', phase: 1, totalPhases: 4 },

  // ── SWIM SESSIONS (training laps only — drills/warm-up/cool-down excluded) ──
  sessions: [
    {
      date:'2026-02-13', label:'13 Feb', lapCount:10, distance:'1,000m',
      avgSwolf:82.1, avgStrokes:26.6, avgHR:151, tag:'mixed distances',
      summary:'Mixed distance session — descending from 150m down to 50m repeats. Main set was 4 longer intervals (150–200m) followed by 6 × 50m. Early laps showed stroke count creeping to 28–29 on longer distances, improving to 25 on the 50s. Fatigue visible in the longer sets.',
      drills:'🏃 Warm-up block (Interval 1) — 250m mixed: push-off sprint (1:09), 2 build laps (1:05, 1:18), transition lap (0:45), very long rest (4:39), fast finish (0:21). Total ~10 min. Warm-up excluded from lap stats.\n\n❄️ Cool-down (Interval 12) — 2 × 50m very slow (1:21, 1:41). Swolf 114–129. HR falling. Excluded from lap stats.',
      laps:[
        {n:1,dist:150,t:'2:56.9',sw:85,st:26,hr:149},{n:2,dist:200,t:'3:53.4',sw:87,st:28,hr:151},
        {n:3,dist:200,t:'3:57.7',sw:88,st:29,hr:153},{n:4,dist:150,t:'3:00.6',sw:89,st:29,hr:154},
        {n:5,dist:50,t:'0:51.7',sw:76,st:24,hr:137},{n:6,dist:50,t:'0:54.1',sw:81,st:27,hr:152},
        {n:7,dist:50,t:'0:53.5',sw:80,st:26,hr:142},{n:8,dist:50,t:'0:52.7',sw:78,st:25,hr:160},
        {n:9,dist:50,t:'0:52.3',sw:77,st:25,hr:159},{n:10,dist:50,t:'0:52.1',sw:80,st:28,hr:157},
      ]
    },
    {
      date:'2026-02-20', label:'20 Feb', lapCount:9, distance:'900m',
      avgSwolf:81.1, avgStrokes:26.4, avgHR:157, tag:'mixed distances',
      summary:'Best average Swolf session so far (81.1). Descending distance structure — 300m, 200m, 100m then 6 × 50m. Longer intervals showed 27–28 strokes, improving to 78 Swolf on the final 50m. HR ran high (157 avg) — strong effort across all intervals.',
      drills:'🏃 Warm-up block (Interval 1) — 500m mixed: fast push-off (30s), sprint (17s), build laps, moderate laps, very long rest (5:36), 2 final laps. Total ~13 min. Excluded from lap stats.\n\n🔧 Drills (Intervals 2–3) — 2 × 50m after warm-up: Swolf 81, strokes 23–24. Low-intensity technique laps. Excluded from main set stats.\n\n❄️ Cool-down (Interval 13) — 3 laps mixed (1:01, sprint 24s, 1:26). Excluded from lap stats.',
      laps:[
        {n:1,dist:300,t:'5:50.9',sw:86,st:28,hr:149},{n:2,dist:200,t:'3:52.9',sw:86,st:28,hr:151},
        {n:3,dist:100,t:'1:50.1',sw:82,st:27,hr:155},{n:4,dist:50,t:'0:53.2',sw:77,st:24,hr:137},
        {n:5,dist:50,t:'0:54.6',sw:81,st:26,hr:161},{n:6,dist:50,t:'0:54.2',sw:81,st:27,hr:163},
        {n:7,dist:50,t:'0:53.8',sw:80,st:26,hr:165},{n:8,dist:50,t:'0:53.0',sw:79,st:26,hr:166},
        {n:9,dist:50,t:'0:52.0',sw:78,st:26,hr:169},
      ]
    },
    {
      date:'2026-03-11', label:'11 Mar', lapCount:11, distance:'600m',
      avgSwolf:81.7, avgStrokes:24.5, avgHR:156, tag:'1×100m + 10×50m',
      summary:'Best strokes session — 24.5 average, opening 100m at only 18 strokes (personal best). Structured drill block included kick board and pull buoy. Main set: 1 × 100m opener then 10 × 50m. Technique held well but Swolf crept up toward the end of the 50m block.',
      drills:'🏃 Warm-up block (Interval 1) — 250m mixed: fast push-off (20s), 2 build laps, moderate lap. Total ~5 min. Excluded from lap stats.\n\n🔧 Drill block (Intervals 2–6) — ~350m dedicated drills: Intervals 3 and 5 show Swolf 38–39 (kick board or pull-buoy drills), Intervals 2, 4, 6 show very low stroke counts (7–19 strokes). All excluded from lap stats.',
      laps:[
        {n:1,dist:100,t:'1:46.6',sw:71,st:18,hr:153},{n:2,dist:50,t:'0:52.3',sw:75,st:23,hr:146},
        {n:3,dist:50,t:'0:54.1',sw:79,st:25,hr:156},{n:4,dist:50,t:'0:54.7',sw:80,st:25,hr:158},
        {n:5,dist:50,t:'0:59.0',sw:86,st:27,hr:167},{n:6,dist:50,t:'0:58.5',sw:85,st:27,hr:164},
        {n:7,dist:50,t:'0:59.0',sw:85,st:26,hr:165},{n:8,dist:50,t:'0:56.6',sw:81,st:24,hr:141},
        {n:9,dist:50,t:'0:59.0',sw:83,st:24,hr:152},{n:10,dist:50,t:'1:00.9',sw:85,st:24,hr:157},
        {n:11,dist:50,t:'1:03.0',sw:89,st:26,hr:158},
      ]
    },
    {
      date:'2026-03-13', label:'13 Mar', lapCount:6, distance:'600m',
      avgSwolf:84.5, avgStrokes:26.8, avgHR:150, tag:'6×100m',
      summary:'Clean 6 × 100m main set. Most consistent session structurally — stroke count steady at 26–27 throughout with no significant degradation. Lower HR (150 avg) than previous sessions. Swolf stayed in the 82–86 range across all laps.',
      drills:'🏃 Warm-up/drill block (Interval 1) — 700m comprehensive mixed block: 14 lengths with multiple rest intervals, sprint push-offs (30–37s), moderate laps, build laps, long rests (28–110s). Full technique warm-up ~22 min. Excluded from lap stats.\n\n❄️ Fatigue set (Interval 8) — 2 × 50m very slow (1:17, 1:41). Swolf 110–128. Exhaustion laps at session end. Excluded from lap stats.',
      laps:[
        {n:1,dist:100,t:'1:55.8',sw:85,st:27,hr:135},{n:2,dist:100,t:'1:53.4',sw:84,st:27,hr:123},
        {n:3,dist:100,t:'1:57.4',sw:86,st:27,hr:157},{n:4,dist:100,t:'1:53.3',sw:82,st:26,hr:158},
        {n:5,dist:100,t:'1:58.2',sw:86,st:27,hr:165},{n:6,dist:100,t:'1:54.8',sw:84,st:27,hr:163},
      ]
    },
    {
      date:'2026-03-21', label:'21 Mar', lapCount:5, distance:'500m',
      avgSwolf:85.6, avgStrokes:25.4, avgHR:145, tag:'5×100m',
      summary:'Breakthrough session. First time correct catch angle was clearly felt — pushing backward not downward immediately flattened body position and stopped the legs sinking. Drills with fingertip drag and fist drill felt significantly better than before. Main set 5 × 100m: lap 1 excellent (Swolf 79, 24 strokes — personal best), technique held for 4 laps then broke on lap 5. Technique fatigue, not fitness.',
      drills:'🏃 Warm-up + full drill block (Interval 1) — ~1,850m mixed block over 38 min. Embedded push-offs, drill sets, rests and build laps. Garmin logged as one long interval — individual drill data unreliable.\n\n💡 Key feeling: correct catch angle naturally flattened body position. Legs stopped sinking.\n\n❄️ Cool-down (Interval 7) — 2 × 50m very slow. Swolf 103. Excluded from lap stats.',
      laps:[
        {n:1,dist:100,t:'1:51.8',sw:79,st:24,hr:139},{n:2,dist:100,t:'1:58.3',sw:85,st:26,hr:150},
        {n:3,dist:100,t:'2:00.6',sw:86,st:26,hr:147},{n:4,dist:100,t:'2:01.6',sw:87,st:26,hr:147},
        {n:5,dist:100,t:'2:09.9',sw:91,st:26,hr:143},
      ]
    },
    {
      date:'2026-03-26', label:'26 Mar', lapCount:8, distance:'400m',
      avgSwolf:76.9, avgStrokes:22.8, avgHR:148, tag:'8×50m (Wed extra)',
      summary:'Unexpected Wednesday session — technique transfer confirmed. 8 × 50m main set with all laps between Swolf 75–79, smashing the <82 target. Stroke count held at 22–23 throughout — first time consistently below 23. Pattern from drills transferred cleanly to the main set. HR crept high on laps 3 and 7–8 (152–161) but technique didn\'t break. Only 8 of 10 planned reps completed. Cool-down 2 × 50m showed expected fatigue (Swolf 104–109).',
      drills:'🏃 Warm-up + full drill block (Interval 1) — 850m over 22:38. 24 sub-laps: 12 swim lengths + 12 rest/drill segments. Included fingertip drag, fist drill, and pull finish pause sequences. Notable sub-laps: 1.10 (Swolf 57, 15 strokes — excellent drill rep), 1.16–1.19 (very fast push-off/sprint reps, Swolf 19–36). Full block excluded from training lap stats.\n\n❄️ Cool-down (Interval 10) — 2 × 50m slow: 1:17.8 + 1:19.6, Swolf 109/104. HR 144–149. Normal fatigue cool-down. Excluded from lap stats.',
      laps:[
        {n:1,dist:50,t:'0:52.6',sw:75,st:22,hr:136},{n:2,dist:50,t:'0:52.6',sw:75,st:22,hr:148},
        {n:3,dist:50,t:'0:54.7',sw:78,st:23,hr:152},{n:4,dist:50,t:'0:52.6',sw:76,st:23,hr:143},
        {n:5,dist:50,t:'0:54.1',sw:77,st:23,hr:144},{n:6,dist:50,t:'0:54.1',sw:77,st:23,hr:147},
        {n:7,dist:50,t:'0:54.8',sw:78,st:23,hr:161},{n:8,dist:50,t:'0:56.2',sw:79,st:23,hr:149},
      ]
    },
    {
      date:'2026-03-28', label:'28 Mar', lapCount:10, distance:'500m',
      avgSwolf:76.9, avgStrokes:22.6, avgHR:150, tag:'10×50m',
      summary:'Pool Session B completed — all 10 planned reps executed. Swolf held 74–78 throughout, every lap under the <80 target. Best lap: Lap 3 (Swolf 74, 21 strokes — personal best strokes). Strokes 21–22 for first 6 laps, creeping to 23–25 with fatigue on laps 7–10. HR steady at avg 150. Pattern from Wednesday confirmed and sustained across the full planned set for the first time.',
      drills:'🏃 Warm-up + drill block (Interval 1) — 1,000m over 22:37. 20 sub-laps with varied intensities: push-off sprints, build laps, drill sets and rest intervals. Full fingertip drag and fist drill block included. Excluded from lap stats.\n\n❄️ Cool-down (Interval 12) — 200m mixed: 3 moderate laps (0:30–0:34) + 1 slow cool-down (1:23, Swolf 108). HR 148–155. Normal fatigue. Excluded from lap stats.',
      laps:[
        {n:1,dist:50,t:'0:53.9',sw:76,st:22,hr:133},{n:2,dist:50,t:'0:53.7',sw:76,st:22,hr:140},
        {n:3,dist:50,t:'0:53.3',sw:74,st:21,hr:152},{n:4,dist:50,t:'0:55.7',sw:78,st:22,hr:151},
        {n:5,dist:50,t:'0:55.6',sw:78,st:22,hr:155},{n:6,dist:50,t:'0:53.9',sw:77,st:23,hr:152},
        {n:7,dist:50,t:'0:55.3',sw:78,st:23,hr:157},{n:8,dist:50,t:'0:55.0',sw:78,st:23,hr:155},
        {n:9,dist:50,t:'0:52.7',sw:76,st:23,hr:155},{n:10,dist:50,t:'0:53.1',sw:78,st:25,hr:151},
      ]
    },
    {
      date:'2026-04-17', label:'17 Apr', lapCount:7, distance:'700m',
      avgSwolf:83.4, avgStrokes:24.6, avgHR:148, tag:'7×100m',
      summary:'Pool Session C — first 100m session. 7 reps completed. Avg Swolf 83.4, strokes 24.6. The defining pattern: first 50m of every rep was consistently worse than the second (avg Swolf 86 on the first 50m vs 80 on the second). Rep 4 was the starkest example — first 50m Swolf 90, second 50m Swolf 75. Rests ran long: 44–141 seconds between reps. Key insight: technique isn\'t degrading mid-rep — it degrades at the start of each rep due to tension, then recovers naturally in the second length. This points to a reset problem between reps, not an endurance problem. The catch and pull are working once the body settles. Session D focus: remove the tension at the start of each rep.',
      drills:'🏃 Warm-up + drill block (Interval 1) — 1,000m over 20:04. 28 sub-laps with varied intensities: push-off sprints, build laps, drill sets and rest intervals. Excluded from lap stats.\n\n❄️ Cool-down (Interval 9) — 200m mixed: sub-laps showed Swolf 32 (push-off sprint), 73 (moderate), 102, 119 (deliberate slow cool-down). HR falling. Excluded from lap stats.',
      laps:[
        {n:1,dist:100,t:'1:55.7',sw:82,st:24,hr:135},
        {n:2,dist:100,t:'1:54.3',sw:81,st:24,hr:148},
        {n:3,dist:100,t:'1:57.3',sw:84,st:25,hr:156},
        {n:4,dist:100,t:'1:56.8',sw:82,st:24,hr:142},
        {n:5,dist:100,t:'1:56.1',sw:83,st:25,hr:150},
        {n:6,dist:100,t:'1:58.5',sw:85,st:26,hr:155},
        {n:7,dist:100,t:'2:00.1',sw:86,st:26,hr:151},
      ]
    },
    {
      date:'2026-04-24', label:'24 Apr', lapCount:11, distance:'550m',
      avgSwolf:77.0, avgStrokes:22.8, avgHR:146, tag:'11×50m (feel-first)',
      summary:'Feel-first session — one cue only: forearm pressure backward not downward. Best average HR ever (146 BPM), most consistent rests ever (30–47s, avg 37.9s). Swolf 77.0 matches all-time best average. Stroke count 22.8 identical to best session (26 Mar). The feel-first approach worked — lower HR confirms less tension in the water. Lap 3 personal best Swolf 73. Pattern is stable and repeatable across 11 reps.',
      drills:'🏃 Drill block (Interval 1) — 500m over 15:24. 16 sub-laps: mix of easy lengths (Swolf 88–89), kick/pull drill laps (Swolf 22–64), rest segments, and one very slow cool-in lap (Swolf 99). Fist-to-open transition and fingertip drag included. Excluded from training stats.\n\n❄️ Cool-down (Interval 13) — 250m broken block with inconsistent sub-laps (Garmin logging error). Excluded from stats.',
      laps:[
        {n:1,dist:50,t:'0:52.5',sw:74,st:21,hr:136},
        {n:2,dist:50,t:'0:55.0',sw:77,st:22,hr:135},
        {n:3,dist:50,t:'0:51.6',sw:73,st:21,hr:142},
        {n:4,dist:50,t:'0:55.6',sw:79,st:23,hr:142},
        {n:5,dist:50,t:'0:53.6',sw:77,st:23,hr:143},
        {n:6,dist:50,t:'0:56.0',sw:80,st:24,hr:147},
        {n:7,dist:50,t:'0:52.7',sw:76,st:23,hr:147},
        {n:8,dist:50,t:'0:54.1',sw:77,st:23,hr:149},
        {n:9,dist:50,t:'0:54.2',sw:77,st:23,hr:153},
        {n:10,dist:50,t:'0:55.8',sw:80,st:24,hr:154},
        {n:11,dist:50,t:'0:52.5',sw:77,st:24,hr:154},
      ]
    },
  ],

  // ── POOL SESSION CARDS (plan + results) ──
  poolWeeks: [
    {
      id:'pool-a', week:1, title:'Pool Session A', date:'21 Mar', status:'done',
      kpis:[{l:'Total',v:'~900m'},{l:'Best Swolf',v:'79'},{l:'Best lap',v:'1:51.8'},{l:'Tech held',v:'4/5'}],
      focusResult:'✅ <strong>Session result:</strong> Drills felt great — clear sense of moving forward not upward. Key breakthrough: correct catch angle flattens body position automatically. Legs stopped sinking. Technique held for 4 × 100m then broke on lap 5.',
      coachNote:'🧠 <strong>Coach note:</strong> Swolf 79 on lap 1 is your best trained lap ever. Technique held well for 400m then fatigued on lap 5. New movement pattern is neuromuscularly expensive — this is normal at Week 1. Next session: shorter intervals to groove the pattern with more reps.',
      sections:[
        {label:'Warm-up + Drills · Interval 1 · ~38 min', type:'simple-table', headers:['Block','Notes'], rows:[['<strong>Warm-up + full drill block</strong>','Garmin logged as one long mixed interval — push-offs, rests, drill sets embedded. Data unreliable for individual analysis.<div class="note">Felt good. Fingertip drag and fist drill both working well.</div>']]},
        {label:'Main set · 5 × 100m', type:'results-table', headers:['Lap','Time','Swolf','Strokes/50m','HR'], rows:[['1','1:51.8',{v:'79',c:'green'},'24','139–148'],['2','1:58.3',{v:'85',c:'amber'},'25–26','150–155'],['3','2:00.6',{v:'86',c:'amber'},'25–27','147–157'],['4','2:01.6',{v:'87',c:'amber'},'25–27','147–155'],['5','2:09.9',{v:'91',c:'red'},'26','143–152']]},
        {label:'Cool-down · 1 × 100m', type:'simple-table', headers:['Lap','Time','Swolf','Notes'], rows:[['Cool-down','2:27.5','103','Easy recovery. High Swolf expected — fatigue + deliberate slow pace.']]},
      ],
    },
    {
      id:'pool-b', week:2, title:'Pool Session B', date:'28 Mar', status:'done',
      kpis:[{l:'Total',v:'~1,700m'},{l:'Best Swolf',v:'74'},{l:'Best lap',v:'0:52.7'},{l:'Reps done',v:'10/10'}],
      focusResult:'✅ <strong>Session result:</strong> All 10 reps completed — every lap Swolf 74–78, all under the &lt;80 target. Best lap Swolf 74 (Lap 3, 21 strokes). Strokes held 21–22 for first 6 laps, crept to 23–25 with fatigue. Pattern from Wednesday confirmed and sustained across the full planned set.',
      coachNote:'🧠 <strong>Coach note:</strong> Two sessions in a row at avg Swolf 76.9. Week 3 moves to 75m or 100m reps as planned.',
      sections:[
        {label:'Warm-up + Drills · Interval 1 · 1,000m · 22:37', type:'simple-table', headers:['Block','Notes'], rows:[['<strong>Warm-up + full drill block</strong>','1,000m over 22:37. 20 sub-laps: push-off sprints, build laps, rest intervals, drill sets (fingertip drag + fist drill). Full block excluded from lap stats.']]},
        {label:'Main set · 10 × 50m', type:'results-table', headers:['Lap','Time','Swolf','Strokes/50m','HR'], rows:[
          ['1','0:53.9',{v:'76',c:'green'},'22','133'],
          ['2','0:53.7',{v:'76',c:'green'},'22','140'],
          ['3','0:53.3',{v:'74',c:'green'},'21','152'],
          ['4','0:55.7',{v:'78',c:'green'},'22','151'],
          ['5','0:55.6',{v:'78',c:'green'},'22','155'],
          ['6','0:53.9',{v:'77',c:'green'},'23','152'],
          ['7','0:55.3',{v:'78',c:'green'},'23','157'],
          ['8','0:55.0',{v:'78',c:'green'},'23','155'],
          ['9','0:52.7',{v:'76',c:'green'},'23','155'],
          ['10','0:53.1',{v:'78',c:'green'},'25','151'],
        ]},
        {label:'Cool-down · 200m', type:'simple-table', headers:['Lap','Time','Swolf','Notes'], rows:[['Cool-down mixed','2:55.7','54 avg','3 moderate laps (0:30–0:34) + 1 very slow (1:23, Swolf 108). Normal fatigue pattern.']]},
      ],
    },
    {
      id:'pool-c', week:4, title:'Pool Session C', date:'17 Apr', status:'done',
      kpis:[{l:'Total',v:'~1,900m'},{l:'Reps done',v:'7/8'},{l:'Avg Swolf',v:'83.3'},{l:'2nd 50m',v:'always better'}],
      focusResult:'✅ <strong>Session result:</strong> 7 reps completed. Avg Swolf 83.4, strokes 24.6. First 50m of every rep worse than second (avg Swolf 86 vs 80). Rests ran long — 44–141 seconds. Technique doesn\'t degrade mid-rep; it degrades at the <em>start</em> of each rep due to tension, then recovers naturally in the second length.',
      coachNote:'🧠 <strong>Coach note:</strong> This is a reset problem, not an endurance problem. The catch and pull are working once the body settles — the issue is tension off the wall and after rest. Session D switches to 12×50m with a feel-first focus — no stroke counting during reps. Goal: find what a relaxed, tension-free start feels like and replicate it.',
      sections:[
        {label:'Warm-up + Drills · Interval 1 · 1,000m · 20:04', type:'simple-table', headers:['Block','Notes'], rows:[['<strong>Warm-up + full drill block</strong>','1,000m over 20:04. 28 sub-laps: push-off sprints, build laps, drill sets, rest intervals. Full block excluded from lap stats.']]},
        {label:'Main set · 7 × 100m', type:'results-table', headers:['Rep','Time','Swolf','1st 50m','2nd 50m','HR'], rows:[
          ['1','1:55.7',{v:'82',c:'green'},'1:00.7 / sw86','0:55.0 / sw78','135'],
          ['2','1:54.3',{v:'81',c:'green'},'1:00.2 / sw83','0:54.1 / sw79','148'],
          ['3','1:57.3',{v:'84',c:'amber'},'1:01.3 / sw86','0:56.0 / sw81','156'],
          ['4','1:56.8',{v:'82',c:'green'},'1:04.7 / sw90','0:52.1 / sw75','142'],
          ['5','1:56.1',{v:'83',c:'amber'},'0:58.9 / sw83','0:57.1 / sw82','150'],
          ['6','1:58.5',{v:'85',c:'amber'},'1:00.7 / sw88','0:57.8 / sw83','155'],
          ['7','2:00.1',{v:'86',c:'amber'},'1:01.2 / sw86','0:58.9 / sw85','151'],
        ]},
        {label:'Cool-down · Interval 9 · 200m', type:'simple-table', headers:['Notes'], rows:[['4 lengths mixed: push-off sprint, moderate lap, then 2 very slow (Swolf 102, 119). Normal fatigue cool-down. HR falling. Excluded from lap stats.']]},
      ],
    },
    {
      id:'pool-d', week:5, title:'Pool Session D', date:'24 Apr', status:'done',
      kpis:[{l:'Reps done',v:'11/11'},{l:'Avg Swolf',v:'77.0'},{l:'Avg HR',v:'146'},{l:'Rest range',v:'30–47s'}],
      focusResult:'✅ <strong>Session result:</strong> Feel-first cue worked perfectly. Swolf 77.0 average, HR 146 BPM (lowest ever), rests 30–47s (most consistent ever). 11/11 reps completed. Pattern stable and repeatable. The single "forearm backward" cue removed tension from the water.',
      focusPlan:'🎯 <strong>Session focus:</strong> Fix the reset problem identified in Session C. Every rep started tense (Swolf 86 avg on first 50m) and recovered mid-rep (Swolf 80 avg on second 50m). Session D removes the pressure that creates that tension: no stroke counting during reps, no Swolf targets. Swim by feel only. The goal is to find what a relaxed, tension-free start feels like — and then replicate it 12 times.',
      coachNote:'🧠 <strong>Coach note:</strong> Back to 50m reps deliberately. Not a step backwards — a targeted reset. 12 reps at 50m gives you more opportunities to practise the transition from rest → relaxed swimming than 7 reps at 100m. Count strokes only after each rep if you want, not during. If a rep feels easy and smooth, that\'s the data point that matters.',
      sections:[
        {label:'Warm-up · 200m', type:'plan-table', headers:['Exercise','Distance','Notes'], rows:[
          ['<span class="badge gray">Easy freestyle</span>','200m','No targets. Focus only on how the water feels on your forearm at the catch point.<div class="cue">If you feel the water pushing back on your forearm — not your palm — you\'re in the right position.</div>'],
        ]},
        {label:'Drill block · 400m', type:'plan-table', headers:['Drill','Set','Rest','Coaching cue'], rows:[
          ['<strong>Fist drill</strong><div class="note">snorkel only</div>','<span class="badge blue">4 × 50m</span>','20s','Your reset drill. Forearm pressure backward, not downward. This is the feeling you\'re looking to take into the main set.<div class="cue">Feel the forearm, not the fist. That\'s the whole drill.</div>'],
          ['<strong>Fingertip drag</strong><div class="note">fins only</div>','<span class="badge blue">4 × 50m</span>','20s','Slow the recovery, feel the entry. Elbow high, fingertips enter first. Focus on the moment after entry — is the forearm angled backward or downward?<div class="cue">Entry is the setup. Get the entry right and the catch follows.</div>'],
        ]},
        {label:'Main set · 12 × 50m', type:'plan-table', headers:['Block','Set','Rest','Focus'], rows:[
          ['<span class="badge green">Feel block</span><div class="note">Reps 1–6</div>','6 × 50m','35–40s','No stroke counting. Swim each rep by feel. After each rep, ask one question only: did that feel easy or tense?<div class="cue green">Rate each rep: 1 = tense, 2 = ok, 3 = easy. That\'s your only data collection.</div>'],
          ['<span class="badge green">Replicate block</span><div class="note">Reps 7–12</div>','6 × 50m','35s','Try to replicate the best feeling from reps 1–6. Still no counting during reps.<div class="cue green">If rep 3 felt easy — what were you doing? That\'s the template. Copy it.</div>'],
        ]},
        {label:'Cool-down · 100m', type:'plan-table', headers:['Exercise','Distance','Focus'], rows:[
          ['<span class="badge gray">Easy</span>','100m','Very slow. Think about the finish — hand exits past hip every stroke. Swolf will be 100+. Expected.'],
        ]},
      ],
    },
    {
      id:'pool-e', week:6, title:'Pool Session E', date:'8 May', status:'planned',
      kpis:[{l:'Total',v:'~1,500m'},{l:'Main set',v:'4+2+2×100m'},{l:'Swolf target',v:'< 80'},{l:'Key metric',v:'1st = 2nd'}],
      focusPlan:'🎯 <strong>The bridge session:</strong> Broken 100m — 50m + 10s wall touch + 50m. Your data shows first 50m Swolf averages 86, second 50m averages 80 on full 100m reps. The wall touch gives you a deliberate reset point. Goal: make both halves match. Block 1 = 10s pause, Block 2 = 5s pause, Block 3 = 2 full 100m (optional, only if Blocks 1–2 feel controlled).',
      coachNote:'🧠 <strong>Coach note:</strong> The broken swim teaches the brain that long reps are just short reps joined together. Your second 50m has been Swolf 80 or better in every 100m session — the pattern is there. The wall touch gives you calm artificially until the nervous system learns it doesn\'t need it. Session F removes the crutch entirely.',
      sections:[
        {label:'Warm-up · 200m', type:'plan-table', headers:['Exercise','Distance','Notes'], rows:[
          ['<span class="badge gray">Easy freestyle</span>','200m','No targets. Feel where the forearm pressure lands on each length. Waking up the pattern you\'ve already built.<div class="cue">Forearm backward — find it early, let it settle.</div>'],
        ]},
        {label:'Drill block · 400m', type:'plan-table', headers:['Drill','Set','Rest','Coaching cue'], rows:[
          ['<strong>Fist → open transition</strong><div class="note">no snorkel, no fins</div>','<span class="badge blue">2 × 50m</span>','20s','First 25m fists closed. At the turn open hands — pressure stays identical. Calibration drill to wake up the catch before paddles go on.<div class="cue">Lock in the forearm feeling here. Paddles will amplify it next.</div>'],
          ['<strong>Fingertip drag + paddles</strong><div class="note">paddles only · no snorkel, no fins</div>','<span class="badge blue">2 × 50m</span>','25s','Paddles make a bad catch angle immediately obvious — the blade slips sideways if the elbow drops. Keep the catch angle from the fist drill and let the paddle reward you with strong backward pressure.<div class="cue amber">If the paddle feels like it\'s pulling your arm down — elbow has dropped. Stop, reset, push off again.</div><div class="note">⚠️ Easy pace only. Paddles off after these 2 reps — shoulders need to be fresh for the main set.</div>'],
          ['<strong>Fingertip drag</strong><div class="note">snorkel + fins · no paddles</div>','<span class="badge blue">4 × 50m</span>','20s','Paddles are off — can the forearm replicate the same backward pressure without them? This is the transfer test. If it stays the same, the pattern is in the body not the equipment.<div class="cue">Entry relaxed. Elbow high. Same angle as the paddle reps. Carry this feeling straight into the main set.</div>'],
        ]},
        {label:'Block 1 · 4 × broken 100m · 10s pause', type:'plan-table', headers:['Set','Structure','Rest','Target'], rows:[
          ['<span class="badge green">Reps 1–2</span><div class="note">Learn the rhythm</div>','2 × (50m + 10s + 50m)','45s','Get used to the format. No pressure on numbers — notice whether the second 50m feels as calm as a standalone rep.<div class="cue">After rep 1: did the second push-off feel relaxed or tense? That\'s the only question.</div>'],
          ['<span class="badge green">Reps 3–4</span><div class="note">Match the halves</div>','2 × (50m + 10s + 50m)','40s','Aim for first half Swolf = second half Swolf. Both halves target &lt;80. Use the 10s pause deliberately — one breath, reset shoulders, then go.<div class="cue green">Stroke 1 of the second 50m sets the pattern for the whole length. Catch it early.</div>'],
        ]},
        {label:'Block 2 · 2 × broken 100m · 5s pause', type:'plan-table', headers:['Set','Structure','Rest','Target'], rows:[
          ['<span class="badge amber">Reps 5–6</span><div class="note">Shrink the pause</div>','2 × (50m + 5s + 50m)','40s','Quick touch, one breath, go. The catch needs to be ready on stroke 1 of the second 50m — not stroke 3.<div class="cue amber">If tension creeps back — you\'re going too fast. Slow the entry down. Speed comes later.</div>'],
        ]},
        {label:'Block 3 · 2 × full 100m · optional', type:'plan-table', headers:['Set','Structure','Rest','Target'], rows:[
          ['<span class="badge blue">Reps 7–8</span><div class="note">Only if Blocks 1–2 felt controlled</div>','2 × 100m','45s','No pause. The turn is just a turn. At 50m, touch and go — the catch should already be waiting on the other side. If this doesn\'t feel right, swap for 4 × 50m instead. No ego.<div class="cue">You\'ve done the second 50m perfectly dozens of times. The only difference is there\'s no wall rest before it.</div>'],
        ]},
        {label:'Cool-down · 200m', type:'plan-table', headers:['Exercise','Distance','Focus'], rows:[
          ['<span class="badge gray">Easy</span>','200m','Very slow. Hand past the hip every stroke. Before looking at Garmin — ask yourself: in Block 3, did the first 50m feel different to 11 Apr? That answer shapes Session F.'],
        ]},
      ],
    },
  ],

  // ── GYM WEEK CARDS ──
  // Each gym week has a monday (strength) and thursday (stability) session
  // exercises have: name, note, sets, cue, video, weights:{last,today}
  gymWeeks: [
    {
      week:1, monDate:'17 Mar', thuDate:'20 Mar', status:'done',
      monExercises: {
        warmup:[
          {name:'Band pull-aparts',sets:'3 × 20',cue:'Arms straight, pull to chest. Squeeze shoulder blades at end range.',video:'band+pull+apart+shoulder'},
          {name:'Scapular wall slides',sets:'3 × 15',cue:'Back flat on wall, goalpost arms. Slide overhead keeping elbows and wrists on wall.',video:'scapular+wall+slides'},
        ],
        main:[
          {name:'Single-arm cable row',note:'High pulley · face height',sets:'4 × 12',cue:'Elbow HIGH, drives straight back — this is your EVF catch.<div class="cue green">Feel forearm pressure? That\'s what we want in water.</div>',video:'single+arm+high+cable+row+swimming+dryland',weights:{ref:'ref Thu: 7.5 kg',today:'10.125 kg'}},
          {name:'Prone dumbbell row',note:'Face down on incline bench',sets:'4 × 10',cue:'Elbow straight back, tight to body. Mimics the full pull under load.<div class="cue green">No elbow flare. Hand tracks under body centreline.</div>',video:'prone+incline+dumbbell+row'},
          {name:'Lat pulldown',note:'Wide grip',sets:'4 × 10',cue:'Pull to upper chest, elbows drive down and back.<div class="cue green">Chest tall, slight lean back — no collapsing forward.</div>',video:'lat+pulldown+proper+form'},
          {name:'Pallof press',note:'Each side',sets:'3 × 12',cue:'Cable at chest height. Resist rotation — stops your hand going wide.<div class="cue green">Hand under body, not drifting wide.</div>',video:'pallof+press+core+tutorial'},
        ],
        finisher:[
          {name:'Dead hang',note:'Bar hang, passive',sets:'3 × 30 sec',cue:'Simply hang. Decompresses the shoulder after all the pulling work.',video:'dead+hang+shoulder+decompression'},
        ],
      },
      thuExercises: {
        warmup:[
          {name:'Arm circles + cross-body swings',sets:'2 × 20',cue:'Slow, controlled. Loosen the shoulder capsule. Both directions.',video:'arm+circles+shoulder+warmup'},
          {name:'Band pull-aparts',sets:'2 × 20',cue:'Lighter band than Monday. Focus on the squeeze at end range.',video:'band+pull+apart+shoulder'},
        ],
        main:[
          {name:'TRX / ring fallout',sets:'3 × 10',cue:'Anterior shoulder stability — holds elbow up against water resistance.<div class="cue amber">The harder this feels, the more you need it.</div>',video:'TRX+fallout+exercise'},
          {name:'Face pulls',note:'Cable · rope attachment',sets:'3 × 15',cue:'Pull rope to face, elbows high and wide. Trains rotator cuff in EVF position.<div class="cue amber">Elbows finish ABOVE the hands. Every rep.</div>',video:'face+pulls+cable+rotator+cuff',weights:{done:'✓ 19 Mar: 5 kg'}},
          {name:'Single-arm cable row',note:'20–30% lighter than Monday',sets:'3 × 12',cue:'Perfect elbow position — no compensating with the shoulder.<div class="cue amber">Quality over load today.</div>',video:'single+arm+high+cable+row+swimming+dryland',weights:{done:'✓ 19 Mar: 7.5 kg'}},
          {name:'Side-lying external rotation',note:'Dumbbell · each side',sets:'3 × 15',cue:'Lie on side, elbow at 90°. Rotate dumbbell upward slowly.<div class="cue amber">Light weight. Slow and controlled. Never rush this one.</div>',video:'side+lying+external+rotation+rotator+cuff',weights:{done:'✓ 19 Mar: 3 kg'}},
        ],
        finisher:[
          {name:'Plank to downward dog',sets:'3 × 10',cue:'From plank, push hips up slowly. Shoulders packed — no shrugging.',video:'plank+to+downward+dog+exercise'},
          {name:'Doorway chest stretch',sets:'3 × 30 sec',cue:'Arms at 90° in doorframe, lean gently. Counteracts forward shoulder posture.',video:'doorway+chest+stretch+swimmer'},
        ],
      },
    },
    {
      week:2, monDate:'24 Mar', thuDate:'27 Mar', status:'done',
      monExercises: {
        warmup:[
          {name:'Band pull-aparts',sets:'3 × 20',cue:'Arms straight, pull to chest. Squeeze shoulder blades at end range.',video:'band+pull+apart+shoulder'},
          {name:'Scapular wall slides',sets:'3 × 15',cue:'Back flat on wall, goalpost arms. Elbows and wrists stay on wall throughout.',video:'scapular+wall+slides'},
        ],
        main:[
          {name:'Single-arm cable row',note:'High pulley · face height',sets:'4 × 12',cue:'Elbow HIGH, drives straight back.<div class="cue green">First tracked Monday session — establish your working weights.</div>',video:'single+arm+high+cable+row+swimming+dryland',weights:{done:'✓ 23 Mar: 10.125 kg'}},
          {name:'Prone dumbbell row',note:'Face down on incline bench',sets:'4 × 10',cue:'Elbow straight back, tight to body.<div class="cue green">No elbow flare. Hand tracks under body centreline.</div>',video:'prone+incline+dumbbell+row',weights:{done:'✓ 23 Mar: 12.5 kg'}},
          {name:'Lat pulldown',note:'Wide grip',sets:'4 × 10',cue:'Pull to upper chest, elbows drive down and back.<div class="cue green">Chest tall, slight lean back.</div>',video:'lat+pulldown+proper+form',weights:{done:'✓ 23 Mar: 35 kg'}},
          {name:'Pallof press',note:'Each side',sets:'3 × 12',cue:'Cable at chest height. Resist rotation.<div class="cue green">Hand under body, not drifting wide.</div>',video:'pallof+press+core+tutorial'},
        ],
        finisher:[
          {name:'Dead hang',note:'Bar hang, passive',sets:'3 × 30 sec',cue:'Simply hang. Decompresses the shoulder after all the pulling work.',video:'dead+hang+shoulder+decompression'},
        ],
      },
      thuExercises: {
        warmup:[
          {name:'Arm circles + cross-body swings',sets:'2 × 20',cue:'Slow, controlled. Loosen the shoulder capsule. Both directions.',video:'arm+circles+shoulder+warmup'},
          {name:'Band pull-aparts',sets:'2 × 20',cue:'Lighter band than Monday. Focus on the squeeze at end range.',video:'band+pull+apart+shoulder'},
        ],
        main:[
          {name:'TRX / ring fallout',sets:'3 × 10',cue:'Anterior shoulder stability — holds elbow up against water resistance.<div class="cue amber">The harder this feels, the more you need it.</div>',video:'TRX+fallout+exercise'},
          {name:'Face pulls',note:'Cable · rope attachment',sets:'3 × 15',cue:'Pull rope to face, elbows high and wide.<div class="cue amber">Elbows finish ABOVE the hands. Every rep.</div>',video:'face+pulls+cable+rotator+cuff',weights:{last:'5 kg',today:'6.125 kg'}},
          {name:'Single-arm cable row',note:'20–30% lighter than Monday',sets:'3 × 12',cue:'Perfect elbow position — no compensating with the shoulder.<div class="cue amber">Quality over load today.</div>',video:'single+arm+high+cable+row+swimming+dryland',weights:{last:'7.5 kg',today:'8.625 kg'}},
          {name:'Side-lying external rotation',note:'Dumbbell · each side',sets:'3 × 15',cue:'Lie on side, elbow at 90°. Rotate dumbbell upward slowly.<div class="cue amber">Light weight. Slow and controlled. Never rush this one.</div>',video:'side+lying+external+rotation+rotator+cuff',weights:{last:'3 kg',today:'3 kg (hold)'}},
        ],
        finisher:[
          {name:'Plank to downward dog',sets:'3 × 10',cue:'From plank, push hips up slowly. Shoulders packed — no shrugging.',video:'plank+to+downward+dog+exercise'},
          {name:'Doorway chest stretch',sets:'3 × 30 sec',cue:'Arms at 90° in doorframe, lean gently. Counteracts forward shoulder posture.',video:'doorway+chest+stretch+swimmer'},
        ],
      },
    },
    {
      week:3, monDate:'8 Apr', monDay:'Tuesday', thuDate:'10 Apr', status:'done',
      monNote:'⚠️ Tuesday session skipped — Thursday only this week.',
      monExercises: {
        warmup:[
          {name:'Band pull-aparts',sets:'3 × 20',cue:'Arms straight, pull to chest. Squeeze shoulder blades at end range.',video:'band+pull+apart+shoulder'},
          {name:'Scapular wall slides',sets:'3 × 15',cue:'Back flat on wall, goalpost arms. Elbows and wrists stay on wall throughout.',video:'scapular+wall+slides'},
        ],
        main:[
          {name:'Single-arm cable row',note:'High pulley · face height',sets:'4 × 12',cue:'Back → lock → pause → pull. Elbow stays high throughout.<div class="cue green">First session back — own the technique before adding load.</div>',video:'single+arm+high+cable+row+swimming+dryland',weights:{last:'10.125 kg',today:'11.25 kg'}},
          {name:'Prone dumbbell row',note:'Face down on incline bench',sets:'4 × 10',cue:'Elbow straight back, tight to body. No elbow flare.<div class="cue green">Hand tracks under body centreline every rep.</div>',video:'prone+incline+dumbbell+row',weights:{last:'12.5 kg',today:'15 kg'}},
          {name:'Lat pulldown',note:'Wide grip',sets:'4 × 10',cue:'Pull to upper chest, elbows drive down and back.<div class="cue green">Chest tall, slight lean back — no collapsing forward.</div>',video:'lat+pulldown+proper+form',weights:{last:'35 kg',today:'36.125 kg'}},
          {name:'Pallof press',note:'Each side',sets:'3 × 12',cue:'Cable at chest height. Resist rotation — hand stays under body.',video:'pallof+press+core+tutorial'},
        ],
        finisher:[
          {name:'Dead hang',note:'Bar hang, passive',sets:'3 × 30 sec',cue:'Simply hang. Decompresses the shoulder after all the pulling work.',video:'dead+hang+shoulder+decompression'},
        ],
      },
      thuExercises: {
        warmup:[
          {name:'Arm circles + cross-body swings',sets:'2 × 20',cue:'Slow, controlled. Loosen the shoulder capsule. Both directions.',video:'arm+circles+shoulder+warmup'},
          {name:'Band pull-aparts',sets:'2 × 20',cue:'Lighter band than Tuesday. Focus on the squeeze at end range.',video:'band+pull+apart+shoulder'},
        ],
        main:[
          {name:'TRX / ring fallout',sets:'3 × 10',cue:'Anterior shoulder stability — holds elbow up against water resistance.<div class="cue amber">The harder this feels, the more you need it.</div>',video:'TRX+fallout+exercise'},
          {name:'Face pulls',note:'Cable · rope attachment',sets:'3 × 15',cue:'Pull rope to face, elbows high and wide. Elbows finish ABOVE the hands.',video:'face+pulls+cable+rotator+cuff',weights:{done:'✓ 10 Apr: 7.25 kg'}},
          {name:'Single-arm cable row',note:'20–30% lighter than Tuesday',sets:'3 × 12',cue:'Perfect elbow position — no compensating with the shoulder.<div class="cue amber">Quality over load today.</div>',video:'single+arm+high+cable+row+swimming+dryland',weights:{done:'✓ 10 Apr: 9.75 kg'}},
          {name:'Side-lying external rotation',note:'Dumbbell · each side',sets:'3 × 15',cue:'Lie on side, elbow at 90°. Rotate dumbbell upward slowly.<div class="cue amber">Light weight. Slow and controlled. Never rush this one.</div>',video:'side+lying+external+rotation+rotator+cuff',weights:{done:'✓ 10 Apr: 4 kg'}},
        ],
        finisher:[
          {name:'Plank to downward dog',sets:'3 × 10',cue:'From plank, push hips up slowly. Shoulders packed — no shrugging.',video:'plank+to+downward+dog+exercise'},
          {name:'Doorway chest stretch',sets:'3 × 30 sec',cue:'Arms at 90° in doorframe, lean gently. Counteracts forward shoulder posture.',video:'doorway+chest+stretch+swimmer'},
        ],
      },
    },
    {
      week:5, monDate:'20 Apr', thuDate:'23 Apr', status:'current',
      monExercises: {
        warmup:[
          {name:'Band pull-aparts',sets:'3 × 20',cue:'Arms straight, pull to chest. Squeeze shoulder blades at end range.',video:'band+pull+apart+shoulder'},
          {name:'Scapular wall slides',sets:'3 × 15',cue:'Back flat on wall, goalpost arms. Elbows and wrists stay on wall throughout.',video:'scapular+wall+slides'},
        ],
        main:[
          {name:'Single-arm cable row',note:'High pulley · face height',sets:'4 × 12',cue:'Back → lock → pause → pull. Elbow stays high throughout.<div class="cue green">Pulling strength focus. Match or exceed last session load.</div>',video:'single+arm+high+cable+row+swimming+dryland',weights:{done:'✓ 20 Apr: 12.5 kg'}},
          {name:'Prone dumbbell row',note:'Face down on incline bench',sets:'4 × 10',cue:'Elbow straight back, tight to body. No elbow flare.<div class="cue green">Hand tracks under body centreline every rep.</div>',video:'prone+incline+dumbbell+row',weights:{done:'✓ 20 Apr: 15 kg'}},
          {name:'Lat pulldown',note:'Wide grip',sets:'4 × 10',cue:'Pull to upper chest, elbows drive down and back.<div class="cue green">Chest tall, slight lean back — no collapsing forward.</div>',video:'lat+pulldown+proper+form',weights:{done:'✓ 20 Apr: 37.5 kg'}},
          {name:'Pallof press',note:'Each side',sets:'3 × 12',cue:'Cable at chest height. Resist rotation — hand stays under body.',video:'pallof+press+core+tutorial'},
        ],
        finisher:[
          {name:'Dead hang',note:'Bar hang, passive',sets:'3 × 30 sec',cue:'Simply hang. Decompresses the shoulder after all the pulling work.',video:'dead+hang+shoulder+decompression'},
        ],
      },
      thuExercises: {
        warmup:[
          {name:'Arm circles + cross-body swings',sets:'2 × 20',cue:'Slow, controlled. Loosen the shoulder capsule. Both directions.',video:'arm+circles+shoulder+warmup'},
          {name:'Band pull-aparts',sets:'2 × 20',cue:'Lighter band than Monday. Focus on the squeeze at end range.',video:'band+pull+apart+shoulder'},
        ],
        main:[
          {name:'TRX / ring fallout',sets:'3 × 10',cue:'Anterior shoulder stability — holds elbow up against water resistance.<div class="cue amber">The harder this feels, the more you need it.</div>',video:'TRX+fallout+exercise'},
          {name:'Face pulls',note:'Cable · rope attachment',sets:'3 × 15',cue:'Pull rope to face, elbows high and wide. Elbows finish ABOVE the hands.',video:'face+pulls+cable+rotator+cuff',weights:{last:'7.25 kg',today:''}},
          {name:'Single-arm cable row',note:'20–30% lighter than Monday',sets:'3 × 12',cue:'Perfect elbow position — no compensating with the shoulder.<div class="cue amber">Quality over load today.</div>',video:'single+arm+high+cable+row+swimming+dryland',weights:{last:'9.75 kg',today:''}},
          {name:'Side-lying external rotation',note:'Dumbbell · each side',sets:'3 × 15',cue:'Lie on side, elbow at 90°. Rotate dumbbell upward slowly.<div class="cue amber">Light weight. Slow and controlled. Never rush this one.</div>',video:'side+lying+external+rotation+rotator+cuff',weights:{last:'4 kg',today:''}},
        ],
        finisher:[
          {name:'Plank to downward dog',sets:'3 × 10',cue:'From plank, push hips up slowly. Shoulders packed — no shrugging.',video:'plank+to+downward+dog+exercise'},
          {name:'Doorway chest stretch',sets:'3 × 30 sec',cue:'Arms at 90° in doorframe, lean gently. Counteracts forward shoulder posture.',video:'doorway+chest+stretch+swimmer'},
        ],
      },
    },
    {
      week:6, monDate:'4 May', thuDate:'7 May', status:'planned',
      monExercises: {
        warmup:[
          {name:'Band pull-aparts',sets:'3 × 20',cue:'Arms straight, pull to chest. Squeeze shoulder blades at end range.',video:'band+pull+apart+shoulder'},
          {name:'Scapular wall slides',sets:'3 × 15',cue:'Back flat on wall, goalpost arms. Elbows and wrists stay on wall throughout.',video:'scapular+wall+slides'},
        ],
        main:[
          {name:'Single-arm cable row',note:'High pulley · face height',sets:'4 × 12',cue:'Back → lock → pause → pull. Elbow stays high throughout.<div class="cue green">Back from rest week — match 20 Apr load first, add weight only if form is perfect.</div>',video:'single+arm+high+cable+row+swimming+dryland',weights:{last:'12.5 kg',today:''}},
          {name:'Prone dumbbell row',note:'Face down on incline bench',sets:'4 × 10',cue:'Elbow straight back, tight to body. No elbow flare.<div class="cue green">Time to progress — try 17.5 kg if 15 felt controlled last time.</div>',video:'prone+incline+dumbbell+row',weights:{last:'15 kg',today:''}},
          {name:'Lat pulldown',note:'Wide grip',sets:'4 × 10',cue:'Pull to upper chest, elbows drive down and back.<div class="cue green">Chest tall, slight lean back — no collapsing forward.</div>',video:'lat+pulldown+proper+form',weights:{last:'37.5 kg',today:''}},
          {name:'Pallof press',note:'Each side',sets:'3 × 12',cue:'Cable at chest height. Resist rotation — hand stays under body.',video:'pallof+press+core+tutorial'},
        ],
        finisher:[
          {name:'Dead hang',note:'Bar hang, passive',sets:'3 × 30 sec',cue:'Simply hang. Decompresses the shoulder after all the pulling work.',video:'dead+hang+shoulder+decompression'},
        ],
      },
      thuExercises: {
        warmup:[
          {name:'Arm circles + cross-body swings',sets:'2 × 20',cue:'Slow, controlled. Loosen the shoulder capsule. Both directions.',video:'arm+circles+shoulder+warmup'},
          {name:'Band pull-aparts',sets:'2 × 20',cue:'Lighter band than Monday. Focus on the squeeze at end range.',video:'band+pull+apart+shoulder'},
        ],
        main:[
          {name:'TRX / ring fallout',sets:'3 × 10',cue:'Anterior shoulder stability — holds elbow up against water resistance.<div class="cue amber">The harder this feels, the more you need it.</div>',video:'TRX+fallout+exercise'},
          {name:'Face pulls',note:'Cable · rope attachment',sets:'3 × 15',cue:'Pull rope to face, elbows high and wide. Elbows finish ABOVE the hands.',video:'face+pulls+cable+rotator+cuff',weights:{last:'7.25 kg',today:''}},
          {name:'Single-arm cable row',note:'20–30% lighter than Monday',sets:'3 × 12',cue:'Perfect elbow position — no compensating with the shoulder.<div class="cue amber">Quality over load today.</div>',video:'single+arm+high+cable+row+swimming+dryland',weights:{last:'9.75 kg',today:''}},
          {name:'Side-lying external rotation',note:'Dumbbell · each side',sets:'3 × 15',cue:'Lie on side, elbow at 90°. Rotate dumbbell upward slowly.<div class="cue amber">Light weight. Slow and controlled. Never rush this one.</div>',video:'side+lying+external+rotation+rotator+cuff',weights:{last:'4 kg',today:''}},
        ],
        finisher:[
          {name:'Plank to downward dog',sets:'3 × 10',cue:'From plank, push hips up slowly. Shoulders packed — no shrugging.',video:'plank+to+downward+dog+exercise'},
          {name:'Doorway chest stretch',sets:'3 × 30 sec',cue:'Arms at 90° in doorframe, lean gently. Counteracts forward shoulder posture.',video:'doorway+chest+stretch+swimmer'},
        ],
      },
    },
  ],

  // ── CALENDAR CONFIG ──
  defaultSchedule: {1:'gym-mon',2:'pool-coach',3:'rest',4:'gym-thu',5:'pool-you',6:'rest',0:'rest'},
  dateOverrides: {
    '2026-03-31':'rest-week','2026-04-01':'rest-week','2026-04-02':'rest-week',
    '2026-04-03':'rest-week','2026-04-04':'rest-week','2026-04-05':'rest-week','2026-04-06':'rest-week',
    '2026-04-07':'rest','2026-04-08':'gym-tue','2026-04-09':'rest',
    '2026-04-10':'gym-thu','2026-04-12':'rest','2026-04-13':'rest',
    '2026-04-16':'gym-thu','2026-04-17':'pool-you',
    '2026-04-20':'gym-mon','2026-04-23':'gym-thu','2026-04-24':'pool-you',
    '2026-04-27':'rest-week','2026-04-28':'rest-week','2026-04-29':'rest-week','2026-04-30':'rest-week',
    '2026-05-01':'rest-week','2026-05-02':'rest-week','2026-05-03':'rest-week',
  },
  weekPlan: {
    '2026-03-17':{'gym-mon':0,'gym-thu':0,'pool-you':0},
    '2026-03-24':{'gym-mon':1,'gym-thu':1,'pool-you':1},
    '2026-04-07':{'gym-tue':2,'gym-thu':2,'pool-you':2},
    '2026-04-13':{'gym-thu':2,'pool-you':2},
    '2026-04-20':{'gym-mon':3,'gym-thu':3,'pool-you':3},
    '2026-05-04':{'gym-mon':4,'gym-thu':4,'pool-you':4},
  },
  restWeekMondays: ['2026-03-31','2026-04-27'],

  // ── DASHBOARD ──
  nextSessionFocus: '🎯 <strong>Next session (8 May — Pool Session E):</strong> The bridge session. Broken 100m: 50m + 10s wall touch + 50m. Goal is to make first and second 50m Swolf match. Drill block includes paddles for the first time — 2 × 50m only, easy pace. Block 1: 4 reps with 10s pause. Block 2: 2 reps with 5s pause. Block 3: 2 full 100m (optional).',
};
