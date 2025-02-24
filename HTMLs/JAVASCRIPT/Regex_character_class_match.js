/*
REGEX FUNDAMENTALS IN JAVASCRIPT
  - Character Class `[a-zA-Z0-9]`: Matches any **letter (uppercase/lowercase) or number**.
  - Caret (`^`): 
      - Inside `[]`: Negates the character class (e.g., `[^abc]` means "not a, b, or c").
      - Outside `[]`: Anchors the pattern to the **start of the string**.
  - `$`: Anchors the pattern to the **end of the string**.
  - `match()`: A **string method** that **returns an array** of matches found by a regex.
  - `test()`: A **regex method** that **returns true/false** if a pattern matches.
  - Flags:
      - `g` (global) → Finds **all** matches, not just the first one.
      - `i` (case-insensitive) → Ignores letter case.
*/

// Example 1: Extract **all alphanumeric characters** from a string
const alphanumericRegex = /[a-zA-Z0-9]/g;
const sampleText = "Hello@World!123";

console.log(sampleText.match(alphanumericRegex));
// Output: ["H", "e", "l", "l", "o", "W", "o", "r", "l", "d", "1", "2", "3"]
// Picks **only** letters and numbers, skipping special characters.

// Example 2: **Find all non-alphanumeric characters** using negation `[^...]`
const nonAlphanumericRegex = /[^a-zA-Z0-9]/g;
console.log(sampleText.match(nonAlphanumericRegex));
// Output: ["@", "!", " "] → Captures symbols and spaces **only**.

// Example 3: Use `^` to **check if a string starts** with "JavaScript"
const startsWithJavaScript = /^JavaScript/i; // `i` makes it case-insensitive
console.log(startsWithJavaScript.test("JavaScript is great!")); // Output: true
console.log(startsWithJavaScript.test("I love JavaScript!")); // Output: false
// Checks if the **beginning** of the string is "JavaScript" (case ignored).

// Example 4: Use `^` and `$` to check if a string is **fully alphanumeric**
const fullAlphanumericCheck = /^[a-zA-Z0-9]+$/;
console.log(fullAlphanumericCheck.test("hexCode567")); // true ✅
console.log(fullAlphanumericCheck.test("hex%Code567")); // false ❌
// Ensures the **entire string** contains only letters and numbers (no spaces or symbols).

// Example 5: Use `\d` (digit shortcut) with `test()` to check for **any number**
const containsNumber = /\d/;
console.log(containsNumber.test("XYZ456")); // Output: true ✅ (Contains "456")
console.log(containsNumber.test("NoNumbersHere")); // Output: false ❌
// `\d` is a **shortcut** for `[0-9]`, detecting any numeric digit.

