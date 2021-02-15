import React from "react";
import styles from "./ErrorMessage.module.scss";

const ErrorMessage = (props) => {
  const type = props.type ? props.type : "danger";
  return <p className={`${styles.error} ${type}`}>{props.message}</p>;
};

export default ErrorMessage;
