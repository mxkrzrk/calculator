import createElementHtml from '../../util/util.js';
import createElementHTML from '../../util/util.js';
import './nav.css';

function nav() {
  const nav = createElementHTML('nav', [
    'nav',
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
