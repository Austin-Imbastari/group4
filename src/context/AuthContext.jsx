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
  const [authStep, setAuthStep] = useState("unauthenticated");

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
      setAuthStep("authenticated");
    } else {
      setAuthStep("unauthenticated");
    }
  }, []);

  const signUp = async ({ username, email, password }) => {
    const newUser = await signUpUser({ username, email, password });
    setAuthStep("unauthenticated");
    return newUser;
  };

  const signIn = async ({ username, password }) => {
    const loggedInUser = await signInUser({ username, password });
    setUser(loggedInUser);
    setAuthStep("authenticated");
    return loggedInUser;
  };

  const signOut = async () => {
    await signOutUser();
    setUser(null);
    setAuthStep("unauthenticated");
  };

  return (
    <AuthContext.Provider
      value={{ user, authStep, setAuthStep, signUp, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
