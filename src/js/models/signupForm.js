
let userName, email, password, confirmPassword;

export function submitForm(e) {
  e.preventDefault();
  // Get values
  userName = getInputVal('userName');
  email = getInputVal('email');
  password = getInputVal('password');
  confirmPassword = getInputVal('confirmPassword');

  window.location = 'training.html';
  // Resets imput fiels after the form is submitted
  document.getElementById('signupForm').reset();
};

// Function to get from values
function getInputVal(id) {
  return document.getElementById(id).value;
}