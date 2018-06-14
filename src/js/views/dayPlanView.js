import { modal } from './base';
import { getExercise } from '../models/exercisesList';

export const dayPlanView = day => {
  if (day) {
    // Display dayPlan modal
    $('.app-container').append(`
      <div class="modal-container">
        <div class="day-plan modal animated bounceInDown">
          <i class="modal__close-btn fa fa-times-circle"></i>
          <div class="day-plan__header modal__header"></div>
          <div class="day-plan__content">
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
    // TODO: btn--ex-${el.type} dans CSS pour changer les couleurs des boutons selon le type
    day.exercises.forEach(el => {
      const exer = getExercise(el.id);
      $('.day-plan__exer-list').append(`
        <button id="${exer.id}" class="btn btn--ex btn--ex-${exer.type}">${exer.title} <i class="exer-arrow fa fa-caret-right"></i></button>
      `);
    });

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

/*

import {
  exercisesList, 
  baseExercises, 
  strengthExercises, 
  powerExercises, 
  endurExercises, 
  perfExercises, 
  aeroExercises,
  crossExercises,
  skillExercises 
} from '../models/exercisesList';

export const dayEditorView = el => {

  // temp for json file bug
  el.exercises = [];

  $('.app-container').append(`
    <div class="modal-container">
      <div class="day-editor modal animated bounceInDown">

        <div class="day-editor__header modal__header">
          <h3>Training day ${el.day + 1}</h3>
        </div>

        <div class="day-editor__content modal__content container">

          <div class="day-editor__ex-list">
            ${el.exercises}
          </div>

          <div class="add-exercise">
            <button class="btn btn--secondary btn--gray addExercise">Add Exercise <i class="fa fa-caret-right"></i></button>
            <div class="add-exercise__list">
              <button class="btn base-b" name="base">Base Fitness <i class="base-i fa fa-caret-right"></i></button>
              <div class="base-l add-exercise__sub-list"></div>
              <button class="btn strength-b" name="strength">Strength <i class="strength-i fa fa-caret-right"></i></button>
              <div class="strength-l add-exercise__sub-list"></div>
              <button class="btn power-b" name="power">Power <i class="power-i fa fa-caret-right"></i></button>
              <div class="power-l add-exercise__sub-list"></div>
              <button class="btn endur-b" name="endur">Power-Endurance <i class="endur-i fa fa-caret-right"></i></button>
              <div class="endur-l add-exercise__sub-list"></div>
              <button class="btn perf-b" name="perf">Performance <i class="perf-i fa fa-caret-right"></i></button>
              <div class="perf-l add-exercise__sub-list"></div>
              <button class="btn aero-b" name="aero">Aerobic Exercise <i class="aero-i fa fa-caret-right"></i></button>
              <div class="aero-l add-exercise__sub-list"></div>
              <button class="btn cross-b" name="cross">Cross-Training <i class="cross-i fa fa-caret-right"></i></button>
              <div class="cross-l add-exercise__sub-list"></div>
              <button class="btn skill-b" name="skill">Skill Acquisition <i class="skill-i fa fa-caret-right"></i></button>
              <div class="skill-l add-exercise__sub-list"></div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  `);

  const updateDayEditorView = () => {
    $('.day-editor__ex-list').empty();
    let i = 0;
    el.exercises.forEach(exercise => {
      if (exercise === exercisesList[i].id) {
        $('.day-editor__ex-list').append(`
          <div class="day-editor__ex-list__item">${exercisesList[i].name}</div>
        `)
      };
      i++;
    });
  };

  // Click on the add exercise drop-down menu
  $('.addExercise').click(() => {
    $('.add-exercise__list').toggleClass('show');
    $('.addExercise i').toggleClass('rotate');
  });


  // Click on the exercise type drop-down menu
  $('.add-exercise__list button').click(e => {
    const type = e.target.name;
    $(`.${type}-l`).toggleClass('show');
    $(`.${type}-i`).toggleClass('rotate');
    viewExercisesNames(type);
  });

  // Click on the exercise button
  $('.add-exercise__sub-list').click(e => {
    const arr = e.target.id.split('-');
    const type = arr[0];
    const nb = arr[1];
    getCurrentExercList(type);
    el.exercises.push(curExercList[nb].id);

    updateDayEditorView();
    
    $('.add-exercise__list').removeClass('show');
    $(`.addExercise i`).toggleClass('rotate');
    $(`.${type}-i`).toggleClass('rotate');
    $('.add-exercise__sub-list').empty();
  });

  modal();
};

let curExercList;

const getCurrentExercList = type => {
  if (type === 'base') {
    curExercList = baseExercises;
  } else if (type === 'strength') {
    curExercList = strengthExercises;
  } else if (type === 'power') {
    curExercList = powerExercises;
  } else if (type === 'endur') {
    curExercList = endurExercises;
  } else if (type === 'perf') {
    curExercList = perfExercises;
  } else if (type === 'aero') {
    curExercList = aeroExercises;
  } else if (type === 'cross') {
    curExercList = crossExercises;
  } else if (type === 'skill') {
    curExercList = skillExercises;
  };
};

const viewExercisesNames = type => {
  getCurrentExercList(type);
  if ($(`.${type}-l`).is(':empty')) {
    let i = 0;
    curExercList.forEach(el => {
      $(`.${type}-l`).append(`<button id="${type}-${i}" class="btn">${el.name}</button>`);
      i++;
    });
  } else {
    $(`.${type}-l`).empty();
  };
};

*/