import { createContext, useContext, useState } from "react";
import { signUpUser, signInUser, signOutUser } from "../lib/parseService.js";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authStep, setAuthStep] = useState("signin");

  const signUp = async ({ username, email, password }) => {
    const newUser = await signUpUser({ username, email, password });
    setAuthStep("signin");
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
    setAuthStep("signin");
  };

  return (
    <AuthContext.Provider
      value={{ user, authStep, setAuthStep, signUp, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
