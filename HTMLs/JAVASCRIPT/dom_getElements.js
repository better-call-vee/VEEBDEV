/* CORE DOM METHODS & PROPERTIES (DOCUMENT OBJECT MODEL)
-------------------------------------------------- */
// querySelector(selector) - CSS selector-based element selection
// - Argument: Any valid CSS selector string (#id, .class, tag)
// - Returns: First matching Element node (or null)
const ring = document.querySelector('#squared-circle');  // Select element with ID "squared-circle" or we can do by .ring

// getElementById(id) - Direct ID-based element selection
// - Argument: String ID (without # prefix)
// - Returns: Single Element node (IDs must be unique in HTML)
const roman = document.getElementById('roman');  // Get element with ID "roman"
//or, getElementsByClassName

/* ELEMENT PROPERTIES
-------------------------------------------------- */
// .style - Access inline CSS styles of element (CSSStyleDeclaration object)
// - Properties are camelCased (backgroundColor vs CSS background-color)
ring.style.backgroundColor = '#2b1f1f'; // Modify CSS background-color

// .textContent - Get/set raw text content of element (ignores HTML tags)
roman.textContent = "Acknowledge Me!";  // Replace button text

/* EVENT LISTENERS
-------------------------------------------------- 
.addEventListener(type, callback) - Attach event handler
roman.addEventListener('click', () => {  
    // Triggered on mouse click:
    // 1. Change ring background
    // 2. Update button text
    // 3. Change button color
});
*/

/* DOM TREE STRUCTURE
<html> (document.documentElement)
└─ <body>
   └─ <div class="ring" id="squared-circle">
      └─ <button id="roman">Spear Time!</button>
*/
roman.addEventListener('click', () => {
    ring.style.backgroundColor = '#1a1a1a'; // Direct style manipulation
    roman.textContent = "YTC!";
    roman.style.backgroundColor = '#48b1f2';
});


/* getElementsByTagName & ARRAY-LIKE OBJECTS
-------------------------------------------------- */
// getElementsByTagName(tagName) - Select elements by HTML tag name
// - Argument: String tag name (e.g., 'li', 'div', 'button')
// - Returns: HTMLCollection (array-like object) of matching elements

// Select all <li> elements inside the list
const items = document.getElementsByTagName('li');

// HTMLCollection is array-like:
// - Has length property
// - Can access elements via index (items[0], items[1], ...)
// - BUT NOT an actual array, so no direct forEach or map methods

// Traverse and log each item's text content
for (let i = 0; i < items.length; i++) {
    console.log(`Item ${i + 1}:`, items[i].textContent);
}

// Example: Change background color of every second item
for (let i = 0; i < items.length; i++) {
    if (i % 2 === 0) { // Even indices (0-based)
        items[i].style.backgroundColor = '#ccc'; // Light gray
    }
}


//ADVANCED:
console.log('Before:', items.length); // Initial count
const newItem = document.createElement('li'); // Create a new <li> element
newItem.textContent = "Item 7: 619"; // Set the text content to "619"
document.getElementById('item-list').appendChild(newItem); // Append the new <li> to the list
newItem.style.backgroundColor = '#ccc';
console.log('After:', items.length); // Updated count (increased by 1)