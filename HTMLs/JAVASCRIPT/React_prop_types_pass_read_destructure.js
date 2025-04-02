// **Understanding Props & Destructuring in React**  
// *How to pass, read, and destructure props efficiently in functional components.*  

import React from "react";
import PropTypes from "prop-types"; // For prop type validation

// -------------------------------------------------------------------------------------
// 1. PASSING PROPS: Parent component sends data to child via props
// -------------------------------------------------------------------------------------
function ParentComponent() {
    return (
        <ChildComponent
            name="John Cena"
            titles={16}
            isChampion={true}
            greet={() => console.log("The Champ is here!")}
        />
    );
}

// -------------------------------------------------------------------------------------
// 2. READING PROPS: Access props via the `props` object (basic approach)
// -------------------------------------------------------------------------------------
function ChildComponentBasic(props) {
    return (
        <div>
            <h2>Name: {props.name}</h2>
            <p>Titles: {props.titles}</p>
            <p>Status: {props.isChampion ? "Champion" : "Contender"}</p>
            <button onClick={props.greet}>Greet</button>
        </div>
    );
}

// -------------------------------------------------------------------------------------
// 3. DESTRUCTURING PROPS: Extract values directly from props (cleaner syntax)
// -------------------------------------------------------------------------------------
function ChildComponentDestructured({ name, titles, isChampion, greet }) {
    return (
        <div>
            <h2>Name: {name}</h2>
            <p>Titles: {titles}</p>
            <p>Status: {isChampion ? "Champion" : "Contender"}</p>
            <button onClick={greet}>Greet</button>
        </div>
    );
}

// -------------------------------------------------------------------------------------
// 4. DEFAULT VALUES: Set defaults using destructuring assignment
// -------------------------------------------------------------------------------------
function WrestlerCard({
    name = "Unknown Wrestler",
    titles = 0,
    brand = "Raw"
}) {
    return (
        <div>
            <h3>{name}</h3>
            <p>Titles: {titles}</p>
            <p>Brand: {brand}</p>
        </div>
    );
}

// -------------------------------------------------------------------------------------
// 5. PROP-TYPES: Validate prop types (optional but recommended)
// -------------------------------------------------------------------------------------
WrestlerCard.propTypes = {
    name: PropTypes.string,
    titles: PropTypes.number,
    brand: PropTypes.oneOf(["Raw", "SmackDown", "NXT"])
};

//checks if the prop is string / number or any of the 3 brands mentioned. only then it goes forward

// -------------------------------------------------------------------------------------
// 6. FINAL EXAMPLE: Combining all concepts
// -------------------------------------------------------------------------------------
function App() {
    return (
        <div>
            {/* Basic props usage */}
            <ChildComponentBasic
                name="Cody Rhodes"
                titles={2}
                isChampion={false}
                greet={() => console.log("Cody Crybabies!")}
            />

            {/* Destructured props with defaults */}
            <WrestlerCard
                name="Seth Rollins"
                brand="SmackDown"
            />
        </div>
    );
}

// -------------------------------------------------------------------------------------
// KEY TAKEAWAYS:
// - Props are passed as an object
// - Destructuring simplifies access (const { name, age } = props)
// - Default values prevent undefined errors
// - PropTypes add type-checking (npm install prop-types)
// -------------------------------------------------------------------------------------