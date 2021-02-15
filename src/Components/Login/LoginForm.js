import React, { useEffect } from "react";
import { TOKEN_DESCRIPTION, TOKEN_POST, USER_GET } from "../../config/api/api";
import Input from "./../Forms/Input";
import Button from "./../Forms/Button";
import useForm from "./../../Hooks/useForm";
import { UserContext } from "./../../Contexts/UserContext";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const context = React.useContext(UserContext);

  // funcao assincrona para fazer login o usuario
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      context.userLogin(username.value, password.value);
    }
  };

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
