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

  nav.appendChild(icon);
  nav.appendChild(title);

  return nav;
}

export default nav;
