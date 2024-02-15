//Config
import { app } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDwfpe7ovv5O6br2JSjpXGkiFiKNTmgts4",
  authDomain: "dekaf-41d04.firebaseapp.com",
  projectId: "dekaf-41d04",
  storageBucket: "dekaf-41d04.appspot.com",
  messagingSenderId: "638714443521",
  appId: "1:638714443521:web:ac33a5c9bff22201830d00",
};

export const firebase = auth.initializeApp(firebaseConfig);

// Github Provied
// import { GithubAuthProvider } from "firebase/auth";

const provider = new GithubAuthProvider();

import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";

export async function loginWithGithub() {
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      console.log(`result `, result);
      console.log(
        `User: ${result.user.displayName}\n Email: ${result.user.email}\n PhotoURL: ${result.user.photoURL}`
      );
      localStorage.setItem("displayName", result.user.displayName);
      localStorage.setItem("email", result.user.email);
      localStorage.setItem("PhotoURL", result.user.photoURL);
      console.log(`GOT `, localStorage.getItem(displayName));
      const credential = GithubAuthProvider.credentialFromResult(result);

      credential.setCustomParameters({
        prompt: "select_account",
        allow_signup: true,
      });

      const token = credential.accessToken;

      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error?.customData?.email;
      // The AuthCredential type that was used.
      const credential = GithubAuthProvider.credentialFromError(error);
      // ...
    });
}

// import { initializeApp } from 'firebase/app';
// import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: 'AIzaSyDwfpe7ovv5O6br2JSjpXGkiFiKNTmgts4',
//   authDomain: 'dekaf-41d04.firebaseapp.com',
//   projectId: 'dekaf-41d04',
//   storageBucket: 'dekaf-41d04.appspot.com',
//   messagingSenderId: '638714443521',
//   appId: '1:638714443521:web:ac33a5c9bff22201830d00',
// };
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);

// const provider = new GoogleAuthProvider();

// export const signInWithGoogle = async () => {
//   const response = await signInWithPopup(auth, provider);

//   const { uid, displayName } = response.user;

//   const user = {
//     user_id: uid,
//     name: displayName,
//   };

//   return user;
// };
