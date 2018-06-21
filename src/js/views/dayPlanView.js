import { modal } from './base';
import { getExercise } from '../models/exercisesList';

export const dayPlanView = day => {
  if (day) {
    // Display dayPlan modal
    $('.app-container').append(`
      <div class="modal-container">
        <div class="day-plan modal animated fadeIn">
          <i class="modal__close-btn fa fa-times-circle"></i>
          <div class="day-plan__header modal__header"></div>
            <div class="day-plan__content modal-content">
              <div class="day-plan__exer-list"></div>
            </div>
        </div>
      </div>
    `);

    // 1 - Display day number
    $('.day-plan__header').append(`
        <h3>Training day ${day.day + 1}</h3>
    `);

    // 2 - Display phase type
    $('.day-plan__content').prepend(`
        <h4>${formatPhaseTitle(day.phase)}</h4>
    `);

    // 3 - Display exercises todo list
    if (day.exercises.length >= 1) {
      day.exercises.forEach(el => {
        const exer = getExercise(el.id);
        $('.day-plan__exer-list').append(`
          <button id="${exer.id}" class="btn btn--ex btn--ex-${exer.type}">${exer.title} <i class="exer-arrow fa fa-caret-right"></i></button>
        `);
      });
    };

    // 4 - Display secondary exercises todo list
    if (day.secExercises.length >= 1) {
      day.secExercises.forEach(el => {
        const exer = getExercise(el.id);
        $('.day-plan__exer-list').append(`
          <button id="${exer.id}" class="btn btn--sec-ex">${exer.title} <i class="exer-arrow fa fa-caret-right"></i></button>
        `);
      });
    };

    // 5 - Display Edit button
    $('.day-plan__content').append(`
        <button id="editDay-${day.day}" class="btn btn--secondary btn--edit">Edit</button>
    `);

    modal();
  };
};

export const formatPhaseTitle = phase => {
  if (phase === 'base') {
    return 'Base-Fitness Phase';
  } else if (phase === 'strength') {
    return 'Strength Phase';
  } else if (phase === 'power') {
    return 'Power Phase';
  } else if (phase === 'endur') {
    return 'Power-Endurance Phase';
  } else if (phase === 'perf') {
    return 'Performance Phase';
  } else if (phase === 'rest') {
    return 'Rest Phase';
  };
};

export const clearDayPlanContent = () => {
  $('.day-plan__content').empty();
};