import { datesView } from './datesView';
import { formatExerName, exerIDtoObj } from '../models/exercisesList';

const clearSeasonView = () => {
  if ($('.season')) {
    $('.season').remove();
  }
};

const disableCells = () => {
  $('.season__cell').addClass('season__cell--disable');
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
    display = `<p class="season__cell--primary">${phaseExer.title}</p>`;
  } else if (secExer) {
    display = `<p class="season__cell--secondary">${secExer.title}</p>`;
  } else {
    display = '';
  };
  return display;
}

export const seasonView = season => {
  clearSeasonView();
  $('.app-container').append(`
    <div class="season">
      
      <div class="season__weeks">
        <div class="season__cell season__weeks-col"></div>
        <div class="season__cell season__weeks-col">-</div>
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

  let weekNb = 1;

  season.forEach(el => {
    $('.season__plan').append(`
      <div id="day-${el.day}" class="season__cell season__cell--${season[el.day].phase} season__cell"></div>
    `);
    $(`#day-${el.day}`).append(cellDisplay(season[el.day]));

    // Adds a week in the left column for every 7 cells/days
    if (el.day % 7 === 0) {
      $('.season__weeks').append(`
        <div class="season__cell season__weeks-col">${weekNb}</div>
      `);
      weekNb++;
    };
  
  });

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