import React from "react";
import { TOKEN_POST } from "../../config/api/api";
import Input from "./../Forms/Input";
import Button from "./../Forms/Button";
import useForm from "./../../Hooks/useForm";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  // funcao assincrona para fazer login o usuario
  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      const api = TOKEN_POST({
        username: username.value,
        password: password.value,
      });

      // espera fazer o post para buscar o token na api
      const response = await fetch(api.url, api.options);
      // espera formatar os dados de retorno da api como json
      const json = await response.json();
      // seta o token no localStorage do navegador para utilizar futuramente
      window.localStorage.setItem("token", json.token);
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
