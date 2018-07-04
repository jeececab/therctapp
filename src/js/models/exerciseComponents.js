import { state } from '../index';
import { saveUserData } from './userData';

const routeAdder = {
  id: 'routeAdder',
  componentNb: 0,
  UIhtml: (day, exerciseID) => {
    let html = '';
    const exerDataArr = day.exercises[exerciseID.split('-')[0]].exerData;
    if (exerDataArr.length >= 1) {
      exerDataArr.forEach(el => {
        html += routeAdder.loggedRoute(el.id, el.compData[0], el.compData[1], el.compData[2], el.compData[3]);
      });
    };
    html += '<button class="routeAdder btn-add">Add route</button>';
    return html;
  },
  loggedRoute: (id, name = "", grade = "", status = "", notes = "") => {return `
    <div id="${id}" class="logged-route">
      <form class="loggedRouteForm">
        <div class="logged-route__inputs">
          <input type="text" name="route__name" class="route__name" placeholder="Route Name" value="${name}">
          <input type="text" name="route__grade" class="route__grade" placeholder="Grade" value="${grade}">
          <select class="route__status" name="route__status" value="${status}">
            <option value="Not tried yet">Not tried yet</option>
            <option value="Onsight">Onsight</option>
            <option value="Flash">Flash</option>
            <option value="Redpoint">Redpoint</option>
            <option value="Not sent yet">Not sent yet</option>
          </select>
        </div>
        <textarea class="route__notes" name="route__notes" placeholder="Notes">${notes}</textarea>
        <div class="logged-route__btns">
          <button type="submit" class="btn--save">Save modifications</button>
          <button class="btn--save btnDelete">Delete route</button>
        </div>
      </form>
    </div>
  `},
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

      console.log(day.exercises);
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

