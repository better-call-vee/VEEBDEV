import { use } from "react";

export default function FriendsList({ friendsPromise }) {
  const friends = use(friendsPromise);

  return (
    <div
      style={{
        padding: "2rem",
        border: "1px solid #ddd",
        borderRadius: "8px",
        maxWidth: "600px", // Constrain card width
        width: "90%", // Responsive width
        margin: "0 20px", // Prevent edge touching
        textAlign: "left", // Align text to left (optional)
      }}
    >
      <h2 style={{ marginTop: 0 }}>👥 Friends List</h2>
      <ul style={{ paddingLeft: "20px" }}>
        {friends.map((friend) => (
          <li key={friend.id}>
            <strong>{friend.name}</strong> ({friend.email})
          </li>
        ))}
      </ul>
    </div>
  );
}
