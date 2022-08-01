import React from "react";
import Styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      type={props.type || "button"}
      onClick={props.onClick}
      className={`${Styles.button} ${props.className}`}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};
export default Button;
