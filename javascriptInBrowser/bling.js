/**
 * https://gist.github.com/paulirish/12fb951a8b893a454b32
 */

/* bling.js */
//These below, define shorthand functions for selecting elements from the DOM using CSS selectors. $$ is a shorthand for querySelectorAll, and $ is a shorthand for querySelector.
window.$$ = document.querySelectorAll.bind(document);

window.$ = document.querySelector.bind(document);

//This line extends the Node prototype to add an on method for adding event listeners to elements. It also adds this method to the window object. This enables easier event binding by allowing you to write element.on('eventName', callback).

Node.prototype.on = window.on = function (name, fn) {
  this.addEventListener(name, fn);
}

// prototype(destiny) || __proto__ [[Prototype]] (source|DNA)

// setPrototypeOf and getPrototypeOf

//This line modifies the prototype chain of NodeList objects. It sets the prototype of NodeList instances to Array.prototype, effectively giving NodeList objects access to array methods.
NodeList.prototype.__proto__ = Array.prototype;

//This code extends the NodeList prototype to add an on method similar to what was done for Node, enabling you to attach event listeners to multiple elements selected via querySelectorAll in a concise manner.
NodeList.prototype.on = NodeList.prototype.addEventListener = function (name, fn) {
  this.forEach(function (elem, i) {
    elem.on(name, fn);
  });
}

//This function mk allows for convenient creation of DOM elements. You can specify the element type, properties, and children nodes. It creates the element, assigns properties, and appends children if provided.
function mk(type, props, children) {
  const el = document.createElement(type);
  if (props) Object.assign(el, props);
  if (children) el.prepend(...children);
  return el;
}

window.mk = mk;

//This code enhances DOM manipulation by providing shorthand selectors, convenient event handling methods, and functions for creating DOM elements. It's a concise way to work with the DOM in JavaScript.

//Using bling.js reconstructs the way javascript works insdie of our project.