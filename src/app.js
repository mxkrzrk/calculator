import createElementHtml from './util/util.js';
import nav from './components/nav/nav.js';

function app(parentTag) {
  const header = createElementHtml('header', ['container-fluid', 'px-0']);
  const navBar = nav();

  parentTag.insertAdjacentElement('afterbegin', header);
  header.insertAdjacentElement('afterbegin', navBar);
}

export default app;
