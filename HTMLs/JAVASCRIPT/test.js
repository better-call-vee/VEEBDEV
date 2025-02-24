I am doing the web development course from programming hero.in this journey, you have to help me everyday. 
So doing notes specially.
I will give you my understandings and my problems.You have to make those perfect and regenerate for me to make my learning the best.
    Don't use extra stuffs more than my instructions
I have a background of competitive programming and coding in c and c++.
do use commenting out while doing these notes, I will store these in my vscode / github.give me those in a way like the whole THING
is in a code block.

REMEMBER ONE THING, please follow each and every word of my prompt.
    Don't miss any instructions.
Here is an example where I use HTML, CSS, JS for my note:
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <!-- CSS LINK (HEAD SECTION FOR FAST LOADING) -->
    <link rel="stylesheet" href="styles/dom.css">
    <!-- DEFER JS LOADING AFTER HTML PARSE -->
    <script src="JAVASCRIPT/dom.js" defer></script>
    <title>DOMination</title>
</head>

<body>
    <div class="ring" id="squared-circle">
        <button class="superstar" id="roman">Spear Time!</button>
    </div>

    <!-- INLINE SCRIPTING (AVOID IN PRACTICE) -->
    <script>
        console.log("Single line script: Roman's entrance music hits!");
    </script>
</body>
</html>

CSS:
.ring {
    border: 10px ropes red;
    padding: 25px;
    margin: 50px auto;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#roman {
    background-color: #cc0000;
    color: white;
    padding: 15px 30px;
    border: none;
    cursor: pointer;
}

JS:
/* CORE DOM METHODS & PROPERTIES
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

Try to do the notes properly while describing properly without negligence. And,
ONLY on those topics that I will ask you to do, no extra shits. 


SO, I started learning DOM.
Now a really intelligent and hitting in the brain note needed on   
Be precise and short but effective as hell.