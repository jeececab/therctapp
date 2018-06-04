import { elements, updateElements } from './base';
import { submitForm } from '../models/submitForm';


export function formView() {
  document.querySelector('.app-container').innerHTML = '';
  document.querySelector('.app-container').insertAdjacentHTML('beforeend', `
    <div class="signup">
    <div class="signup__form animated bounceInLeft">
      <h1 class="signup__title">Create your account</h1>

      <form id="signupForm" class="signup__inputs">
        <p>
          <label>Username</label>
          <input id="userName" type="text" name="username" required>
        </p>
        <p>
          <label>Email</label>
          <input id="email" type="email" name="email" required autocomplete="on">
        </p>
        <p>
          <label>Password</label>
          <input id="password" type="password" required name="password">
        </p>
        <p>
          <label>Confirm password</label>
          <input id="confirmPassword" type="password" required name="confirm-password">
        </p>
        <p>
          <button type="submit">Submit</button>
        </p>
      </form>

    </div>
    </div>
  `);
  updateElements();

  elements.signupForm.addEventListener('submit', submitForm);
};