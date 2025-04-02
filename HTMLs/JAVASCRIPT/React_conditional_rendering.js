// Useful when logic is more complex.
export default function App({ isLoggedIn }) {
    let greeting;

    if (isLoggedIn) {
        greeting = <h1>Welcome Back!</h1>;
    } else {
        greeting = <h1>Please Log In.</h1>;
    }

    return <div>{greeting}</div>;
}



// Concise and powerful. Best for short inline conditions.
export default function App({ age }) {
    return (
        <div>
            {age >= 18 ? (
                <h1>You can enter 🎟️</h1>
            ) : (
                <h1>You cannot enter 🚫</h1>
            )}
        </div>
    );
}


// && and ||
export default function ScoreBoard({ score }) {
    return (
        <div>
            {(score >= 90 && <h1>🏆 Excellent Score!</h1>) ||
             (score >= 60 && <h1>👍 Good Job</h1>) ||
             <h1>🚀 Keep Practicing</h1>}
        </div>
    );
}



// switch case and IIFE(Immediately invoked Function Expression)
export default function App({ userRole }) {
    return (
        <div>
            {(() => {
                switch (userRole) {
                    case "admin":
                        return <h1>👑 Admin Dashboard</h1>;
                    case "editor":
                        return <h1>📝 Editor's Panel</h1>;
                    case "user":
                        return <h1>👤 User Homepage</h1>;
                    default:
                        return <h1>🚪 Login Required</h1>;
                }
            })()}
        </div>
    );
}


// IIFE
/*
IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it’s defined.
In React’s JSX, it’s used to wrap statements (like if or switch) in an expression, since JSX only supports expressions.
This allows you to write complex logic inline without breaking out of JSX.
*/

//without IIFE
export default function ScoreBoard({ score }) {
    let message;

    // Complex logic handled outside JSX
    if (score >= 90) {
        message = <h1>🏆 Excellent Score!</h1>;
    } else if (score >= 60) {
        message = <h1>👍 Good Job</h1>;
    } else {
        message = <h1>🚀 Keep Practicing</h1>;
    }

    return <div>{message}</div>;
}


//WITH IIFE
export default function ScoreBoard({ score }) {
    let message;

    // Complex logic handled outside JSX
    if (score >= 90) {
        message = <h1>🏆 Excellent Score!</h1>;
    } else if (score >= 60) {
        message = <h1>👍 Good Job</h1>;
    } else {
        message = <h1>🚀 Keep Practicing</h1>;
    }

    return <div>{message}</div>;
}


