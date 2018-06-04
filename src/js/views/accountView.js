
import { clearAppContainer } from './base';

export function accountView(state) {

  clearAppContainer();


// If new user
  $('.app-container').append(`
    <div class="container">

      <div class="new-user">
        <h2 class="new-user__title">Welcome ${state.userData.userName}!</h2>
        <p>The Rock Climber's Training Manual program's basic framework is a 17-week season consisting of six training phases: base fitness, strength, power, power endurance, performance and rest. Phase and season length can be varied to meet the specific needs of each climber (see chapter 1). You can start by choosing one of the four basic templates. Don't worry, you can modify and customize them to your needs later on.</p>
      </div>

      <div class="start-new-season">
        <h3 class="start-new-season__title">Choose a seasonal training plan</h3>
        <div class="plan-templates">
          <button class="novice-btn plan-templates__btn">Novice climber</button>
          <button class="experienced-btn plan-templates__btn">Experienced climber</button>
          <button class="trad-btn plan-templates__btn">Trad climber</button>
          <button class="boulder-btn plan-templates__btn">Bouldering climber</button>
        </div>
      </div>
    </div>
  `);

  $('.navbar__menu__item--log').remove();
  $('.navbar li').append(`
    <button class="navbar__menu__item--log logOut">Log out</button>
  `);

};