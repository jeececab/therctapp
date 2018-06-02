import * as seasonPlan from '../models/seasonPlan';

export const clearSeasonView = () => {
  document.querySelector('.season__plan').innerHTML = '';
};

export const seasonView = newSeason => {
  const cellsWrapper = document.querySelector(`.season__plan`);
  cellsWrapper.insertAdjacentHTML('beforeEnd', `
    <div class="season__cell season__cell--empty"></div>
    <div class="season__cell season__cell--empty"></div>
    <div class="season__cell season__cell--empty"></div>
    <div class="season__cell season__cell--empty"></div>
    <div class="season__cell season__cell--empty"></div>
    <div class="season__cell season__cell--empty"></div>
  `);

  newSeason.forEach(el => {
    cellsWrapper.insertAdjacentHTML('beforeEnd', `
      <div class="season__cell day-${el.day} season__cell--${newSeason[el.day].phase}"></div>
    `);
    document.querySelector(`.day-${el.day}`).insertAdjacentHTML('beforeend', newSeason[el.day].displayed);
  });
};