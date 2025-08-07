function createNewElement(element, classes) {
  const ele = document.createElement(element);
  ele.className = classes
  element.classes = classes
  return ele;
}

function createNewText(text,classes) {
    text.className = classes
  return document.createTextNode(text);
}

function appendChild(parent, child) {
  return parent.appendChild(child);
}
