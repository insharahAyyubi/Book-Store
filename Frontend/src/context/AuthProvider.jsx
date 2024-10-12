import React, { createContext, useState, useContext, useEffect } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const initialUser = localStorage.getItem("Users");
  const [authUser, setAuthUser] = useState(
    initialUser ? JSON.parse(initialUser) : undefined
  );

  // Update local storage whenever authUser changes
  useEffect(() => {
    if (authUser) {
      localStorage.setItem("Users", JSON.stringify(authUser));
    } else {
      localStorage.removeItem("Users");
    }
  }, [authUser]);

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
