import {
  createElementHtml,
  cleanHTML,
  storeCalculationData,
  solveSingleOperation,
  log,
  cleanCalculationData,
  scrollToLog,
} from './utils/utils.js';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';
import './app.css';
import nav from './components/nav/nav.js';
import display from './components/display/display.js';
import keypad from './components/keypad/keypad.js';
import displayLog from './components/displayLog/displayLog.js';

const APP_TAG = document.getElementById('app');

const calculationData = {
  firstOperand: [],
  operation: null,
  secondOperand: [],
  display: '',
};

const logData = {
  logHistory: [],
  singleOpLog: [],
};

function clickKeyHandler(e) {
  const keyType = e.target.dataset.type;
  if (keyType === 'number' && calculationData.operation === null) {
    storeCalculationData(calculationData, e.target.innerText, 'first');
  } else if (keyType === 'number' && calculationData.operation !== null) {
    storeCalculationData(calculationData, e.target.innerText, 'second');
  } else if (
    keyType === 'operation' &&
    calculationData.firstOperand.length === 0
  ) {
    return;
  } else if (
    keyType === 'operation' &&
    calculationData.secondOperand.length === 0
  ) {
    storeCalculationData(calculationData, e.target.innerText, 'operation');
    calculationData.display = '';
    // Log
    log(logData, calculationData.firstOperand.join(''), 'store');
    log(logData, calculationData.operation, 'store');
  } else if (
    keyType === 'operation' &&
    calculationData.secondOperand.length > 0
  ) {
    const result = solveSingleOperation(
      calculationData.firstOperand.join(''),
      calculationData.operation,
      calculationData.secondOperand.join('')
    );
    // Log
    log(logData, calculationData.secondOperand.join(''), 'store');
    // Store the result as first operand and display it
    // Clean second operand and store new sing operation
    calculationData.firstOperand = Array.from(result.toString());
    calculationData.display = calculationData.firstOperand.join('');
    calculationData.secondOperand = [];
    storeCalculationData(e.target.innerText, 'operation');
    // Log
    log(logData, calculationData.operation, 'store');
  } else if (keyType === 'equal' && calculationData.secondOperand.length > 0) {
    const result = solveSingleOperation(
      calculationData.firstOperand.join(''),
      calculationData.operation,
      calculationData.secondOperand.join('')
    );
    calculationData.display = result.toString();
    // Log
    log(logData, calculationData.secondOperand.join(''), 'store');
    log(logData, '=', 'store');
    log(logData, calculationData.display, 'store');
    log(logData, logData.singleOpLog.join(''), 'storeHistory');
    log(logData, [], 'clean');
    cleanCalculationData(calculationData);
  } else if (keyType === 'clean') {
    calculationData.display = '';
    cleanCalculationData(calculationData);
    log(logData, [], 'clean');
  } else if (keyType === 'cleanLog') {
    calculationData.display = '';
    cleanCalculationData(calculationData);
    log(logData, [], 'clean');
    log(logData, [], 'cleanHistory');
  } else if (keyType === 'showLog') {
    scrollToLog();
  }
  cleanHTML(APP_TAG);
  app(APP_TAG);
}

function app(parentTag) {
  // Create calculator
  const header = createElementHtml('header', ['container-fluid']);
  const navBar = nav();
  const main = createElementHtml('main', ['container-fluid']);
  const displayCalc = display(calculationData.display);
  const keypadRow = createElementHtml('div', ['row']);
  const keyboard = keypad();
  const displayLogOperation = displayLog(logData.logHistory);
  // Append the elements created
  parentTag.insertAdjacentElement('afterbegin', header);
  header.appendChild(navBar);
  header.insertAdjacentElement('afterend', main);
  main.appendChild(displayCalc);
  keypadRow.appendChild(keyboard);
  keypadRow.appendChild(displayLogOperation);
  main.appendChild(keypadRow);
  // Add icons
  library.add(faCalculator);
  // Convert icons in svg
  dom.i2svg();
}

export { app, APP_TAG, clickKeyHandler };
