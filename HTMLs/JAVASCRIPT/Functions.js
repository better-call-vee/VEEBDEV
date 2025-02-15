/*
FUNCTIONS IN JAVASCRIPT
   - A function is a reusable block of code that performs a specific task.
   - Functions can take inputs (parameters), process them, and return outputs.
   - Syntax: function keyword, name, parameters, body, and optional return statement.
*/

// Basic Function Syntax
function functionName(parameter1, parameter2) {
    // Code to execute
    return result; // Optional: Returns a value
  }
  
  // Example 1: Simple Function
  function greet(name) {
    return `Hello, ${name}!`; // String interpolation using template literals
  }
  console.log(greet("John")); // Output: Hello, John!
  
  /*
  PARAMETERS VS ARGUMENTS
     - Parameters: Variables listed in the function definition (placeholders).
     - Arguments: Actual values passed to the function when called.
  */
  function add(a, b) {
    return a + b; // Adds two numbers
  }
  const sum = add(5, 3); // 5 and 3 are arguments
  console.log(sum); // Output: 8
  
  /*
  MULTIPLE PARAMETERS
     - Functions can handle multiple parameters separated by commas.
  */
  function calculateArea(length, width) {
    return length * width;
  }
  console.log(calculateArea(4, 5)); // Output: 20
  
  /*
  RETURN STATEMENT
     - Use return to send a value back from the function.
     - If no return, the function returns undefined by default.
  */
  function isEven(num) {
    return num % 2 === 0 ? "Even" : "Odd"; // Conditional return
  }
  console.log(isEven(7)); // Output: Odd
  
  /*
  DIFFERENT TYPES OF PARAMETERS
     - Default Parameters: Assign default values to parameters.
     - Rest Parameters: Handle an indefinite number of arguments as an array.
     - Destructuring Parameters: Extract values from objects/arrays directly.
  */
  
  // Example 2: Default Parameters
  function multiply(a, b = 2) {
    return a * b;
  }
  console.log(multiply(5)); // Output: 10 (b defaults to 2)
  
  // Example 3: Rest Parameters
  function sumAll(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  console.log(sumAll(1, 2, 3, 4)); // Output: 10
  
  // Example 4: Destructuring Parameters
  function printDetails({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
  }
  const person = { name: "Alice", age: 25 };
  printDetails(person); // Output: Name: Alice, Age: 25
  
  /*
  ARROW FUNCTIONS
     - Compact alternative to traditional functions.
     - Implicit return for single-line functions.
     - No binding of 'this' (important in object methods/event handlers).
  */
  
  // Example 5: Arrow Function
  const square = (x) => x * x; // Implicit return
  console.log(square(4)); // Output: 16
  
  // Example 6: Arrow Function with Multiple Lines
  const checkNumber = (num) => {
    if (num > 0) return "Positive";
    else if (num < 0) return "Negative";
    else return "Zero";
  };
  console.log(checkNumber(-5)); // Output: Negative
  
  /*
  FUNCTION HOISTING
     - Functions declared with function keyword are hoisted (can be called before declaration).
     - Arrow functions and function expressions are not hoisted.
  */
  
  // Example 7: Hoisting
  console.log(hoistedFunction(3)); // Output: 9
  function hoistedFunction(x) {
    return x * x;
  }
  
  // Example 8: Non-Hoisted Function fExpression
  // console.log(nonHoisted(2)); // ReferenceError
  const nonHoisted = function (x) {
    return x * x;
  };
  
  /*
  IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)
     - Functions that run as soon as they are defined.
     - Useful for creating private scopes.
  */
  
  // Example 9: IIFE
  (function () {
    console.log("This runs immediately!"); // Output: This runs immediately!
  })();
  
  /*
  CLOSURES
     - A closure gives access to an outer function's scope from an inner function.
     - Used for data encapsulation and maintaining state.
  */
  
  // Example 10: Closure
  function createCounter() {
    let count = 0;
    return function () {
      count++;
      return count;
    };
  }
  const counter = createCounter();
  console.log(counter()); // Output: 1
  console.log(counter()); // Output: 2