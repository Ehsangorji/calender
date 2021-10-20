import React from "react";
import "./DropDownBox.css";

const DropDownBox = (props) => {
  return (
    <div className="Drop">
      <select id="Services" name="خدمات">
        <option value={props.value}>{props.value} </option>
        <option value={props.value2}>{props.value2}</option>
        <option value={props.value3}>{props.value3}</option>
      </select>
    </div>
  );
};

export default DropDownBox;
