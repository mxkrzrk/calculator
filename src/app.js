import createSemanticHtml from './utilities/semanticUI.js';

function app(tagFather) {
  const header = createSemanticHtml('header');
  const main = createSemanticHtml('main');
  const footer = createSemanticHtml('footer');

  tagFather.insertAdjacentElement('afterbegin', header);
  header.insertAdjacentElement('afterend', main);
  main.insertAdjacentElement('afterend', footer);
}

export default app;
