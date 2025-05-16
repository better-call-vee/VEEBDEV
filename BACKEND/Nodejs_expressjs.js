/*
 * Node.js is a Runtime Environment.
 * A Runtime is where your code runs—like a kitchen where recipes are executed.
 * Node.js lets you run JavaScript outside the browser (on your computer/server).
 * 
 * Node.js uses the V8 engine (the same engine Chrome uses) to execute JavaScript.
 * V8 turns JavaScript into machine code fast—like a super-efficient chef.
 * 
 * 
 * Node (environment) + js (JavaScript) + V8 (engine) = Node.js Runtime
 * 
 * 
 * Node.js is good at handling many requests at once—without blocking.
 * This is because it uses **Asynchronous Programming**.
 * 
 * 
 * Asynchronous = "Don’t wait, keep going."
 * Imagine a waiter takes an order and moves to the next customer
 * instead of standing still and waiting for the kitchen to finish cooking.
 * This makes the system fast and responsive.
 * 
 * Node.js uses an **Event Loop** to manage asynchronous tasks—like juggling many balls.
 * Examples: reading files, calling APIs, querying a database—all without waiting.
 * 
 * 
 * 
 * Express.js is a **framework** built on top of Node.js.
 * It simplifies building APIs and web servers—like using a recipe template.
 * 
 * With Express, you can define routes like:
 *   GET /users       -> list users
 *   POST /users      -> create a user
 *   PUT /users/:id   -> update a user
 *   DELETE /users/:id -> delete a user
 * 
 * 
 * Express Middleware = **middlemen** functions that run during the request-response cycle.
 * Think of middleware as kitchen staff prepping the order before the chef cooks it.
 * 
 * Middleware can:
 *   - log requests,
 *   - check authentication,
 *   - parse JSON body,
 *   - handle errors,
 *   - etc.
 * 
 * They run in order: (req) => middleware 1 => middleware 2 => ... => response
 * 
 * Example:
 *   app.use(authMiddleware);  // Check if user is logged in
 *   app.use(logMiddleware);   // Log the request
 *   app.get('/data', handler); // Send the data
 * 
 * 
 * So overall:
 *   Node.js = kitchen (runtime)
 *   V8 = the stove (engine that runs JS)
 *   Express.js = recipe book (framework)
 *   Middleware = sous-chefs/helpers
 *   Asynchronous = don’t wait—serve many customers at once
 */
