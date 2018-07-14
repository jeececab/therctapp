import { clearDayPlanContent, formatPhaseTitle } from './dayPlanView';
import { editorData } from '../models/dayEditor';
import { getExerciseList, formatExerName } from '../models/exercisesList';

export const dayEditorView = day => {

  clearDayPlanContent();

  $('.day-plan__content').append(`

    <div class="edit-day flex-align">

      <div class="edit-day__phase grid grid--2-col">
        <label for="edit-day__phase-inputs"><h3 class="edit-day__choose-title">Choose phase: </h3></label>
        <div>
          <select id="edit-day__phase-inputs">
            <option value="base">Base-Fitness</option>
            <option value="strength">Strength</option>
            <option value="power">Power</option>
            <option value="endur">Power-Endurance</option>
            <option value="perf">Performance</option>
            <option value="rest">Rest</option>
          </select>
          <button id="btnPhaseOk" class="btn btn--primary btn--small-p">Ok</button>
        </div>
      </div>

      <div class="edit-day__exer grid grid--2-col"></div>

      <div class="edit-day__exer-sel">
        <ul class="edit-day__exer-list"></ul>
      </div>

      <div class="edit-day__btns">
        <button id="btn-save-${day.day}" class="btnSaveDay btn btn--tertiary">Save</button>
        <button id="btn-cancel-${day.day}" class="btnCancelDay btn btn--tertiary">Cancel</button>
      </div>

    </div>
  `);

  // Display day data if there is any
  $('#edit-day__phase-inputs').val(day.phase);
};

export const displayPhaseTitle = () => {
  $('.edit-day__phase').remove();
  $('.edit h4').remove();
  $('.edit').prepend(`
    <h4>${formatPhaseTitle(editorData.phase)}</h4>
  `);
};

export const displaySelectedExer = () => {
  $('.edit-day__exer-list').empty();
  editorData.exercisesList.forEach(el => {
    $('.edit-day__exer-list').append(`
      <li>${formatExerName(el)} <span id="delete-${el}" class="edit-day__delete-exer">(remove)</span></li>
    `);
  });
};

export const exerOptionsView = () => {
  $('.edit-day__exer').empty();
  if (editorData.phase !== 'rest') {
    $('.edit-day__exer').append(`
      <label for="edit-day__exer-inputs"><h3>Phase exercise: </h3></label>
      <div>
        <select id="edit-day__exer-inputs" class="edit-day__select">
        </select>
        <button class="btnAddExer btn btn--primary btn--small-p">Add</button>
      </div>
    `);
  };
  $('.edit-day__exer').append(`
    <label for="edit-day__secExer-inputs"><h3>Other exercise: </h3></label>
    <div>
      <select id="edit-day__secExer-inputs" class="edit-day__select">
      </select>
      <button class="btnAddSecExer btn btn--primary btn--small-p">Add</button>
    </div>
  `);
  getExerciseList(editorData.phase).forEach(el => {
    if (el.type.includes(`${editorData.phase}-p`)) {
      $('#edit-day__exer-inputs').append(`
        <option value="${el.id}" title="${el.directives}">${el.title}</option>
      `);
    } else if (el.type.includes(`${editorData.phase}-s`)) {
      $('#edit-day__secExer-inputs').append(`
        <option value="${el.id}" title="${el.directives}">${el.title}</option>
      `);
    };
  });
};

