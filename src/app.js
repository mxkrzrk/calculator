import {
  createElementHtml,
  cleanHTML,
  calculationResult,
  cleanCalculationData,
} from './utils/utils.js';
import nav from './components/nav/nav.js';
import display from './components/display/display.js';
import keypad from './components/keypad/keypad.js';

const APP_TAG = document.getElementById('app');

const calculationData = {
  firstOperand: [],
  operation: null,
  secondOperand: [],
  display: '',
};

function clickKeyHandler(e) {
  const keyType = e.target.dataset.type;

  if (keyType === 'number' && calculationData.operation === null) {
    calculationData.firstOperand.push(e.target.innerText);
    calculationData.display = calculationData.firstOperand.join('');
  } else if (keyType === 'number' && calculationData.operation !== null) {
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
    calculationData.operation = e.target.innerText;
    calculationData.display = '';
  } else if (
    keyType === 'operation' &&
    calculationData.secondOperand.length > 0
  ) {
    // Resolve the operation
    const op1 = parseFloat(calculationData.firstOperand.join(''));
    const op2 = parseFloat(calculationData.secondOperand.join(''));
    const result = calculationResult(op1, calculationData.operation, op2);
    // Store the result as first operand
    calculationData.firstOperand = Array.from(result.toString());
    calculationData.secondOperand = [];
    calculationData.operation = e.target.innerText;
    calculationData.display = calculationData.firstOperand.join('');
  } else if (keyType === 'equal' && calculationData.secondOperand.length > 0) {
    const op1 = parseFloat(calculationData.firstOperand.join(''));
    const op2 = parseFloat(calculationData.secondOperand.join(''));
    const result = calculationResult(op1, calculationData.operation, op2);
    calculationData.display = result.toString();
    // Store the result as first operand
    calculationData.firstOperand = Array.from(result.toString());
    calculationData.secondOperand = [];
    calculationData.operation = null;
  } else if (keyType === 'clear') {
    cleanCalculationData(calculationData);
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
  const keyboard = keypad();

  // Append the elements created
  parentTag.insertAdjacentElement('afterbegin', header);
  header.insertAdjacentElement('afterbegin', navBar);
  header.insertAdjacentElement('afterend', main);
  main.appendChild(displayCalc);
  main.appendChild(keyboard);
}

export { app, APP_TAG, clickKeyHandler };
