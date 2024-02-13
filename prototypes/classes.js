//In practice, we often need to create many objects of the same kind, like users, or goods, etc. New(from constructors) function czn help with tgat. But in JavaScript, we have a more advanced "class" construct, that introduces great new features that are useful for oop.

// class MyClass{
//     //class methods
//     constructor(){...}
//     method1(){...}
//     method2(){...}
//     method3(){...}
// }

//Then use new MyClass() to create a new object to be listed as part of the methods.The constructor() method is called automatically by neew, so we can initialize the object there. For example:
class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log(this.name);
  }
}
//Usage:
let user = new User("John");
user.sayHi();

/*When new User("John"):
1.A new object is created.
2. The constructor runs with the given argument and assigns this.name to it
...Then we can call object methods, such as user.sayHi(). 
NOTE: NO COMMA BETWEEN CLASS METHODS.*/

//Class Expression: Classes can be defined inside another expression, passed around, returned, assigned, et.
let Name = class {
  sayHello() {
    console.log("Hello");
  }
};
//Similar to named function expressions, class expressions may have a name. If it has a name, it is visible inside the class only.
//We can make juse of getter and setters in classes too:
class User1 {
  constructor(name) {
    //invokes the setter
    this.name = name;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    if (value.length < 4) {
      console.log("Name is too short.");
      return;
    }
    this._name = value;
  }
}
let user1 = new User1("John");
console.log(user1.name); //John
user1 = new User1(" "); // Name is too short.

//A quick summary of the above:
//1. Class Declaration: You declare a class using the class keyword. It's like a blueprint for creating objects.
class Animal0 {
  // class body goes here
}
//2. Constructor: The constructor method is a special method inside a class that gets called when you create a new object based on the class.
class Animal1 {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
}
//3. Properties: Properties are variables attached to objects. In the example above, 'name' and 'sound' are properties.

//4. Methods: Methods are functions attached to objects. They can perform actions related to the object. Here, we can add a method to make the animal make its sound:
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  makeSound() {
    console.log(`${this.name} says ${this.sound}!`);
  }
}
//5. Creating Objects:You can create new instances (objects) of the class using the new keyword:
let cat = new Animal("Cat", "Meow");
let dog = new Animal("Dog", "Woof");
//6. Using Objects: Once you have objects, you can use their properties and methods:
cat.makeSound(); // Cat says Meow!
dog.makeSound(); // Dog says Woof!

// Now we will talk about class inheritance.
//Class inheritance is a way for one class to extend another class. This means that we can create new functionality on top of the existing ones.The 'extends' keyword is used.
class Person {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed += speed;
    console.log(`${this.name}m runs with speed of ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} stands still.`);
  }
}
let person = new Person("My person");

//now to extend class
class Man extends Person {
  hide() {
    console.log(`${this.name} hides!`);
  }
}
let man = new Man("Alejo");
man.run(5); //Alejo runs with speed of 5.
man.hide(); //Alejo hides!

//To override a method or build on an existing method, we make use of the 'super' keyword.
//super.method(...) to call a parent method
//super(...) to call a parent constructor(inside our constructor only).
//For example, lets our man autohide when stopped:
class Animals {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed += speed;
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }

  stop() {
    this.speed = 0;
    console.log(`${this.name} stands still.`);
  }
}

class Rabbit extends Animals {
  hide() {
    console.log(`${this.name} hides!`);
  }

  stop() {
    super.stop(); // call parent stop
    this.hide(); // and then hide
  }
}

let rabbit = new Rabbit("White Rabbit");

rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.stop(); // White Rabbit stands still. White rabbit hides!

//Overriding constructor
//In JavaScript, when you have a child class that extends a parent class, you can override the constructor of the parent class in the child class. Overriding the constructor allows the child class to customize the initialization process while still taking advantage of the functionality provided by the parent class.
//Parent Class with Constructor: Start with a parent class that has a constructor:
class Reptiles {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    makeSound() {
        console.log(`${this.name} says ${this.sound}!`);
    }
}
//Child Class with Overridden Constructor: Create a child class that extends the parent class and overrides its constructor:
class Croc extends Reptiles {
    constructor(name, sound, breed) {
        super(name, sound); // Call the parent class constructor using super
        this.breed = breed;
    }

    growl() {
        console.log(`${this.name} growls loudly!`);
    }

    makeSound() {
        console.log(`${this.name} says growl!`); // Override the makeSound method
    }
}
//In this example, the Croc class overrides the constructor of the Reptiles class by defining its own constructor. The super(name, sound) line is crucial; it calls the constructor of the parent class (Reptile) and sets the name and sound properties. This ensures that the initialization logic from the parent class is still executed.

//Creating Objects from Child Class: Now, you can create instances of the child class, and the overridden constructor will be used:
let myCroc = new Croc('Hex', 'Growl', 'Golden');
console.log(myCroc.name); // Output: Hex
console.log(myCroc.breed); // Output: Golden 
//Here, when you create a Croc object, it initializes both the properties inherited from the Reptile class (via super) and the new property specific to the Croc class (breed).

//verriding constructors is useful when you need to customize the initialization process for instances of the child class while still utilizing the setup provided by the parent class.

/*If you override a constructor in a child class, it's generally a good practice to call the constructor of the parent class using the super keyword. This ensures that the initialization logic of the parent class is executed before any additional customization in the child class constructor.
class ChildClass extends ParentClass {
    constructor(/* parameters /) {
        super(/* parameters /); // Call the parent constructor
        // Additional child class initialization logic
    }
}
Avoid Unnecessary Overrides
*/

//Static properties:  static properties and methods are associated with a class itself rather than instances of the class. They are accessed using the class name rather than an instance of the class. Static properties and methods are useful for functionalities that belong to the class as a whole, rather than to individual instances.
class Article{
    static publisher = "Isha Konaei";
}
console.log(Article.publisher); //Isha Konaei

class MyClass {
    static myStaticProperty = 42;
}
console.log(MyClass.myStaticProperty); //42

//This is the same as a direct assignment to Article:
Article.publisher = "Isha Konaei";

//Static properties and methods are inherited. For instance, Animal.compare and Animal.planet in the code below are inherited and accessible as Rabbit.compare and Rabbit.planet:
class Animal {
    static planet = "Earth";
  
    constructor(name, speed) {
      this.speed = speed;
    this.name = name;
    }
  
    run(speed = 0) {
      this.speed += speed;
      console.log(`${this.name} runs with speed ${this.speed}.`);
    }
  
    static compare(animalA, animalB) {
      return animalA.speed - animalB.speed;
    }
  
  }
  
  // Inherit from Animal
  class Rabbit extends Animal {
    hide() {
      console.log(`${this.name} hides!`);
    }
  }
  
  let rabbits = [
    new Rabbit("White Rabbit", 10),
    new Rabbit("Black Rabbit", 5)
  ];
  
  rabbits.sort(Rabbit.compare);
  
  rabbits[0].run(); // Black Rabbit runs with speed 5.
  
  console.log(Rabbit.planet); // Earth
//Now when we call Rabbit.compare, the inherited Animal.compare will be called.

//Use cases for Static methods:
//1. Utility functions: Static methods are often used for utility functions that are related to the class but don't depend on a specific instance.
class MathOperations {
    static square(x) {
        return x * x;
    }
}

console.log(MathOperations.square(5)); //25
//2. Counters or constants: Static properties can be used to store constants or counters that are shared across all instances of the class.
class Counter {
    static count = 0;

    constructor() {
        Counter.count++;
    }
}

let obj1 = new Counter();
let obj2 = new Counter();

console.log(Counter.count); // Output: 2

//3. Factory Methods: Static methods can be used as factory methods to create instances of the class with specific configurations.
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static createOrigin() {
        return new Point(0, 0);
    }
}

let origin = Point.createOrigin();


