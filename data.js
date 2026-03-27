// ╔═══════════════════════════════════════════════════════════════╗
// ║  SINGLE DATA OBJECT — edit ONLY this file to update app     ║
// ╚═══════════════════════════════════════════════════════════════╝

const DATA = {
  // Pin "today" to training timeline (month is 0-indexed)
  today: new Date(2025, 2, 28), // 28 Mar 2025

  goal: { baseline: '7:45', target: '7:30', phase: 1, totalPhases: 4 },

  // ── SWIM SESSIONS (training laps only — drills/warm-up/cool-down excluded) ──
  sessions: [
    {
      date:'2025-02-13', label:'13 Feb', lapCount:10, distance:'1,000m',
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
      date:'2025-02-20', label:'20 Feb', lapCount:9, distance:'900m',
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
      date:'2025-03-11', label:'11 Mar', lapCount:11, distance:'600m',
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
      date:'2025-03-13', label:'13 Mar', lapCount:6, distance:'600m',
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
      date:'2025-03-21', label:'21 Mar', lapCount:5, distance:'500m',
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
      date:'2025-03-26', label:'26 Mar', lapCount:8, distance:'400m',
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
      date:'2025-03-28', label:'28 Mar', lapCount:10, distance:'500m',
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
      id:'pool-c', week:3, title:'Pool Session C', date:'11 Apr', status:'current',
      kpis:[{l:'Total',v:'~1,600m'},{l:'Main set',v:'8×100m'},{l:'Swolf target',v:'< 82'},{l:'Str target',v:'≤ 23/50m'}],
      focusPlan:'🎯 <strong>Session focus:</strong> First test of whether the catch holds across a full 100m. You\'re not swimming faster — same technique, just twice per length. Target Swolf &lt;82 (deliberately relaxed vs your recent 76–78 on 50m — the turn and second length add real fatigue). If you hit &lt;80 on most laps, that\'s exceptional.',
      coachNote:'🧠 <strong>Coach note:</strong> 8 reps rather than 10 — intentional. First session back after rest week at a new distance is enough load. Stop at 8 if form degrades on the second 50m of any rep. After the session, note which 50m felt harder — first or second. That shapes Session D.',
      sections:[
        {label:'Warm-up · 200m', type:'plan-table', headers:['Exercise','Distance','Notes'], rows:[
          ['<span class="badge gray">Easy freestyle</span>','200m','Easy pace, no targets. On the second length of each 100m, count your strokes — gives a clean baseline before the drill block.<div class="cue">No pressure. Just wake up the feel.</div>'],
        ]},
        {label:'Drill block · 500m', type:'plan-table', headers:['Drill','Set','Rest','Coaching cue'], rows:[
          ['<strong>Fingertip drag</strong><div class="note">snorkel + fins</div>','<span class="badge blue">4 × 50m</span>','20s','Use fins to slow the recovery and feel the entry on every stroke. Snorkel removes breathing — all focus on the arm path.<div class="cue">Entry fingertips first, elbow high. Same feel as your best 26 Mar laps.</div>'],
          ['<strong>Fist drill</strong><div class="note">snorkel only</div>','<span class="badge blue">2 × 50m</span>','20s','Your reset drill — if the catch feels lost in the main set, this is the feeling you return to.<div class="cue">Forearm pressure backward, not downward.</div>'],
          ['<strong>Pull finish pause</strong><div class="note">fins only</div>','<span class="badge blue">4 × 50m</span>','25s','After every 3rd stroke, pause and complete the pull fully past the hip. Especially important today — 100m reps mean the finish degrades on the second length when tired.<div class="cue">Hand must pass the hip every time. Feel the tricep at the finish.</div>'],
        ]},
        {label:'Main set · 8 × 100m', type:'plan-table', headers:['Set','Distance','Rest','Targets'], rows:[
          ['<span class="badge amber">Reps 1–3</span><div class="note">Feel-out block</div>','3 × 100m','45s','Slightly longer rest — learning the 100m rhythm for the first time with this technique. Swolf &lt;82, strokes ≤23 on both 50m halves.<div class="cue amber">After rep 1: did the catch hold on the second length? That\'s the only question.</div>'],
          ['<span class="badge amber">Reps 4–8</span><div class="note">Groove block</div>','5 × 100m','40s','Drop to 40s — matching your natural wall time from recent sessions. Same targets. If stroke count on second 50m goes above 25, take an extra 15s — no heroics.<div class="cue amber">If a rep feels perfect — remember exactly what you did. That\'s the template for Week 4.</div>'],
        ]},
        {label:'Cool-down · 100m', type:'plan-table', headers:['Exercise','Distance','Focus'], rows:[
          ['<span class="badge gray">Easy</span>','100m','Very slow. Think only about the finish — hand exits past hip every stroke. Swolf will be 100+. That\'s fine and expected.'],
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
      week:3, monDate:'8 Apr', monDay:'Tuesday', thuDate:'10 Apr', status:'planned',
      monNote:'⚠️ Coach swim in morning — gym in afternoon',
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
          {name:'Face pulls',note:'Cable · rope attachment',sets:'3 × 15',cue:'Pull rope to face, elbows high and wide. Elbows finish ABOVE the hands.',video:'face+pulls+cable+rotator+cuff',weights:{last:'6.125 kg',today:'7.25 kg'}},
          {name:'Single-arm cable row',note:'20–30% lighter than Tuesday',sets:'3 × 12',cue:'Perfect elbow position — no compensating with the shoulder.<div class="cue amber">Quality over load today.</div>',video:'single+arm+high+cable+row+swimming+dryland',weights:{last:'8.625 kg',today:'9.75 kg'}},
          {name:'Side-lying external rotation',note:'Dumbbell · each side',sets:'3 × 15',cue:'Lie on side, elbow at 90°. Rotate dumbbell upward slowly.<div class="cue amber">Light weight. Slow and controlled. Never rush this one.</div>',video:'side+lying+external+rotation+rotator+cuff',weights:{last:'3 kg',today:'4 kg'}},
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
    '2025-03-31':'rest-week','2025-04-01':'rest-week','2025-04-02':'rest-week',
    '2025-04-03':'rest-week','2025-04-04':'rest-week','2025-04-05':'rest-week','2025-04-06':'rest-week',
    '2025-04-07':'rest','2025-04-08':'gym-tue','2025-04-09':'rest',
    '2025-04-10':'gym-thu','2025-04-11':'pool-you','2025-04-12':'rest','2025-04-13':'rest',
  },
  weekPlan: {
    '2025-03-17':{'gym-mon':0,'gym-thu':0,'pool-you':0},
    '2025-03-24':{'gym-mon':1,'gym-thu':1,'pool-you':1},
    '2025-04-07':{'gym-tue':2,'gym-thu':2,'pool-you':2},
  },
  restWeekMondays: ['2025-03-31'],

  // ── DASHBOARD ──
  nextSessionFocus: '🎯 <strong>Next session (11 Apr — Pool Session C):</strong> First 100m reps with the new technique. 8 × 100m, target Swolf &lt;82. Reps 1–3 at 45s rest to find the rhythm, reps 4–8 at 40s. Key question: does the catch hold on the second length?',
};
