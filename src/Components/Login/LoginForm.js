import React from "react";
import API_URLS from "../../config/api/apiUrls";
import Input from "./../Forms/Input";
import Button from "./../Forms/Button";
import useForm from "./../../Hooks/useForm";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      fetch(API_URLS.jwtAuth, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify(),
      })
        .then((res) => {
          console.log("res", res);
          return res.json();
        })
        .then((json) => {
          console.log("### json", json);
        });
    }
  }

  return (
    <section>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Entrar</Button>
      </form>
    </section>
  );
};

export default LoginForm;
