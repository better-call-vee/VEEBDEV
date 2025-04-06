// App.jsx
import React, { useState } from 'react';
import NameInput from './NameInput';
import Greeting from './Greeting';

export default function App() {
    const [name, setName] = useState('');

    // 🔼 state is lifted up here in App.jsx so both child components can share it

    return (
        <>
            <NameInput name={name} setName={setName} />
            <Greeting name={name} />
        </>
    );
}



// NameInput.jsx
export default function NameInput({ name, setName }) {
    return (
        <input
            value={name}
            onChange={(e) => setName(e.target.value)} // 🔄 change is reflected back to App
        />
    );
}



// Greeting.jsx
export default function Greeting({ name }) {
    return <h1>Hello, {name} 👋</h1>; // 🗣️ reads shared state
}


/*
Think of state like a whiteboard. If two kids want to draw on the same board, 
the board needs to be in the same room — i.e., the shared parent.
*/