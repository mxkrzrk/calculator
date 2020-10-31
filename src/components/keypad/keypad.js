import { clickKeyHandler } from '../../app.js';
import { createElementHtml } from '../../utils/utils.js';
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
  if (isNaN(key) && key !== '.' && key !== '=') {
    numberKey = createElementHtml(
      'button',
      ['keypad-key', 'keypad-key--operation'],
      key,
      [
        { name: 'data-type', value: 'operation' },
        { name: 'name', value: 'operation' },
      ]
    );
  } else if (isNaN(key) && key === '=') {
    numberKey = createElementHtml(
      'button',
      ['keypad-key', 'keypad-key--equal'],
      key,
      [{ name: 'data-type', value: 'equal' }]
    );
  } else {
    numberKey = createElementHtml(
      'button',
      ['keypad-key', 'keypad-key--number'],
      key,
      [{ name: 'data-type', value: 'number' }]
    );
  }

  // Append child to row
  keypadCol.appendChild(numberKey);
  row.appendChild(keypadCol);

  numberKey.addEventListener('click', clickKeyHandler);
}

function keypad() {
  const row1 = [7, 8, 9, '+'];
  const row2 = [4, 5, 6, '-'];
  const row3 = [1, 2, 3, '*'];
  const row4 = ['.', 0, '=', '/'];

  const keypadRow = createElementHtml('div', ['row', 'keypad']);

  row1.map((el) => createKeypadKey(el, keypadRow));
  row2.map((el) => createKeypadKey(el, keypadRow));
  row3.map((el) => createKeypadKey(el, keypadRow));
  row4.map((el) => createKeypadKey(el, keypadRow));

  return keypadRow;
}

export default keypad;
