// try-catch-throw-finally: Handling Errors Smartly in JS

// Imagine you're commanding a troop in Clash Royale,
// and something unexpected happens—maybe your Wi-Fi drops!
// You can't let the entire game crash; instead, you handle it smartly.

// 1. try: The risky attack (code that might fail).
// 2. catch: Backup plan if something fails (handles the error).
// 3. throw: Manually signaling something went wrong (raising custom errors).
// 4. finally: Cleanup after the attack, success or fail (runs always).

// Example with clear scenario:

function deployTroop(troopName) {
    try {
        if (!troopName) {
            // No troop selected? Throw custom error.
            throw new Error("No troop selected! Deploy failed.");
        }
        console.log(`Deploying ${troopName} into battle!`);

        // Let's intentionally cause an error (like network issue).
        if (troopName === "Goblin") {
            throw new Error("Network unstable! Goblin lost.");
        }

        console.log(`${troopName} deployed successfully.`);
    }
    catch (error) {
        // Catching any error from the try block
        console.log(`Caught Error: ${error.message}`);
    }
    finally {
        // Runs irrespective of success or failure
        console.log("Troop deployment phase completed.");
    }
}

// Successful scenario
deployTroop("Knight");
// Output:
// Deploying Knight into battle!
// Knight deployed successfully.
// Troop deployment phase completed.

// Error scenario - intentional error
deployTroop("Goblin");
// Output:
// Deploying Goblin into battle!
// Caught Error: Network unstable! Goblin lost.
// Troop deployment phase completed.

// Error scenario - no troop selected
deployTroop();
// Output:
// Caught Error: No troop selected! Deploy failed.
// Troop deployment phase completed.

// Key Takeaways:
// - try block: place risky code that might throw an error.
// - catch block: catches thrown errors, lets your app continue gracefully.
// - throw keyword: create custom errors when conditions aren't met.
// - finally block: executes always, perfect for cleanup or logging.
