import { auth } from "../firebase";
import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      console.log(user);
    });
  }, []);

  <AuthContext.Provider value={{ currentUser }}>
    {children}
  </AuthContext.Provider>;
};
