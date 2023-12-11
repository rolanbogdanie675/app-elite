/* 
   Filename: ComplexCode.js
   Content: Complex code demonstrating advanced JavaScript concepts and functionality
*/

// Code starts here
(function() {
  // Define a class
  class Shape {
    constructor(name, sides) {
      this.name = name;
      this.sides = sides;
    }

    // Instance method
    getDescription() {
      return `I am a ${this.name} with ${this.sides} sides.`;
    }

    // Static method
    static sayHello() {
      return "Hello!";
    }
  }

  // Subclass
  class Square extends Shape {
    constructor(sideLength) {
      super("Square", 4);
      this.sideLength = sideLength;
    }

    // Override parent method
    getDescription() {
      return `${super.getDescription()} Each side of mine is ${this.sideLength} units long.`;
    }

    // Getter
    get area() {
      return Math.pow(this.sideLength, 2);
    }

    // Setter
    set area(newArea) {
      this.sideLength = Math.sqrt(newArea);
    }
  }

  // Create instances
  const square1 = new Square(5);
  const square2 = new Square(8);

  console.log(square1.getDescription());
  console.log(square2.getDescription());
  console.log(square1.area);
  console.log(square2.area);

  square2.area = 64;
  console.log(square2.sideLength);

  // Higher-order function
  function operate(func, ...args) {
    return function() {
      const result = func(...args);
      console.log(`Function '${func.name}' executed with arguments ${args}. Result: ${result}`);
    }
  }

  // Function composition
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => a / b;

  const addAndMultiply = (a, b, c) => multiply(add(a, b), c);
  const subtractAndDivide = (a, b, c) => divide(subtract(a, b), c);

  const operation1 = operate(addAndMultiply, 2, 3, 4);
  const operation2 = operate(subtractAndDivide, 10, 5, 2);

  operation1();
  operation2();

  // Async/Await
  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function executeAsync() {
    console.log("Async function starting...");
    
    await delay(2000);
    console.log("Async operation 1 completed.");

    await delay(1000);
    console.log("Async operation 2 completed.");

    console.log("Async function finished.");
  }

  executeAsync();

  // Code ends here
})();
