export function setupCounter(element) {
  let counter = 0;
  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `count is {counter}`;
  };
  //console.log(element.on)
  element.on("click", () => setCounter(counter + 1));
  setCounter(0);
}


/*Giving a quick breakdown to refresh our JS basics knowledge:
1. let counter =0 initializes a variable counter to 0
Recall that wuthout an initialization, the counter will be underfined, leading to errors when used in the setCounter function.
2. const setCounter = (count) =>{...} functin to update counter
3. counter = count assigns the new count value
4. element.innerHTML = `count is ${counter}`; // Update the element's content with the current count
5. element.addEventListener('click', () => setCounter(counter + 1)); // Add a click event listener
// When clicked, it increments the counter and calls setCounter
6. setCounter(0); // Initially set the counter to 0 (optional, could be done within setCounter)

//The export type used is a named export.
*/