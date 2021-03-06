import React from "react";
import "./MyInput.css";

const MyInput = (props) => {

  console.log(props.myLabels);

  let radioDetailJSX = [];

  if(props.type == "radio"){
     props.myLabels.map((itm , i)=>{

    // console.log("itm");
    // console.log(itm);
    radioDetailJSX.push(
      <div className="formLine Radiobt">
        
        <input name="myradio"
         
          type="radio">
        </input> 
        <label>{itm}</label> 
      </div>
    );
   
    })
    return radioDetailJSX
  }

  



  switch (props.type) {
    case "text":
      return(
        <input 
          className={"text "}
          placeholder={props.label}
          type={props.type}>
        </input>
      );
      break;
    case "radio":
      return(
        {radioDetailJSX}
      );
      break;
    case "checkbox":
      return(
        
      <div >
       
        <input 
          type={props.type}>
        </input>
         <label className="Check">{props.label}</label>
      </div>
      );
      break;
    case "select":
      return(
        <select className="Select">
          
          {props.options.map((itm,i)=>{
            return(
              <option>{itm}</option>
            )
          })}
          
        </select>
      );
      break;
  }



  
};

export default MyInput;
