import { createElementHtml } from '../../utils/utils.js';
import './nav.css';

function nav() {
  const nav = createElementHtml('nav', [
    'nav',
    'row',
    'd-flex',
    'justify-content-center',
    'align-items-center',
  ]);
  const icon = createElementHtml('i', ['fas', 'fa-calculator', 'nav-icon']);
  const title = createElementHtml('h1', ['nav-title'], 'Calculator');

  nav.insertAdjacentElement('afterbegin', icon);
  nav.insertAdjacentElement('beforeend', title);

  return nav;
}

export default nav;
