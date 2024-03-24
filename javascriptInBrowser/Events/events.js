/*An event is a signal that something has happened. All DOM  nodes generate such signals(but events are not limited to DOM).
Here is a list of the most useful DOM events just to take a look at:
MOUSE EVENTS+
+
- click - when the mouse clicks on an element(touchscreen devices generate it on a tap)
- contextmenu - when the mouse right-clicks on an element
- mouseover/mouseout - when the mouse cursor comes over/leaves an element
- mousedown/ mouseup- when the mouse button is pressed/ released over an element
mousemove - when the mouse is moved.

FORM ELEMENT EVENTS
submit - when the visitor submits a <form>
focus - when the visitor focuses on an element, e.g <input>

KEYBOARD EVENTS
keydown and keyup - when the visitor presses and then releases the button.

DOCUMENT EVENTS
DOMContentLoaded - when the HTML is loaded and processed, DOM is fully built

CSS EVENTS
transitioned - when a CSS-animation finishes.

There are others but we will pause for now

EVENT HANDLERS:
T
o react on events, we can assign a handler- a function that runs in case of an event. There are different ways to assign a handler and they include:
1. HTML- attribute- A handler can be set in html with an attribute named on<event> e.g
<button onclick="handleClick()">Click me</button>
On mouse click, the code inside onclick runs
e.g:
<script>
function countRabbits(){
  for(let i = 1; 1<=3; i++){
    alert("Rabbit number " + i);
  }
}
</script>
<input type = "button" onclick="countRabbits()" value = "Count rabbits!">

2. DOM property: We can assign a handler using a DOM property on<event>
elem.onclick = function()
button.onclick = handleClick

As there is only one onclick property, we can't assign more than one event handler.

Possible mistakes:
a.The function should be assigned as say doThis, not doThis()
-Right: button.onclick = doThis;
-Wrong: button.onclick = doThis();
The parentheses doThis() is a function call.This will return undefined in this case.
But if you are writing it in html, you need the parentheses.
b. Use functions, not strings. 
c. Do not use setAttribute for handlers
d. DOM-property case matters: elem.onclick, not elem.ONCLICK. DOM properties are case sensitive.

3. addEventListener:
The fundamental problem with the earlier mentioned ways is that we can't assign multiple handlers to one event.
The use of addEventListener and removeEventListener solves this problem.
The syntax is:
element.addEventListener(event, handler[, options]);
event name e.g click
handler - the function
options- additional optional object with properties.
*/

/*Event object: Some properties of event object
a. event.type - type here is click
b. event.currentTarget:- element that handled   the event. That is exactly the same as this, unless the handler is an arrow function, or its this is bound to something else, then we can get the element from event.currentTarget.
c. event.clientX/ event.clientY: Window-relative cordinates of the cursor, for mouse events.
*/