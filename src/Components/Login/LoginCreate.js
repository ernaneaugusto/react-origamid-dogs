import React from "react";
import useForm from "./../../Hooks/useForm";
import Input from "./../Forms/Input";
import Button from "./../Forms/Button";
import { USER_POST } from "../../config/api/api";

const LoginCreate = () => {
  const username = useForm();
  const email = useForm("email");
  const password = useForm();

  // realiza o cadastro de um novo usuario
  const handleSubmit = async (event) => {
    event.preventDefault();

    const api = await USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });

    const response = await fetch(api.url, api.options);
    console.log("## cadastro", response);
  };

  return (
    <section className="anime-bottom">
      <h1 className="title">Cadastre-se</h1>

      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="E-mail" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />

        <Button>Cadastrar</Button>
      </form>
    </section>
  );
};

export default LoginCreate;
