// Closure: Function that remembers its creation environment

// Example 1: Basic closure
function createCounter() {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    };
}

const counter1 = createCounter();
counter1(); // 1
counter1(); // 2

const counter2 = createCounter();
counter2(); // 1 (separate closure)

// Example 2: Closure with parameters
function wrestlerName(firstName) {
    return function (lastName) {
        console.log(`${firstName} ${lastName}`);
    };
}

const john = wrestlerName("John");
john("Cena"); // John Cena
john("Mystery"); // John Mystery

// Key Mechanism:
// Inner function preserves access to outer scope variables
// Even after outer function has finished executing

// Memory Implications:
// Closures keep outer variables alive longer than normal
// Can cause memory leaks if not managed properly

// Practical Use Cases:
// 1. Data encapsulation (private variables)
// 2. Factory functions
// 3. Callbacks/state preservation
// 4. Module patterns
