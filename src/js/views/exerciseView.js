import { exerIDtoObj } from '../models/exercisesList'
import { componentIDtoObj } from '../models/exerciseComponents';

export const exerciseView = (id, exerData) => {
  $(`#${id} > .exercise__content`).toggle('fast');
  $(`#${id} i`).toggleClass('exercise__arrow--down');
};

export const exercisesTodosView = day => {
  day.exercises.forEach(el => {
    
    const exercise = exerIDtoObj(el.id);
    const exerciseNb = day.exercises.indexOf(el);
    const exerciseID = `${exerciseNb}-${exercise.id}`

    $('.day-plan__exer-list').append(`
      <div id="${exerciseID}" class="exercise">

        <div class="exercise__header">
          <h5>${exercise.title}</h5>
          <i class="exercise__arrow fa fa-caret-right"></i>
        </div>

        <div class="exercise__content">
          <div class="exercise__components"></div>
          <p>${exercise.directives}</p>
        </div>

      </div>
    `);

    // Changes style of phase exercise (vs secondary one)
    exercise.type.forEach(el => {
      const phase = el.split('-')[0];
      const type = el.split('-')[1];
      if (type === 'p') {
        $('.exercise__header').addClass(`exercise__header-${phase}`);
      };
    });

    // Load exercises components
    exercise.components.forEach(el => {
      const component = componentIDtoObj(el);
      $(`#${exerciseID} .exercise__components`).append(`${component.UIhtml(day, exerciseID)}`);
      component.setupHandlers(day, exerciseID);
    });

  });
};

