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
          <button id="btnPhaseOk" class="btn-ok">Ok</button>
        </div>
      </div>

      <div class="edit__exer"></div>

      <div class="edit__exer__sel">
        <ul class="edit__exer__list"></ul>
      </div>

      <div class="edit-btns">
        <button id="btn-save-${day.day}" class="btn--save">Save</button>
        <button id="btn-cancel-${day.day}" class="btn--cancel">Cancel</button>
      </div>

    </div>
  `);

  // Display day data if there is any
  $('#edit__phase__inputs').val(day.phase);
};

export const displayPhaseTitle = () => {
  $('.edit__phase').remove();
  $('.edit h4').remove();
  $('.edit').prepend(`
    <h4>${formatPhaseTitle(editorData.phase)}</h4>
  `);
};

export const displayExerSelection = () => {
  $('.edit__exer__list').empty();
  editorData.exercisesList.forEach(el => {
    $('.edit__exer__list').append(`
      <li>${formatExerName(el)} <span id="delete-${el}" class="delete-btn">(remove)</span></li>
    `);
  });
};

export const exerSelectionView = () => {

  $('.edit__exer').empty();

  if (editorData.phase !== 'rest') {
    $('.edit__exer').append(`
      <label for="edit__exer__inputs">Phase exercise: </label>
      <div>
        <select id="edit__exer__inputs">
        </select>
        <button class="btn-add">Add</button>
      </div>
    `);
  };

  $('.edit__exer').append(`
    <label for="edit__secExer__inputs">Other exercise: </label>
    <div>
      <select id="edit__secExer__inputs">
      </select>
      <button class="btn-add--sec">Add</button>
    </div>
  `);

  getExerciseList(editorData.phase).forEach(el => {
    if (el.type.includes(`${editorData.phase}-p`)) {
      $('#edit__exer__inputs').append(`
        <option  value="${el.id}" title="${el.directives}">${el.title}</option>
      `);
    } else if (el.type.includes(`${editorData.phase}-s`)) {
      $('#edit__secExer__inputs').append(`
        <option value="${el.id}" title="${el.directives}">${el.title}</option>
      `);
    };
  });
};

