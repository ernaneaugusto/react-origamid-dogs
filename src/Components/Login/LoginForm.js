import React from "react";
import Input from "./../Forms/Input";
import Button from "./../Forms/Button";
import ErrorMessage from "./../Shared/ErrorMessage";
import useForm from "./../../Hooks/useForm";
import { UserContext } from "./../../Contexts/UserContext";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { loading, userLogin, error } = React.useContext(UserContext);

  // funcao assincrona para fazer login o usuario
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  };

  return (
    <section>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? <Button disabled="true">Carregando...</Button> : <Button>Entrar</Button>}
        {error && <ErrorMessage type="danger" message={error} />}
      </form>
    </section>
  );
};

export default LoginForm;
