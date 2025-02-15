

// ---------------------------
// 1. Object Keys/Values:
// ---------------------------
const bloodline = {
  leader: "Roman Reigns",
  members: 5,
  titles: ["Tag Team", "Universal"],
};

// Get keys as array
console.log(Object.keys(bloodline)); // ['leader', 'members', 'titles']

// Get values as array
console.log(Object.values(bloodline)); // ['Roman Reigns', 5, Array(2)]

// ---------------------------
// 2. Nested Objects:
// ---------------------------
const wweUniverse = {
  raw: {
    champion: "Seth Rollins",
    venue: "Monday Nights",
  },
  smackdown: {
    champion: "Austin Theory",
    venue: "Friday Nights",
  },
};

// Double-dot access
console.log(wweUniverse.raw.champion); // "Seth Rollins"
console.log(wweUniverse["smackdown"]["venue"]); // "Friday Nights"

// ---------------------------
// 3. Object with Arrays:
// ---------------------------
const faction = {
  name: "Judgment Day",
  members: ["Rhea", "Damian", "Finn", "Dominik"],
};

// Access array index
console.log(faction.members[2]); // "Finn"
console.log(faction["members"][3]); // "Dominik"

// ---------------------------
// 4. Deleting Properties:
// ---------------------------
delete bloodline.members; // Remove 'members' property
console.log(bloodline); // {leader: 'Roman Reigns', titles: Array(2)}

// Delete with bracket notation
delete wweUniverse["raw"]["venue"];
console.log(wweUniverse.raw); // {champion: 'Seth Rollins'}

// ---------------------------
// Key Notes:
// ---------------------------
// - Nested access: obj.prop.subprop (ensure intermediate props exist)
// - delete operator:
//   * Only works on own properties
//   * Doesn't affect prototype chain
//   * Avoid using on array indexes (use splice() instead)

// C/C++ Comparison:
// - delete is NOT like free() - just removes property from object
