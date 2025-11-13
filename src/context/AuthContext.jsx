import { createContext, useState, useEffect } from "react";
import {
  signUpUser,
  signInUser,
  signOutUser,
  getCurrentUser,
} from "../lib/parseService.js";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  const signUp = async ({ username, email, password }) => {
    const newUser = await signUpUser({ username, email, password });
    return newUser;
  };

  const signIn = async ({ username, password }) => {
    const loggedInUser = await signInUser({ username, password });
    setUser(loggedInUser);
    return loggedInUser;
  };

  const signOut = async () => {
    await signOutUser();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
