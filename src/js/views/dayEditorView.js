import { clearDayPlanContent, formatPhaseTitle } from './dayPlanView';
import { editorData } from '../models/dayEditor';
import { getExerciseList, formatExerName } from '../models/exercisesList';

export const dayEditorView = day => {

  clearDayPlanContent();

  $('.day-plan__content').append(`

    <div class="edit">

      <div class="edit__phase">
        <label for="edit__phase__inputs">Choose phase: </label>
        <div>
          <select id="edit__phase__inputs">
            <option value="base">Base-Fitness</option>
            <option value="strength">Strength</option>
            <option value="power">Power</option>
            <option value="endur">Power-Endurance</option>
            <option value="perf">Performance</option>
            <option value="rest">Rest</option>
          </select>
          <button class="btn-ok">Ok</button>
        </div>
      </div>

      <div class="edit__exer"></div>

      <div class="edit__exer__sel">
        <ul class="edit__exer__list"></ul>
        <ul class="edit__secExer__list"></ul>
      </div>

      <div class="edit-btns">
        <button id="btn-save-${day}" class="btn--save">Save</button>
        <button id="btn-cancel-${day}" class="btn--cancel">Cancel</button>
      </div>

    </div>
  `);
};

export const updateEditView = () => {
  $('.edit__phase').remove();
  $('.edit h4').remove();
  $('.edit').prepend(`
    <h4>${formatPhaseTitle(editorData.phase)}</h4>
  `);

  $('.edit__exer__list').empty();
  editorData.exercisesList.forEach(el => {
    $('.edit__exer__list').append(`
      <li>${formatExerName(el)} <span id="delete-${el}" class="delete-btn">(remove)</span></li>
    `);
  });

 
  $('.edit__secExer__list').empty();
  editorData.secExercisesList.forEach(el => {
    $('.edit__secExer__list').append(`
      <li>${formatExerName(el)} <span id="delete-${el}" class="delete-btn">(remove)</span></li>
    `);
  });
}

export const addExerciseView = () => {

  $('.edit__exer').empty();
  $('.edit__exer').append(`
    <label for="edit__exer__inputs">Phase exercise: </label>
    <div>
      <select id="edit__exer__inputs">
      </select>
      <button class="btn-add">Add</button>
    </div>
  `);

  getExerciseList(editorData.phase).forEach(el => {
    $('#edit__exer__inputs').append(`
      <option  value="${el.id}" title="${el.directives}">${el.title}</option>
    `);
  });

  if (editorData.phase === 'base') {
    displaySecExer();
    getExerciseList('base-sec').forEach(el => {
      $('#edit__secExer__inputs').append(`
        <option value="${el.id}" title="${el.directives}">${el.title}</option>
      `);
    });
  };

  if (editorData.phase === 'strength') {
    displaySecExer();
    getExerciseList('strength-sec').forEach(el => {
      $('#edit__secExer__inputs').append(`
        <option value="${el.id}" title="${el.directives}">${el.title}</option>
      `);
    });
  };

  if (editorData.phase === 'power') {
    displaySecExer();
    getExerciseList('power-sec').forEach(el => {
      $('#edit__secExer__inputs').append(`
        <option value="${el.id}" title="${el.directives}">${el.title}</option>
      `);
    });
  };

};

const displaySecExer = () => {
  $('.edit__exer').append(`
    <label for="edit__secExer__inputs">Other exercise: </label>
    <div>
      <select id="edit__secExer__inputs">
      </select>
      <button class="btn-add--sec">Add</button>
    </div>
  `);
};