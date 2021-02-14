import React, { useState } from "react";
import { Link } from "react-router-dom";
import API_URLS from "../../config/api/apiUrls";
import Input from "./../Forms/Input";
import Button from "./../Forms/Button";

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
        <Input label="Usuário" type="text" name="username" />
        <Input label="Senha" type="password" name="password" />
        <Button>Entrar</Button>
      </form>
    </section>
  );
};

export default LoginForm;
