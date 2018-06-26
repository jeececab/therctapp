import Exercise from './Exercise';

// BASE EXERCISES
const arc = new Exercise(
  'arc',
  'ARC Training', 
  ['base-p', 'strength-s', 'power-s'],
  'Climb at your MSS (maximum steady state) for 20-45 minutes straight. Up to three sets of at least 20 minutes can be completed in a single ARC workout. Choose vertical to slightly overhanging terrain. The goal is not to pump off the wall. Once the correct level of effort is determined, add up tp three skill acquisition exercises (choose from pp.63-67).'
);

const outdoorMileage = new Exercise(
  'outdoorMileage',
  'Outdoor Mileage',
  ['base-p', 'strength-s', 'endur-s', 'perf-s'],
  'Climb six to twelve &quot;moderate&quot; routes or pitches. These climbs should be approximately one to two full number grades below the climber\'s maximum onsight ability. They should be moderately fatiguing - just like ARCing. Apply the guidelines of ARC training to these routes. It means you should try to create continuous ARC "sets" of 20-45 minutes, which may require to climb multiple pitches back-to-back.'
);

// OPTIONAL EXERCISES
const aerobicExercise = new Exercise(
  'aerobicExercise',
  'Aerobic Exercise',
  ['base-s', 'strength-s', 'power-s', 'rest-s'],
  'Running and cross-trainer machines are preferable to cycling, which is prone to building up the leg muscles. Provided you feel fit enough, you should aim to incorporate anaerobic intervals (high-intensity bursts of exercises such as sprints) to send your heart soaring, followed by controlled periods where you slow back down and recover. Those who are less fit should build up from 15-20 minutes aerobic sessions (steady pace) until they can sustain 35 to 45 minutes of effort. After this, it is safe to attempt to incorporate intervals.'
);

const crossTraining = new Exercise(
  'crossTraining',
  'Cross Training',
  ['rest-s'],
  'Cross-training is athletic training in sport others than the athlete\'s usual sport. The goal is improving overall performance. It takes advantage of the particular effectiveness of one training method to negate the shortcomings of another. For example, you could do conditioning sessions with a lots of different exercises, with low weights and faily high reps. Be careful to avoid any leg exercises that are prone to causing muscle bulk, such as squats with weight.'
);

// SKILL ACQUISITION
const straightArms = new Exercise(
  'straightArms',
  'Straight Arms',
  ['skill'],
  '(Skill - Beginner) While traversing an indoor circuit, attempt to keep the elbows virtually loched, by hanging with straight arms and a low center of gravity. Utilizes flags, backsteps, and crosses to maintain straight arms while traversing accross the wall.'
);

const restPractice = new Exercise(
  'restPractice',
  'Rest Practice',
  ['skill'],
  '(Skill - Intermediate) While traversing an indoor circuit or climbing an outdoor warm-up, seek and practice novel rest stances, especially "no-hands" or other easy stances involving stems, kneebars, drop-knees, jams, thumb wraps, etc.'
);

const speedClimbing = new Exercise(
  'speedClimbing',
  'Speed Climbing',
  ['skill'],
  '(Skill - Intermediate) While toproping a familiar route indoors or out, climb as fast as you can. Time yourself and try to improve each attempt. Mentally reahearse the route beforehand to speed yourself up. Efficiency is not critical, so go &quot;all out&quot;. The goal is to extend yout range of climbing pace so that you can climb faster when appropriate.'
);

const findingCalm = new Exercise(
  'findingCalm',
  'Finding Calm',
  ['skill'],
  '(Skill - Advanced) While ARCing (boulder or toproping), plan a course that incorporates several dynamic moves. Consciously pause after each dyno to restart breathing with slow, deep breaths. Deliberately relax the grip, shift weight onto the feet, and if possible shake out.'
);

const movementPerfection = new Exercise(
  'movementPerfection',
  'Movement Perfection',
  ['skill'],
  '(Skill - Advanced) While bouldering indoors or outside, select a problem near your flash level and repeatedly climb the problem over several sessions, attempting to complete it as effeciently/effortlessly as possible. That drill can span seasons or years for some problems.'
);

const momentumClimbing = new Exercise(
  'momentumClimbing',
  'Momentum Climbing',
  ['skill'],
  '(Skill - Advanced) While toproping or bouldering on moderate terrain, attempt to climb the route in one continuous movement. Try to minimize any pause in motion. Use a well-known route, at first, and mentally rehearse the sequences before beginning. As you progress, attempt this drill on lesser-known routes.'
);

const stutterStep = new Exercise(
  'stutterStep',
  'Stutter Step',
  ['skill'],
  '(Skill - Beginner) While boulder traversing or toproping, the climber will make three foot movements for every one hand movement. Foot moves should be small and should allow the climber to fully weight his feet. If in a climbing gym, avoid pinching the handholds, which makes them unrealistically &quot;positive&quot;.'
);

const thumbsOnly = new Exercise(
  'thumbsOnly',
  'Thumbs Only',
  ['skill'],
  '(Skill - Beginner) While toproping a moderate, just-under-vertical route, attempt to climb using only the thumbs (and feet). Use a well-featured route and make small foot movements. Attempt to maintain smooth, flowing movement, which requires significant effort and control from the lower body. This drill can also be done with &quot;two fingers only&quot;.'
);

const downclimbing = new Exercise(
  'downclimbing',
  'Downclimbing',
  ['skill'],
  '(Skill - Intermediate) On any terrain, indoor our out, climb down in addition to climbing up. Deliberately select footholds, guide your feet to them, and don\'t look away until they &quot;land&quot;. Balance your body before moving the leading foot, and avoid large foot movements.'
);

const toeingHard = new Exercise(
  'toeingHard',
  'Toeing Hard',
  ['skill'],
  '(Skill - Advanced) On moderate terrain, attempt long reaches while concentrating on maximizing foot force throughout. The mind will try to focus exclusively on guiding the reaching hand, but also focus on the opposing foot, which drives the movement. Simultaneously guiding hands and feet in different tasks is difficult but critical.'
);

const pullingFeet = new Exercise(
  'pullingFeet',
  'Pulling Feet',
  ['skill'],
  '(Skill - Advanced) While toproping on steep terrain with positive footholds, deliberately pull with your feet to keep your COM close to the wall. Make careful toe placements in the incut part of the hold, like fingers for max pulling power. Experiment with pulling and pushing in unison. Try it on a travers as well, pulling with the leading foot.'
);

const precisionFeet = new Exercise(
  'precisionFeet',
  'Precision Feet',
  ['skill'],
  '(Skill - Beginner) While boulder traversing or toproping, make careful and precise foot placements. Select the bull\'s-eye on each foot-hold deliberately, and don\'t look away until your foot has reached the target. Take your time initially, then speed up as you gain proficiency. Sound provides immediate feedback, but toe accuracy is the ultimate goal, so focus on that.'
);

const footSlab = new Exercise(
  'footSlab',
  'Foot Slab',
  ['skill'],
  '(Skill - Beginner) While standing near any wall with distinguishable features (not while climbing), stand on one leg, then pick out precise &quot;targets&quot; on the wall to aim for and touch with the toe of the free leg. Can be performed statically or dynamically.'
);

const blinkingDrill = new Exercise(
  'blinkingDrill',
  'Blinking Drill',
  ['skill'],
  '(Skill - Intermediate) While bouldering or toproping, visuallyidentify the desired foothold, memorize in spatial location, and then close your eyes while guiding your foot to the hold, making necessary adjusments by feel. Open your eyes to assess your performance, spot the next hold, and so on. Can also be performed with hands movements.'
);

const jibsOnly = new Exercise(
  'jibsOnly',
  'Jibs Only',
  ['skill'],
  '(Skill - Intermediate) While bouldering or toproping indoors, restrict footholds to only screw-on holds (aka &quot;jibs&quot;), smears, molded features, or empty bolt holes (divots or ripples on larger holds can also be used).'
);

const glueFeet = new Exercise(
  'glueFeet',
  'Glue Feet',
  ['skill'],
  '(Skill - Advanced) On any climbing terrain, climb as though your toes become &quot;frozen&quot; to the wall as soon as they land on the foothold (no pivoting, rotating or sliding allowed). As you move past the hold, flex at the ankle and forefoot to avoid pivoting on the hold.'
);

const twoPoints = new Exercise(
  'twoPoints',
  'Two Points',
  ['skill'],
  '(Skill - Beginner) While climbing on any terrain, remove one foot from the wall (let it dangle) before and during every hand movement. This will ensure you keep only two points of contact (at most) with the rock, and will force a more-dynamic climbing style. It is permissible to have both feet on the wall, just not while reaching with a hand.'
);

const oneArmTraverse = new Exercise(
  'oneArmTraverse',
  'One-Arm Traverse',
  ['skill'],
  '(Skill - Beginner) While boulder-traversing on not-so-steep terrain with plenty of holds, climb with only one arm. After completing the traverse, try it again with the other arm. Use big holds, as this drill can be very pumpy.'
);

const blindDynos = new Exercise(
  'blindDynos',
  'Blind Dynos',
  ['skill'],
  '(Skill - Intermediate) While bouldering, select a group of handholds that allow you to repeatedly dyno back and forth without moving your feet. Practice these dynos several times, then try it with your eyes closed, using proprioceptive awareness to guide your hands to the hold.'
);

const pocketDynos = new Exercise(
  'pocketDynos',
  'Pocket Dynos',
  ['skill'],
  '(Skill - Intermediate) On a gym or home wall, set some simple boulder problems that require dynos to tight pockets (may be one-, two-, three-, or four-finger pockets). Rehearse the dynos several times in a session, and perform the drill frequently to develop accuracy.'
);

const targetCampusing = new Exercise(
  'targetCampusing',
  'Target Campusing',
  ['skill'],
  '(Skill - Advanced) On a campus board, use masking tape (or a thick mark) to create &quot;targets&quot; on specified rungs (place the tape on either side of the aim point to create a &quot;virtual pocket&quot;). While campusing, try to hit the targets.'
);

const deadpoints = new Exercise(
  'deadpoints',
  'Deadpoints',
  ['skill'],
  '(Skill - Advanced) On a gym or home wall, set boulder-problem dynos with non-positive target holds (slopers, pinches). Latching these holds will require precise deadpoints. Rehearse the dynos repeatedly. An entire route or traverse can be constructed with such moves.'
);

// STRENGTH EXERCISES
const beginnerHangboard = new Exercise(
  'beginnerHangboard',
  'Beginner Hangboard',
  ['strength-p'],
  'Use two arms &quot;dead hangs&quot; with each arm on the same size and type of grip for a given set. Elbows and shoulders should be slightly bent. The Beginner Hangboard Routine should include one set each of eight to ten different grip positions. The following are recommended: warm-up jugs, large edge, medium edge, wide pinch, medium pinch, sloper, index-middle-ring (IMR) deep three-finger pocket, middle-ring-pinky (MRP) deep three-finger pocket, middle-ring (MR) deep two-finger pocket.'
);

const intermediateHangboard = new Exercise(
  'intermediateHangboard',
  'Intermediate Hangboard',
  ['strength-p'],
  'Use two arms &quot;dead hangs&quot; with each arm on the same size and type of grip for a given set. Elbows and shoulders should be slightly bent. The Intermediate Hangboard Routine should include two sets each of five to six of the following different grip positions: warm-up sloper, medium open-hand edge, small semi-closed edge, MR shallow two-finger pocket, index-middle (IM) deep two-finger pocket, IMR or MRP deep three-finger pocket, pinch.'
);

const advancedHangboard = new Exercise(
  'advancedHangboard',
  'Advanced Hangboard',
  ['strength-p'],
  'Use two arms &quot;dead hangs&quot; with each arm on the same size and type of grip for a given set. Elbows and shoulders should be slightly bent. The Advanced Hangboard Routine should include three sets each of six or seven different grip positions. Start with the grips listed for the Intermediate Hangboard Routine, but consider replacing some of the larger grips with more advanced grips such as: middle one-finger pocket (1F), additional pinch grips (or different width), closed crimp (very carefully).'
);

// SUPPLEMENTAL EXERCISES
const pullUps = new Exercise(
  'pullUps',
  'Pull-Ups',
  ['strength-s', 'power-s', 'endur-s', 'perf-s'],
  '(SE) Climbers should use independant free-hanging grips (such as gymnastic rings or &quot;Rock Rings&quot;), which allow the hands to supinate (rotate, such that the palms face each other at the top of the contraction). Begin from a dead-hang, pull your body upward until your chin is level with the tops of your hands, lock-off momentarily, and then lower your body back to a dead-hang position.'
);

const oneArmInvRow = new Exercise(
  'oneArmInvRow',
  'One-Arm Inverted Row',
  ['strength-s', 'power-s', 'endur-s', 'perf-s'],
  '(SE) Modified pull-up. Use a similar free-hanging grip, but position the ring low enough that your feet can rest on the ground (or another support), such that the body is inclined to the ground as an angle of 30 degrees. Using one arm at the time, begin with a dead-hang, then raise the upper body and rotate the hips while &quot;reaching&quot; with the free hand, bringing the armpit of the free arm up to the ring, as if reaching for a hold.'
);

const lockOffLaps = new Exercise(
  'lockOffLaps',
  'Lock-Off Laps',
  ['strength-s', 'power-s', 'endur-s', 'perf-s'],
  '(SE) On a 45-degree overhanging climbing wall, begin in a seated position with feet on small but positive footholds and one hand on the wall (the other hand should hang free). Pull onto the wall and then raise the upper body until the shoulder of the active hand is adjacent to that same hand. Hold this lock-off position for two deep breaths, then grasp the next jug with the inactive hand. Step the feet up the wall, release the low hand, and then raise the upper body until the other shoulder is adjacent to the other hand. Hold this lock-off position for two deep breaths. Continue up and down the wall in this fashion.'
);

const pushUps = new Exercise(
  'pushUps',
  'Push-Ups',
  ['strength-s', 'power-s', 'endur-s', 'perf-s'],
  '(SE) Begin by lying flat on the floor with the body in a plank position and palms flat on the ground, adjacent to the shoulders. Extend both arms until nearly locked to raise the chest off the ground. After a brief pause, lower the chest to within two inches of the ground. A dumbbell can be held between the shoulder blades to add resistance.'
);

const shoulderPress = new Exercise(
  'shoulderPress',
  'Shoulder Press',
  ['strength-s', 'power-s', 'endur-s', 'perf-s'],
  '(SE) In a standing position, hold a dumbbell in each hand at shoulder level, with your elbows bent. Extend the dumbbells straight up until your elbows are nearly locked, allowing the palms to rotate freely. After a brief hold, lower the dumbbells back to the shoulders.'
);

const dips = new Exercise(
  'dips',
  'Dips',
  ['strength-s', 'power-s', 'endur-s', 'perf-s'],
  '(SE) Begin with one hand on each parralel bar (or a countertop corner), with arms straight and the pody suspended in a vertical plank position. Bending at the elbow and shoulders, lower the body until the armpits are level with the hands. Hold this position for one deep breath, and then raise the body back up until the elbows are nearly locked.'
);

const hangingLegRaises = new Exercise(
  'hangingLegRaises',
  'Hanging Leg Raises',
  ['strength-s', 'power-s', 'endur-s', 'perf-s'],
  '(SE) Beginning with the body suspended in a vertical plank position, raise your straightened legs forward to form a free-hanging pike position (beginners will want to start with knees bent, but should aim to perform this lift with legs straight). Hold this position for one deep breath, then lower the legs back to free-hanging pike position.'
);

const legLifts = new Exercise(
  'legLifts',
  'Leg Lifts',
  ['strength-s', 'power-s', 'endur-s', 'perf-s'],
  '(SE) Lie flat on the floor in a reverse plank position. Keeping the legs straight at the knee joint, bend at the hips to raise the feet until they are roughly 16 inches of the floor. Hold this position for two deep breaths, then lower the feet back to the ground.'
);

const latToFrontRaise = new Exercise(
  'latToFrontRaise',
  'Lateral-to-Front Raise',
  ['strength-s', 'power-s', 'endur-s', 'perf-s'],
  '(SE) Begin  in a standing position with arms hanging straight down, elbows slightly bent, with a dumbbell (low weight) in each hand. Raise both arms straight out to the side, so that the arms are nearly straight, parrallel to the ground, and your palms are facing down. Hold this position for one deep breath. Next, keeping the arms nearly straight at the elbow joint, parralel to the ground, and palms facing down, slowly swing the arms inward until the two dumbbells are touching. Hold this position for one deep breath, and then slowly lower the dumbbells until the arms are again hanging straight down.'
);

const bicepCurl = new Exercise(
  'bicepCurl',
  'Bicep Curl',
  ['strength-s', 'power-s', 'endur-s', 'perf-s'],
  '(SE) Grasp a dumbbell in one hand, standing straight up with arms straight down. Bending at the elbow, slowly raise the dumbbell until the hand is level with the shoulder, and then slowly lower the dumbbell back down until the elbow is nearly locked.'
);


// POWER PHASE EXERCISES
const warmUpBoulderLadder = new Exercise(
  'warmUpBoulderLadder',
  'Warm-Up Boulder Ladder',
  ['power-s', 'endur-s', 'perf-s'],
  'Begin with a thorough warm-up that should entail 10-30 minutes of low-intensity ARC-style traversing. Next, complete the progressive Warm-Up Boulder Ladder. Starting at V-easy, complete one to four boulder problems at each V-grade before progressing to the next. The goal is to complete that phase in 20 to 30 minutes (adjust the number of problems in consequence).'
);

const hardBouldering = new Exercise(
  'hardBouldering',
  'Hard Bouldering',
  ['power-s', 'endur-s', 'perf-s'],
  'Begin with a Warm-Up Boulder Ladder, then complete 20-30 minutes of &quot;hard&quot; bouldering. Pick three to four problems harder than your flash level and work them for five to 10 minutes each. Ideally, these would be problems that require three to four attempts to climb.'
);

const limitBouldering = new Exercise(
  'limitBouldering',
  'Limit Bouldering',
  ['power-p'],
  'Begin with a Warm-Up Boulder Ladder and Hard Bouldering. Next, start the Limit Bouldering Routine. Select two to three problems, right at the climber\'s limit and they should be powerful. Spend 15 minutes (or more) on each problem (4 or 5 solid attempts) and rest for five to 10 minutes between problems. Can also be performed outdoor.'
);

const beginnerCampus = new Exercise(
  'beginnerCampus',
  'Beginner Campus Routine',
  ['power-p'],
  'Campus training requires a campus board and involves footless dynos between like holds. The Beginner Campus Routine is an introduction to campus training designed to those who are new to structured campusing. This routine is focused on learning the basic movements, practicing dynamic accuracy, and overcoming inhibitions. Emphasize smooth movement, using momentum to flow from one move to the next.'
);

const intermediateCampus = new Exercise(
  'intermediateCampus',
  'Intermediate Campus Routine',
  ['power-p'],
  'Campus training requires a campus board and involves footless dynos between like holds. The Intermediate Campus Routine is intended for climbers who can smoothly and reliably complete basic ladders without assistance. This workout includes greater emphasis on physical power, as opposed to movement skill and commitment. However, you shou.d focus on completing the moves smoothly, using momentum to flow from one move to the next.'
);

const advancedCampus = new Exercise(
  'advancedCampus',
  'Advanced Campus Routine',
  ['power-p'],
  'Campus training requires a campus board and involves footless dynos between like holds. The Advanced Campus Routine is for well-trained climbers with extensive experience using the campus board. This routine introduces extremely intense reactive movements, so climbers should have approximately five years of campus training experience before attempting it. This experience is necessary to know how hard to push and when to stop.'
);


// CAMPUS LADDER EXERCISES
const matchingLadders = new Exercise(
  'matchingLadders',
  'Matching Ladders',
  ['campus-b'],
  'Climb the board one rung at a time, matching on every rung until reaching the top. For example, begin with both hands matched on rung No.1, then bump the left hand from rung No. 1 to rung No. 2, then bump the right hand from rung No. 1 to rung No. 2, then the left hand to rung No. 3, and so on. Alternate sets leading with each hand.'
);

const basicLadders = new Exercise(
  'basicLadders',
  'Basic Ladders',
  ['campus-b'],
  'Climb the board one rung at a time, alternating hands, latching every rung until reaching the top. For example, begin with both hands on rung No. 1, then bump the left hand from rung No. 1 to rung No. 2, the move the right hand from rung No. 1 to rung No. 3 (without matching on rung No. 2), then move the left hand from rung No. 2 to rung No. 4, and so on, until the top of the board is reached.'
);

const maxLadders = new Exercise(
  'maxLadders',
  'Max Ladders',
  ['campus-b'],
  'Climb the board alternating hands, skipping as many rungs as possible. For example, start with both hands on rung No. 1, throw the left hand from rung No. 1 to rung No. 5, then, without matching, throw the right hand from rung No. 1 to rung No. 9, then match the left hand to rung No. 9. The ultimate goal is to travel as far up the board as possible in two hand moves.'
);

const typewriters = new Exercise(
  'typewriters',
  'Typewriters',
  ['campus-i'],
  'In this exercise, the climber campuses horizontally. Begin with hands matched on the left end of the campus board. Bump the right hand progressively farther right, without going up the board, until near failure or until run out of real estate. Then progressively bump the left hand to the right, eventually matching the left hand next to the right. Then reverse the exercise. These should be uses infrequently to train for a specific move, and can be hard on the shoulders.'
);

const maxFirstMove = new Exercise(
  'maxFirstMove',
  'Max First Move',
  ['campus-i'],
  'Start matched on th first rung and throw one hand to the highest run possible (leaving the other hand on the first rung). These are very specific to rock climbing, but also good for building the shoulder strength necessary for progressing on max ladders. Once the high rung is latched, try to match (or pass the high rung).'
);

const goAgains = new Exercise(
  'goAgains',
  'Go Agains (aka Bumps)',
  ['campus-i'],
  'Complete the first move of the max ladders exercise, then continue bumping the high hand one rung at a time until failure, leaving the low hand on the first rung. This exercise can be hard on the shoulders.'
);

const touches = new Exercise(
  'touches',
  'Touches',
  ['campus-i'],
  'Begin as for the first move of a max ladder, but instead of latching the high rung, simply touch the rung, then fall slowly back onto the starting rung. These work upper-arm explosive power and lock-off strength in a &quot;negative&quot;, eccentric contraction.' 
);

const doubleDynos = new Exercise(
  'doubleDynos',
  'Double Dynos',
  ['campus-i'],
  'Move both hands at the same time in matched double-dynamic fashion - so for each movement you\'ll have no contact with the board. These are among the least specific campus exercises, but they are also the most plyometric and are great for developping dynamic aggression, spatial awareness, and hand-eye coordination at high speed.'
);

const upDownUp = new Exercise(
  'upDownUp',
  'Up-Down-Up',
  ['campus-a'],
  'Begin on a relatively high rung, then down-campus a set increment (with a single hand or matched hands)­. When the lower rung is latched, explode back up to the starting rung, striving to make the down-and-up portion one continuous movement, executed as quickly as possible.'
);

const fingersCampusing = new Exercise(
  'fingersCampusing',
  '3-/2-/1-finger Campusing',
  ['campus-a'],
  'For the hardcore, any of the campus exerecises described above can be performed with three, two, or even one finger. Campusing in this manner isolated finger strength.'
);

// POWER-ENDURANCE PHASE EXERCISES
const linkedBoulderCircuit = new Exercise(
  'linkedBoulderCircuit',
  'Linked Bouldering Circuit',
  ['endur-p'],
  'A linked bouldering circuit is an unbroken chain of boulder problems or a long boulder traverse consisting of premeditated number of moves, designed to mimic the goal route as closely as possible. If there isn\'t a specific goal route in mind, a reasonable target is about 24 total hands movements, with no rest stances or shakes. A single LBC set will take one to four minutes to complete. The circuit should be difficult but not desperate; easy enough that the climber can complete it most of the time when she is warmed-up but not ye fatigued. Build up the circuit from three, four or five distinct problems. Complete 6 to 8 sets of 20 moves or less; 4 to 6 for sets of 20 to 40 moves. Set to rest time ratio should be 1:2 early in the phase and 1:1 late in the phase.'
);

const routeIntervals = new Exercise(
  'routeIntervals',
  'Route Intervals',
  ['endur-p'],
  'Route Intervals are a form of lower-intensity PE training that are usually accomplished by climbing a route or bouldering circuit repeatedly. Select a route that is one letter grade harder then your onsight level. It should be similar to the goal route in terms of length, angle, hold types, etc. It should be well-rehearsed and can usually be climbed on demand when un-fatigued. Complete two to four sets or laps with a resting time ratio of 1:2 early in the phase and 1:1 late in the phase.'
);

const redpointAttempts = new Exercise(
  'redpointAttempts',
  'Redpoint Attempts',
  ['endur-p', 'perf-p'],
  'Redpointing is free-climbing a route without falling, while lead climbing, after having practiced the route beforehand (either by hangdogging or top roping). There are two types of redpoints, the short-term that can be sent in three to four days, and the long-term which is any project that takes more than a week\'s worth of climbing days to complete (even entire seasons, or years). They both require different strategies and planning (see pages 237-245).'
);

const onsightAttempts = new Exercise(
  'onsightAttempts',
  'Onsight Attempts',
  ['perf-p'],
  'An onsight ascent is one in which the climber leads a climb sucessfully without prior rehearsal on the route, or specific information about the climbing. Onsight pyramids should begin humbly, with routes well below the climber\'s limit, because there is only one shot to onsight each route. The onsight pyramid should only be composed of outdoor routes on real rock.'
);

const boulderAttempts = new Exercise(
  'boulderAttempts',
  'Boulder Attempts',
  ['perf-p'],
  'Free-climb outdoor boulder problems without falling.'
);

// Temporary list to simulate the whole JSON file containing all the exercises
export const exercisesList = [straightArms, restPractice, speedClimbing, findingCalm, movementPerfection, momentumClimbing, stutterStep, thumbsOnly, downclimbing, toeingHard, pullingFeet, precisionFeet, footSlab, blinkingDrill, jibsOnly, glueFeet, twoPoints, oneArmTraverse, blindDynos, pocketDynos, arc, outdoorMileage, aerobicExercise, beginnerHangboard, intermediateHangboard, advancedHangboard, pullUps, oneArmInvRow, lockOffLaps, pushUps, shoulderPress, dips, hangingLegRaises, legLifts, latToFrontRaise, bicepCurl, matchingLadders, basicLadders, maxLadders, typewriters, maxFirstMove, goAgains, touches, doubleDynos, upDownUp, fingersCampusing, warmUpBoulderLadder, hardBouldering, limitBouldering, beginnerCampus, intermediateCampus, advancedCampus, crossTraining, deadpoints, targetCampusing, linkedBoulderCircuit, routeIntervals, redpointAttempts, onsightAttempts, boulderAttempts];

//Cycle through exercises to get the exercise-object by giving a matching id
export const exerIDtoObj = id => {
  let exer;
  exercisesList.forEach(el => {
    if (el.id === id) {
      exer = el;
    };
  });
  return exer;
};

// Get exercises list by phase
export const getExerciseList = phase => {
  let array = [];
  exercisesList.forEach(el => {
    if (el.type.includes(`${phase}-p`) || el.type.includes(`${phase}-s`)) {
      array.push(el);
    };
  });
  return array;
};

// Takes an ID and cycles through list to return the title of the corresponding exercise 
export const formatExerName = (id)  => {
  let title;
  exercisesList.forEach(el => {
    if (id === el.id) {
      title = el.title;
    }
  });
  return title;
};