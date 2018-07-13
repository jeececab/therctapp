import { currentUser } from '../index';
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
    html += '<button class="routeAdder btn btn--secondary btn--auto">Add route</button>';
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
      saveUserData(currentUser);
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
      saveUserData(currentUser);
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

const boulderAdder = {
  id: 'boulderAdder',
  componentNb: 0,
  loggedBoulder: id => {return `
    <div id="${id}" class="logged-boulder">
      <form class="loggedBoulderForm">
        <div class="logged-boulder__inputs grid">
          <input type="text" name="boulder__name" class="boulder__name" placeholder="Boulder Name">
          <input type="text" name="boulder__grade" class="boulder__grade" placeholder="Grade">
          <select class="boulder__status" name="boulder__status">
            <option value="Not tried yet">Not tried yet</option>
            <option value="Onsight">Onsight</option>
            <option value="Flash">Flash</option>
            <option value="Redpoint">Redpoint</option>
            <option value="Not sent yet">Not sent yet</option>
          </select>
        </div>
        <textarea class="boulder__notes" name="boulder__notes" placeholder="Notes"></textarea>
        <div class="logged-boulder__btns grid">
          <button type="submit" class="btn btn--quat">Save modifications</button>
          <button class="btn btn--quat btnDelete">Delete boulder</button>
        </div>
      </form>
    </div>
  `},
  UIhtml: (day, exerciseID) => {
    let html = '';
    const exerDataArr = day.exercises[exerciseID.split('-')[0]].exerData;
    if (exerDataArr.length >= 1) {
      exerDataArr.forEach(el => {
        html += routeAdder.loggedBoulder(el.id);
      });
    };
    html += '<button class="boulderAdder btn btn--secondary btn--auto">Add boulder</button>';
    return html;
  },
  mapComponentData: (day, exerciseID) => {
    const exerDataArr = day.exercises[exerciseID.split('-')[0]].exerData;
    if (exerDataArr.length >= 1) {
      exerDataArr.forEach(el => {
        const boulder = el.compData[0];
        const grade = el.compData[1];
        const status = el.compData[2];
        const notes = el.compData[3];
        $(`#${el.id} .boulder__name`).val(boulder);
        $(`#${el.id} .boulder__grade`).val(grade);
        $(`#${el.id} .boulder__status`).val(status);
        $(`#${el.id} .boulder__notes`).val(notes);
      });
    };
  },
  setupHandlers: (day, exerciseID) => {
    routeAdder.componentNb = day.exercises[exerciseID.split('-')[0]].exerData.length;
    const exerciseNb = exerciseID.split('-')[0];
    // 1 - Add a boulder and save it (default)
    $(`#${exerciseID} .boulderAdder`).click(() => {
      $(`#${exerciseID} .boulderAdder`).before(boulderAdder.loggedBoulder(`${boulderAdder.componentNb}-loggedBoulder`));
      day.exercises[exerciseNb].exerData.push({
        id: `${boulderAdder.componentNb}-loggedBoulder`,
        compData: []
      });
      boulderAdder.componentNb++;
      saveUserData(currentUser);
    });
    $(`#${exerciseID}`).on('submit', '.loggedBoulderForm', e => {
      e.preventDefault();
      const boulder = e.target[0].value;
      const grade = e.target[1].value;
      const status = e.target[2].value;
      const notes = e.target[3].value;
      const componentID = e.target.parentNode.id;
      day.exercises[exerciseNb].exerData.forEach(el => {
        if (el.id === componentID) {
          el.compData = [boulder, grade, status, notes];
        };
      });
      saveUserData(currentUser);
      alert('Modifications saved');
    });
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

const timer = {
  id: 'timer',
  componentNb: 0,
  UIhtml: (day, exerciseID) => {
    return `
      <div class="timer flex-center">
        <h2 class="timer__title">Timer</h2>
        <div class="set-timer grid">
          <div class="timer__minutes noselect">
            <div class="timer__select-top">
              <div id="minLeftTop" class="timer__select-arrow arrow-up"></div>
              <div id="minRightTop" class="timer__select-arrow arrow-up"></div>
            </div>
            <div id="timerMinDigit" class="timer__digits">00</div>
            <div class="timer__select-bottom">
              <div id="minLeftBot" class="timer__select-arrow arrow-down"></div>
              <div id="minRightBot" class="timer__select-arrow arrow-down"></div>
            </div>
          </div>
          <div class="timer__unit">m</div>
          <div class="set-timer__colon">:</div>
          <div class="timer__seconds noselect">
            <div class="timer__select-top">
              <div id="secLeftTop" class="timer__select-arrow arrow-up"></div>
              <div id="secRightTop" class="timer__select-arrow arrow-up"></div>
            </div>
            <div id="timerSecDigit" class="timer__digits">00</div>
            <div class="timer__select-bottom">
              <div id="secLeftBot" class="timer__select-arrow arrow-down"></div>
              <div id="secRightBot" class="timer__select-arrow arrow-down"></div>
            </div>
          </div>
          <div class="timer__unit">s</div>
        </div>
        <button id="timerStart" class="btn btn--secondary btn--auto">Start</button>
        <audio class="timer__alarm" preload="auto">
          <source src="./medias/alarm.mp3" type="audio/mpeg">
          Your browser does not support the audio element
        </audio>
      </div>
    `;
  },
  mapComponentData: (day, exerciseID) => {
    // No data for timer
  },
  setupHandlers: (day, exerciseID) => {
    let minutes = 0;
    let seconds = 0;
    $('.timer__select-arrow').click(e => {
      if (e.target.id === 'minLeftTop') {
        if (minutes < 50) {
          minutes += 10; 
        }
      } else if (e.target.id === 'minRightTop') {
        if (minutes < 59) {
          minutes += 1; 
        }
      } else if (e.target.id === 'minLeftBot') {
        if (minutes > 9) {
          minutes -= 10; 
        };
      } else if (e.target.id === 'minRightBot') {
        if (minutes > 0) {
          minutes -= 1; 
        };
      } else if (e.target.id === 'secLeftTop') {
        if (seconds < 50) {
          seconds += 10; 
        }
      } else if (e.target.id === 'secRightTop') {
        if (seconds < 59) {
          seconds += 1; 
        }
      } else if (e.target.id === 'secLeftBot') {
        if (seconds > 9) {
          seconds -= 10; 
        };
      } else if (e.target.id === 'secRightBot') {
        if (seconds > 0) {
          seconds -= 1; 
        };
      };
      displayTimerSetting();
    });

    const displayTimerSetting = () => {
      $('#timerMinDigit').html(formatNumber(minutes));
      $('#timerSecDigit').html(formatNumber(seconds));
    };

    const formatNumber = (nb) => {
      let displayNb;
      if (nb.toString().length === 1) {
        displayNb = `0${nb}`;
      } else {
        displayNb = nb;
      };
      return displayNb;
    };

    let startingTime;
    let interval = null;
    let timerCountMin = 0;
    let timerCountSec = 0;

    const startTimer = (func, time) => {
      interval = setInterval(func, time);
    };

    const stopTimer = () => {
      clearInterval(interval);
    };

    const closeCounter = () => {
      $('.counter__digits-min').html('00');
      $('.counter__digits-sec').html('00');
      timerCountMin = 0;
      timerCountSec = 0;
      $('.counter-container').remove();
    };

    const timer = () => {
      startingTime.setSeconds(startingTime.getSeconds() - 1);
      timerCountMin = startingTime.getMinutes();
      timerCountSec = startingTime.getSeconds();
      if (timerCountMin === 0 && timerCountSec === 0) {
        stopTimer();
        document.querySelector('.timer__alarm').play();
        closeCounter();
      };
      $('.counter__digits-min').html(formatNumber(timerCountMin));
      $('.counter__digits-sec').html(formatNumber(timerCountSec));
    };

    $('#timerStart').click(() => {
      startingTime = new Date(`July 10, 2018 00:${minutes}:${seconds}`);

      $('.timer').append(`
        <div class="counter-container flex-center animated zoomIn">
          <div class="counter flex-center">
            <div class="counter__digits grid">
              <div class="counter__digit counter__digits-min">00</div>
              <div class="counter__comma">:</div>
              <div class="counter__digit counter__digits-sec">00</div>
            </div>
            <div class="counter__btns grid grid--2-col">
              <button class="btn btn--tertiary counter__pause">Pause</button>
              <button class="btn btn--tertiary counter__cancel">Cancel</button>
            </div>
          </div>
        </div>
      `);

      $('.counter__digits-min').html(formatNumber(startingTime.getMinutes()));
      $('.counter__digits-sec').html(formatNumber(startingTime.getSeconds()));
    
      startTimer(timer, 1000);
    });

    $('.timer').on('click', '.counter__pause', () => {
      stopTimer();
      $('.counter__pause').replaceWith(`
        <button class="btn btn--tertiary counter__resume animated fadeIn">Resume</button>
      `);
    });

    $('.timer').on('click', '.counter__resume', () => {
      startingTime = new Date(`July 10, 2018 00:${timerCountMin}:${timerCountSec}`);
      startTimer(timer, 1000);
      $('.counter__resume').replaceWith(`
        <button class="btn btn--tertiary counter__pause animated fadeIn">Pause</button>
      `);
    });

    $('.timer').on('click', '.counter__cancel', () => {
      stopTimer();
      closeCounter();
    });
  }
};

const componentsList = [routeAdder, boulderAdder, timer];

export const componentIDtoObj = id => {
  let component;
  componentsList.forEach(el => {
    if (el.id === id) {
      component = el;
    };
  });
  return component;
};

