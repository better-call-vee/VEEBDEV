// Single-Threaded Language - JavaScript
// JS works like an army of disciplined ants 🐜
// Each ant completes its task before the next one starts

console.log("First");
console.log("Second");
console.log("Third");
// Output:
// First
// Second
// Third
// Executes line by line, one at a time

// Synchronous vs Asynchronous
// Synchronous - Executes in order, blocking the next task until finished
console.log("Task 1");
console.log("Task 2");
// Runs Task 1, then Task 2 - No skipping, no waiting

// Asynchronous - Handles long tasks without stopping everything
console.log("Start");
setTimeout(() => {
    console.log("We yeeted after 3 seconds, bruh");
}, 3000); // setTimeout waits 3 seconds, then runs
console.log("End");
// Output:
// Start
// End
// (After 3s) We yeeted after 3 seconds, bruh
// JS doesn’t wait for setTimeout, moves to next task instead

// How it works:
// 1. Synchronous code runs first
// 2. Asynchronous tasks (like setTimeout) go to a separate queue
// 3. Once synchronous tasks are done, async tasks execute

// fetch() makes JS asynchronous
console.log("Fetching data...");
fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(data => console.log(data));
console.log("Moving to the next task...");
// Output:
// Fetching data...
// Moving to the next task...
// (After some time) {userId: 1, id: 1, title: "...", completed: false}
// JS doesn’t wait for fetch, it continues executing

// Key Takeaways:
// - JS runs one task at a time (single-threaded)
// - Synchronous = Blocking, waits for each task to finish
// - Asynchronous = Non-blocking, keeps running other tasks while waiting
// - setTimeout() delays execution, doesn’t stop the main flow
// - fetch() makes API calls without freezing the page
