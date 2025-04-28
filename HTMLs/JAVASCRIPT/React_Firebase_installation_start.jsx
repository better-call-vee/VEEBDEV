// Firebase Setup Step-by-Step Guide

/*
1. Go to https://console.firebase.google.com/

2. Click on "Add project" and create a new Firebase project.
   - Give your project a name.
   - (Optional) Disable Google Analytics if you want.

3. After the project is created, click on "Web" (</>) to create a Web App.
   - Give your app a nickname.
   - You can skip the Firebase Hosting setup for now.

4. Firebase will now show you some **SDK setup code**.
   - It looks like this:

     import { initializeApp } from "firebase/app";
     const firebaseConfig = { ...your config... };
     const app = initializeApp(firebaseConfig);
not recommended at all to publish directly in the github for security purposes

5. Copy the `firebaseConfig` and `initializeApp` code.

6. In your project folder (in VS Code):
   - Inside `/src/firebase/`, create a new file called `firebase.init.js`.

7. Paste the copied code inside `firebase.init.js`.
   - Then also add:

     import { getAuth } from "firebase/auth";
     export const auth = getAuth(app);

8. Now install firebase into your project:
   - Open terminal and run:

     npm install firebase

9. In your components (e.g., Login.jsx), you can now import Firebase Authentication functions like this:

   import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
   import { auth } from "../../firebase/firebase.init";

10. Done! 🎉 You are ready to use Firebase in your React project.
*/



// firebase-setup-notes.jsx

/**
 * Firebase Configuration & Social Authentication Guide
 *
 * ▶ Firebase Console: Enable Authentication Providers
 *   1. In Firebase console, select your project.
 *   2. From the left menu, go to Build → Authentication.
 *   3. Click the "Sign-in method" tab.
 *   4. For each provider you need (e.g., Google, GitHub):
 *      • Click the Edit (pencil) icon next to the provider.
 *      • Toggle "Enable".
 *      • (OAuth providers only) Enter your OAuth Client ID and Secret.
 *      • Save your changes.
 *
 * ---
 * 1. Project Setup
 *    • Go to https://console.firebase.google.com/
 *    • Click “Add project” and follow the prompts.
 *    • (Optional) Disable Google Analytics.
 *
 * 2. Install Firebase SDK
 *    ```bash
 *    npm install firebase
 *    ```
 *
 * 3. Initialize Firebase
 *    // src/firebase/firebase.init.js
 *    ```js
 *    import { initializeApp } from "firebase/app";
 *    import { getAuth } from "firebase/auth";
 *
 *    // Replace with your Firebase config object
 *    const firebaseConfig = {
 *      apiKey: "...",
 *      authDomain: "...",
 *      projectId: "...",
 *      storageBucket: "...",
 *      messagingSenderId: "...",
 *      appId: "..."
 *    };
 *
 *    const app = initializeApp(firebaseConfig);
 *    export const auth = getAuth(app);
 *    ```
 *
 * 4. (Optional) Create Auth Context & Hook
 *    • Wrap your app with `<AuthProvider>`.
 *    • Export a `useAuth()` hook for easy access to `auth.currentUser`.
 *
 * ---
 *
 * 🔹 Google Sign-In
 *
 * 5. Enable Google in Console → Build → Authentication → Sign-in method → Google → Enable.
 *
 * 6. In `Login.jsx`:
 *    ```js
 *    import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
 *    import { auth } from "../../firebase/firebase.init";
 *
 *    const handleGoogleSignIn = () => {
 *      const provider = new GoogleAuthProvider();
 *      signInWithPopup(auth, provider)
 *        .then(result => console.log("Google user:", result.user))
 *        .catch(err => console.error("Google login error:", err));
 *    };
 *
 *    // JSX
 *    <button onClick={handleGoogleSignIn}>
 *      Sign in with Google
 *    </button>
 *    ```
 *
 * 🔹 GitHub Sign-In
 *
 * 7. Enable GitHub in Console → Build → Authentication → Sign-in method → GitHub.
 *    • Create a GitHub OAuth App:
 *      – Homepage URL: `https://<your-app>.firebaseapp.com`
 *      – Callback URL: `https://<your-app>.firebaseapp.com/__/auth/handler`
 *    • Copy Client ID & Secret into Firebase settings.
 *
 * 8. In `Login.jsx`:
 *    ```js
 *    import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
 *    import { auth } from "../../firebase/firebase.init";
 *
 *    const handleGitHubSignIn = () => {
 *      const provider = new GithubAuthProvider();
 *      provider.addScope("user:email");
 *      signInWithPopup(auth, provider)
 *        .then(result => console.log("GitHub user:", result.user))
 *        .catch(err => console.error("GitHub login error:", err));
 *    };
 *
 *    // JSX
 *    <button onClick={handleGitHubSignIn}>
 *      Sign in with GitHub
 *    </button>
 *    ```
 *
 * ---
 *
 * 🔹 Sign-Out (Optional)
 *
 * ```js
 * import { signOut } from "firebase/auth";
 * 
 * const handleSignOut = () => {
 *   signOut(auth).then(() => console.log("Signed out"));
 * };
 * ```
 */
