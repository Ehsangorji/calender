import React from 'react';
import './Sidebar.css';

import lightIcon from '../../../Icons/light.png';
import tasksIcon from '../../../Icons/tasks.png';
import locIcon from '../../../Icons/loc.png';

function Sidebar() {
  return(
  <div className="sidebar">
      <img className="lightIcon icon" src={lightIcon} />
      <img className="tasksIcon icon" src={tasksIcon} />
      <img className="locIcon icon" src={locIcon} />
  </div>
  )
}
export default Sidebar