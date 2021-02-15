import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  TOKEN_DESCRIPTION,
  TOKEN_POST,
  USER_GET,
  TOKEN_VALIDATE_POST,
} from "../config/api/api";

// cria um contexto
// deve ser um wrapper para toda parte da aplicacao precisa enxergar esse contexto, nesse caso colocado de forma global em App.js
export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // cria funcoes de navegacao
  const navigate = useNavigate();

  useEffect(() => {
    const autoLogin = async () => {
      const token = window.localStorage.getItem(TOKEN_DESCRIPTION);

      if (token) {
        try {
          setError(null);
          setLoading(true);
          const api = TOKEN_VALIDATE_POST(token);
          const validateRes = await fetch(api.url, api.options);

          // verifica se o token nao esta valido
          if (!validateRes.ok) throw new Error("Token inválido.");

          // faz a busca pelos dados do usuario
          await getUser(token);
          navigate("/conta");
        } catch (e) {
          userLogout();
        } finally {
          setLoading(false);
        }
      }
    };

    autoLogin();
  }, []);

  const getUser = async (token) => {
    if (!token) return false;

    const api = USER_GET(token);
    const userRes = await fetch(api.url, api.options);
    const json = await userRes.json();
    setData(json);
    setLogin(true);
  };

  const userLogin = async (username, password) => {
    try {
      setLoading(true);
      const api = TOKEN_POST({
        username,
        password,
      });

      // espera fazer o post para buscar o token na api
      const tokenRes = await fetch(api.url, api.options);

      if (!tokenRes.ok) throw new Error(`Usuário inválido.`);

      // espera formatar os dados de retorno da api como json
      const json = await tokenRes.json();
      // seta o token no localStorage do navegador para utilizar futuramente
      window.localStorage.setItem(TOKEN_DESCRIPTION, json.token);
      // pega os dados do usuario passando o token retornado do login
      await getUser(json.token);
      navigate("/conta");
    } catch (e) {
      setError(e.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  };

  const userLogout = async () => {
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    window.localStorage.removeItem(TOKEN_DESCRIPTION);
    navigate("/login");
  };

  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, data, error, loading, login }}
    >
      {children}
    </UserContext.Provider>
  );
};
