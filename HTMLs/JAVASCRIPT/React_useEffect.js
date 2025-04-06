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