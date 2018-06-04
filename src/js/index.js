import style from '../scss/main.scss';
import { elements } from './views/base';
import { formView } from './views/formView';
import { submitForm } from './models/submitForm';
import { accountView } from './views/accountView';
import { seasonView, clearSeasonView } from './views/seasonView';
import { datesView } from './views/datesView';
import * as seasonPlan from './models/seasonPlan';
import * as exerciseList from './models/exercisesList';
import { userDataToJSON } from './models/saveUserData';


// The state will contain:
//  1 - The seasonPlan array
//  2 - The userData object
export const state = {};

// CONTROLLER
// A - Get started
elements.signUp.addEventListener('click', () => {
  formView();
});
  
// B - Log In
elements.logIn.addEventListener('click', () => {
  // Temporary fake user data to test stuff:
  state.userData = {
    userName: "jeececab",
    email: "jcseguincabana@gmail.com",
    password: "12345",
    confirmPassword: "12345"
  };

  accountView(state);
});

// C - Start new season
// elements.noviceTraining.addEventListener('click', e => {
//   state.season = seasonPlan.novice();
//   seasonView(state.season);
//   datesView();
// });

if (document.querySelector('.novice-btn')) {
  document.querySelector('.novice-btn').addEventListener('click', e => {
    console.log('test');
    // clearSeasonView();
    // state.season = seasonPlan.novice();
    // seasonView(state.season);
    // datesView();
    // console.log(state.season);
  });
};


function dynamicEvent(eventName, dynamicChildSelector, functionToExecute) {
  document.querySelector(elements.appContainer).addEventListener(eventName, function (event) {
    if (event.target.classList.contains(dynamicChildSelector)) {
      functionToExecute;
    };
  });
}



// TODO : Save user data:
// 1 - convert into JSON file
// userDataToJSON(newSeason);
// 2 - Post JSON file to server



// window.addEventListener('click', e => {
//   if (e.target.classList[1].includes('day-')) {
//     const nb = e.target.classList[1].slice(4);
//     if (isNaN(nb) === false ) {
//       console.log(nb);
//     };
//   };
// });



