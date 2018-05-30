import * as seasonPlan from '../models/seasonPlan';

export const clearSeason = () => {
  document.querySelector('.cells-wrapper').innerHTML = '';
};

export const seasonView = traineeLevel => {
  const season = traineeLevel;
  const cellsWrapper = document.querySelector(`.cells-wrapper`);
  
  cellsWrapper.insertAdjacentHTML('beforeEnd', `
    <div class="cell rest-cell"></div>
    <div class="cell rest-cell"></div>
    <div class="cell rest-cell"></div>
    <div class="cell rest-cell"></div>
    <div class="cell rest-cell"></div>
    <div class="cell rest-cell"></div>
  `);

  for (let i = 0; i <= 118; i++) {
    cellsWrapper.insertAdjacentHTML('beforeEnd', `
      <div class="cell day-${i} ${season[i].phase}-cell"></div>
    `);
  };
};