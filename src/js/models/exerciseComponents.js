import { state } from '../index';
import { saveUserData } from './userData';

const routeAdder = {
  id: 'routeAdder',
  componentNb: 0,
  loggedRoute: id => {return `
    <div id="${id}" class="logged-route">
      <form class="loggedRouteForm">
        <div class="logged-route__inputs grid">
          <input type="text" name="route__name" class="route__name" placeholder="Route Name">
          <input type="text" name="route__grade" class="route__grade" placeholder="Grade">
          <select class="route__status" name="route__status">
            <option value="Not tried yet">Not tried yet</option>
            <option value="Onsight">Onsight</option>
            <option value="Flash">Flash</option>
            <option value="Redpoint">Redpoint</option>
            <option value="Not sent yet">Not sent yet</option>
          </select>
        </div>
        <textarea class="route__notes" name="route__notes" placeholder="Notes"></textarea>
        <div class="logged-route__btns grid">
          <button type="submit" class="btn btn--quat">Save modifications</button>
          <button class="btn btn--quat btnDelete">Delete route</button>
        </div>
      </form>
    </div>
  `},
  UIhtml: (day, exerciseID) => {
    let html = '';
    const exerDataArr = day.exercises[exerciseID.split('-')[0]].exerData;
    if (exerDataArr.length >= 1) {
      exerDataArr.forEach(el => {
        html += routeAdder.loggedRoute(el.id);
      });
    };
    html += '<button class="routeAdder btn btn--secondary">Add route</button>';
    return html;
  },
  mapComponentData: (day, exerciseID) => {
    const exerDataArr = day.exercises[exerciseID.split('-')[0]].exerData;
    if (exerDataArr.length >= 1) {
      exerDataArr.forEach(el => {
        const route = el.compData[0];
        const grade = el.compData[1];
        const status = el.compData[2];
        const notes = el.compData[3];
        $(`#${el.id} .route__name`).val(route);
        $(`#${el.id} .route__grade`).val(grade);
        $(`#${el.id} .route__status`).val(status);
        $(`#${el.id} .route__notes`).val(notes);
      });
    };
  },
  setupHandlers: (day, exerciseID) => {
    routeAdder.componentNb = day.exercises[exerciseID.split('-')[0]].exerData.length;
    const exerciseNb = exerciseID.split('-')[0];
    // 1 - Add a route and save it (default)
    $(`#${exerciseID} .routeAdder`).click(() => {
      $(`#${exerciseID} .routeAdder`).before(routeAdder.loggedRoute(`${routeAdder.componentNb}-loggedRoute`));
      day.exercises[exerciseNb].exerData.push({
        id: `${routeAdder.componentNb}-loggedRoute`,
        compData: []
      });
      routeAdder.componentNb++;
      saveUserData(state);
    });

    // 2 - Save to exerData 
    $(`#${exerciseID}`).on('submit', '.loggedRouteForm', e => {
      e.preventDefault();
      const route = e.target[0].value;
      const grade = e.target[1].value;
      const status = e.target[2].value;
      const notes = e.target[3].value;
      const componentID = e.target.parentNode.id;
      day.exercises[exerciseNb].exerData.forEach(el => {
        if (el.id === componentID) {
          el.compData = [route, grade, status, notes];
        };
      });
      saveUserData(state);
      alert('Modifications saved');
    });

    // 3 - Delete route
    $(`#${exerciseID}`).on('click', '.btnDelete', e => {
      e.preventDefault();
      const componentID = e.target.parentNode.parentNode.parentNode.id;
      day.exercises[exerciseNb].exerData.forEach(el => {
        if (el.id === componentID) {
          const index = day.exercises[exerciseNb].exerData.indexOf(el);
          day.exercises[exerciseNb].exerData.splice(index, 1);
          $(`#${exerciseID} #${componentID}`).remove();
        };
      });
    });
  },
};

const componentsList = [routeAdder];

export const componentIDtoObj = id => {
  let component;
  componentsList.forEach(el => {
    if (el.id === id) {
      component = el;
    };
  });
  return component;
};

