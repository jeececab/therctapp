
import { clearAppContainer } from './base';
import { startNewSeasonView } from './startNewSeasonView';
import { seasonView } from './seasonView';
import { datesView } from './datesView';

export function accountView(state, userStatus) {

  clearAppContainer();
  $('.app-container').append(`<div class="container"></div>`);
  
  // Greetings for newUser vs user
  if (userStatus === 'newUser') {
    $('.container').append(`
      <div class="greet-user">
        <h2 class="greet-user__title">Welcome ${state.userData.userName}!</h2>
        <p>The Rock Climber's Training Manual program's basic framework is a 17-week season consisting of six training phases: base fitness, strength, power, power endurance, performance and rest. Phase and season length can be varied to meet the specific needs of each climber (see chapter 1). You can start by choosing one of the four basic templates. The program typically starts on a saturday to adjust the training plan with the week-ends, so if you work on regular week-ends, the starting date should ideally be the first of two days off in a row. Don't worry, you can modify and customize the templates to your needs and schedule later on.</p>
      </div>
    `);
  } else if (userStatus === 'user' && state.season ==='') {
    $('.container').append(`
      <div class="greet-user">
        <h2 class="greet-user__title">Welcome back ${state.userData.userName}!</h2>
      </div>
    `);
  };

  // If the newUser or user doesn't have an ongoing season 
  if (state.season === '') {
    startNewSeasonView();
    switchLogBtn();
  };

  // If the user has an active ongoing season
  if (state.season !== '') {
    
    // TODO: Add "start daily training button"
    $('.app-container').append(`
      <button class="btn btn--secondary startDayTraining">Start daily training</button>
    `);
    seasonView(state.season);
    datesView(state.season);
    switchLogBtn();
  };
};

// Switch Log In button to Log Out
const switchLogBtn = () => {
  $('.navbar__menu__item--log').remove();
  $('.navbar li').append(`
    <button class="navbar__menu__item--log logOut">Log out</button>
  `);
};