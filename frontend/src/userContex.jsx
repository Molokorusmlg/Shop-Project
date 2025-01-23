import React, { createContext } from "react";
import { useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: "",
    firstName: "",
    lastName: "",
    avatar: "",
    password: "",
    id: "",
  });

  const updateUser = (newUser) => {
    setUser(newUser);
  };
  return (
    <UserContext.Provider value={{ user, updateUser, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
