
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