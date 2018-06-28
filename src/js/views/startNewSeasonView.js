
export const startNewSeasonView = () => {
  $('.container').append(`
    <div class="start-new-season">
      <div class="start-date">
        <h3>Choose a starting date:</h3>
        <div class="start-date__input">
          <input type="text" id="datepicker">
          <button id="btnStartDateOk" class="btn-ok">OK</button>
        </div>
      </div>
    </div>
  `);

  $('#datepicker').datepicker();
};

export const templatesView = () => {
  $('.start-new-season').empty();
  $('.start-new-season').append(`
    <h3>Choose a seasonal training plan</h3>
    <div class="plan-templates">
      <button class="novice-btn start-new-season__btn plan-templates__btn">Novice climber</button>
      <button class="experienced-btn start-new-season__btn plan-templates__btn">Experienced climber</button>
      <button class="trad-btn start-new-season__btn plan-templates__btn">Trad climber</button>
      <button class="boulder-btn start-new-season__btn plan-templates__btn">Bouldering climber</button>
    </div>
  `);
};