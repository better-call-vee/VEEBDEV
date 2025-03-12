// Interview Question Answers on JSON_PLACEHOLDER and API

// 1) What is an API?
// API (Application Programming Interface) is like a waiter in a restaurant. You, as a user, make a request to the API (waiter), and the waiter serves 
// the data or performs an action based on your request. APIs allow different software systems to communicate with each other by providing 
// endpoints (URLs) that define how data or services can be accessed.


// 2) What are the HTTP methods supported by REST?
// REST (Representational State Transfer) uses standard HTTP methods to perform actions on resources:
// - GET: Retrieve data
// - POST: Create new data
// - PUT: Update existing data (completely replace)
// - PATCH: Update existing data (partially modify)
// - DELETE: Remove data

// These methods interact with resources in a RESTful web service.


// 3) Can you use GET request instead of PUT to create a resource?
// No, GET is used to retrieve data, not to create resources. To create a resource, you should use POST, as it is specifically designed 
// for creating new data. PUT and PATCH are used to update or modify existing resources.


// 4) What is the difference between PUT and POST?
// PUT is used to update an existing resource or create it if it doesn't exist, replacing the entire resource.
// POST is used to create new resources on the server. In essence, PUT replaces an entire resource, whereas POST adds a new resource.
// Example: PUT updates an entire profile, while POST creates a new profile.


// 5) What is JSON?
// JSON (JavaScript Object Notation) is a lightweight format for storing and exchanging data. It represents data as key-value pairs and arrays.
// It's easy to read and write for humans, and easy to parse and generate for machines. JSON is language-independent but uses conventions familiar 
// to programmers of JavaScript, Python, and other languages.


// 6) What are CRUD operations?
// CRUD stands for Create, Read, Update, Delete. These are the basic operations performed on data in a database or API:
// - Create: Add new data (POST)
// - Read: Retrieve existing data (GET)
// - Update: Modify existing data (PUT/PATCH)
// - Delete: Remove data (DELETE)


// 7) What is the file extension of JSON?
// The file extension for a JSON file is `.json` (e.g., `data.json`).


// 8) What are the data types supported by JSON?
// JSON supports the following data types:
// - String: Text data (e.g., "Hello")
// - Number: Integer or floating-point numbers (e.g., 123, 45.67)
// - Object: Key-value pairs (e.g., { "name": "John", "age": 30 })
// - Array: Ordered list of values (e.g., [1, 2, 3, 4])
// - Boolean: true or false (e.g., true)
// - Null: Represents no value (e.g., null)


// 9) What is the role of `JSON.stringify`?
// `JSON.stringify()` converts a JavaScript object into a JSON string. It's typically used when sending data to a server or saving data 
// in local storage. It allows you to transform objects into a text-based format that can be transmitted or stored.

const person = { name: "John", age: 30 };
const jsnstr = JSON.stringify(person);
console.log(jsnstr); // '{"name":"John","age":30}'


// 10) Show how to parse a JSON
// To parse a JSON string into a JavaScript object, we use `JSON.parse()`. This allows us to convert the JSON data we receive from 
// the server back into a usable JavaScript object.

const jsnstr2 = '{"name":"John","age":30}';
const parsedObject = JSON.parse(jsnstr2);
console.log(parsedObject); // { name: 'John', age: 30 }


// 11) Tell us the difference between GET and POST
// GET is used to request data from a server without modifying anything. It's safe and idempotent, meaning it doesn't change the state
// of the server and can be repeated without side effects. Data is sent via the URL, so it's visible in the browser's address bar.
// POST, on the other hand, is used to submit data to the server, usually to create new data. It is not idempotent, meaning calling it
// multiple times can result in different outcomes (e.g., creating multiple new records). Data is sent in the body of the request,
// making it more secure than GET for sensitive data.
