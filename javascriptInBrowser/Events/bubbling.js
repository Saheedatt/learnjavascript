//BUBBLING, CAPTURING AND DELEGATION

/*Bubbling:
When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.
Bubbling is an event propagation mechanism in which an event triggered on a specific element will first propagate up through its ancestors in the DOM hierarchy, triggering handlers attached to those elements along the way.
Suppose you have a nested structure of HTML elements, such as <div> inside another <div>. If you attach a click event listener to the inner <div>, and then click inside it, the event will bubble up through the DOM hierarchy, triggering any click event listeners attached to parent elements as well.

Bubbling flows from the target element to its ancestor
The element you click on is event.target
*/
<form onclick="alert('form')">
  FORM
  <div onclick="alert('div')">
    DIV
    <p onclick="alert('p')">P</p>
  </div>
</form>;
/*A click on the inner <p> first runs onclick:
1. On that <p>
2. The on the outer <div>
3. Then on the outer <form<
4. And so on upwards till the document object.
So if we click on <p>, then we will see 3 alerts: p -> div -> form

Almost all evenets bubble. 'FOCUS' does not bubble

Difference between event.target and event.currentTarget is:
1. event.target, event.currentTarget remains constant throughout the event propagation phase. It always points to the element to which the event listener was initially bound.
2. event.currentTarget is often used when you want to refer to the element that hosts the event listener. It's useful for scenarios where you want to apply event handling logic based on the container or parent element rather than the specific child element that triggered the event.
3. event.target identifies the element where the event originated, while event.currentTarget identifies the element that currently handles the event.   
*/
//Stopping Bubbling:
//event.stopPropagation() stops the bubbling process
document.querySelector("p").onclick = function (event) {
  alert("P");
  event.stopPropagation();
};
//event.stopPropagation() stops the move upwards, but on the current Element, all other handlers will run.
//event.stopImmediatePropagation() stops the bubbling and prevents any other handlers from running.
//There is no need to stop bubbling except it is important.



//You cannot use 'this' in arrow function because arrow functins do not remember their context of their execution. They inherit it from the surrounding code(the global this);

/*Capturing:
Capturing is the event propagation mechanism in which an event triggered on a specific element will propagate down through its ancestors in the DOM hierarchy, triggering handlers attached to those elements along the way.  In contrast to bubbling, if you attach a click event listener to the document root, and then click inside a deeply nested element, the event will first trigger the listener attached to the document, then proceed down through the DOM tree to reach the target element.
Capturing flows from the document root towards the target element.
The standard DOM Events describes 3 phases of event propagation:
1. Capturing phase: The event goes down to the element.
2. Target phase: The event reached the target element.
3. Bubbling phase: The event bubbles up from the target.
To catch an event on the capturing phase, we need to set the handler cpature option to true:
*/
elem.addEventListener("click", handler, true);
elem.addEventListener(...highlight,{capture:true});

/*Event delegation: Capturing and bubbling allows us to implement one of the most powerful event handling patterns called event delegation.The idea is that if we have a lot of elements handled in a similar way, then instead of assigning a handler to each of them, we put a single handler on their common ancestor.
body.on('click',(e)=>{
  console.log(e.target.tagName);
  if(e.target.tagName=='BUTTON'){
    console.log('button clicked');
  }
});
*/
/*
preventDefault:
event.preventDefault() stops the default action of the event from happening.
In JavaScript, preventDefault() is a method attached to the Event object that allows you to intercept and halt the default behavior of a specific event. When certain events occur in a web browser, like clicking a link or submitting a form, the browser performs predefined actions. preventDefault() gives you the power to override these default actions and create custom functionality for your web application.

Common Use Cases:
1.Form Validation: When a user submits a form, the default behavior is to refresh the page. You can use preventDefault() to stop this from happening and perform validation checks on the form data first. If the validation fails, you can display error messages and keep the user on the same page.
2. Custom Form Handling: You might want to handle form submissions through JavaScript (e.g., using AJAX) instead of the default browser refresh. preventDefault() lets you capture form data and submit it using your own methods.
3. Preventing Link Jumps: Sometimes, you might have links that trigger actions within your web page without navigating to a new URL. preventDefault() is essential in these scenarios to stop the default link behavior and execute your custom JavaScript code.
4. Custom Menu Interactions: You can create dropdown menus that open or close based on user interactions without causing a full page reload. preventDefault() helps achieve this behavior by preventing the default anchor tag click action.

How to Use preventDefault():
1. Attach an Event Listener: Use addEventListener() to listen for the specific event you want to control. Here are some common events:
click (for buttons, links, etc.)
submit (for forms)
keydown, keyup, keypress (for keyboard interactions)
Many more event types exist for various user interactions
2. Call preventDefault() Within the Event Handler: Inside the function attached to the event listener, call event.preventDefault() to prevent the default behavior. The event object is automatically passed as an argument to the event handler function.

Example (Form Validation):*/

const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Your form validation logic here
  const name = document.getElementById('name').value;
  if (name === '') {
    alert('Please enter your name!');
    return; // Exit the function if validation fails
  }

  // If validation passes, submit the form using your custom method (e.g., AJAX)
  // ...
});

//Not All Events Are Cancelable: Check the event.cancelable property to ensure the event can be prevented by preventDefault(). Some events (like those dispatched with EventTarget.dispatchEvent(event, false)) might not be cancelable.
//Stops Default Action, Not Event Propagation: preventDefault() only stops the default behavior, not the event itself from propagating through the DOM tree. Use event.stopPropagation() to prevent further bubbling up of the event after handling it.
//Consider User Experience: While preventDefault() offers control, use it thoughtfully. If users expect a certain default behavior (like a link opening a new page), provide a clear alternative or indication that the interaction is handled differently.


//Custom Events in JavaScript:Custom events are a powerful tool in JavaScript that enable you to create your own event types and trigger them programmatically within your web application. This allows for better communication between different parts of your code, promoting modularity and reusability.

//There are two main ways to create custom events:
//1. Using the Event Constructor (Basic):
const myEvent = new Event("my-custom-event"); 

//This approach offers a simple way to create a custom event with just the event name. However, it has limitations:
//No Data Passing: You cannot attach data to the event for the listener to access.

//2. Using the CustomEvent Constructor (Advanced):
const myEvent1 = new CustomEvent("my-custom-event", {
  detail: { // Optional data object
    message: "Hello from the custom event!",
  },
  bubbles: true, // Whether the event propagates (default: false)
  cancelable: true, // Whether the event can be prevented (default: false)
});
//The CustomEvent constructor provides more flexibility:
//1. Data Passing: You can include a detail property as an object to pass data along with the event.
//2. Event Bubbling: The bubbles property determines if the event bubbles up the DOM tree to parent elements (default is false).
//3. Event Cancellation: The cancelable property allows listeners to call event.preventDefault() to stop the default behavior (if applicable).

//Use Event for simple communication where you don't need data or specific bubbling behavior.
//Use CustomEvent when you need to pass data, control bubbling, or enable cancellation.

//Dispatching Custom Events:
//Once you have your custom event, you need to dispatch (trigger) it from an element or object:
const button = document.getElementById("myButton");

button.addEventListener("click", () => {
  document.dispatchEvent(myEvent); // Dispatch the event
});

//Now you can listen for your custom event on any element:
const targetElement = document.getElementById("targetElement");

targetElement.addEventListener("my-custom-event", (event) => {
  console.log("Custom event received!");
  console.log("Data:", event.detail); // Access data if included
});