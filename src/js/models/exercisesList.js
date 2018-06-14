import Exercise from './Exercise';

// BASE EXERCISES
const arc = new Exercise(
  'arc',
  'ARC training', 
  'base',
  'Climb at your MSS (maximum steady state - p.95) for 20-45 minutes straight. Up to three sets of at least 20 minutes can be completed in a single ARC workout. Choose vertical to slightly overhanging terrain. The goal is not to pump off the wall. Once the correct level of effort is determined, add up tp three skill acquisition exercises (choose from pp.63-67).'
);

const outdoorMileage = new Exercise(
  'outdoorMileage',
  'Outdoor mileage',
  'base',
  'Climb six to twelve "moderate" routes or pitches. These climbs should be approximately one to two full number grades below the climber\'s maximum onsight ability. They should be moderately fatiguing - just like ARCing. Apply the guidelines of ARC training to these routes. It means you should try to create continuous ARC "sets" of 20-45 minutes, which may require to climb multiple pitches back-to-back.'
);

// SKILL ACQUISITION
const straightArms = new Exercise(
  'straightArms',
  'Straight Arms',
  'skill',
  'While traversing an indoor circuit, attempt to keep the elbows virtually loched, by hanging with straight arms and a low center of gravity. Utilizes flags, backsteps, and crosses to maintain straight arms while traversing accross the wall.'
);

const restPractice = new Exercise(
  'restPractice',
  'Rest Practice',
  'skill',
  'While traversing an indoor circuit or climbing an outdoor warm-up, seek and practice novel rest stances, especially "no-hands" or other easy stances involving stems, kneebars, drop-knees, jams, thumb wraps, etc.'
);

const speedClimbing = new Exercise(
  'speedClimbing',
  'Speed Climbing',
  'skill',
  'lorem'
);


// STRENGTH EXERCISES
const beginnerHangboard = new Exercise(
  'beginnerHangboard',
  'Beginner Hangboard',
  'strength',
  'lorem'
);

const intermediateHangboard = new Exercise(
  'intermediateHangboard',
  'Intermediate Hangboard',
  'strength',
  'lorem'
);

const advancedHangboard = new Exercise(
  'advancedHangboard',
  'Advanced Hangboard',
  'strength',
  'lorem'
);

const baseExercises = [arc, outdoorMileage];
const baseSecExercises = [straightArms, restPractice, speedClimbing];
const strengthExercises = [beginnerHangboard, intermediateHangboard, advancedHangboard];
//TODO:
const powerExercises = [];
const endurExercises = [];
const perfExercises = [];
const restExercises = [];


const exercisesList = baseExercises.concat(strengthExercises, powerExercises, endurExercises, perfExercises, baseSecExercises);

//Cycle through exercises to get the exercise-object by giving a matching id
export const getExercise = id => {
  let exer;
  exercisesList.forEach(el => {
    if (el.id === id) {
      exer = el;
    };
  });
  return exer;
};

// Get exercises list by type of phase
export const getExerciseList = phase => {
  if (phase === 'base') {
    return baseExercises;
  } else if (phase === 'strength') {
    return strengthExercises;
  } else if (phase === 'power') {
    return powerExercises;
  } else if (phase === 'endur') {
    return endurExercises;
  } else if (phase === 'perf') {
    return perfExercises;
  } else if (phase === 'rest') {
    return restExercises;
  } else if (phase === 'base-sec') {
    return baseSecExercises;
  };
};


export const formatExerName = (id)  => {
  let title;
  exercisesList.forEach(el => {
    if (id === el.id) {
      title = el.title;
    }
  });
  return title;
};