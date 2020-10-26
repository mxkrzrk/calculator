import { app, APP_TAG, CALCULATION } from '../../app.js';
import { createElementHtml, cleanHTML } from '../../utils/utils.js';
import './keypad.css';

function createKeypadKey(key, row) {
  // Create column
  const keypadCol = createElementHtml('div', [
    'col-3',
    'd-flex',
    'justify-content-center',
    'align-items-center',
  ]);
  // Create key
  let numberKey;
  if (isNaN(key)) {
    numberKey = createElementHtml(
      'div',
      ['keypad-key', 'keypad-key--operation'],
      key
    );
  } else {
    numberKey = createElementHtml(
      'div',
      ['keypad-key', 'keypad-key--number'],
      key
    );
  }
  keypadCol.appendChild(numberKey);
  row.appendChild(keypadCol);
  // Add event listener to the key
  numberKey.addEventListener('click', (e) => {
    CALCULATION.push(e.target.innerText);
    cleanHTML(APP_TAG);
    app(APP_TAG);
  });
}

function keypad() {
  const row1 = [7, 8, 9, '+'];
  const row2 = [4, 5, 6, '-'];
  const row3 = [1, 2, 3, '*'];
  const row4 = [',', 0, '=', '/'];

  const keypadRow = createElementHtml('div', ['row', 'keypad']);

  row1.map((el) => createKeypadKey(el, keypadRow));
  row2.map((el) => createKeypadKey(el, keypadRow));
  row3.map((el) => createKeypadKey(el, keypadRow));
  row4.map((el) => createKeypadKey(el, keypadRow));

  return keypadRow;
}

export default keypad;
