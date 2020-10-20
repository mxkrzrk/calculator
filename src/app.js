import createElementHtml from './utils/utils.js';
import nav from './components/nav/nav.js';
import display from './components/display/display.js';

function app(parentTag) {
  const operation = [3, '+', 4, '-', 5];

  const header = createElementHtml('header', ['container-fluid']);
  const navBar = nav();
  const main = createElementHtml('main', ['container-fluid']);
  const displayCalc = display(operation.join(' '));

  parentTag.insertAdjacentElement('afterbegin', header);
  header.insertAdjacentElement('afterbegin', navBar);
  header.insertAdjacentElement('afterend', main);
  main.insertAdjacentElement('afterbegin', displayCalc);
}

export default app;
