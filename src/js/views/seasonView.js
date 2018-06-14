import { datesView } from './datesView';

const clearSeasonView = () => {
  if ($('.season')) {
    $('.season').remove();
  }
};

export const disableCells = () => {
  $('.season__cell').addClass('season__cell--disable');
};

export const seasonView = season => {
  clearSeasonView();
  $('.app-container').append(`
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

  $('.season__plan').append(`
    <div class="season__cell season__cell--empty"></div>
    <div class="season__cell season__cell--empty"></div>
    <div class="season__cell season__cell--empty"></div>
    <div class="season__cell season__cell--empty"></div>
    <div class="season__cell season__cell--empty"></div>
    <div class="season__cell season__cell--empty"></div>
  `);

  season.forEach(el => {
    $('.season__plan').append(`
      <div id="day-${el.day}" class="season__cell season__cell--${season[el.day].phase} season__cell"></div>
    `);
    $(`#day-${el.day}`).append(season[el.day].displayed);
  });

  if (season.length <= 93) {
    $('.season__weeks div:last-child').remove();
    $('.season__weeks div:last-child').remove();
    $('.season__weeks div:last-child').remove();
    $('.season__weeks div:last-child').remove();
  };

  datesView(season);
};



export const newSeasonView = (type, season) => {

  $('.plan-templates__btn').removeClass('plan-templates__btn--active');
  $(`.${type}-btn`).addClass('plan-templates__btn--active');

  seasonView(season);
  datesView(season);
  disableCells();

  if ($('.start-new-season__btn--next')) {
    $('.start-new-season__btn--next').remove();
  };
  $('.start-new-season').append(`
    <button class="start-new-season__btn start-new-season__btn--next">Next »</button>
  `);
};