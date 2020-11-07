import {
  createElementHtml,
  cleanHTML,
  calculationResult,
  cleanCalculationData,
} from './utils/utils.js';
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

const logHistory = {
  operationLog: [],
  log: [],
};

function clickKeyHandler(e) {
  const keyType = e.target.dataset.type;

  if (keyType === 'number' && calculationData.operation === null) {
    // Store first operand
    calculationData.firstOperand.push(e.target.innerText);
    calculationData.display = calculationData.firstOperand.join('');
  } else if (keyType === 'number' && calculationData.operation !== null) {
    // Store second operand
    calculationData.secondOperand.push(e.target.innerText);
    calculationData.display = calculationData.secondOperand.join('');
  } else if (
    keyType === 'operation' &&
    calculationData.firstOperand.length === 0
  ) {
    return;
  } else if (
    keyType === 'operation' &&
    calculationData.secondOperand.length === 0
  ) {
    // Store operation
    calculationData.operation = e.target.innerText;
    calculationData.display = '';
    // Log
    logHistory.log.push(calculationData.firstOperand.join(''));
    logHistory.log.push(calculationData.operation);
  } else if (
    keyType === 'operation' &&
    calculationData.secondOperand.length > 0
  ) {
    // Resolve the operation
    const op1 = parseFloat(calculationData.firstOperand.join(''));
    const op2 = parseFloat(calculationData.secondOperand.join(''));
    const result = calculationResult(op1, calculationData.operation, op2);
    // Log
    logHistory.log.push(calculationData.secondOperand.join(''));
    // Store the result as first operand
    calculationData.firstOperand = Array.from(result.toString());
    calculationData.secondOperand = [];
    calculationData.operation = e.target.innerText;
    calculationData.display = calculationData.firstOperand.join('');
    // Log
    logHistory.log.push(calculationData.operation);
  } else if (keyType === 'equal' && calculationData.secondOperand.length > 0) {
    // Resolve the operation
    const op1 = parseFloat(calculationData.firstOperand.join(''));
    const op2 = parseFloat(calculationData.secondOperand.join(''));
    const result = calculationResult(op1, calculationData.operation, op2);
    calculationData.display = result.toString();
    // Log
    logHistory.log.push(calculationData.secondOperand.join(''));
    logHistory.log.push('=');
    logHistory.log.push(calculationData.display);
    logHistory.operationLog.push(logHistory.log.join(''));
    logHistory.log = [];
    // Clean operation data
    calculationData.firstOperand = [];
    calculationData.secondOperand = [];
    calculationData.operation = null;
  } else if (keyType === 'clear') {
    cleanCalculationData(calculationData);
    logHistory.log = [];
  } else if (keyType === 'clearLog') {
    cleanCalculationData(calculationData);
    logHistory.operationLog = [];
    logHistory.log = [];
  } else if (keyType === 'showLog') {
    window.scroll({
      top: 550,
      left: 0,
      behavior: 'smooth',
    });
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
  const displayLogOperation = displayLog(logHistory.operationLog);

  // Append the elements created
  parentTag.insertAdjacentElement('afterbegin', header);
  header.appendChild(navBar);
  header.insertAdjacentElement('afterend', main);
  main.appendChild(displayCalc);
  keypadRow.appendChild(keyboard);
  keypadRow.appendChild(displayLogOperation);
  main.appendChild(keypadRow);
}

export { app, APP_TAG, clickKeyHandler };
