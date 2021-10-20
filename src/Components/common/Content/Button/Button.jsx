import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <div>
      <button className={props.className} className={props.className}>
        {props.value}
      </button>
    </div>
  );
};

export default Button;
