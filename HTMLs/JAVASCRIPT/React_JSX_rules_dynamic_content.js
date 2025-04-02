/*
JSX:
- JSX lets you write HTML inside JavaScript clearly and intuitively.
- It simplifies creating UI by mixing HTML structures with JavaScript logic directly.

Important JSX rules:
- JSX elements must be wrapped in one parent element (only one root element can be returned).
- HTML attributes use camelCase naming convention (e.g., `className` instead of `class`).
- Self-closing tags must have `/`, like `<img />` instead of `<img>`.

Why only one parent element?
React needs a single parent (wrapper) element because JSX translates to JS code that must return one single value. React can't return multiple sibling elements without wrapping.

Example without one parent (Incorrect):
-----------------------------------------
function App() {
  return (
    <h1>Hello</h1>
    <p>World!</p>
  );
}
-----------------------------------------
❌ This is invalid JSX (two sibling elements without parent).

Correct Example with single parent (`<div>`):
-----------------------------------------
function App() {
  return (
    <div> {/* parent wrapper */} /*
    <h1>Hello</h1>
    <p>World!</p>
  </div >
);
}


export default App;
-----------------------------------------
✅ Now it's valid JSX.

However, extra`<div>` wrappers can clutter HTML.React introduced Fragments(`<>...</>`) to avoid this.

Using React Fragment(empty tags):
- Fragment allows grouping multiple JSX elements without unnecessary extra nodes in the DOM.

Better Example with Fragment:
main code:
-----------------------------------------

import { useState } from "react";
import "./App.css";

function App() {
  const age = 23;

  return (
    <>
      {/* fragment as parent wrapper */} /*
      <h1>Hi, I'm learning React</h1>
      <p>I am a person aged {age}</p>{" "}
      {/* dynamic JS variable with curly braces */}
      <p>{age >= 18 ? "Adult" : "Minor"}</p>{" "}
      {/* dynamic conditional rendering */}
 /* </>
  );
}

export default App;

-----------------------------------------

    Why curly braces `{}` instead of template literals ?
        - JSX uses curly braces `{}` to embed JavaScript expressions easily.
- Unlike template literals, JSX directly allows JavaScript logic inside `{}` without `${}` syntax.

    Summary:
- Always wrap multiple JSX elements in one parent(either`<div>` or Fragment`<>...</>`).
- Use`{}` to insert JavaScript variables or logic directly inside JSX.
- Prefer Fragment `<></>` over extra `<div>` for cleaner HTML structure.
*/
