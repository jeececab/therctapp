import style from '../scss/main.scss';
import { formView } from './views/formView';
import { submitForm } from './models/submitForm';
import { accountView } from './views/accountView';
import { newSeasonView } from './views/seasonView';
import { instructionsView } from './views/instructionsView';
import { planTemplate } from './models/planTemplate';
import { mapDates } from './models/mapDates';
import { dayPlanView } from './views/dayPlanView';
import { dayEditorView, displayPhaseTitle, addExerciseView, displayExerSelection } from './views/dayEditorView';
import { initEditorData, storeEditorPhase, selectEditorExer, selectEditorSecExer, addExercise, addSecExercise, deleteExercise, saveDayPlan 
} from './models/dayEditor';
import { saveUserData, importUserData } from './models/userData';

// To eventually export a JSON file of the exercises:
// import { exercisesList } from './models/exercisesList';
// console.log(exercisesList);

// The state = {season, userData, pastData};
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
// TODO: Start daily plan button (which basically is the same as clicking on the active day cell)
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
$('.app-container').on('click', '.btn--edit', e => {
  const day = e.target.id.slice(8)
  initEditorData(state.season[day]);
  dayEditorView(state.season[day]);
});


// DAY PLAN EDITOR UI CONTROLLER
// Change the phase based on the value of the selection menu
$('.app-container').on('change', '#edit__phase__inputs', e => {
  storeEditorPhase(e.target.value);
});
// Click OK to set the phase
$('.app-container').on('click', '.btn-ok', () => {
  displayPhaseTitle();
  displayExerSelection();
  addExerciseView();
});
// Change the exercise based on the value of the selection menu
$('.app-container').on('change', '#edit__exer__inputs', e => {
  selectEditorExer(e.target.value);
 });
// Select exercise and press add to add phase exercise
$('.app-container').on('click', '.btn-add', () => {
  addExercise();
  displayExerSelection();
});
// Change the secondary exercise based on the value of the selection menu
$('.app-container').on('change', '#edit__secExer__inputs', e => {
  selectEditorSecExer(e.target.value);
 });
// Select sec exercise and press add to add secondary(optional, add-on, etc) exercise
$('.app-container').on('click', '.btn-add--sec', () => {
  addSecExercise();
  displayExerSelection();
});
// Click on the X next to an exercise to delete it
$('.app-container').on('click', '.delete-btn', e => {
  const exer = e.target.id.slice(7);
  deleteExercise(exer);
  displayExerSelection();
});
// Click save to update and save season data
$('.app-container').on('click', '.btn--save', e => {
  const day = e.target.id.slice(9);
  saveDayPlan(state.season[day]);
  saveUserData(state);
  accountView(state, 'user');
  dayPlanView(state.season[day]);
});
// Click cancel to go back to day plan view
$('.app-container').on('click', '.btn--cancel', e => {
  const day = e.target.id.slice(11);
  $('.modal-container').remove();
  dayPlanView(state.season[day]);
});
