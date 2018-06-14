import { clearDayPlanContent, formatPhaseTitle } from './dayPlanView';
import { editorData } from '../models/dayEditor';
import { getExerciseList } from '../models/exercisesList';

export const dayEditorView = () => {

  clearDayPlanContent();

  $('.day-plan__content').append(`

    <div class="edit">

      <div class="edit__phase">
        <label for="edit__phase__inputs">Choose phase: </label>
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

      <div class="edit__exer"></div>

      <ul class="edit__exer__list"></ul>

      <div class="edit-btns">
        <button>Save</button>
        <button>Cancel</button>
      </div>

    </div>
  `);
};

export const updateEditView = () => {
  $('.edit__phase').empty();
  $('.edit__phase').append(`
    <h4>${formatPhaseTitle(editorData.phase)}</h4>
  `);
  $('.edit__exer__list').empty();
  editorData.exercisesList.forEach(el => {
    $('.edit__exer__list').append(`
      <li>${el}</li>
    `);
  });
}

export const addExerciseView = () => {

  $('.edit__exer').empty();
  $('.edit__exer').append(`
    <label for="edit__exer__inputs">Select Exercise: </label>
    <select id="edit__exer__inputs">
    </select>
    <button class="btn-add">Add</button>
  `);

  getExerciseList(editorData.phase).forEach(el => {
    $('#edit__exer__inputs').append(`
      <option value="${el.id}">${el.title}</option>
    `);
  });

};