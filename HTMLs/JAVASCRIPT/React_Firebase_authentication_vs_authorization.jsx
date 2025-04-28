/**
 * Firebase Authentication vs Authorization
 *
 * Hey there, noobest student! Welcome to the ultimate lesson where we
 * demystify these two critical security concepts. Buckle up, because by
 * the end of this note, you'll be ready to conquer Firebase security like a pro!
 *
 * 1. What is Authentication? ("AuthN")
 *    - Definition: Proving "Who you are." 🔒
 *    - Purpose: Ensure that a user is genuine, not a robot or imposter.
 *    - Firebase Implementation:
 *        • FirebaseAuth SDK for Web, iOS, Android.
 *        • Supports Email/Password, Google, Facebook, Phone, Anonymous, and more.
 *        • Under the hood: issues JSON Web Tokens (JWTs) upon successful sign-in.
 *
 *    How it works step-by-step:
 *      a. User submits credentials (e.g., email + password).
 *      b. FirebaseAuth verifies credentials against its database.
 *      c. On success, Firebase issues an ID token (JWT) and a refresh token.
 *      d. ID token carries user identity claims (uid, email, providers, custom claims).
 *      e. Client SDK caches tokens and handles auto-refresh before expiry.
 *
 * 2. What is Authorization? ("AuthZ")
 *    - Definition: Determining "What you can do." 🛠️
 *    - Purpose: Control access to resources based on identity and roles.
 *    - Firebase Implementation:
 *        • Security Rules for Firestore, Realtime Database, and Storage.
 *        • Custom Claims on JWTs to define roles/permissions (e.g., admin, editor).
 *
 *    How it works step-by-step:
 *      a. Client sends a request to read/write a resource, including its ID token.
 *      b. Firebase Security Rules execute in server, evaluate:
 *            - request.auth != null (is user signed in?)
 *            - request.auth.uid matches document owner?
 *            - request.auth.token.role == "admin"?
 *            - other custom rule logic (time-based, data-based).
 *      c. If rules evaluate to true, operation is allowed; else rejected.
 *
 * 3. JWT Anatomy – Bridging AuthN & AuthZ
 *    - Header: Algorithm, token type.
 *    - Payload: Claims (iss, sub/uid, exp, iat, custom claims).
 *    - Signature: Verifies token integrity.
 *
 * 4. Best Practices & Pro Tips:
 *    • Always enforce rule-based access; never rely on client-side checks alone.
 *    • Use least privilege principle: give users only the permissions they need.
 *    • Employ Custom Claims for roles rather than storing role flags in your database.
 *    • Keep ID tokens short-lived (default is 1 hour) and use refresh tokens.
 *    • Test your security rules with the Firebase Emulator Suite.
 *
 * 5. Putting it all together:
 *    - Sign-In Flow: AuthN → Token Issuance → AuthZ via Security Rules.
 *    - Example: A signed-in user with uid "123" tries to read their own profile:
 *        Firestore rule: allow read: if request.auth.uid == resource.data.ownerId;
 *
 * Congrats! You just mastered the core of Firebase security. Now go build
 * something awesome and keep those data dragons locked up tight! 🐉🔐
 */

import React from "react";

export default function AuthVsAuthzNotes() {
    return (
        <div>
            {/* This component exists purely to host the notes above! */}
            <h1>Check the comments for your Firebase AuthN vs AuthZ lesson 📚</h1>
        </div>
    );
}
