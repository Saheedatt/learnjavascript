//Private and protected properties and methods:
/*One of the most important principles of object oriented programming – delimiting internal interface from the external one. That is “a must” practice in developing anything more complex than a “hello world” app. To understand this, let’s break away from development and turn our eyes into the real world.
Private methods in object-oriented programming are like the hidden mechanisms inside a sophisticated device, allowing it to function seamlessly. Using the analogy of a coffee machine, think of private methods as the intricate components hidden within the machine, such as the precise mechanism controlling water flow or the algorithm for brewing the perfect cup.
In JavaScript, a private method is a function that is accessible only from within the class, and it is concealed from external access. These private methods play a crucial role in handling internal processes and details, ensuring that the external interface remains clean and easy to use.
Consider a coffee machine class with a private method for grinding coffee beans. The grinding process is an essential internal operation, but users interacting with the machine only need to press a button, unaware of the intricate details behind the scenes.

Let's implement a private method for our coffee machine class:
*/

class CoffeeMachine {
  _grindCoffeeBeans() {
    console.log("Grinding coffee beans...");
    // Additional logic for the grinding process
  }

  startBrewing() {
    this._grindCoffeeBeans(); // Calling the private method within the class
    console.log("Brewing coffee...");
    // Additional brewing logic
  }

  // Other public methods and properties...

  constructor(power) {
    this._power = power;
    console.log(`Created a coffee machine, power: ${power}`);
  }
}

/*
Here, _grindCoffeeBeans is a private method prefixed with an underscore (_). While JavaScript does not enforce this privacy convention, it serves as a clear indication to developers that the method should not be accessed from outside the class. Users interacting with the coffee machine can simply call the startBrewing method, abstracted from the complexities of the grinding process. The private method remains hidden, ensuring that the external interface remains user-friendly and focused on the essential functionalities.Just as the internal components of a device are shielded from users, private methods contribute to the encapsulation and abstraction principles in object-oriented programming, promoting a clean and secure design.
*/

/*READ-ONLY "POWER":
For power property, let's make it read-only. It sometimes happens that a property must be set at creation time only, and then never modified. To do so, we only need to make a getter, but not the setter*/
class CoffeeMachine1{
    //...
    constructor(power){
        this._power = power;
    }
    get power(){
        return this._power
    }
}
//create the coffee machine
let coffeeMachine1 = new CoffeeMachine1(100)
console.log(`Power is ${coffeeMachine1.power}W`);
coffeeMachine1.power = 25 //Error (no setter)

//Extending built-in classes:
// 1. Syntax for Extending a Built-in Class: To extend a built-in class, you use the class keyword and the extends keyword, similar to extending a custom class:
class CustomArray extends Array {
    // Custom methods and properties can be added here
}
//In this example, CustomArray is a new class that extends the built-in Array class.

//2. Creating Instances: Instances of the extended class are created in the same way as instances of the built-in class:
let customArray = new CustomArray(1, 2, 3);
console.log(customArray); // Output: [1, 2, 3]
//3. Adding Custom Methods: One common use case for extending built-in classes is to add custom methods:

class CustomArray extends Array {
    sum() {
        return this.reduce((total, current) => total + current, 0);
    }
}
let customArray = new CustomArray(1, 2, 3);
console.log(customArray.sum()); // Output: 6
//Here, the sum method is added to CustomArray to calculate the sum of its elements.

//4. Overriding Built-in Methods: You can also override built-in methods to provide custom behavior:
class CustomArray extends Array {
    push(value) {
        console.log(`Pushing value: ${value}`);
        super.push(value); // Call the original push method
    }
}

let customArray = new CustomArray();
customArray.push(42); // Output: Pushing value: 42
console.log(customArray); // Output: [42]
//In this example, the push method is overridden to log the value being pushed before calling the original push method using super.

//5. Considerations and Caveats:
//Constructor Behavior: When extending built-in classes, pay attention to how the constructor behaves. For example, Array expects numeric arguments for array length, so if you override the constructor, ensure compatibility.

//Iterating Over Properties: Be cautious when using for...in loops with extended built-in classes, as it may iterate over custom methods and properties along with the built-in ones.

//Compatibility with Other Code:Extending built-in classes may cause compatibility issues if other code assumes the default behavior of those classes.

//Prototype Chain: Extending a built-in class creates a new class that inherits from the built-in class. The prototype chain is essential to understand when dealing with method resolution and property access.
// Example: Let's create a simple example extending the Array class:
class CustomArray extends Array {
    doubleValues() {
        return this.map(value => value * 2);
    }
}

let customArray = new CustomArray(1, 2, 3);
console.log(customArray.doubleValues()); // Output: [2, 4, 6]
//In this example, the doubleValues method is added to the CustomArray class to double each element.

