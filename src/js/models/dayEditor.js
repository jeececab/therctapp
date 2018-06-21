import { getExercise, getExerciseList } from './exercisesList';

export const editorData = {
  day: 0,
  phase: "",
  exercise: "",
  exercisesList: [],
  secExercise: "",
  secExercisesList: []
};

export const initEditorData = day => {
  editorData.day = day;
  editorData.phase = "base";
  editorData.exercise = "";
  editorData.exercisesList = [];
  editorData.secExercise = "";
  editorData.secExercisesList = [];
}

export const storeEditorPhase = phase => {
  editorData.phase = phase;
};

export const selectEditorExer = exercice => {
  editorData.exercise = exercice;
};

export const selectEditorSecExer = exercise => {
  editorData.secExercise = exercise;
};

export const addExercise = () => {
  let exer;
  if (editorData.exercise === "") {
    exer = getExerciseList(editorData.phase)[0].id;
  } else {
    exer = getExercise(editorData.exercise).id;
  };
  editorData.exercisesList.push(exer);
};

export const addSecExercise = () => {
  let secExer;
  if (editorData.secExercise === "") {
    secExer = getExerciseList(`${editorData.phase}-sec`)[0].id;
  } else {
    secExer = getExercise(editorData.secExercise).id;
  };
  editorData.secExercisesList.push(secExer);
}

export const deleteExercise = exer => {
  if (editorData.exercisesList.includes(exer)) {
    editorData.exercisesList.splice(editorData.exercisesList.indexOf(exer), 1);
  } else {
    editorData.secExercisesList.splice(editorData.secExercisesList.indexOf(exer), 1);
  };
};

export const saveDayPlan = day => {
  day.phase = editorData.phase;

  const exercises = [];
  editorData.exercisesList.forEach(el => {
    exercises.push({id: el, exerData: []});
  });
  day.exercises = exercises;

  const secExercises = [];
  editorData.secExercisesList.forEach(el => {
    secExercises.push({id: el, exerData: []});
  });
  day.secExercises = secExercises;

  $('.modal-container').remove();
  $('body').removeClass('overflowless');
};
