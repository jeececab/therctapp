import style from '../scss/main.scss';
import { seasonView, clearSeasonView } from './views/seasonView';
import { datesView } from './views/datesView';
import * as seasonPlan from './models/seasonPlan';
import * as exerciseList from './models/exercisesList';
import { userDataToJSON } from './models/saveUserData';
import { submitForm } from './models/signupForm';


let newSeason;

// Testing exercises objects
// console.log(exerciseList.arc);
// console.log(exerciseList.outdoorMileage);


// CONTROLLER
if (document.querySelector('.novice-btn')) {
  document.querySelector('.novice-btn').addEventListener('click', e => {
    clearSeasonView();
    newSeason = seasonPlan.novice();
    seasonView(newSeason);
    datesView();
    console.log(newSeason);
  });
};

if (document.querySelector('.experienced-btn')) {
  document.querySelector('.experienced-btn').addEventListener('click', e => {
    clearSeasonView();
    newSeason = seasonPlan.experienced();
    seasonView(newSeason);
    datesView();
    console.log(newSeason);
  });
};

// Listen for form submit
if (document.getElementById('signupForm')) {
  document.getElementById('signupForm').addEventListener('submit', submitForm);
};


// TODO : Save user data:
// 1 - convert into JSON file
userDataToJSON(newSeason);
// 2 - Post JSON file to server



// window.addEventListener('click', e => {
//   if (e.target.classList[1].includes('day-')) {
//     const nb = e.target.classList[1].slice(4);
//     if (isNaN(nb) === false ) {
//       console.log(nb);
//     };
//   };
// });



