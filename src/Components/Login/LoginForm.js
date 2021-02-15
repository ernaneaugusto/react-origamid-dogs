import React from "react";
import Input from "./../Forms/Input";
import Button from "./../Forms/Button";
import ErrorMessage from "./../Shared/ErrorMessage";
import useForm from "./../../Hooks/useForm";
import { UserContext } from "./../../Contexts/UserContext";
import { Link } from "react-router-dom";
import styles from "./LoginForm.module.scss";
import stylesButton from "./../../Components/Forms/Button.module.scss";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { loading, userLogin, error, login } = React.useContext(UserContext);

  // funcao assincrona para fazer login o usuario
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  };

  return (
    <section className="anime-left">
      <h1 className="title">Login</h1>

      <form onSubmit={handleSubmit} className={styles.form}>
        <Input
          label="Usuário"
          type="text"
          name="username"
          disabled={login || loading}
          {...username}
        />
        <Input
          label="Senha"
          type="password"
          name="password"
          disabled={login || loading}
          {...password}
        />
        {loading ? (
          <Button disabled="true">Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        {error && <ErrorMessage type="danger" message={error} />}
      </form>

      <Link className={styles.perdeu} to="/login/perdeu">
        Esqueceu a senha?
      </Link>

      <div className={styles.cadastro}>
        <h2 className="subtitle">Cadastre-se</h2>
        <p className={styles.description}>
          Ainda não pussui cadastro? Cadastre-se no botão abaixo:
        </p>
        <Link className={stylesButton.button} to="/login/criar">
          Cadastre-se
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
