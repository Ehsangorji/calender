import React from 'react';
import './CalContainer.css';
import Month from './Month/Month';
import Sidebar from './Sidebar/Sidebar';


function CalContainer() {
  return(
  <div className="CalContainer">
    <div className="Main">
      <Month />
    </div>
    <div className="Sidebar">
      <Sidebar />
    </div> 
  </div>
  )
}
export default CalContainer