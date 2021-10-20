import React from "react";
import "./RadioBox.css";

const RadioBox = () => {
  return (
    <div>
      <label class="containerR">
        One
        <input type="radio" name="radio"></input>
        <span class="checkmark"></span>
      </label>
      <label class="containerr">
        Two
        <input type="radio" name="radio"></input>
        <span class="checkmark"></span>
      </label>
    </div>
  );
};

export default RadioBox;
