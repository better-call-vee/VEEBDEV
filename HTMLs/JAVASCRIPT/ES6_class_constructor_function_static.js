// 🎬 Class Royale
class Superstar {
    // 🏋️ Constructor
    constructor(name, brand, signatureMove) {
        // Attributes don't need let/var/const
        this.name = name;
        this.brand = brand;
        this.signatureMove = signatureMove;
        this.titles = 0; // Default value example
    }

    // 🎤 Method using constructor parameters
    announce() {
        return `${this.name} from ${this.brand} says: ${this.signatureMove}!`;
    }

    // 🏆 Modifying instance properties
    winTitle() {
        this.titles++;
    }

    // Static Method: Class-level ability (no 'this')
    static createLegend(name) {
        return new Superstar(name, 'Hall of Fame', 'Legacy');
    }
}

// 🎬 Creating Instances (new keyword required)
const johnCena = new Superstar('John Cena', 'Raw', "You can't see me");
const undertaker = new Superstar('The Undertaker', 'SmackDown', 'Tombstone');

// 🔥 Proof of Function Nature
console.log(typeof Superstar); // "function" (classes are functions!)

// 🤼‍♂️ Instance Methods in Action
johnCena.winTitle();
console.log(johnCena.titles); // 1
console.log(undertaker.announce()); // "The Undertaker from SmackDown says: Tombstone!"

// 🌟 Static Method Usage
const stoneCold = Superstar.createLegend('Stone Cold Steve Austin');
console.log(stoneCold.brand); // "Hall of Fame"

/*
| 🎬 Class Mechanics              | 💥 Implementation Details                          |
|---------------------------------|-----------------------------------------------------|
| Class Declaration               | Hoisted but not initialized (TDZ applies)           |
| constructor()                   | Mandatory for initialization (called with new)      |
| this                            | Refers to instance being created                    |
| Instance Properties             | Defined in constructor with this.property           |
| Methods                         | Added to prototype (shared between instances)       |
| Static Methods                  | Called on class itself (Superstar.createLegend())   |
| new keyword                     | Creates instance, binds this, returns object        |
=========================================================================================
*/

// 🎤 Mic Drop: Class In Action
const roster = [
    new Superstar('Roman Reigns', 'SmackDown', 'Spear'),
    Superstar.createLegend('The Rock')
];

roster[0].winTitle();
console.log(roster[0].titles); // 1
console.log(roster[1].announce()); // "The Rock from Hall of Fame says: Legacy!"