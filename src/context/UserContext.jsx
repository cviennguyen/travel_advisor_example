import { createContext, useState, useEffect, useCOntext } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.token) {
      setUser(user);
      setToken(user.token);
    }
  }, []);

  const value = {
    user,
    setUser,
    token,
    setToken,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
