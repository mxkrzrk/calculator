import { createElementHtml } from '../../utils/utils.js';
import './displayLog.css';

function displayLog(log) {
  const displayLogCol = createElementHtml(
    'div',
    ['displayLog', 'col-12', 'col-md-6'],
    '',
    [{ name: 'id', value: 'log' }]
  );
  const displayLog = createElementHtml('div', ['displayLog-operation']);
  const displayLogOperation = createElementHtml('div', [
    'd-flex',
    'flex-column',
    'justify-content-end',
    'align-items-end',
  ]);

  if (log.length > 0) {
    log.forEach((op) => {
      const displayLogSingleOp = createElementHtml('div', [], op);
      displayLogOperation.appendChild(displayLogSingleOp);
    });
  }

  displayLog.appendChild(displayLogOperation);
  displayLogCol.appendChild(displayLog);

  return displayLogCol;
}

export default displayLog;
