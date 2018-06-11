
import { clearAppContainer } from './base';
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
        <p>The Rock Climber's Training Manual program's basic framework is a 17-week season consisting of six training phases: base fitness, strength, power, power endurance, performance and rest. Phase and season length can be varied to meet the specific needs of each climber (see chapter 1). You can start by choosing one of the four basic templates. Don't worry, you can modify and customize them to your needs later on.</p>
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
    $('.container').append(`
      <div class="start-new-season">
        <h3>Choose a seasonal training plan</h3>
        <div class="plan-templates">
          <button class="novice-btn start-new-season__btn plan-templates__btn">Novice climber</button>
          <button class="experienced-btn start-new-season__btn plan-templates__btn">Experienced climber</button>
          <button class="trad-btn start-new-season__btn plan-templates__btn">Trad climber</button>
          <button class="boulder-btn start-new-season__btn plan-templates__btn">Bouldering climber</button>
        </div>
      </div>
    `);

    $('.navbar__menu__item--log').remove();
    $('.navbar li').append(`
      <button class="navbar__menu__item--log logOut">Log out</button>
    `);
  };

  // If the user has an active ongoing season
  if (state.season !== '') {
    
    // TODO: Add "start daily training button"
    // TODO: view active day 
    $('.app-container').append(`
      <button class="btn btn--secondary startDayTraining">Start daily training</button>
    `);
    seasonView(state.season);
    datesView(state.season);
    $('.navbar__menu__item--log').remove();
    $('.navbar li').append(`
      <button class="navbar__menu__item--log logOut">Log out</button>
    `);
  };
};