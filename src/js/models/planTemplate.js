import TrainingDay from './TrainingDay';

let baseFitnessDisplay, aeroExDisplay, optAeroExDisplay, outRopeBouldDisplay, strengthDisplay, optBaseFitDisplay, powerDisplay, powerEndurDisplay, redpointDisplay, redpointOnsight, optCrossDisplay;

// NOVICE TRAINEE SEASONAL TRAINING PLAN TEMPLATE
function novice() {
  // Creates array of objects that represents each training day and the phase it belongs to
  const trainingDays = new Array();
  for (let i = 0; i <= 119; i++ ) {
    if (i <= 27) {
      trainingDays[i] = new TrainingDay(i, 'base'); 
    } else if (i >= 28 && i <= 48) {
      trainingDays[i] = new TrainingDay(i, 'strength'); 
    } else if (i >= 49 && i <= 63) {
      trainingDays[i] = new TrainingDay(i, 'power'); 
    } else if (i >= 64 && i <= 84) {
      trainingDays[i] = new TrainingDay(i, 'endur'); 
    } else if (i >= 85 && i <= 106) {
      trainingDays[i] = new TrainingDay(i, 'perf'); 
    } else if (i >= 107 && i <= 118) {
      trainingDays[i] = new TrainingDay(i, 'rest'); 
    }; 
  };
  // Adds content to most of the empty cells previously created
  // 1- Select which cell will contain which content
  baseFitnessDisplay = [0, 1, 3, 5, 7, 8, 10, 12, 14, 15, 17, 18, 19, 21, 22, 24, 25, 26];
  aeroExDisplay = [];
  optAeroExDisplay = [2, 4, 6, 9, 11, 13, 16, 20, 23, 27, 30, 33, 36, 39, 42];
  outRopeBouldDisplay = [14];
  strengthDisplay = [28, 31, 34, 37, 40, 43, 46];
  optBaseFitDisplay = [29, 32, 35, 38, 41, 44];
  powerDisplay = [49, 52, 54, 57, 59, 62];
  powerEndurDisplay = [64, 67, 71, 74, 77, 78, 81, 88, 102];
  redpointDisplay = [70, 71, 77, 78, 84, 85, 91, 92, 94, 95];
  redpointOnsight = [98, 99, 105, 106];
  optCrossDisplay = [108, 110, 112, 114, 116, 118];
 
  // 2 - Assign content to the object 'displayed' property - see function further below
  assignDisplayed(trainingDays);
  
  return trainingDays;
};

// EXPERIENCED TRAINEE SEASONAL TRAINING PLAN TEMPLATE
function experienced() {
  const trainingDays = new Array();
  for (let i = 0; i <= 119; i++ ) {
    if (i <= 13) {
      trainingDays[i] = new TrainingDay(i, 'base'); 
    } else if (i >= 14 && i <= 40) {
      trainingDays[i] = new TrainingDay(i, 'strength'); 
    } else if (i >= 41 && i <= 62) {
      trainingDays[i] = new TrainingDay(i, 'power'); 
    } else if (i >= 63 && i <= 84) {
      trainingDays[i] = new TrainingDay(i, 'endur'); 
    } else if (i >= 85 && i <= 106) {
      trainingDays[i] = new TrainingDay(i, 'perf'); 
    } else if (i >= 107 && i <= 118) {
      trainingDays[i] = new TrainingDay(i, 'rest'); 
    }; 
  };

  baseFitnessDisplay = [0, 1, 3, 5, 7, 8, 10, 11, 12];
  aeroExDisplay = [2, 9];
  optAeroExDisplay = [2, 4, 6, 9, 13, 16, 18, 19, 21, 22, 24, 25, 27, 28, 31];
  outRopeBouldDisplay = [14];
  strengthDisplay = [14, 17, 20, 23, 26, 29, 32, 35, 38];
  optBaseFitDisplay = [15, 21];
  powerDisplay = [41, 44, 46, 49, 51, 54, 56, 58, 61];
  powerEndurDisplay = [65, 67, 74, 81, 88, 95, 102];
  redpointDisplay = [63, 70, 71, 77, 78, 84, 85, 91, 92];
  redpointOnsight = [98, 99, 105, 106];
  optCrossDisplay = [108, 110, 112, 114, 116, 118];

  assignDisplayed(trainingDays);

  return trainingDays;
};

// TRAD CLIMBING TRAINEE SEASONAL TRAINING PLAN TEMPLATE
function trad() {
  const trainingDays = new Array();
  for (let i = 0; i <= 119; i++ ) {
    if (i <= 13) {
      trainingDays[i] = new TrainingDay(i, 'base'); 
    } else if (i >= 14 && i <= 49) {
      trainingDays[i] = new TrainingDay(i, 'strength'); 
    } else if (i >= 50 && i <= 62) {
      trainingDays[i] = new TrainingDay(i, 'power'); 
    } else if (i >= 63 && i <= 69) {
      trainingDays[i] = new TrainingDay(i, 'endur'); 
    } else if (i >= 70 && i <= 106) {
      trainingDays[i] = new TrainingDay(i, 'perf'); 
    } else if (i >= 107 && i <= 118) {
      trainingDays[i] = new TrainingDay(i, 'rest'); 
    }; 
  };

  baseFitnessDisplay = [0, 1, 3, 5, 7, 8, 10, 11, 12, 15, 21, 36, 42, 57];
  aeroExDisplay = [2, 9, 16, 18, 24, 25, 27, 30, 31, 33, 37, 39, 43, 45, 46, 48, 51, 53, 58, 60];
  optAeroExDisplay = [4, 6, 13, 19, 22, 28, 34, 40, 49, 55, 62, 65, 67, 69, 72, 73, 75];
  outRopeBouldDisplay = [14, 29, 35];
  strengthDisplay = [17, 20, 23, 26, 32, 35, 38, 41, 44, 47];
  optBaseFitDisplay = [];
  powerDisplay = [50, 52, 54, 56, 59, 61];
  powerEndurDisplay = [66, 68, 74, 95, 102];
  redpointDisplay = [63, 64, 70, 71, 77, 78, 80, 82, 84, 86, 88];
  redpointOnsight = [90, 92, 98, 99, 105, 106];
  optCrossDisplay = [108, 110, 112, 114, 116, 118];

  assignDisplayed(trainingDays);

  return trainingDays;
};

// SEASONAL TRAINING PLAN TEMPLATE FOR BOULDERING
function boulder() {
  const trainingDays = new Array();
  for (let i = 0; i <= 119; i++ ) {
    if (i <= 6) {
      trainingDays[i] = new TrainingDay(i, 'base'); 
    } else if (i >= 7 && i <= 36) {
      trainingDays[i] = new TrainingDay(i, 'strength'); 
    } else if (i >= 36 && i <= 56) {
      trainingDays[i] = new TrainingDay(i, 'power'); 
    } else if (i >= 57 && i <= 84) {
      trainingDays[i] = new TrainingDay(i, 'perf'); 
    } else if (i >= 85 && i <= 90) {
      trainingDays[i] = new TrainingDay(i, 'rest'); 
    }; 
  };

  baseFitnessDisplay = [0, 1, 3, 5];
  aeroExDisplay = [];
  optAeroExDisplay = [2, 4, 6, 9, 11, 12, 14, 15, 17, 18, 20, 21, 24];
  outRopeBouldDisplay = [];
  strengthDisplay = [7, 10, 13, 16, 19, 22, 25, 28, 31, 34];
  optBaseFitDisplay = [];
  powerDisplay = [37, 40, 42, 45, 47, 49, 51, 54, 56, 60, 67, 74, 81];
  powerEndurDisplay = [];
  redpointDisplay = [57, 63, 64, 70, 71, 77, 78, 84];
  redpointOnsight = [];
  optCrossDisplay = [86, 88, 90];


  assignDisplayed(trainingDays);

  return trainingDays;
};

function assignDisplayed (trainingDays)  {
  for (let i = 0; i < trainingDays.length; i++) {
    if (baseFitnessDisplay.includes(i)) {
      trainingDays[i].displayed = '<p class="season__cell--primary">Base-Fitness</p>';
    } else if (aeroExDisplay.includes(i)) {
      trainingDays[i].displayed = '<p class="season__cell--secondary">Aerobic Exercise</p>';
    } else if (optAeroExDisplay.includes(i)) {
      trainingDays[i].displayed = '<p class="season__cell--secondary">Optional Aerobic Exercise</p>';
    } else if (outRopeBouldDisplay.includes(i)) {
      trainingDays[i].displayed = '<p class="season__cell--primary">Outdoor Roped Boulder</p>';
    } else if (strengthDisplay.includes(i)) {
      trainingDays[i].displayed = '<p class="season__cell--primary">Strength</p>';
    } else if (optBaseFitDisplay.includes(i)) {
      trainingDays[i].displayed = '<p class="season__cell--secondary">Optional Base-Fitness</p>';
    } else if (powerDisplay.includes(i)) {
      trainingDays[i].displayed = '<p class="season__cell--primary">Power</p>';
    } else if (powerEndurDisplay.includes(i)) {
      trainingDays[i].displayed = '<p class="season__cell--primary">Power-Endurance</p>';
    } else if (redpointDisplay.includes(i)) {
      trainingDays[i].displayed = '<p class="season__cell--primary">Redpoint attempts</p>';
    } else if (redpointOnsight.includes(i)) {
      trainingDays[i].displayed = '<p class="season__cell--primary">Redpoint/Onsight</p>';
    } else if (optCrossDisplay.includes(i)) {
      trainingDays[i].displayed = '<p class="season__cell--secondary">OAE and/or Optional Cross-Training</p>';
    };
  };
};

export function planTemplate(type) {
  if (type === 'novice') {
    return novice();
  } else if (type === 'experienced') {
    return experienced();
  } else if (type === 'trad') {
    return trad();
  } else if (type === 'boulder') {
    return boulder();
  };
};