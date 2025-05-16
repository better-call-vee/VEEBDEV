/*

Feature                	console.log()	                     console.dir()
Main Purpose	       General logging	                   Inspecting objects
Output Formatting	May include metadata or expand	       Focused only on object structure
Customization	            Minimal	                       Allows depth and color settings (Node.js)
Browser Behavior	Pretty similar to console.dir()	       Slight difference, but subtle in Chrome

*/

/**
 *
 * - console.log(): Used for general logging. Displays strings, variables, or objects.
 *   Objects appear as expandable trees in most consoles.
 *
 * - console.dir(): Specifically for inspecting object structures. 
 *   Ideal for deep or complex objects. Allows options like { depth, colors } in Node.js.
 *
 * Use console.dir() when you want a clean view of an object’s properties.
 * Use console.log() for general-purpose debugging and messaging.
 */

// Example:
const user = { name: "Alice", age: 25, address: { city: "Delhi", zip: "110001" } };

console.log("Using console.log:");
console.log(user);

console.log("Using console.dir:");
console.dir(user, { depth: null, colors: true });
