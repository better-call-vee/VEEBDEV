/**
 * 1. create a project in firebase console
 * 2. in the project install firebase: npm i firebase
 * 3. bring firebase config into your project (form firebase website, not recommended to publish in github)
 * 4. by using useAuth create the auth and export it
 * 5. in the login page: create a provider new GoogleAuthProvider()
 * 6. use signInWithPopup and pass auth and provider
 * 
*/


// SOCIAL LOGIN : GITHUB
/*

/**
 * SOCIAL LOGIN : GITHUB
 *
 * 1. Enable GitHub sign-in in your Firebase console:
 *    - Go to Authentication → Sign-in method.
 *    - Click “GitHub” and enable it.
 *    - Enter your GitHub OAuth App’s Client ID and Client Secret.
 *    - Add your redirect URI (e.g. https://<your-app>.firebaseapp.com/__/auth/handler) in your GitHub OAuth App settings.
 *
 * 2. Make sure you have `auth` exported from your firebase.init.js:
 *    import { initializeApp } from "firebase/app";
 *    import { getAuth } from "firebase/auth";
 *    const app = initializeApp(firebaseConfig);
 *    export const auth = getAuth(app);
 *
 * 3. In your Login.jsx (or wherever you handle auth):
 *    import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
 *    import { auth } from "../../firebase/firebase.init";
 *
 * 4. Create and configure the GitHub provider:
 *    const githubProvider = new GithubAuthProvider();
 *    // (Optional) Request additional scopes:
 *    githubProvider.addScope("repo");
 *    // (Optional) Force account selection:
 *    githubProvider.setCustomParameters({ allow_signup: "true" });
 *
 * 5. Trigger the popup sign-in flow:
 *    const handleGitHubSignIn = () => {
 *      signInWithPopup(auth, githubProvider)
 *        .then((result) => {
 *          // The signed-in user info:
 *          const user = result.user;
 *          console.log("GitHub user:", user);
 *        })
 *        .catch((error) => {
 *          // Handle Errors here.
 *          console.error("GitHub login error:", error);
 *        });
 *    };
 *
 * 6. Hook it up to your UI:
 *    <button onClick={handleGitHubSignIn}>
 *      Sign in with GitHub
 *    </button>
 */

