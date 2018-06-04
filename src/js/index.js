import style from '../scss/main.scss';
import { formView } from './views/formView';
import { submitForm } from './models/submitForm';
import { accountView } from './views/accountView';
import { seasonView, clearSeasonView, shrinkWeeks } from './views/seasonView';
import { planTemplate } from './models/planTemplate';
import { mapDates } from './models/mapDates';
import { datesView } from './views/datesView';

/*
import * as exerciseList from './models/exercisesList';
import { userDataToJSON } from './models/saveUserData';
*/


// The state will contain:
//  1 - The seasonPlan array
//  2 - The userData object
export const state = {};

// Uncomment to simulate a user:
state.userData = {
  userName: "jeececab",
  email: "jcseguincabana@gmail.com",
  password: "12345",
  confirmPassword: "12345"
};


// CONTROLLER
// A - Get started aka sign up
$('.signUp').click(() => {
  formView();
});

// B - Submit Form
$('.app-container').on('submit', '#signupForm', e => {
  submitForm(e);
  accountView(state);
});
  
// C - Log In
$('.logIn').click(() => {
  accountView(state);
});

// D - Log out
$('.navbar').on('click', '.logOut', () => {
  // Temporary fallback when log out
  window.location = 'http://localhost:8080/';
});

// E - Start new season
$('.app-container').on('click', '.plan-templates__btn', e => {
  const type = e.target.classList[0].replace('-btn', '');
  clearSeasonView();
  state.season = planTemplate(type);
  seasonView(state.season);
  if (type === 'boulder') {
    shrinkWeeks();
  }
  mapDates(state.season);
  datesView(state.season);
  $('.plan-templates__btn').removeClass('plan-templates__btn--active');
  $(`.${type}-btn`).addClass('plan-templates__btn--active');
});






// // TODO : Save user data:
// // 1 - convert into JSON file
// // userDataToJSON(newSeason);
// // 2 - Post JSON file to server



// // window.addEventListener('click', e => {
// //   if (e.target.classList[1].includes('day-')) {
// //     const nb = e.target.classList[1].slice(4);
// //     if (isNaN(nb) === false ) {
// //       console.log(nb);
// //     };
// //   };
// // });



