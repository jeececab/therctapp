
import { elements, updateElements, clearAppContainer } from './base';
import { seasonView } from './seasonView';
import { datesView } from './datesView';
import * as seasonPlan from '../models/seasonPlan';

export function accountView(state) {
  clearAppContainer();

  elements.appContainer.insertAdjacentHTML('beforeend', `
    <h2>Welcome ${state.userData.userName}!</h2>
    <button class="btn novice-btn">Novice Trainee</button>
    <button class="btn experienced-btn">Experienced Trainee</button>
  `),

  updateElements();

};