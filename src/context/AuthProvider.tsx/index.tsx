import { useState } from "react";
import { User } from "../../type/User";
import { AuthContext } from "../AuthContext";

export const AuthProvider = ({children}: {children: JSX.Element}) => {
  const [user, setUser] = useState<User | null>(null);
  
  
  return (
    <AuthContext.Provider value={{user, signin, signout}}>
      {children}
    </AuthContext.Provider>
  );
}