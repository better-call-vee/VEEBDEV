useEffect(() => {
  console.log('hello');
}, [state1, state2]);


/*
The useEffect() runs after initial render + whenever any dependency inside the array changes.

'hello' will log after the component’s initial render
useEffect always runs once after the component mounts (first render).

'hello' will log every time if state1 changes
React checks if state1 changed between renders; if it did, useEffect will re-run.

'hello' will log every time if state2 changes
Same as above but for state2.
*/


/**
 * useEffect Hook in React: Understanding Dependencies
 * 
 * The useEffect hook runs after the component renders and allows you to perform side effects like fetching data, logging, etc.
 * It accepts two arguments: 
 * - A function to run (the side effect).
 * - A dependency array that tells React when to re-run the effect.
 * 
 * Here's a breakdown of how useEffect works when provided with a dependency array:
 */

import React, { useState, useEffect } from 'react';

const ExampleComponent = () => {
  // State variables to demonstrate dependencies
  const [state1, setState1] = useState(0);
  const [state2, setState2] = useState(0);

  useEffect(() => {
    // This effect runs after every render where state1 or state2 changes
    console.log('hello');
  }, [state1, state2]); // The effect depends on state1 and state2

  return (
    <div>
      <h1>useEffect with Dependencies Example</h1>
      <p>State 1: {state1}</p>
      <p>State 2: {state2}</p>
      <button onClick={() => setState1(state1 + 1)}>Increment State 1</button>
      <button onClick={() => setState2(state2 + 1)}>Increment State 2</button>
    </div>
  );
};

export default ExampleComponent;

/**
 * Breakdown:
 * 1. **On the First Render**: The `useEffect` hook will run once after the component is mounted. So, you'll see 'hello' logged in the console.
 * 2. **When state1 Changes**: Every time `state1` is updated (by clicking the "Increment State 1" button), React checks if it changed. If it did, it runs the `useEffect` again and logs 'hello'.
 * 3. **When state2 Changes**: Similarly, when `state2` is updated (by clicking the "Increment State 2" button), the `useEffect` hook re-runs, logging 'hello'.
 * 
 * This allows you to run side effects only when certain data changes (like state1 or state2 in this case), which can improve performance and prevent unnecessary operations.
 * 
 * 
 * Mounting: useEffect runs when the component is first added to the DOM, and you can use it to set up your side effects.

Unmounting: useEffect can return a cleanup function that runs when the component is about to be removed from the DOM. This is crucial for cleaning up side effects like event listeners, network requests, or intervals to avoid memory leaks.


 */
