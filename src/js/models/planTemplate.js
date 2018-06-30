import TrainingDay from './TrainingDay';
import { trainingStartDate } from './mapDates';


// NOVICE TRAINEE SEASONAL TRAINING PLAN TEMPLATE
function novice() {
  const trainingDays = new Array();
  const dayNb = trainingStartDate.getDay();

  if (dayNb !== 0) {
    for (let i = 0; i < dayNb; i++) {
      trainingDays[i] = new TrainingDay(i, 'empty');
    };
  };

  for (let i = dayNb; i <= 119 + dayNb; i++ ) {
    if (i <= 27 + dayNb) {
      trainingDays[i] = new TrainingDay(i, 'base'); 
    } else if (i >= 28 + dayNb && i <= 48 + dayNb) {
      trainingDays[i] = new TrainingDay(i, 'strength'); 
    } else if (i >= 49 + dayNb && i <= 63 + dayNb) {
      trainingDays[i] = new TrainingDay(i, 'power'); 
    } else if (i >= 64 + dayNb && i <= 84 + dayNb) {
      trainingDays[i] = new TrainingDay(i, 'endur'); 
    } else if (i >= 85 + dayNb && i <= 106 + dayNb) {
      trainingDays[i] = new TrainingDay(i, 'perf'); 
    } else if (i >= 107 + dayNb && i <= 118 + dayNb) {
      trainingDays[i] = new TrainingDay(i, 'rest'); 
    }; 
  };

  return trainingDays;
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


////////////

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

  return trainingDays;
};
