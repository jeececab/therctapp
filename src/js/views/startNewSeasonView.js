import { setStartDate } from "../models/mapDates";

export const startNewSeasonView = () => {
  $('.app-container').append(`
    <div class="start-new-season flex-align">
      <div class="start-date flex-align">
        <h2>Choose a starting date:</h2>
        <div class="start-date__input">
          <input id="datepicker" type="text">
          <button id="btnStartDateOk" class="btn btn--primary btn--small-p">OK</button>
        </div>
      </div>
    </div>
  `);

  $('#datepicker').datepicker();
  const formatNb = nb => {
    if (nb.toString().length === 1) {
      return `0${nb}`
    } else {
      return nb;
    };
  };
  const date = new Date();
  const day = formatNb(date.getDate());
  const month = formatNb(date.getMonth() + 1);
  const year = date.getFullYear();
  $('#datepicker').val(`${month}/${day}/${year}`);
  setStartDate(`${month}/${day}/${year}`);

};

export const templatesView = () => {
  $('.start-new-season').empty();
  $('.start-new-season').append(`
    <h2>Choose a seasonal training plan</h2>
    <div class="plan-templates grid">
      <button id="novice-Btn" class="plan-templates__btn btn btn--tertiary ">Novice climber</button>
      <button id="experienced-Btn" class="plan-templates__btn btn btn--tertiary">Experienced climber</button>
      <button id="trad-Btn" class="plan-templates__btn btn btn--tertiary">Trad climber</button>
      <button id="boulder-Btn" class="plan-templates__btn btn btn--tertiary">Bouldering climber</button>
    </div>
  `);
};