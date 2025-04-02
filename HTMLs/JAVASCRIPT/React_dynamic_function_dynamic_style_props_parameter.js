import React, { useState } from "react";

// Cena's Tag Component - Displays "The Champ is Here! John Cena!" with specific styling.
function CenaTag() {
    const cenaStyle = {
        color: "blue", // Blue text color
        fontWeight: "bold", // Bold font weight
        textTransform: "uppercase", // Uppercase text
        textAlign: "center", // Center align the text
        fontSize: "36px", // Set font size to 36px
        margin: "20px 0", // Margin around the text
    };

    // Return a div element with Cena's message and applied styles
    return (
        <div style={cenaStyle}>
            The Champ is Here! John Cena!
        </div>
    );
}

// Cody Rhodes's Tag Component - Displays a mocking message about Cody Rhodes with specific styling.
function RhodesTag() {
    const rhodesStyle = {
        color: "red", // Red text color
        fontWeight: "bold", // Bold font weight
        textTransform: "uppercase", // Uppercase text
        textAlign: "center", // Center align the text
        fontSize: "36px", // Set font size to 36px
        margin: "20px 0", // Margin around the text
    };

    // Return a div element with Rhodes's message and applied styles
    return (
        <div style={rhodesStyle}>
            Cody Rhodes Aims to Steal the Show... but Fails!
        </div>
    );
}

// MatchCard Component - Displays the match details for a wrestler vs their opponent
function MatchCard(props) {
    // State to manage hover effect for dynamic styling
    const [isHovered, setIsHovered] = useState(false);

    // Default card style with dynamic background color based on heel status
    const cardStyle = {
        border: "2px solid black", // Border around the card
        borderRadius: "10px", // Rounded corners
        padding: "20px", // Padding inside the card
        margin: "10px auto", // Center the card with margin
        width: "60%", // Card width as 60% of the parent
        backgroundColor: props.isHeel ? "darkred" : "darkblue", // Dynamic background color based on heel status
        color: "white", // White text color
        textAlign: "center", // Center align text in the card
        transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth transition effect on hover
    };

    // Hover card style with additional effects
    const hoverStyle = {
        ...cardStyle,
        transform: "scale(1.05)", // Slightly enlarge the card on hover
        boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.5)", // Add shadow to create depth on hover
    };

    return (
        <div
            style={isHovered ? hoverStyle : cardStyle} // Apply hover style when hovered
            onMouseEnter={() => setIsHovered(true)} // Trigger hover effect when mouse enters
            onMouseLeave={() => setIsHovered(false)} // Revert to default when mouse leaves
            // this setIsHovered control the isHovered
        >
            <h2>{props.wrestlerName}</h2> {/* Display wrestler's name */}
            <p>Facing: {props.opponentName}</p> {/* Display opponent's name */}
            <p>Status: {props.isHeel ? "Heel" : "Face"}</p> {/* Display whether the wrestler is a "heel" or "face" */}

            {/* Special styling and message for mocking Cody Rhodes */}
            {props.wrestlerName === "Cody Rhodes" && (
                <p style={{ color: "lightcoral", fontStyle: "italic" }}>Cody Crybabies!</p>
            )}
        </div>
    );
}

// Main App Component - Displays the entire WrestleMania event with all components
export default function App() {
    return (
        <div>
            {/* Header Section - Title of the WrestleMania Event */}
            <h1 style={{ textAlign: "center", fontSize: "48px", color: "gold" }}>
                WrestleMania 2025
            </h1>

            {/* Cena Tag Component - Display Cena's message */}
            <CenaTag />

            {/* Rhodes Tag Component - Display Rhodes's message */}
            <RhodesTag />

            {/* Match Card Components - Display two matchups between John Cena and Cody Rhodes */}
            <MatchCard wrestlerName="John Cena" opponentName="Cody Rhodes" isHeel={true} />
            <MatchCard wrestlerName="Cody Rhodes" opponentName="John Cena" isHeel={false} />
        </div>
    );
}
