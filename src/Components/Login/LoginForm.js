import React, { useState } from "react";
import { Link } from "react-router-dom";
import API_URLS from "../../config/api/apiUrls";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    console.log("###", [username, password]);

    fetch(API_URLS.jwtAuth, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => {
        console.log("res", res);
        return res.json();
      })
      .then((json) => {
        console.log("### json", json);
      });
  }

  return (
    <section>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />

        <input
          type="password"
          name=""
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button type="submit">Entrar</button>
      </form>

      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
