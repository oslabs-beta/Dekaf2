import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDwfpe7ovv5O6br2JSjpXGkiFiKNTmgts4',
  authDomain: 'dekaf-41d04.firebaseapp.com',
  projectId: 'dekaf-41d04',
  storageBucket: 'dekaf-41d04.appspot.com',
  messagingSenderId: '638714443521',
  appId: '1:638714443521:web:ac33a5c9bff22201830d00',
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  const response = await signInWithPopup(auth, provider);

  const { uid, displayName } = response.user;

  const user = {
    user_id: uid,
    name: displayName,
  };

  return user;
};
