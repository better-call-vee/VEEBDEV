/**
 * Node.js vs JavaScript:
 * - JavaScript is a language spec (ECMAScript) that runs in any JS engine.
 * - Node.js is a runtime built on V8 that lets you run JS outside the browser.
 * - Node.js provides modules (fs, http, etc.) & a package ecosystem (npm).
 */

/**
 * Single-thread vs Multi-thread:
 * - Single-thread: one call stack, executes tasks one at a time (e.g., JS in browsers).
 * Client needs to wait long here.
 * - Multi-thread: multiple call stacks, can run tasks in parallel (e.g., worker threads, Web Workers).
 * - Node.js itself is single-threaded but can delegate to libuv’s thread pool for I/O.
 */

/**
 * V8 Engine:
 * - Google’s open-source JavaScript engine written in C++.
 * - Compiles JS to optimized machine code (via TurboFan & Ignition).
 * - Exposes APIs to embed JS in native apps (used by Chrome & Node.js).
 */

/**
 * Server Threads & Blocking Behavior:
 * - Blocking: long-running sync code (e.g., fs.readFileSync) halts the event loop.
 * - Non-blocking: async I/O (e.g., fs.readFile) uses callbacks/promises, keeps the loop free.
 * - In multi-threaded servers (e.g., Java, C#), each request may get its own thread.
 * - Node.js handles many connections on one thread via event loop + non-blocking I/O.
 */
