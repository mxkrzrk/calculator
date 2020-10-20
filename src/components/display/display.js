import createElementHtml from '../../utils/utils.js';
import './display.css';

function display(operation) {
  const displayRow = createElementHtml('div', ['row']);
  const displayContent = createElementHtml('div', ['display'], operation);

  displayRow.insertAdjacentElement('afterbegin', displayContent);

  return displayRow;
}

export default display;
