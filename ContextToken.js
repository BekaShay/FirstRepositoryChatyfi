import React, { createContext, useState } from "react";

export const MyContext = React.createContext();

function ContextProvider({children}) {
  const [token, setToken] = useState(false);

  return (
    <MyContext.Provider value={{token, setToken}}>
      {children}
    </MyContext.Provider>
  );
}

export default ContextProvider;