/*
=====================================================================
VAR vs LET vs CONST (ES6)
=====================================================================
*/

// ---------------------
// 1. VAR 
// ---------------------
// - Function-scoped (limited to function) or globally-scoped
// - Hoisted to top of scope (accessible before declaration)
// - Can be redeclared and updated
// - Creates property on global object (window.varName)
// - Default initialization: undefined
var x = 10;
var x = 20; // Valid redeclaration

// ---------------------
// 2. LET 
// ---------------------
// - Block-scoped (limited to { } pairs)
// - Not hoisted (Temporal Dead Zone exists)
// - Cannot be redeclared in same scope
// - Can be updated/reassigned
// - No global object property created
let y = 30;
y = 40; // Valid reassignment
// let y = 50; // SyntaxError: Identifier 'y' has already been declared

// ---------------------
// 3. CONST 
// ---------------------
// - Block-scoped like let
// - Cannot be redeclared or updated (primitive values)
// - Must be initialized at declaration
// - No global object property created
const z = 60;
// z = 70; // TypeError: Assignment to constant variable

/*
=====================================================================
MUTABLE OBJECTS/ARRAYS WITH CONST
=====================================================================
*/
// CONST allows modification of object/array contents, but not reassignment
const person = { name: "Alice" };
person.age = 30; // Valid (property added)
person.name = "Bob"; // Valid (property updated)
// person = {}; // TypeError: Assignment to constant variable

const numbers = [1, 2, 3];
numbers.push(4); // Valid
numbers[0] = 10; // Valid
// numbers = []; // TypeError: Assignment to constant variable, same goes for object, we can
// change the property only, not the whole thing.

/*

=================================================================================
| Feature         | var               | let               | const               |
|-----------------|-------------------|-------------------|---------------------|
| Scope           | Function/global   | Block             | Block               |
| Redeclaration   | Allowed           | Not allowed       | Not allowed         |
| Reassignment    | Allowed           | Allowed           | Not allowed         |
| Hoisting        | Yes (undefined)   | No (TDZ)          | No (TDZ)            |
| Global property | Yes               | No                | No                  |
| Use case        | Legacy code       | Mutable variables | Immutable references|
*/