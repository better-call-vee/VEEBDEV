import React, { StrictMode, Suspense } from "react";
import FriendsList from "./FriendsList";
import { fetchFriends } from "./fetchFriends";

const friendsPromise = fetchFriends();

export default function App() {
  return (
    <StrictMode>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Suspense fallback={<h1>⏳ Loading Friends...</h1>}>
          <FriendsList friendsPromise={friendsPromise} />
        </Suspense>
      </div>
    </StrictMode>
  );
}