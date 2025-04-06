// ======== App.jsx ========
// This is our main App component.
// It passes the promise directly into FriendsList.
// It uses <Suspense> to handle the "loading" state.
// It uses <StrictMode> to help you catch mistakes.

import React, { useState, Suspense, StrictMode } from "react";
import FriendsList from "./FriendsList";
import { fetchFriends } from "./fetchFriends";

const friendsPromise = fetchFriends();

export default function App() {
  return (
    <StrictMode>
      <Suspense fallback={<h1>⏳ Loading Friends...</h1>}>
        <FriendsList friendsPromise={friendsPromise} />
      </Suspense>
    </StrictMode>
  );
}



// ======== FriendsList.jsx ========
// A component that takes the promise as a prop.
// It uses use() to get the resolved users list.

import { use } from "react";

export default function FriendsList({ friendsPromise }) {
  // Automatically resolves the promise using `use()`. the same as :
  /*
  promise.then(data => {
  // data is the resolved value
  })
  */
  const friends = use(friendsPromise);

  return (
    <div
      style={{ padding: "1rem", border: "1px solid #ddd", borderRadius: "8px" }}
    >
      <h2>👥 Friends List</h2>
      <ul>
        {friends.map((friend) => (
          <li key={friend.id}>
            <strong>{friend.name}</strong> ({friend.email})
          </li>
        ))}
      </ul>
    </div>
  );
}


// ======== fetchFriends.js ========
// A function to get users from an API.
// Returns a promise containing users data.

export const fetchFriends = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    return res.json();
};

