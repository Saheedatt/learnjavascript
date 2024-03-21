/*Dev creates a server for us to see our project running.
Build helps us to build our project for production purpose
pnpm run build will create a dist folder that is pointed to when you want to host your project on say netlify 
Your package.json should now have "build": "vite build"  */
//import something from somewhere  is a default import
//import {something} from somewhere is a named import
//import * as something from somewhere imports everything from a location

/*The difference between dependency and dev dependency is that the dev dependency are the packages you need only when you are building/developing e.g husky, prettier while a dependency is one that you need to run your projects e.g vite.*/


/*The DOM allows us to do anything with elements and their contents, but first we need to reach their corresponding DOM object. Let's discuss the parts of the tree:
On top: documentElement and body: These nodes are available directly as document properties:
<html> = document.documentElement ...first member of the family
<body> = document.body
<head> = document.head
//the document.body can be null ...EXPLAIN

Children: childNodes, firstChild, lastChild
child nodes or children are elements that are direct children i.e they are nested exactly in the given one. <head> and <body> are children of the <html> element.

descendants are all elements that are nested in the given one, including children, their children and so on. For example, the <body> children in the code below has <div> and <ul>(and a few blank text nodes) as desendants:
*/
<html>
    <body>
        <div> Begin </div>

        <ul>
            <li>
                <p>Available</p>
            </li>
        </ul>
    </body>
</html>
/* descendants of <body> are not only direct children <div>, <ul> but also their children <p> and <li> and text nodes - the entire subtree. 

The childNodes is a collection list of all child nodes, including text nodes and comments. This example code below will show you the children of document.body: */
for(let i = 0; i< document.body.childNodes.length; i++){
    alert(
        document.body.childNodes[i]
    ); //Text, DIV, text, ul, script
}
/* The firstChild/lastChild are properties that provide direct access to the first and last child. They are rarely used, because the childNodes collection provides more flexibility.

elem.hasChildNodes() returns true if elem has any children, and false otherwise. It's rarely used, because elem.childNodes.length == 0 is the same thing.

//DOM collections: As we can see, childNodes looks like an array but actually, it is a collection- a special array-like iterable object.There are 2 important things we can use on it:
*/
//1. We can use for..of to iterate over it:
for (let node of document.body.childNodes){
    alert(node); // shows all children from the collection
}
//2. Arra methods won't work on it. We can convert it to a real array using Array.from and then use them:
let array = Array.from(document.body.childNodes);
array.forEach(node => alert(node));
//Array.from converts it into a real array!
//The collection is live, meaning that if the DOM changes, it updates automatically. For instance, if we remove a node from the collection, it immediately disappears from it:
let body = document.body;
alert(body.childNodes.length); // shows 2
body.appendChild(document.createTextNode('text'));
alert(body.childNodes.length); // shows 3
//The collection is updated automatically!

//The DOM collections are read-only and even more - all navigation properties listed above are read only.
//We can't replace a child by something else by assigning childNodes[i] = ...
//DO NOT USE FOR..IN TO LOOP OVER A COLLECTION.
//How do you recognize a collection, you may ask?A collection is an object that has numeric indexes and length property. But it doesn't have array methods like push/pop or forEach. It also may have other properties and methods, but it's not an array. 

/*Siblings and the parent
Siblings are nodes that are childrn of the same parent. For example, head and body are siblings. body is said to be the "next" or "right" sibling of head, and head is the "previous" or "left" sibling of body.

The next sibling is in nextSibling property, and the previous one is in previousSibling. These properties are rarely used, because they also include text nodes and comments.

The parent node is available as parentNode. It's rarely used, because usually we know the parent from the context. But when we need to move up the tree, it's very convenient.

The parentElement property returns the "element" parent, while parentNode returns "any node" parent. In most cases, they are the same. But for document.documentElement, the parentElement is null, because it's not an element.
*/

/*The obvious difference between innerHtml and text content is that innerHTML allows you to insert HTML tags and text content, while textContent will return only the text content, without any HTML tags.*/


