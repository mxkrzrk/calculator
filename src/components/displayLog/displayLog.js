import { createElementHtml } from '../../utils/utils.js';
import './displayLog.css';

function displayLog() {
  const displayLogCol = createElementHtml('div', [
    'displayLog',
    'col-12',
    'col-md-6',
  ]);
  const displayLog = createElementHtml('div', ['displayLog-operation']);
  const displayLogOperation = createElementHtml('div', [
    'd-flex',
    'flex-column',
    'justify-content-end',
    'align-items-end',
  ]);
  const displayLogSingleOp = createElementHtml('div', [], '5 + 5');

  displayLogOperation.appendChild(displayLogSingleOp);
  displayLog.appendChild(displayLogOperation);
  displayLogCol.appendChild(displayLog);

  return displayLogCol;
}

export default displayLog;
