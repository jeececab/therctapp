import { modal } from './base';
import { exercisesTodosView } from './exerciseView';

export const dayPlanView = day => {
  if (day) {
    // Display dayPlan modal
    $('.app-container').append(`
      <div class="modal-container">
        <div class="day-plan modal animated fadeIn">
        
          <i class="modal__close-btn fa fa-times-circle"></i>

          <div class="day-plan__header modal__header">
          </div>

          <div class="day-plan__content modal-content">
            <div class="day-plan__exer-list">
            </div>
          </div>
        </div>
      </div>
    `);

    // 1 - Display day number
    $('.day-plan__header').append(`
        <h3>${formatDate(day.date)}</h3>
    `);

    // 2 - Display phase type
    $('.day-plan__content').prepend(`
        <h4>${formatPhaseTitle(day.phase)}</h4>
    `);

    // 3 - Display exercises todo list
    if (day.exercises.length >= 1) {
      exercisesTodosView(day);
    };

    // 4 - Display Edit button
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

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const formatDate = array => {
  const date = `${months[array[1]]} ${array[2]}`;
  return date
};