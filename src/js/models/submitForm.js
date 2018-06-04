
import { accountView } from '../views/accountView';
import { state } from '../index';

export let userName, email, password, confirmPassword;

export function submitForm(e) {
  e.preventDefault();
  userName = getInputVal('userName');
  email = getInputVal('email');
  password = getInputVal('password');
  confirmPassword = getInputVal('confirmPassword');

  state.userData = {
    userName: userName,
    email: email,
    password: password,
    confirmPassword: confirmPassword
  };

  console.log(state.userData);

  accountView(state);
};

// Function to get from values
function getInputVal(id) {
  return document.getElementById(id).value;
}