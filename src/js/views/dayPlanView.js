import { modal } from './base';
import { exercisesTodosView } from './exerciseView';

export const dayPlanView = day => {
  if (day) {
    // Display dayPlan modal
    $('.app-container').append(`
      <div class="modal-container">

        <div class="day-plan modal flex-align animated fadeIn">
          <i class="modal__close-btn fa fa-times-circle"></i>
          <h1>${formatDate(day.date)}</h1>
          <h2 class="dayplan__h2">${formatPhaseTitle(day.phase)}</h2>

          <div class="day-plan__content modal-content">
            <div class="day-plan__exer-list"></div>
            <button id="editDay-${day.day}" class="btn btn--tertiary btnEdit">Edit</button>
          </div>

        </div>

      </div>
    `);

    // Display exercises todo list
    if (day.exercises.length >= 1) {
      exercisesTodosView(day);
    };

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
  } else if (phase === 'empty') {
    return ''
  };
};

export const clearDayPlanContent = () => {
  $('.day-plan__content').empty();
};

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const formatDate = array => {
  const date = `${months[array[1]]} ${array[2]}`;
  return date
};