import { exerIDtoObj } from '../models/exercisesList'
import { componentIDtoObj } from '../models/exerciseComponents';

export const exerciseView = (id) => {
  $(`#${id} .exercise__content`).toggle('fast');
  $(`#${id} .exercise__arrow`).toggleClass('arrow--down');
};

export const exercisesTodosView = day => {
  day.exercises.forEach(el => {
    const exercise = exerIDtoObj(el.id);
    const exerciseNb = day.exercises.indexOf(el);
    const exerciseID = `${exerciseNb}-${exercise.id}`
    $('.day-plan__exer-list').append(`
      <div id="${exerciseID}" class="exercise">
        <div class="exercise__header">
          <h3 class="exercise__title">${exercise.title}</h3>
          <div class="exercise__arrow arrow"></div>
        </div>
        <div class="exercise__content">
          <div class="exercise__components"></div>
          <p>${exercise.directives}</p>
        </div>
      </div>
    `);
    // Changes style of phase exercise (vs secondary one)
    exercise.type.forEach(el => {
      if (el === `${day.phase}-p`) {
        $(`#${exerciseID}`).addClass(`exercise__header-${day.phase}`);
      };
    });
    // Load exercises components
    exercise.components.forEach(el => {
      const component = componentIDtoObj(el);
      $(`#${exerciseID} .exercise__components`).append(`${component.UIhtml(day, exerciseID)}`);
      component.mapComponentData(day, exerciseID);
      component.setupHandlers(day, exerciseID);
    });
  });
};

