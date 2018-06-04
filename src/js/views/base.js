
export const elements = {
  appContainer: document.querySelector('.app-container'),
  signUp: document.querySelector('.signUp'),
  logIn: document.querySelector('.logIn'),
  signupForm: document.getElementById('signupForm'),
  noviceTraining: document.querySelector('.novice-btn'),
  cellsWrapper: document.querySelector('.season__plan')
};

export function updateElements() {
  elements.appContainer = document.querySelector('.app-container');
  elements.signUp = document.querySelector('.signUp');
  elements.logIn = document.querySelector('.logIn');
  elements.signupForm = document.getElementById('signupForm');
  elements.noviceTraining = document.querySelector('.novice-btn');
  elements.cellsWrapper = document.querySelector('.season__plan');
};

export const clearAppContainer = () => {
  elements.appContainer.innerHTML = '';
};