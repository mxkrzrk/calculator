function createElementHtml(tag, classes = [], content = '') {
  const el = document.createElement(tag);
  if (classes.length > 0) {
    classes.forEach((cl) => el.classList.add(cl));
  }
  el.textContent = content;
  return el;
}

export default createElementHtml;
