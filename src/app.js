import { createElementHtml } from './utils/utils.js';
import nav from './components/nav/nav.js';
import display from './components/display/display.js';
import keypad from './components/keypad/keypad.js';

const APP_TAG = document.getElementById('app');

const calculationData = {
  firstOperand: [],
  operation: null,
  secondOperand: [],
  display: '',
  disabledOperation: false,
};

function app(parentTag) {
  // Create calculator
  const header = createElementHtml('header', ['container-fluid']);
  const navBar = nav();
  const main = createElementHtml('main', ['container-fluid']);
  const displayCalc = display(calculationData.display);
  const keyboard = keypad();
  // Append the elements created
  parentTag.insertAdjacentElement('afterbegin', header);
  header.insertAdjacentElement('afterbegin', navBar);
  header.insertAdjacentElement('afterend', main);
  main.appendChild(displayCalc);
  main.appendChild(keyboard);
  // Disabled the operation buttons to resolve operations
  const operationButtons = document.getElementsByName('operation');
  if (calculationData.disabledOperation) {
    for (let el of operationButtons.values()) {
      el.setAttribute('disabled', '');
    }
  }
}

export { app, APP_TAG, calculationData };
