import { modal } from './base';

export const dayPlanView = day => {
  $('.app-container').append(`
    <div class="modal-container">
      <div class="day-plan modal animated bounceInDown">
        <div class="day-plan__header modal__header">
          <h3>Training day ${day.day + 1}</h3>
        </div>
        <div class="day-plan__ex-list modal__content container">
          <button class="btn btn--secondary btn--gray addExercise"> - Add Exercise - </button>
        </div>
      </div>
    </div>
  `);

  console.log(day);

  modal();
};


/*
<button class="btn btn--exercise">Outdoor Mileage</button>
<button class="btn btn--exercise">Skill Acquisition</button>
<button class="btn btn--add-exercise btn--gray"> - Add Exercise - </button>
*/
