import { createElementHtml } from '../../utils/utils.js';
import './display.css';

function display(display) {
  const displayResult = display;
  const displayRow = createElementHtml('div', ['row']);
  const displayContent = createElementHtml('div', ['display'], displayResult);

  displayRow.appendChild(displayContent);

  return displayRow;
}

export default display;
