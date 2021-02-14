import React from "react";
import styles from "./Button.module.scss";

const Button = ({children, disabled}) => {
  return <button disabled={disabled} className={styles.button}>{children}</button>;
};

export default Button;
