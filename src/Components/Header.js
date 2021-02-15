import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { ReactComponent as Dogs } from "./../static/assets/dogs.svg";
import { UserContext } from "./../Contexts/UserContext";

export const Header = () => {
  // define o acesso aos dados de um contexto expecifico, nesse caso o UserContext
  const context = React.useContext(UserContext);
  console.log("###user context", context);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Página Home">
          <Dogs />
        </Link>
        <Link className={styles.login} to="/login">
          Login / Criar
        </Link>
      </nav>
    </header>
  );
};

export default Header;
