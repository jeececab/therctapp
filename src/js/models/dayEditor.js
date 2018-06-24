import { exerIDtoObj, getExerciseList } from './exercisesList';

export const editorData = {
  day: 0,
  phase: "",
  exercise: "",
  secExercise: "",
  exercisesList: [],
};


export const initEditorData = day => {
  editorData.day = day.day;
  editorData.phase = day.phase;
  editorData.exercise = "";
  editorData.secExercise = "";
  editorData.exercisesList = [];
};

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
    const ex = getExerciseList(editorData.phase).find(el => {
      return el.type.includes(`${editorData.phase}-p`);
    });
   exer = ex.id;
  } else {
    exer = exerIDtoObj(editorData.exercise).id;
  };
  editorData.exercisesList.push(exer);
};

export const addSecExercise = () => {
  let exer;
  if (editorData.secExercise === "") {
    const secEx = getExerciseList(editorData.phase).find(el => {
      return el.type.includes(`${editorData.phase}-s`);
    });
   exer = secEx.id;
  } else {
    exer = exerIDtoObj(editorData.secExercise).id;
  };
  editorData.exercisesList.push(exer);
};


export const deleteExercise = exer => {
  if (editorData.exercisesList.includes(exer)) {
    editorData.exercisesList.splice(editorData.exercisesList.indexOf(exer), 1);
  };
};

export const saveDayPlan = day => {
  day.phase = editorData.phase;

  const exercises = [];
  editorData.exercisesList.forEach(el => {
    exercises.push({id: el, exerData: []});
  });
  day.exercises = exercises;

  $('.modal-container').remove();
  $('body').removeClass('overflowless');
};
