import style from '../scss/main.scss';
import { formView } from './views/formView';
import { submitForm } from './models/submitForm';
import { accountView } from './views/accountView';
import { newSeasonView } from './views/seasonView';
import { instructionsView } from './views/instructionsView';
import { planTemplate } from './models/planTemplate';
import { mapDates } from './models/mapDates';
import { dayEditorView } from './views/dayEditorView';
import { saveUserData, importUserData } from './models/userData';

//import * as exercise from './models/exercisesList';
//import { addExercise } from './models/TrainingDay';


// The state = {season, userData};
let state;

// A - Get started aka sign up
$('.signUp').click(() => {
  formView();
});

// B - Submit Form
$('.app-container').on('submit', '#signupForm', e => {
  state = {userData:'', season:''};
  submitForm(e, state);
  saveUserData(state);
  accountView(state, 'newUser');
});
  
// C - Log In
$('.logIn').click(() => {
  // Load user data from database 
  state = importUserData();
  accountView(state, 'user');
});

// D - Log out
$('.navbar').on('click', '.logOut', () => {
  // Temporary fallback when log out
  window.location = 'http://localhost:8080/';
});

// E - Start new season
// e.1 - Select a seasonal plan template (novice, experienced, trad or boulder)
$('.app-container').on('click', '.plan-templates__btn', e => {
  const type = e.target.classList[0].replace('-btn', '');
  state.season = planTemplate(type);
  mapDates(state.season);
  newSeasonView(type, state.season);
});

// e.2 - Click "next" to choose the plan and move to account window
$('.app-container').on('click', '.start-new-season__btn--next', () => {
  saveUserData(state);
  accountView(state, 'user');
  instructionsView();
});

// F - Click on a cell to edit day plan
$('.app-container').on('click', '.season__cell', e => {
  let el;
  if (e.target.classList[1]) {
    el = e.target.classList[1].slice(4);
  } else {
    const btn = e.target.closest('.season__cell');
    el = btn.classList[1].slice(4);
  };
  dayEditorView(state.season[el]);
});

// G - Start daily training

// H - Start new season
  // archiveSeason();
  // saveUserData();
  // state.season = '';
  // accountView(state, 'user');





