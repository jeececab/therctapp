import { currentUser } from '../index';
import { saveUserData } from './userData';
import { getSkillList, exerIDtoObj } from './exercisesList';

const routeAdder = {
  id: 'routeAdder',
  componentNb: 0,
  loggedRoute: id => {return `
    <div id="${id}" class="logged-route ex-comp__background">
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
        <div class="logged-route__btns ex-comp__2-btns grid">
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
    <div id="${id}" class="logged-boulder ex-comp__background">
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
        <div class="logged-boulder__btns ex-comp__2-btns grid">
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
        html += boulderAdder.loggedBoulder(el.id);
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
  UIhtml: () => {
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

const longSetAdder = {
  id: 'longSetAdder',
  componentNb: 0,
  skillNb: 0,
  loggedLongSet: id => {return `
    <div id="${id}" class="logged-long-set ex-comp__background">
      <div class="long-set__inputs grid">
        <div class="long-set__left-col">
          <h2 class="long-set__title">Set 1</h2>
          <label>Duration</label>
          <label class="long-set__duration" type="text" name="duration" placeholder="0 min">
        </div>
        <textarea class="long-set__notes" name="long-set__notes" placeholder="Notes"></textarea>
      </div>
      <div class="long-set__skills"></div>
      <div class="long-set__add-skill grid grid--2-col">
        <label for="long-set__skill-select">Skill drill:</label>
        <div>
          <select class="long-set__skill-select"></select>
          <button class="btnAddSkill btn btn--primary btn--small-p">Add</button>
        </div>
      </div>
      <div class="long-set__btns grid ex-comp__2-btns">
        <button class="btn btn--quat btnSave">Save modifications</button>
        <button class="btn btn--quat btnDelete">Delete set</button>
      </div>
    </div>`;
  },
  updateSetTitle: () => {
    $('.logged-long-set').each((i, obj) => {
      $(`#${obj.id} .long-set__title`).html(`Set ${i + 1}`);
    });
  },
  displaySkillOptions: () => {
    $('.long-set__skill-select').empty();
    $('.logged-long-set').each((i, obj) => {
      getSkillList().forEach(el => {
        $(`#${obj.id} .long-set__skill-select`).append(`
            <option value="${el.id}" title="${el.directives}">${el.title}</option>
        `);
      });
    });
  },
  displaySkillTodo: (componentID, skillID) => {
    const skill = exerIDtoObj(skillID);
    $(`#${componentID} .long-set__skills`).append(`
      <div id="${longSetAdder.skillNb}-${skillID}" class="skill">
        <div class="skill__header">
          <h3 class="skill__title">${skill.title}</h3>
          <div class="skill__arrow arrow"></div>
        </div>
        <div class="skill__content">
          <p>${skill.directives}</p>
        </div>
      </div>
    `);
    longSetAdder.skillNb++;
  },
  UIhtml: (day, exerciseID) => {
    let html = '';
    const exerDataArr = day.exercises[exerciseID.split('-')[0]].exerData;
    if (exerDataArr.length >= 1) {
      exerDataArr.forEach(el => {
        html += longSetAdder.loggedLongSet(el.id);
      });
    };
    longSetAdder.updateSetTitle();
    html += '<button class="longSetAdder btn btn--secondary btn--auto">Add set</button>';
    return html;
  },
  mapComponentData: (day, exerciseID) => {
    const exerDataArr = day.exercises[exerciseID.split('-')[0]].exerData;
    if (exerDataArr.length >= 1) {
      exerDataArr.forEach(el => {
        const componentID = el.id;
        const duration = el.compData[0];
        const notes = el.compData[1];
        const skillsArr = el.compData[2];
        $(`#${el.id} .long-set__duration`).val(duration);
        $(`#${el.id} .long-set__notes`).val(notes);
        if (skillsArr) {
          skillsArr.forEach(el => {
            longSetAdder.displaySkillTodo(componentID, el);
          });
        };      
      });
    };
    longSetAdder.updateSetTitle();
    longSetAdder.displaySkillOptions();
  },
  setupHandlers: (day, exerciseID) => {
    longSetAdder.componentNb = day.exercises[exerciseID.split('-')[0]].exerData.length;
    const exerciseNb = exerciseID.split('-')[0];
    // 1 - Add a route and save it (default)
    $(`#${exerciseID} .longSetAdder`).click(() => {
      $(`#${exerciseID} .longSetAdder`).before(longSetAdder.loggedLongSet(`${longSetAdder.componentNb}-loggedLongSet`));
      day.exercises[exerciseNb].exerData.push({
        id: `${longSetAdder.componentNb}-loggedLongSet`,
        compData: ["", "", []]
      });
      longSetAdder.componentNb++;
      longSetAdder.updateSetTitle();
      longSetAdder.displaySkillOptions();
      saveUserData(currentUser);
    });
    // 2 -  Select and add a skill to set and save it
    let selectedSkill = getSkillList()[0].id;
    $('.exercise__components').on('change', '.long-set__skill-select', e => {
      selectedSkill = e.target.value;
    });

    $(`#${exerciseID}`).on('click', '.btnAddSkill', e => {
      const componentID = e.target.parentNode.parentNode.parentNode.id;
      day.exercises[exerciseNb].exerData.forEach(el => {
        if (el.id === componentID) {
          el.compData[2].push(selectedSkill);
        };
      });
      longSetAdder.displaySkillTodo(componentID, selectedSkill);
    });
    // 3 Click on skill header to deploy skill content
    $(`#${exerciseID}`).on('click', '.skill__header', e => {
      const id = $(e.target).parents('div')[1].id;
      $(`#${id} .skill__content`).toggle('fast');
      $(`#${id} .skill__arrow`).toggleClass('arrow--down');
    });
    // 4 - Save to exerData 
    $(`#${exerciseID}`).on('click', '.btnSave', e => {
      const componentID = e.target.parentNode.parentNode.id;
      const duration = $(`#${componentID} .long-set__duration`).val();
      const notes = $(`#${componentID} .long-set__notes`).val();
      day.exercises[exerciseNb].exerData.forEach(el => {
        if (el.id === componentID) {
          el.compData[0] = duration;
          el.compData[1] = notes;
        };
      });
      saveUserData(currentUser);
      alert('Modifications saved');
    });
    // 5 - Delete route
    $(`#${exerciseID}`).on('click', '.btnDelete', e => {
      const componentID = e.target.parentNode.parentNode.id;
      day.exercises[exerciseNb].exerData.forEach(el => {
        if (el.id === componentID) {
          const index = day.exercises[exerciseNb].exerData.indexOf(el);
          day.exercises[exerciseNb].exerData.splice(index, 1);
          $(`#${exerciseID} #${componentID}`).remove();
        };
      });
      longSetAdder.updateSetTitle();
    });
  },
};

const hangboardRoutine = {
  id: 'hangboardRoutine',
  loggedHBset: (setID, grip, reps, resis, check) => {return `
    <div id="${setID}" class="hangboard-set ex-comp__window">
      <div class="hangboard-set__top">
        <h3 class="hangboard-set__title">Set ${parseInt(setID.split('-')[0]) + 1}</h3>
        <select class="hangboard-set__grip-select" name="hangboard-set__grip-select" value="${grip}">
          <option value="IM deep 2F pocket">IM deep 2F pocket</option>
          <option value="IMR deep 3F pocket">IMR deep 3F pocket</option>
          <option value="Large edge>Large edge</option>
          <option value="Large open-hand edge">Large open-hand edge</option>
          <option value="Medium edge">Medium edge</option>
          <option value="Medium pinch">Medium pinch</option>
          <option value="Middle 1F pocket">Middle 1F pocket</option>
          <option value="MR deep 2F pocket">MR deep 2F pocket</option>
          <option value="MR shallow 2F pocket">MR shallow 2F pocket</option>
          <option value="MRP deep 3F pocket">MRP deep 3F pocket</option>
          <option value="Narrow pinch">Narrow pinch</option>
          <option value="Sloper">Sloper</option>
          <option value="Small semi-closed edge">Small semi-closed edge</option>
          <option value="Warm-up jug">Warm-up jug</option>
          <option value="Warm-up open-hand edge">Warm-up open-hand edge</option>
          <option value="Wide pinch">Wide pinch</option>
        </select>
      </div>
      <div class="hangboard-set__bot grid">
        <div>
          <label>Reps:</label>
          <input class="hangboard__set-reps" type="text" name="reps" placeholder="0" value="${reps}">
        </div>
        <div>
          <label>Resis.:</label>
          <input class="hangboard__set-resis" type="text" name="resistance" placeholder="base" value="${resis}">
        </div>
        <div class="hangboard-set__bot-c grid">
          <label>Done:</label>
          <div class="hangboard__set-check">${check}</div>
        </div>
      </div>
    </div>
  `},
  UIhtml: () => {
    let html = `
      <div class="hangboard ex-comp__background flex-center">
        <h2 class="hangboard__title">Hangboard Routine</h2>
        <div class="hangboard__settings ex-comp__window">
          <p>
            <label>Rep timing:</label>
            <input class="hangboard__settings-rep" type="text" name="timing" placeholder="10s hang / 10s rest">
          </p>
          <p>
            <label>Rest between sets:</label>
            <input class="hangboard__settings-rest" type="text" name="rest" placeholder="3:00">
          </p>
        </div>
        <div class="hangboard__sets-list"></div>
        <div class="hangboard__btns grid ex-comp__2-btns">
          <button class="btn btn--quat addSetBtn">Add set</button>
          <button class="btn btn--quat removeSetBtn">Remove last set</button>
        </div>
        <button class="btn btn--quat btn--accent saveHBbtn">Save modifications</button>
      </div>
    `;
    return html;
  },
  mapComponentData: (day, exerciseID) => {
    const exerData = day.exercises[exerciseID.split('-')[0]].exerData
    if (exerData.length >= 1) {
      $(`#${exerciseID} .hangboard__settings-rep`).val(exerData[0]);
      $(`#${exerciseID} .hangboard__settings-rest`).val(exerData[1]);
      exerData[2].forEach(el => {
        $(`#${exerciseID} .hangboard__sets-list`).append(hangboardRoutine.loggedHBset(
          el.setID, el.grip, el.reps, el.resis, hangboardRoutine.checkedFormat(el.checked)
        ));
      });
    } else {
      exerData.push('', '', []);
    };
  },
  checkedFormat: setCheck => {
    if (setCheck === true) {
      return '✔';
    } else if (setCheck === false) {
      return '';
    };
  },
  setupHandlers: (day, exerciseID) => {
    const exerData = day.exercises[exerciseID.split('-')[0]].exerData;
    const setsArr = exerData[2];
    //1 - Add a set and save it
    $(`#${exerciseID} .addSetBtn`).click(() => {
      const defaultSet = [`${setsArr.length}-loggedHBset`, 'IM deep 2F pocket', '', '', false];
      setsArr.push({
          setID: defaultSet[0],
          grip: defaultSet[1],
          reps: defaultSet[2],
          resis: defaultSet[3],
          checked: defaultSet[4]
      });
      $(`#${exerciseID} .hangboard__sets-list`).append(hangboardRoutine.loggedHBset(
        defaultSet[0], defaultSet[1], defaultSet[2], defaultSet[3], ""
      ));
      saveUserData(currentUser);
    });
    // 2 - Remove the last set and save
    $(`#${exerciseID} .removeSetBtn`).click(() => {
      setsArr.pop();
      $('.hangboard__sets-list .hangboard-set').last().remove();
      saveUserData(currentUser);
    });
    // 3 - Click on "done"
    $(`#${exerciseID}`).on('click', '.hangboard__set-check', e => {
      const setID = e.target.parentNode.parentNode.parentNode.id;
      const setNb = setID.split('-')[0];
      let setCheck = !setsArr[setNb].checked;
      $(`#${setID} .hangboard__set-check`).html(hangboardRoutine.checkedFormat(setCheck));
      // setsArr[setNb].checked = !setsArr[setNb].checked;
    });
    // 4 - Save modifications
    $(`#${exerciseID} .saveHBbtn`).click(() => {
      exerData[0] = $('.hangboard__settings-rep').val();
      exerData[1] = $('.hangboard__settings-rest').val();
      
      for (let i = 0; i < setsArr.length; i++) {
        setsArr[i].grip = $(`#${i}-loggedHBset .hangboard-set__grip-select`).val();
        setsArr[i].reps = $(`#${i}-loggedHBset .hangboard__set-reps`).val();
        setsArr[i].resis = $(`#${i}-loggedHBset .hangboard__set-resis`).val();
        if ($(`#${i}-loggedHBset .hangboard__set-check`).html() === '✔') {
          setsArr[i].checked = true;
        } else {
          setsArr[i].checked = false;
        };
      };
      saveUserData(currentUser);
      alert('Modifications saved');
    });
  },
};

///

const componentsList = [routeAdder, boulderAdder, timer, longSetAdder, hangboardRoutine];

export const componentIDtoObj = id => {
  let component;
  componentsList.forEach(el => {
    if (el.id === id) {
      component = el;
    };
  });
  return component;
};

