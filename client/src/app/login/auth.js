import { useEffect, useState, createContext } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebase from "./firebase";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    // firebase.auth.onAuthStateChanged(auth, setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
