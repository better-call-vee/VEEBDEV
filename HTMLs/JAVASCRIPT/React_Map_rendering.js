import { useState } from "react";
// Import the CSS file for styling
import "./name.css";
// Import the WrestlerCard component to render each wrestler's details
import WrestlerCard from "./WrestlerCard";

// Define a static array of wrestler objects, each with an id, name, and signature move
const wrestlers = [
    { id: 1, name: "The Rock", signatureMove: "People's Elbow" },
    { id: 2, name: "Stone Cold Steve Austin", signatureMove: "Stone Cold Stunner" },
    { id: 3, name: "John Cena", signatureMove: "F u" },
    { id: 4, name: "Seth Freakin Rollins", signatureMove: "Curb Stomp" },
    { id: 5, name: "Undertaker", signatureMove: "Tombstone Piledriver" },
];

// Main App component that renders the list of wrestlers
function App() {
    return (
        // Container div with a class for styling the entire list
        <div className="wrestler-list">
            {/*
        The map function iterates over the wrestlers array.
        For each wrestler object, it returns a WrestlerCard component.
        - key prop: Uses wrestler.id to uniquely identify each item (React requirement for lists).
        - wrestler prop: Passes the entire wrestler object to the WrestlerCard component.
      */}
            {wrestlers.map((wrestler) => (
                <WrestlerCard key={wrestler.id} wrestler={wrestler} />
            ))}
        </div>
    );
}
// Export the App component as the default export
export default App;




// Wrestler cards
// Import React to use JSX
import React from "react";
// WrestlerCard component that takes a wrestler object as a prop
function WrestlerCard({ wrestler }) {
    return (
        // Div with a class for styling each wrestler's card
        <div className="wrestler-card">
            {/* Display the wrestler's name in a heading */}
            <h2>{wrestler.name}</h2>
            {/* Display the wrestler's signature move in a paragraph */}
            <p>Signature Move: {wrestler.signatureMove}</p>
        </div>
    );
}

// Export the WrestlerCard component as the default export
export default WrestlerCard;




CSS:

/* Container for the entire list of wrestlers */
.wrestler - list {
    display: flex;          /* Use flexbox for a responsive layout */
    flex - wrap: wrap;        /* Allow cards to wrap to the next line */
    justify - content: center; /* Center the cards horizontally */
    padding: 20px;          /* Add some padding around the list */
}

  /* Styling for each individual wrestler card */
  .wrestler - card {
    border: 1px solid #ccc;         /* Light border for definition */
    border - radius: 5px;             /* Rounded corners */
    padding: 20px;                  /* Inner spacing */
    margin: 10px;                   /* Outer spacing between cards */
    width: 200px;                   /* Fixed width for consistency */
    text - align: center;             /* Center-align text */
    background - color: #f9f9f9;      /* Light background color */
    box - shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
    transition: transform 0.2s;     /* Smooth transition for hover effect */
}

  /* Hover effect to make the card pop */
  .wrestler - card:hover {
    transform: scale(1.05);         /* Slightly enlarge the card on hover */
}

  /* Styling for the wrestler's name */
  .wrestler - card h2 {
    margin: 0;                      /* Remove default margin */
    font - size: 1.5em;               /* Larger text for the name */
    color: #333;                    /* Darker color for contrast */
}

  /* Styling for the signature move */
  .wrestler - card p {
    margin: 10px 0 0;               /* Space above the paragraph */
    font - size: 1em;                 /* Standard text size */
    color: #666;                    /* Lighter color for secondary info */
}




// here:
import React from "react";

// Sample data: Array of users
const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
];

function UserList() {
    return (
        <ul>
            {/* Render a list of users */}
            {users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}
export default UserList;

// will produce:
<ul>
  <li>Alice</li>
  <li>Bob</li>
  <li>Charlie</li>
</ul>