import TrainingDay from './TrainingDay';

let baseFitnessDisplay, bfDisplay, optAeroExDisplay, oaeDisplay, strengthDisplay, optBaseFitDisplay, obfDisplay, powerDisplay, powerEndurDisplay, peDisplay, redpointDisplay, rpDisplay, redpointOnsight, rposDisplay, optCrossDisplay, oaeOctDisplay;

// NOVICE TRAINEE SEASONAL TRAINING PLAN TEMPLATE
export const novice = () => {
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
  baseFitnessDisplay = [0];
  bfDisplay = [1, 3, 5, 7, 8, 10, 12, 14, 15, 17, 18, 19, 21, 22, 24, 25, 26];
  optAeroExDisplay = [2];
  oaeDisplay = [4, 6, 9, 11, 13, 16, 20, 23, 27, 30, 33, 36, 39, 42];
  strengthDisplay = [28, 31, 34, 37, 40, 43, 46];
  optBaseFitDisplay = [29];
  obfDisplay = [32, 35, 38, 41, 44];
  powerDisplay = [49, 52, 54, 57, 59, 62];
  powerEndurDisplay = [64];
  peDisplay = [67, 71, 74, 77, 78, 81, 88, 95, 102];
  redpointDisplay = [70];
  rpDisplay = [71, 77, 78, 84, 85, 91, 92];
  redpointOnsight = [98];
  rposDisplay = [99, 105, 106];
  optCrossDisplay = [108];
  oaeOctDisplay = [110, 112, 114, 116, 118];

  // 2 - Assign content to the object 'displayed' property - see function further below
  assignDisplayed(trainingDays);
  
  return trainingDays;
};

// EXPERIENCED TRAINEE SEASONAL TRAINING PLAN TEMPLATE
export const experienced = () => {
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

  baseFitnessDisplay = [0];
  bfDisplay = [1, 3, 5, 7, 8, 10, 11, 12];
  optAeroExDisplay = [2];
  oaeDisplay = [4, 6, 9, 13, 16, 18, 19, 21, 22, 24, 25, 27, 28, 31];
  strengthDisplay = [14, 17, 20, 23, 26, 29, 32, 35, 38];
  optBaseFitDisplay = [15];
  obfDisplay = [21];
  powerDisplay = [41, 44, 46, 49, 51, 54, 56, 58, 61];
  powerEndurDisplay = [65];
  peDisplay = [67, 74, 81, 88, 95, 102];
  redpointDisplay = [63];
  rpDisplay = [70, 71, 77, 78, 84, 85, 91, 92];
  redpointOnsight = [98];
  rposDisplay = [99, 105, 106];
  optCrossDisplay = [108];
  oaeOctDisplay = [110, 112, 114, 116, 118];

  assignDisplayed(trainingDays);

  return trainingDays;
};

// TODO : SEASONAL TRAINING PLAN TEMPLATE FOR TRAD CLIMBER - book page 262

function assignDisplayed (trainingDays)  {
  for (let i = 0; i < trainingDays.length; i++) {
    if (baseFitnessDisplay.includes(i)) {
      trainingDays[i].displayed = '<p class="season__cell--primary">Base-Fitness (BF)</p>';
    } else if (bfDisplay.includes(i)) {
      trainingDays[i].displayed = '<p class="season__cell--primary">BF</p>';
    } else if (optAeroExDisplay.includes(i)) {
      trainingDays[i].displayed = '<p class="season__cell--secondary">Optional Aerobic Exercise (OAE)</p>';
    } else if (oaeDisplay.includes(i)) {
      trainingDays[i].displayed = '<p class="season__cell--secondary">OAE</p>';
    } else if (strengthDisplay.includes(i)) {
      trainingDays[i].displayed = '<p class="season__cell--primary">Strength</p>';
    } else if (optBaseFitDisplay.includes(i)) {
      trainingDays[i].displayed = '<p class="season__cell--secondary">Optional Base-Fitness (OBF)</p>';
    } else if (obfDisplay.includes(i)) {
      trainingDays[i].displayed = '<p class="season__cell--secondary">OBF</p>';
    } else if (powerDisplay.includes(i)) {
      trainingDays[i].displayed = '<p class="season__cell--primary">Power</p>';
    } else if (powerEndurDisplay.includes(i)) {
      trainingDays[i].displayed = '<p class="season__cell--primary">Power-Endurance (PE)</p>';
    } else if (peDisplay.includes(i)) {
      trainingDays[i].displayed = '<p class="season__cell--primary">PE</p>';
    } else if (redpointDisplay.includes(i)) {
      trainingDays[i].displayed = '<p class="season__cell--primary">Redpoint (RP) attempts</p>';
    } else if (rpDisplay.includes(i)) {
      trainingDays[i].displayed = '<p class="season__cell--primary">RP</p>';
    } else if (redpointOnsight.includes(i)) {
      trainingDays[i].displayed = '<p class="season__cell--primary">RP/Onsight (OS)</p>';
    } else if (rposDisplay.includes(i)) {
      trainingDays[i].displayed = '<p class="season__cell--primary">RP/OS</p>';
    } else if (optCrossDisplay.includes(i)) {
      trainingDays[i].displayed = '<p class="season__cell--secondary">OAE and/or Optional Cross-Training (OCT)</p>';
    } else if (oaeOctDisplay.includes(i)) {
      trainingDays[i].displayed = '<p class="season__cell--secondary">OAE/OCT</p>';
    };
  };
};