import React, { useState } from "react";

// Think of React components as wrestling rings
// - useState is your championship belt (essential tool)
// - State is the wrestler's current status (energy, moves, position)
// - setCount is the referee updating the scoreboard

const styles = {
    container: {
        textAlign: "center",
        padding: "2rem",
        backgroundColor: "ash",
        minHeight: "100vh",
    },
    countDisplay: {
        fontSize: "4rem",
        color: "#61dafb",
        margin: "1rem 42rem",
        textShadow: "0 0 10px rgba(97, 218, 251, 0.5)",
    },
    button: {
        padding: "1rem 2rem",
        fontSize: "1.5rem",
        backgroundColor: "#61dafb",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "transform 0.2s",
        margin: "0 0.5rem",
    },
};

function CounterExample() {
    // Create a "state cage" for our count
    // useState(0) = Initial count (0) enters the wrestling ring
    const [count, setCount] = useState(0); // if useState(33), it will show 33 as count

    // 🤼 ACTION HANDLER
    const handleAdd = () => {
        // 🧠 Calculate new state FIRST before updating
        const newCount = count + 1;

        // 🚦 setCount is the referee that:
        // 1. Updates the score (state)
        // 2. Signals for a re-render (ringside bell)
        setCount(newCount); // without referee(setCount), you can never change the count.
    };

    return (
        <div style={styles.container}>
            {/* 🏆 CURRENT STATE DISPLAY */}
            <div style={styles.countDisplay}>
                {count} 👊 {/* WWE-style emoji */}
            </div>

            {/* 🎯 EVENT TRIGGER: Button is like a wrestler's attack button */}
            <button
                onClick={handleAdd}
                style={styles.button}
                onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
                onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
            >
                SMASH!
            </button>
        </div>
    );
}

export default CounterExample;

//The useState(builtin function) hook provides the state container (count) and
// updater function (setCount), while setCount executes the actual state change.
