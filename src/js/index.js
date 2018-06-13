import style from '../scss/main.scss';
import { formView } from './views/formView';
import { submitForm } from './models/submitForm';
import { accountView } from './views/accountView';
import { newSeasonView, seasonView } from './views/seasonView';
import { instructionsView } from './views/instructionsView';
import { planTemplate } from './models/planTemplate';
import { mapDates } from './models/mapDates';
import { dayPlanView } from './views/dayPlanView';
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

// F - View, edit and start day plan
// f.1 - Click on a cell to view a day plan
$('.app-container').on('click', '.season__cell', e => {
  let day;
  if (e.target.classList[1]) {
    day = e.target.classList[1].slice(4);
  } else {
    const btn = e.target.closest('.season__cell');
    day = btn.classList[1].slice(4);
  };
  dayPlanView(state.season[day]);
});

// f.2
// 


// G - Start daily training

// H - Start new season
  // archiveSeason();
  // saveUserData();
  // state.season = '';
  // accountView(state, 'user');





