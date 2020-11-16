/**
 * Create a single element HTML
 * @param {String} tag - Name of the tag HTML to create.
 * @param {String[]} classes - Each elements of this array represents a single class.
 * @param {String} content - The content inside the tag.
 * @param {Array} attribute - Each object of this array represents a single attribute of tag. The object must have this structure: {name: 'attr', value: 'attr value'}.
 */
function createElementHtml(tag, classes = [], content = '', attribute = []) {
  const el = document.createElement(tag);
  if (classes.length > 0) {
    classes.forEach((cl) => el.classList.add(cl));
  }
  if (attribute.length > 0) {
    attribute.forEach((attr) => el.setAttribute(attr.name, attr.value));
  }
  el.textContent = content;
  return el;
}

function cleanHTML(tag) {
  tag.innerHTML = '';
}

function storeCalculationData(data, value, operandType) {
  switch (operandType) {
    case 'first':
      // Store first operand
      data.firstOperand.push(value);
      data.display = data.firstOperand.join('');
      break;
    case 'second':
      // Store second operand
      data.secondOperand.push(value);
      data.display = data.secondOperand.join('');
      break;
    case 'operation':
      // Store sign of the operation
      data.operation = value;
      break;
  }
}

function calculationResult(firstOp, op, secondOp) {
  let result = 0;
  switch (op) {
    case '+':
      result = firstOp + secondOp;
      break;
    case '-':
      result = firstOp - secondOp;
      break;
    case '*':
      result = firstOp * secondOp;
      break;
    case '/':
      result = firstOp / secondOp;
      break;
  }
  return result;
}

function solveSingleOperation(first, operation, second) {
  const firstOp = parseFloat(first);
  const secondOp = parseFloat(second);
  const result = calculationResult(firstOp, operation, secondOp);
  return result;
}

function log(logData, value, actionType) {
  switch (actionType) {
    case 'store':
      logData.singleOpLog.push(value);
      break;
    case 'storeHistory':
      logData.logHistory.push(value);
      break;
    case 'clean':
      logData.singleOpLog = value;
      break;
    case 'cleanHistory':
      logData.logHistory = value;
      break;
  }
}

function cleanCalculationData(data) {
  data.firstOperand = [];
  data.operation = null;
  data.secondOperand = [];
}

function scrollToLog() {
  const displayLog = document.getElementById('log');
  window.scroll({
    top: displayLog.offsetTop,
    left: 0,
    behavior: 'smooth',
  });
}

export {
  createElementHtml,
  cleanHTML,
  storeCalculationData,
  solveSingleOperation,
  log,
  cleanCalculationData,
  scrollToLog,
};
