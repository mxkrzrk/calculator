import { createElementHtml } from '../../utils/utils.js';
import './nav.css';
import calculator from './calculator.svg';

function nav() {
  const nav = createElementHtml('nav', [
    'nav',
    'row',
    'd-flex',
    'justify-content-center',
    'align-items-center',
  ]);
  const div = createElementHtml('div', ['nav-icon']);
  const icon = createElementHtml('img', [], '', [{name:'src', value: calculator}]);
  const title = createElementHtml('h1', ['nav-title'], 'Calculator');

  div.appendChild(icon);
  nav.insertAdjacentElement('afterbegin', div);
  nav.insertAdjacentElement('beforeend', title);

  return nav;
}

export default nav;
