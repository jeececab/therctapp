import { getExercise, getExerciseList } from './exercisesList';

export const editorData = {
  phase: "",
  exercise: "",
  exercisesList: []
};

export const initEditorData = () => {
  editorData.phase = "base";
  editorData.exercise = "";
  editorData.exercisesList = [];
}

export const storeEditorPhase = phase => {
  editorData.phase = phase;
};

export const selectEditorExer = exercice => {
  editorData.exercise = exercice;
};

export const addExercice = () => {
  let exer;
  if (editorData.exercise === "") {
    exer = getExerciseList(editorData.phase)[0].title;
  } else {
    exer = getExercise(editorData.exercise).title;
  };
  editorData.exercisesList.push(exer);
};

