import style from '../scss/main.scss';
import { seasonView, clearSeason } from './views/seasonView';
import { datesView } from './views/datesView';
import * as seasonPlan from './models/seasonPlan';



document.querySelector('.novice-btn').addEventListener('click', e => {
  clearSeason();
  seasonView(seasonPlan.novice());
});

document.querySelector('.experienced-btn').addEventListener('click', e => {
  clearSeason();
  seasonView(seasonPlan.experienced());
});

document.querySelector('.btn-dates').addEventListener('click', e => {
  datesView();
});


window.addEventListener('click', e => {
  if (e.target.classList[1].includes('day-')) {
    const nb = e.target.classList[1].slice(4);
    if (isNaN(nb) === false ) {
      console.log(nb);
    };
  };
});

