function Person(name) {
  this.name = name;
  console.log(this); // Person {}
}

const temi = new Person("Temi");
console.log(temi.name); // Temi

class PersonClass {
  constructor(name) {
    this.name = name;
    console.log(this); // PersonClass { name: 'Temi' }
  }
}

const temi2 = new PersonClass("Temi");
console.log(temi2.name); // Temi

function add(a, b, c) {
  console.log(a, b, c);
  // anytime we do not have value for this in a function or object,
  // the value will be the global window variable
  // globalThis - node || window - browser
  console.log(this);
}

//call is a method available on all JavaScript functions. It allows you to call a function with a specified this value and arguments provided individually.
// add.call({ name: 'Temi' }); // { name: 'Temi' }
add.call({ name: "Temi" }, 1, 2, 3);
add.apply({ name: "Temi" }, [1, 2]);
//Here, add.call({ name: 'Temi' }, 1, 2, 3) and add.apply({ name: 'Temi' }, [1, 2]) both call the add function with the this value set to { name: 'Temi' }, and passing additional arguments 1, 2, 3 for the first call, and [1, 2] for the second call.
//apply is similar to call, but it takes arguments as an array. In your code, add.apply({ name: 'Temi' }, [1, 2]) achieves the same result as add.call({ name: 'Temi' }, 1, 2) but the arguments are provided as an array.
let demon = {
  a: 1,
  b: 2,
  add() {
    console.log(this.a + this.b);
    return this.a + this.b;
  },
};

const fire = {
  ...demon,
  a: 10,
  b: 20,
};

const water = {
  ...demon,
  a: undefined,
  b: undefined,
};

console.log(water);
water.add.call({ a: 99, b: 1 });
// water.add.apply({a: 99, b: 1})

fire.add(); // 30

demon.add(); // 3

const module2 = {
  x: 42,
  getX: function () {
    return this.x;
  },
};

const unboundGetX = module2.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// Expected output: undefined

//bind creates a new function that, when called, has its this keyword set to the provided value.
const boundGetX = unboundGetX.bind(module2);
console.log(boundGetX());

NodeList.prototype.on = NodeList.prototype.addEventListener = function (
  name,
  fn
) {
  this.forEach(function (elem, i) {
    elem.on(name, fn);
  });
};
//Here, boundGetX is a new function created by binding unboundGetX to module2. When boundGetX is called, this inside unboundGetX will refer to module2, so console.log(boundGetX()) will output 42, as module2.x is 42.