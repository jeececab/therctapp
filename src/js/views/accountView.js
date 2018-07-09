
import { clearAppContainer } from './base';
import { startNewSeasonView } from './startNewSeasonView';
import { seasonView } from './seasonView';

export function accountView(state, userStatus) {

  clearAppContainer();

  // Greetings for newUser vs user
  if (userStatus === 'newUser') {
    $('.app-container').append(`
      <div class="greet-user container">
        <h1 class="greet-user__title">Welcome ${state.userData.userName}!</h1>
        <p>The Rock Climber's Training Manual program's basic framework is a 17-week season consisting of six training phases: base fitness, strength, power, power endurance, performance and rest. Phase and season length can be varied to meet the specific needs of each climber (see chapter 1). You can start by choosing one of the four basic templates. The program typically starts on a saturday to adjust the training plan with the week-ends, so if you work on regular week-ends, the starting date should ideally be the first of two days off in a row. Don't worry, you can modify and customize the templates to your needs and schedule later on.</p>
      </div>
    `);
  } else if (userStatus === 'user' && state.season ==='') {
    $('.app-container').append(`
      <div class="greet-user">
        <h1 class="greet-user__title">Welcome back ${state.userData.userName}!</h1>
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
      <div class="account container flex-align">
        <button class="btn btn--secondary btn--auto startDayTraining">Start daily training</button>
      </div>
    `);
    seasonView(state.season);
    switchLogBtn();
  };
};

// Switch Log In button to Log Out
const switchLogBtn = () => {
  $('body .btn--corner').remove();
  $('body').prepend(`
    <button class="btn btn--tertiary btn--corner logOut">Log out</button>
  `);
};