import React from 'react';
import './DonyaroMenu.css';


import flagIr from '../../../Icons/flagIr.png';
import smldrop from '../../../Icons/smalldrop.png';
function DonyaroMenu() {


  return (
    <div className="menu">
      <div className="donyaro-logo">دنیارو</div>
      <div className="donyaro-logo">ehsan.gorji1998@gmail.com</div>

      <div className="lang">
        <img className="Iricon" src={flagIr} />
        <div className="donyaro-logo">فارسی</div>
        <img className="Iricon smldrp" src={smldrop} />
      </div>
    </div>
  )
}
export default DonyaroMenu