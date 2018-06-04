import * as seasonPlan from '../models/seasonPlan';
import { elements, updateElements } from './base';

export const clearSeasonView = () => {
  document.querySelector('.season__plan').innerHTML = '';
};

export const seasonView = newSeason => {
  elements.appContainer.insertAdjacentHTML('beforeend', `
    <div class="season">
      
      <div class="season__weeks">
        <div class="season__cell season__weeks-col"></div>
        <div class="season__cell season__weeks-col">-</div>
        <div class="season__cell season__weeks-col">1</div>
        <div class="season__cell season__weeks-col">2</div>
        <div class="season__cell season__weeks-col">3</div>
        <div class="season__cell season__weeks-col">4</div>
        <div class="season__cell season__weeks-col">5</div>
        <div class="season__cell season__weeks-col">6</div>
        <div class="season__cell season__weeks-col">7</div>
        <div class="season__cell season__weeks-col">8</div>
        <div class="season__cell season__weeks-col">9</div>
        <div class="season__cell season__weeks-col">10</div>
        <div class="season__cell season__weeks-col">11</div>
        <div class="season__cell season__weeks-col">12</div>
        <div class="season__cell season__weeks-col">13</div>
        <div class="season__cell season__weeks-col">14</div>
        <div class="season__cell season__weeks-col">15</div>
        <div class="season__cell season__weeks-col">16</div>
        <div class="season__cell season__weeks-col">17</div>
      </div>

      <div>
        <div class="season__days">
          <div class="season__cell season__days-row">Sunday</div>
          <div class="season__cell season__days-row">Monday</div>
          <div class="season__cell season__days-row">Tuesday</div>
          <div class="season__cell season__days-row">Wednesday</div>
          <div class="season__cell season__days-row">Thursday</div>
          <div class="season__cell season__days-row">Friday</div>
          <div class="season__cell season__days-row">Saturday</div>
        </div>

        <div class="season__plan">
          
        </div>
      </div>
        
    </div>
  `);

  updateElements();

  elements.cellsWrapper.insertAdjacentHTML('beforeEnd', `
    <div class="season__cell season__cell--empty"></div>
    <div class="season__cell season__cell--empty"></div>
    <div class="season__cell season__cell--empty"></div>
    <div class="season__cell season__cell--empty"></div>
    <div class="season__cell season__cell--empty"></div>
    <div class="season__cell season__cell--empty"></div>
  `);

  newSeason.forEach(el => {
    elements.cellsWrapper.insertAdjacentHTML('beforeEnd', `
      <div class="season__cell day-${el.day} season__cell--${newSeason[el.day].phase}"></div>
    `);
    document.querySelector(`.day-${el.day}`).insertAdjacentHTML('beforeend', newSeason[el.day].displayed);
  });
};