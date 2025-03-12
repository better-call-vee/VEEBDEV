// 🎬 Class Inheritance 
class Wrestler {
    constructor(signatureMove) {
        this.signatureMove = signatureMove;
    }

    // Prototype method
    performMove() {
        console.log(`💥 ${this.signatureMove}!`);
    }
}

// ⚡ Subclass Inheritance 
class StoneCold extends Wrestler {
    constructor(move, bc) {
        super(move); // MUST call super() first
        this.beerCount = bc;
    }

    // Overriding parent method
    performMove() {
        super.performMove(); // Call parent method
        console.log(`🍺 Opened ${this.beerCount} cold ones!`);
    }
}

const steve = new StoneCold("Stone Cold Stunner", 3);
steve.performMove();
// Output: 
// 💥 Stone Cold Stunner!
// 🍺 Opened 3 cold ones!

// 🧠 Prototypical Inheritance Truth 
function Player(position) {
    this.position = position;
}

Player.prototype.shoot = function () {
    console.log(`⚽ ${this.position} takes a shot!`);
};

// Messi inherits from Player
function Messi() {
    Player.call(this, "Forward"); // Like super()
    this.magic = true;
}

// 🎯 Prototype Chain Setup
Messi.prototype = Object.create(Player.prototype);
Messi.prototype.constructor = Messi;

const leo = new Messi();
leo.shoot(); // "⚽ Forward takes a shot!"

// 🔥 Key Differences Table 
/*
| Feature                | ES6 Classes                          | Prototypal Inheritance              |
|------------------------|--------------------------------------|-------------------------------------|
| Syntax                 | class {}                             | function + prototype                |
| Hoisting               | No                                   | Yes (function declarations)         |
| Prototype Access       | MyClass.prototype                    | Direct prototype manipulation       |
| Static Methods         | static methodName() {}               | Add directly to constructor         |
| Inheritance            | extends + super()                    | Object.create() + call()/apply()    |
| Enumerability          | Non-enumerable by default            | Enumerable by default               |
=======================================================================================================
*/

// 🎤 Hybrid Inheritance 
class Troop {
    constructor(speed) {
        this.speed = speed;
    }
}

// Mixin for flying units
const Flying = (Base) => class extends Base {
    fly() {
        console.log(`🦅 Flying at ${this.speed * 2} speed!`);
    }
};

// Knight inherits from Troop and Flying both
class Knight extends Flying(Troop) {
    constructor() {
        super(30); // Calls Troop constructor
    }
}

const knight = new Knight();
knight.fly(); // Output: "🦅 Flying at 60 speed!"