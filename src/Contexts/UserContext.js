import React, { useState } from "react";
import { TOKEN_DESCRIPTION, TOKEN_POST, USER_GET } from "../config/api/api";

// cria um contexto
// deve ser um wrapper para toda parte da aplicacao precisa enxergar esse contexto, nesse caso colocado de forma global em App.js
export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(false);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  const getUser = async (token) => {
    if (!token) return false;

    const api = USER_GET(token);
    const userRes = await fetch(api.url, api.options);
    const json = await userRes.json();
    setData(json);
    setLogin(true);
  };

  const userLogin = async (username, password) => {
    const api = TOKEN_POST({
      username,
      password,
    });

    // espera fazer o post para buscar o token na api
    const tokenRes = await fetch(api.url, api.options);
    // espera formatar os dados de retorno da api como json
    const json = await tokenRes.json();
    // seta o token no localStorage do navegador para utilizar futuramente
    window.localStorage.setItem(TOKEN_DESCRIPTION, json.token);
    // pega os dados do usuario passando o token retornado do login
    getUser(json.token);
  };

  return (
    <UserContext.Provider value={{ userLogin, data }}>
      {children}
    </UserContext.Provider>
  );
};
