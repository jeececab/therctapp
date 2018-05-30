import TrainingDay from './TrainingDay';

export const novice = () => {
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
  return trainingDays;
};

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
  return trainingDays;
};
