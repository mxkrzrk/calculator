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

function cleanCalculationData(data) {
  data.firstOperand = [];
  data.operation = null;
  data.secondOperand = [];
  data.display = '';
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
  calculationResult,
  cleanCalculationData,
  scrollToLog
};
