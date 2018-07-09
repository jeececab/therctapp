import style from '../scss/main.scss';
import { formView } from './views/formView';
import { submitForm } from './models/submitForm';
import { accountView } from './views/accountView';
import { templatesView } from './views/startNewSeasonView';
import { newSeasonView } from './views/seasonView';
import { instructionsView } from './views/instructionsView';
import { planTemplate } from './models/planTemplate';
import { setStartDate, mapDates } from './models/mapDates';
import { dayPlanView } from './views/dayPlanView';
import { exerciseView } from './views/exerciseView';
import { dayEditorView, displayPhaseTitle, exerSelectionView, displayExerSelection } from './views/dayEditorView';
import { initEditorData, storeEditorPhase, selectEditorExer, selectEditorSecExer, addExercise, addSecExercise, deleteExercise, saveDayPlan 
} from './models/dayEditor';
import { saveUserData, importUserData } from './models/userData';

// The state = {season, userData, pastData};
export let state;

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
$('body').on('click', '.logOut', () => {
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
// Change starting date input to select starting date
$('.app-container').on('change', '#datepicker', e => {
  setStartDate(e);
});
// Click ok to select the starting date of the template and move on
$('.app-container').on('click', '#btnStartDateOk', e => {
  templatesView();
});

// Select a seasonal plan template (novice, experienced, trad or boulder)
$('.app-container').on('click', '.plan-templates__btn', e => {
  const type = e.target.id.split('-')[0];
  state.season = planTemplate(type);
  mapDates(state.season);
  newSeasonView(type, state.season);
});
// Click "next" to choose the plan and move to account UI
$('.app-container').on('click', '.startNewSeasonNext', () => {
  saveUserData(state);
  accountView(state, 'user');
  instructionsView();
});


// SEASON UI CONTROLLER
// View, edit and start day plan
$('.app-container').on('click', '.cell', e => {
  let day;
  if (e.target.id) {
    day = e.target.id.slice(4);
  } else {
    const btn = e.target.closest('.cell');
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
$('.app-container').on('click', '.exercise__header', e => {
  const id = $(e.target).parents('div')[1].id;
  exerciseView(id, /*exerData*/);
});
// Click on edit to edit the day plan
$('.app-container').on('click', '.btnEdit', e => {
  const day = e.target.id.slice(8)
  initEditorData(state.season[day]);
  dayEditorView(state.season[day]);
});


// DAY PLAN EDITOR UI CONTROLLER
// Change the phase based on the value of the selection menu
$('.app-container').on('change', '#edit-day__phase-inputs', e => {
  storeEditorPhase(e.target.value);
});
// Click OK to set the phase
$('.app-container').on('click', '#btnPhaseOk', () => {
  displayPhaseTitle();
  displayExerSelection();
  exerSelectionView();
});
// Change the exercise based on the value of the selection menu
$('.app-container').on('change', '#edit-day__exer-inputs', e => {
  selectEditorExer(e.target.value);
 });
// Select exercise and press add to add phase exercise
$('.app-container').on('click', '.btnAddExer', () => {
  addExercise();
  displayExerSelection();
});
// Change the secondary exercise based on the value of the selection menu
$('.app-container').on('change', '#edit-day__secExer-inputs', e => {
  selectEditorSecExer(e.target.value);
 });
// Select sec exercise and press add to add secondary(optional, add-on, etc) exercise
$('.app-container').on('click', '.btnAddSecExer', () => {
  addSecExercise();
  displayExerSelection();
});
// Click on the (remove) link next to an exercise to delete it
$('.app-container').on('click', '.edit-day__delete-exer', e => {
  const exer = e.target.id.slice(7);
  deleteExercise(exer);
  displayExerSelection();
});
// Click "save" to update and save season data
$('.app-container').on('click', '.btnSaveDay', e => {
  const day = e.target.id.slice(9);
  saveDayPlan(state.season[day]);
  saveUserData(state);
  accountView(state, 'user');
  dayPlanView(state.season[day]);
});
// Click "cancel" to go back to day plan view
$('.app-container').on('click', '.btnCancelDay', e => {
  const day = e.target.id.slice(11);
  $('.modal-container').remove();
  dayPlanView(state.season[day]);
});
