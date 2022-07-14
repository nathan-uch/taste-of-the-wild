const createElement = (tag, attributes, children) => {
    // tag = STRING
    // attributes = OBJECT
    // children = ARRAY
    const $element = document.createElement(tag);
    for (const att in attributes) {
      $element.setAttribute(att, attributes[att]);
    }
    for (let i = 0; i < children.length; i++) {
      if (!(children[i] instanceof Node)) {
        $element.appendChild(document.createTextNode(children[i]));
      } else {
        $element.appendChild(children[i]);
      }
    }
    return $element;
  }