import React from "react";
import "./InputTextBox.css";

const InputTextBox = (props) => {
  return (
    <div className="inputText Input">
      <input
        type="text"
        id="name"
        name="firstname"
        placeholder={props.value}
      ></input>
    </div>
  );
};

export default InputTextBox;
