import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { ReactComponent as Dogs } from "./../static/assets/dogs.svg";

export const Header = () => {
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
