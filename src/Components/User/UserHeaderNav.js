import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext";
import { ReactComponent as MinhasFotos } from "./../../static/assets/feed.svg";
import { ReactComponent as Estatisticas } from "./../../static/assets/estatisticas.svg";
import { ReactComponent as AdicionarFoto } from "./../../static/assets/adicionar.svg";
import { ReactComponent as Sair } from "./../../static/assets/sair.svg";
import styles from "./UserHeaderNav.module.scss";

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const [mobile, setMobile] = React.useState(null);

  return (
    <nav className={styles.nav}>
      <NavLink activeClassName={styles.active} className={styles.btn} end to="/conta">
        <MinhasFotos /> {mobile && "Minhas fotos"}
      </NavLink>
      <NavLink activeClassName={styles.active} className={styles.btn} to="/conta/estatisticas">
        <Estatisticas /> {mobile && "Estatísticas"}
      </NavLink>
      <NavLink activeClassName={styles.active} className={styles.btn} to="/conta/postar">
        <AdicionarFoto /> {mobile && "Nova foto"}
      </NavLink>
      <button className={styles.btn} onClick={userLogout}>
        <Sair /> {mobile && "Sair"}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
