import React from 'react';
import './calMenu.css';

import listIcon from '../../Icons/list.png';
import calIcon from '../../Icons/cal.png';
import gridIcon from '../../Icons/grid.png';
import profile from '../../Icons/profile.png';

function CalMenu() {
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];
  const d = new Date();
  const CurrMonth = monthNames[d.getMonth()] +" "+d.getFullYear();

  return(
  <div className="menuFixed">
      <div className="main-container">
        <div className="left">
          <img className="listIcon icon" src={listIcon} />
          <img className="calIcon logo" src={calIcon} />
          <span className="title">Calendar</span>
          <button className="MenuBt">Today</button>
          <span className="title currMonth">{CurrMonth}</span>
        </div>
        <div className="right">
          <img className="calIcon icon" src={gridIcon} />
          <img className="profile logo" src={profile} />
        </div>
      </div>
  </div>
  )
}
export default CalMenu