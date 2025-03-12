// 🎬 Encapsulation 
class Wrestler {
    #secretMove = "People's Elbow"; // Private field
    stamina = 100; // Public field

    // Private method
    #calculateEnergyCost(move) {
        return move.length * 10;
    }

    performMove() {
        this.stamina -= this.#calculateEnergyCost(this.#secretMove);
        console.log(`Performed ${this.#secretMove}, remaining stamina: ${this.stamina}`);
    }
}

const rock = new Wrestler();
rock.performMove(); // Output: "Performed People's Elbow, remaining stamina: 90"
// console.log(rock.#secretMove); // Error! Private field

// Case 1: Global Context
console.log(this); // Output: Window (global object)

// Case 2: Event Handler
// const button = document.createElement('button');
// button.textContent = "Click Me";
// button.addEventListener('click', function () {
//     console.log(this); // Output: <button> element
// });

// Case 3: Class Method
class SoccerPlayer {
    constructor(name) {
        this.name = name; // 'this' points to instance
    }

    shoot() {
        console.log(`${this.name} shoots!`);
    }
}

const messi = new SoccerPlayer("Messi");
messi.shoot(); // Output: "Messi shoots!"


//example 
class BankAccount {
    #balance = 0; // Private field

    deposit(amount) {
        this.#balance += amount;
        console.log(`New balance: ${this.#balance}`);
    }

    // Trying to expose private field
    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount();
account.deposit(100); // Output: "New balance: 100"
// console.log(account.#balance); // Error! Private field

// 🧠 Encapsulation 
/*
| Context                | this Refers To                     | Access Private |
|------------------------|------------------------------------|----------------|
| Global                 | Window object                      | No             |
| Class constructor      | Instance being created             | Yes (#fields)  |
| Class method           | Instance calling the method        | Yes            |
| Event handler          | DOM element receiving event        | No             |
| Function (non-strict)  | Window object                      | No             |
| Function (strict mode) | undefined                          | No             |
================================================================================
*/

// 🎬 Combining Encapsulation and this
class Superhero {
    #realName = "Bruce Wayne"; // Private

    revealIdentity() {
        console.log(`I am ${this.#realName}!`);
    }

    static createHero(alias) {
        return new Superhero(alias); // 'this' refers to class itself
    }
}

const batman = Superhero.createHero("Batman");
batman.revealIdentity(); // Output: "I am Bruce Wayne!"
// console.log(batman.#realName); // Error! Private field