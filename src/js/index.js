import style from '../scss/main.scss';
import { formView } from './views/formView';
import { submitForm } from './models/submitForm';
import { accountView } from './views/accountView';
import { newSeasonView } from './views/seasonView';
import { instructionsView } from './views/instructionsView';
import { planTemplate } from './models/planTemplate';
import { mapDates } from './models/mapDates';
import { dayPlanView } from './views/dayPlanView';
import { dayEditorView, updateEditView, addExerciseView } from './views/dayEditorView';
import { initEditorData, storeEditorPhase, selectEditorExer, addExercice } from './models/dayEditor';
import { getExercise } from './models/exercisesList';
import { exerciseView } from './views/exerciseView';
import { saveUserData, importUserData } from './models/userData';


// The state = {season, userData};
let state;


// INDEX PAGE UI CONTROLLER
// Get started aka sign up
$('.signUp').click(() => {
  formView();
});

// Log In
$('.logIn').click(() => {
  // Load user data from database 
  state = importUserData();
  accountView(state, 'user');
});

// Log out
$('.navbar').on('click', '.logOut', () => {
  // Temporary fallback when log out
  window.location = 'http://localhost:8080/';
});


// SIGN UP FORM UI CONTROLLER
// Submit Form
$('.app-container').on('submit', '#signupForm', e => {
  state = {userData:'', season:''};
  submitForm(e, state);
  saveUserData(state);
  accountView(state, 'newUser');
});
  

// NEW SEASON UI CONTROLLER
// Select a seasonal plan template (novice, experienced, trad or boulder)
$('.app-container').on('click', '.plan-templates__btn', e => {
  const type = e.target.classList[0].replace('-btn', '');
  state.season = planTemplate(type);
  mapDates(state.season);
  newSeasonView(type, state.season);
});

// Click "next" to choose the plan and move to account UI
$('.app-container').on('click', '.start-new-season__btn--next', () => {
  saveUserData(state);
  accountView(state, 'user');
  instructionsView();
});


// SEASON UI CONTROLLER
// View, edit and start day plan
$('.app-container').on('click', '.season__cell', e => {
  let day;
  if (e.target.id) {
    day = e.target.id.slice(4);
  } else {
    const btn = e.target.closest('.season__cell');
    day = btn.id.slice(4);
  };
  dayPlanView(state.season[day]);
});
// TODO: Start daily plan button (which basically is the same as clicking on the actuve day cell)
// TODO: Start new season button:
  // archiveSeason();
  // saveUserData();
  // state.season = '';
  // accountView(state, 'user');


// DAY PLAN UI CONTROLLER
// Click on an exercise to show the exercise UI
$('.app-container').on('click', '.btn--ex', e => {
  // const exer = getExercise(e.target.id);
  // exerciseView(exer /*, exerLog*/);
});
// Click on edit to edit the day plan
$('.app-container').on('click', '.btn--edit', () => {
  dayEditorView();
  initEditorData();
});


// DAY PLAN EDITOR UI CONTROLLER
// Change the phase based on the value of the selection menu
$('.app-container').on('change', '#edit__phase__inputs', e => {
  storeEditorPhase(e.target.value);
});
// Click OK to set the phase
$('.app-container').on('click', '.btn-ok', () => {
  updateEditView();
  addExerciseView();
});

// Change the exercise based on the value of the selection menu
$('.app-container').on('change', '#edit__exer__inputs', e => {
  selectEditorExer(e.target.value);
 });
// Select exercise and press add
$('.app-container').on('click', '.btn-add', () => {
  addExercice();
  updateEditView();
});


// const day = e.target.id.slice(8);
