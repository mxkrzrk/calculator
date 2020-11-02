import { createElementHtml } from '../../utils/utils.js';
import './display.css';

function display(display) {
  const displayResult = display;
  const displayRow = createElementHtml('div', ['row']);
  const displayContent = createElementHtml(
    'div',
    ['display', 'd-flex', 'align-items-center', 'justify-content-end'],
    displayResult
  );

  displayRow.appendChild(displayContent);

  return displayRow;
}

export default display;
