import React from "react";
import "./CheckBox.css";

const CheckBox = (props) => {
  return (
    <input className={props.className} type="checkbox"></input>

    //     <form action="/action_page.php">
    //   <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
    //   <label for="vehicle1"> I have a bike</label><br>
    //  <input type="submit" value="Submit">
    // </form>
  );
};

export default CheckBox;
