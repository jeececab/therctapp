import { datesView } from './datesView';
import { exerIDtoObj } from '../models/exercisesList';

const clearSeasonView = () => {
  if ($('.season')) {
    $('.season').remove();
  }
};

const disableCells = () => {
  $('.season__plan').addClass('cell--disable');
};

// Displays the first phase exercise title in the cell, else the first secExercise
const cellDisplay = day => {
  let display;
  const exerList = [];
  day.exercises.forEach(el => {
    exerList.push(exerIDtoObj(el.id));
  });
  const phaseExer = exerList.find(el => {
    return el.type.includes(`${day.phase}-p`);
  });
  const secExer = exerList.find(el => {
    return el.type.includes(`${day.phase}-s`);
  });
  if (phaseExer) {
    display = `<p class="cell__title cell__title--primary">${phaseExer.title}</p>`;
  } else if (secExer) {
    display = `<p class="cell__title">${secExer.title}</p>`;
  } else {
    display = '';
  };
  return display;
}

export const seasonView = season => {
  clearSeasonView();
  $('.app-container').append(`
    <div class="season grid">
      
      <div class="season__weeks grid">
        <div class="season__corner"></div>
      </div>

      <div>
        <div class="season__days grid">
          <div class="season__days__item flex-center">Sunday</div>
          <div class="season__days__item flex-center">Monday</div>
          <div class="season__days__item flex-center">Tuesday</div>
          <div class="season__days__item flex-center">Wednesday</div>
          <div class="season__days__item flex-center">Thursday</div>
          <div class="season__days__item flex-center">Friday</div>
          <div class="season__days__item flex-center">Saturday</div>
        </div>

        <div class="season__plan grid">
          
        </div>
      </div>
        
    </div>
  `);

  let nbOfEmptyCells = 0;
  season.forEach(el => {
    if (el.phase === 'empty') {
      nbOfEmptyCells++
    }
  });
  if (nbOfEmptyCells === 5 || nbOfEmptyCells === 6 ) {
    $('.season__weeks').append(`
      <div class="season__weeks__item flex-center">-</div>
    `);
  };

  let weekNb = 1;

  season.forEach(el => {
    $('.season__plan').append(`
      <div id="day-${el.day}" class="cell cell--${season[el.day].phase} flex-center"></div>
    `);
    $(`#day-${el.day}`).append(cellDisplay(season[el.day]));

    // Adds a week in the left column for every 7 cells/days
    if (el.day % 7 === 0) {
      $('.season__weeks').append(`
        <div class="season__weeks__item flex-center">${weekNb}</div>
      `);
      weekNb++;
    };
  });

  if (nbOfEmptyCells === 5 || nbOfEmptyCells === 6 ) {
    $('.season__weeks div:last-child').remove();
  };

  datesView(season);
};


export const newSeasonView = (type, season) => {

  $('.plan-templates__btn').removeClass('plan-templates__btn--active');
  $(`#${type}-Btn`).addClass('plan-templates__btn--active');

  seasonView(season);
  disableCells();

  if ($('.startNewSeasonNext')) {
    $('.startNewSeasonNext').remove();
  };

  $('.start-new-season').append(`
    <button class="startNewSeasonNext btn btn--primary">Next »</button>
  `);
};