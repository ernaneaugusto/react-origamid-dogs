import React from "react";

// cria um contexto
// deve ser um wrapper para toda parte da aplicacao precisa enxergar esse contexto, nesse caso colocado de forma global em App.js
export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  return (
    <UserContext.Provider value={{ user: "Ernane" }}>
      {children}
    </UserContext.Provider>
  );
};
