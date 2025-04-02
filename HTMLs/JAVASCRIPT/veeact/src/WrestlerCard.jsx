import React from "react";
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
