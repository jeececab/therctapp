
import { state } from '../index';

let userName, email, password, confirmPassword;

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
};

// Function to get from values
function getInputVal(id) {
  return document.getElementById(id).value;
}