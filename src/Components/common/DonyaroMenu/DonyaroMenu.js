import React from 'react';
import './DonyaroMenu.css';


import flagIr from '../../../Icons/flagIr.png';

function DonyaroMenu() {


  return (
    <div className="menu">
      <div className="donyaro-logo">دنیارو</div>
      <div className="donyaro-logo">ehsan.gorji1998@gmail.com</div>
      <img className="Iricon" src={flagIr} />
    </div>
  )
}
export default DonyaroMenu