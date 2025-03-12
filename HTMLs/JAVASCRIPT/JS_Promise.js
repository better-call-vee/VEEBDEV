// Promise - A future task that either succeeds (resolve) or fails (reject)
// Think of it like ordering food online:
// If restaurant accepts order → resolve (success)
// If rejects due to out-of-stock → reject (failure)
// resolve and reject are callback functions provided by the JavaScript Promise API itself.
// resolve: Call this if the task succeeds (promise fulfilled).
// reject: Call this if the task fails (promise rejected).

const fetchData = () => {
    return new Promise((resolve, reject) => {
        const status = true; // order status
        if (status) {
            // Restaurant accepted the order (resolve)
            resolve({ name: "hero" });

            // Another common way:
            // const mockData = { json: () => Promise.resolve({ name: "hero" }) };
            // This mimics a fetch response object:
            // json() returns another promise resolving data {name: "hero"}
            // resolve(mockData);
        } else {
            // Restaurant rejected the order (reject)
            reject("server error");
        }
    });
};

fetchData()
    .then(res => {
        console.log(res);
        // Output if resolved: { name: "hero" }
        return res; // passing data to next .then()
    })
    .then(data => {
        console.log(data);
        // Output same data again: { name: "hero" }
    })
    .catch(err => {
        console.log(err);
        // If rejected, logs error: "server error"
    });

// What's happening here clearly:
// 1. fetchData returns a promise immediately
// 2. If promise resolves:
//    - .then(res => ...) executes first
//    - returned value from first .then() passed to next .then()
// 3. If promise rejects:
//    - skips .then(), directly goes to .catch()

// Promise.all - Handling multiple Promises simultaneously
// Imagine ordering from multiple restaurants together.
// You want food ONLY if ALL restaurants accept your order.

// Let's take multiple URLs (restaurants)
const urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3'
];

// Promise.all waits until ALL promises resolve or any one rejects
Promise.all(
    urls.map(url => fetch(url).then(res => res.json()))
)
    .then(dataArray => {
        console.log(dataArray);
        // Outputs an array of results only if ALL succeed:
        // [{...}, {...}, {...}]
    })
    .catch(err => {
        console.log(err);
        // If ANY fetch fails, immediately logs the error
    });

// Key Takeaways:
// - Promise has two outcomes: resolve(success) or reject(failure)
// - .then() handles resolved promises; .catch() handles rejected promises
// - Promise.all handles multiple promises together
// - If all succeed → returns array of results
// - If even one fails → immediately triggers .catch()
// - follow the html file for better insights
