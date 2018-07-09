import { modal } from './base';

export function formView() {
  // $('.app-container').empty();
  $('.app-container').append(`
    <div class="modal-container">
      <div class="signup modal flex-align animated bounceInLeft">

        <i class="modal__close-btn fa fa-times-circle"></i>

        <h2>Create your account</h2>

        <form id="signupForm" class="signup__form flex-align">

          <div class="signup__inputs">
            <p>
              <label>Username</label>
              <input class="signup__input" id="userName" type="text" name="username" required>
            </p>

            <p>
              <label>Email</label>
              <input class="signup__input" id="email" type="email" name="email" required autocomplete="on">
            </p>

            <p>
              <label>Password</label>
              <input class="signup__input" id="password" type="password" required name="password">
            </p>

            <p>
              <label>Confirm password</label>
              <input class="signup__input" id="confirmPassword" type="password" required name="confirm-password">
            </p>
          </div>
  
          <button class="btn btn--primary" type="submit">Submit</button>
          
        </form>

      </div>
    </div>
  `);

  modal();
};