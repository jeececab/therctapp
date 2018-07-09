import { modal } from './base';

export const instructionsView = () => {
  $('.app-container').append(`
    <div class="modal-container">
      <div class="instructions modal animated bounceInDown">

        <i class="modal__close-btn fa fa-times-circle"></i>
        <h2 class="centered">Instructions</h2>

        <div class="modal-content">

          <p>The template suggests which days should be active and what should the global content be. That being said, you will have to design each of these days based on your needs. You can do this now or click next and do it later on. </p>
          <h3>Click on a cell to edit an individual day plan</h3>

        </div>
      

      </div>
    </div>
  `);

  modal();
  
};

