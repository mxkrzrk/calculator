import { createElementHtml } from './utils/utils.js';
import nav from './components/nav/nav.js';
import display from './components/display/display.js';
import keypad from './components/keypad/keypad.js';

const APP_TAG = document.getElementById('app');
const CALCULATION = [];

function app(parentTag) {
  const header = createElementHtml('header', ['container-fluid']);
  const navBar = nav();
  const main = createElementHtml('main', ['container-fluid']);
  const displayCalc = display(CALCULATION.join(' '));
  const keyboard = keypad();

  parentTag.insertAdjacentElement('afterbegin', header);
  header.insertAdjacentElement('afterbegin', navBar);
  header.insertAdjacentElement('afterend', main);
  main.appendChild(displayCalc);
  main.appendChild(keyboard);
}

export { app, APP_TAG, CALCULATION };
