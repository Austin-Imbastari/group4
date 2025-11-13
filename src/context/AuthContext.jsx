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
    getCurrentUser().then((user) => {
      if (user)
        setUser({
          id: user.id,
          username: user.get("username"),
          email: user.get("email"),
        });
    });
  }, []);

  const signUp = async ({ username, email, password }) => {
    const newUser = await signUpUser({ username, email, password });
    setUser({
      id: newUser.id,
      username: newUser.get("username"),
      email: newUser.get("email"),
    });
    return newUser;
  };

  const signIn = async ({ username, password }) => {
    const loggedInUser = await signInUser({ username, password });
    setUser({
      id: loggedInUser.id,
      username: loggedInUser.get("username"),
      email: loggedInUser.get("email"),
    });
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
