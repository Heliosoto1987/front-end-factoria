import { useState } from "react";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {
  const [loginData, setLoginData] = useState({});
  return (
    <UserContext.Provider value={[loginData, setLoginData]}>
      {children}
    </UserContext.Provider>
  );
};
