import React from "react";
import "../../App.css";

const Header = props => {
    const completedStyling ={
        fontStyle : 'italic',
        color : '#cdcdcd',
        textDecoration : 'line-through'
    }
  return (
    <div className="todoitem">
      <input type="checkbox"
       className="app" 
       handleChange = {props.handleChange}
       onChange ={ () => props.handleChange(props.task.id)} />
       
      <p style = {props.task.completed ? completedStyling : null}>{props.task.text}</p> 
    </div>
  );
};

export default Header;
