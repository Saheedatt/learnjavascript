//innerHTML- this property allows to get the html inside the element as a string.We can also modify it so it is one of the most powerful ways to change the page.

//uncomment to test
// document.body.innerHTML = "This is the new Body!"
//beware: innerHTML does a full overwrite

//We can append HTML to an element by using elem.innerHtml+="more html"
//This removes old content and new html is written instead of a concatenation of the old and new one.

//outerHtml: it contains the full html of the element.That is like innerHTML plus the element itself.

//uncomment to test
// let div = document.getElementById('elem')
// div.outerHTML='<p>A new element</p>';

//textContent: pure text: iT provides access to the text inside the element; only text, minus all <tags>
//--uncomment to test
// alert(news.textContent)

//See this example for difference between textContent and innerHtml

//uncomment to test
// let names = prompt('What is your name?', '<b>Winnie-the-pooh!</b>')
// elem1.innerHTML = names;
// elem2.textContent = names;

//The first div gets the name as HTML: all tags become tags, so we see a bold name
//The second div gets the name as text, so we literally see <p>Winnie-the-pooh</p>
//In most cases, we expect the text from a user, and want to treat it as text. We don't want an unexpected HTML in our site, An assignment to textContent does exactly that!

//The hidden property:  The hidden attribute and the DOM porperty specifies whether the element is visible or not
//--uncomment to test
// elem3.hidden = true;
//technically, hidden works the same as style="display:none" but it is shorter to write.

// setInterval(()=>
//     elem4.hidden = !elem4.hidden, 1000);

//Attributes and properties
//When the browser loads a page, it "reads/parses" the HTML and generates DOM objects from it. For instance, if the tag is <body id="page">, then the DOM object has body.id = "page"

//HTML Attributes: in html, tags may have attributes. When rhe browser parses the HTML to create DOM objects for tags, it recogniizes standard attributes and creates DOM properties from them.If an attribute is non-standard, there won't be a DOM property for it. These are ways to access it:
// elem.hasAttribute(name) - checks for existence
// elem.getAttribute(name) -gets the value
// elem.setAttribute(name, value) - sets the value
// elem.removeAttribute(name) -removes the attribute
//--uncomment to test
//alert(document.body.getAttribute('something'))
// alert(elem1.getAttribute('About'))
// elem1.setAttribute(":Test", 123);
// alert(elem1.outerHTML);
// for (let attr of elem1.attributes) {
//   alert(`${attr.name}=${attr.value}`);
// }

//Non-standard attributes, dataset
//When writing HTML, we use a lot of standard attributrs. But what about non-standard, custom ones? They are used to pass custom data from HTML to JS or to "mark" HTML-elements for JS.
let user = {
  name: "Pete",
  age: 25,
};
for (let div of document.querySelectorAll("[show-info")) {
  //insert the corresponding info into the field'
  let field = div.getAttribute("show-info");
  div.innerHTML = user[field]; //first Pete into "name", then 25 into "age"
}

//But there may be a possible problem with custom attributes. This is why there exists data-* attributes. All attributes starting with data- are reserved for programmers use. They are available in the dataser property.
//alert(document.body.dataset.about) //Oranguntan

//Multiword attributes like data-order-state becomes camel-cased: dataset.orderState.

// console.log($('input').dataset) // DOMStringMap { testid: "Name" }
// console.log($('input').dataset.testid)

//Modifying the document
//DOM modification is the key to creating "live" pages.
//There is an example in the html, so now we are going to create the same div with JS assuming that the styles are in the HTML or an external css file
//CREATING AN ELEMENT
//To create DOM nodes, there are two methods:
//1. document.createElement(tag)
//Creates a new element node with the given tag:
let div = document.createElement("div");
//2.document.createTextNode(text) //creates a new text nodde with the given text:
let textNode = document.createTextNode("Here I am");

//Creating the message
//In our case the message is a div with alert class and the HTML in it:
let div2 = document.createElement("div");
div.className = "alert";
div.innerHTML = "<strong>Hi there!</strong> You are here again!";
//We created the element, but as of now it is only a variable.We can't see the element on the page, as it is not yet a part of the document.

//Insertion methods: To make the div show up, we need to insert it somewhere into the document. For instance in document.body

//There is a special method append for that:
document.body.append(div);

//There are other methods that provides more ways to insert:
/*node.append(...nodes or strings) - append nodes or strings at the end of node,
node.prepend(...node.prepend(...nodes, or strings) - insert nodes or strings at the beginning of node,
node.before(...nodes or strings) - insert nodes or strings before the node,
node.after(...nodes or strings* - insert nodes or strings after the node
node.replaceWit(...nodes or strings) - replaces node with the given node or strings*/

// insertion method - append, prepend, before, after (before, prepend), replaceWith
// newDiv
// allow us to insert (text, element, comment)
// div.before(newDiv) - previousSibling
// app.before(newDiv)
// div.prepend(newDiv) - firstChild
// app.prepend(newDiv)
// div.append (newDiv) - lastChild
// app.append (newDiv)
// app.after(newDiv) - nextSibling
//app.after(newDiv);

// ol.before("before"); //insert string "before" before <ol>
// ol.after("after");

// let liFirst = document.createElement("li");
// liFirst.innerHTML = "prepend";
// ol.prepend(liFirst);

// let liLast = document.createElement("li");
// liLast.innerHTML = "append";
// ol.append(liLast);

// div.before("<p>Hello</p>", document, createElement("hr"));

// document.createElement('element', options{is?}) - creates a new element
// const newDiv = document.createElement("div");
// newDiv.on("click", () => {
//   // console.log('click')
//   newDiv.remove();
// });

// insertAdjacentHTML/Text/Element(position, element)
// elem.insertAdjacentHTML(where, html);
// position - beforebegin, afterbegin, beforeend, afterend

// app.insertAdjacentHTML("beforebegin", newDiv.outerHTML);
// app.insertAdjacentElement("beforebegin", newDiv);
// app.insertAdjacentHTML('afterbegin', '<div>afterbegin</div>')
// app.insertAdjacentHTML('beforeend', '<div>beforeend</div>')
// app.insertAdjacentHTML('afterend', '<div>afterend</div>')
// div.insertAdjacentElement("beforebegin", "<p>Hello</p>");
// div.insertAdjacentElement("afterend", "<p>Bye</p>");
//This is how you can append arbitrary HTML to the page

//Node removal: To remove a node, there is a method: node.remove()
// element.remove()
// remove()
//--uncomment to test
// let div = document.createElement("div");
// div.className = "alert";
// div.innerHTML = "<strong>Hi again!</strong>This is you trying again?";

// document.body.append(div);
// setTimeout(() => div.remove(), 1000);

//cloning nodes: cloneNode
//Do you have to insert one more similar message?
// elem.cloneNode(true); //clones the message

//DocyumentFragment
//This is a special DOM node that serves as a wrapper to pass around lists of nodes. We can append other nodes to it, but when we insert it somewhere, then its content is inserted instead.
// const ul = document.createElement("ul");

// function getListContent() {
//   const fragment = new DocumentFragment();

//   for (let i = 0; i < 10; i++) {
//     const li = document.createElement("li");
//     li.textContent = `list item ${i}`;
//     fragment.append(li);
//   }

//   return fragment;
// }

// // ul.innerHTML = getListContent()
// ul.append(getListContent());

// app.append(ul);

// function getListContent() {
//   let fragment = new DocumentFragment();
//   for (let i = 1; i < 3; i++) {
//     let li = document.createElement("li");
//     li.append(i);
//     fragment.append(li);
//   }
//   return fragment;
// }
// ul.append(getListContent());
//it is rarely used explicitly.

//styles and classes
//className and classList
//changing a class is one of the most often used actions in scripts.
//if we assign something to elem.className, it replaces the whole string of classes. Sometimes that is what we need but often we want to add/remove a single class. Here, we now use elem.classList.
//The elem.classList is a special object with methods to add/remove/toggle a single class
// document.body.classList.add("article");
// alert(document.body.className);

/*elem.classList.add/remove('class) - adds/removes the class
elem.classList.toggle('class') - adds the class if it doesnt exist, otherwise removes it
elem.classList.contains('class')  - checks for the given class, returns true or false
//classList is iterable

//Element style
elem.style is used
elem.style.width = "100px" works the same as wudth: 100px;
For multiword property, the camelCase is used:
background-color => elem.style.backgroundColor 
z-index => zIndex etc*/
//Sometimes, we want to assign a style property and later remove it:
elem.style.display = "none";
//Then later, we may want to remove the style.display as if it were not set:
elem.style.display = "";

document.body.style.display = "none";

setTimeout(() => {
  (document.body.style.display = ""), 1000;
});

//uncomment to test
// document.body.style.margin = "20px";
// alert(document.body.style.margin);

// element.setAttribute('style', 'color: red;')

//If we want to know something about a set style, we use getComputedStyle
getComputedStyle(element, [pseudo]);

