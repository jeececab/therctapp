
let userName, email, password, confirmPassword;

export const submitForm = (e, state) => {
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
const getInputVal= id => {
  return document.getElementById(id).value;
}