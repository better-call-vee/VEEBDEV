import React, { useState } from "react";

function App() {
    const [count, setCount] = useState(0);

    // Arrow function to handle event
    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <p>Click count: {count}</p>
            <button onClick={handleClick}>Increase Count</button>
        </div>
    );
}
//we can pass parameters as well handleClick(...)
// but >>> {() => handleClick()}, like this
// When you use an arrow function in onClick, you're creating a new function that React can call later when the button is clicked.

export default App;
