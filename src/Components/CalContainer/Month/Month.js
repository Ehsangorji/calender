import React from 'react';
import './Month.css';


function Month() {

  const daysArr =  ['Sunday','Monday','Tuesday','Wednesday', 'Thursday', 'Friday', 'Saturday' ];
  const days= daysArr.map((day , i)=>{
    return(
      <li>{day}</li>
    )
  });

  const t = new Date();
  const dayOfMonth = t.getDate();
  const month = t.getMonth()+1;
  const lastMonth = t.getMonth();
  const year = t.getFullYear();


  const daysCount = new Date(year, month, 0).getDate(); //number of days in currnt month
  const daysCount_lastMonth = new Date(year, lastMonth, 0).getDate(); //number of days in last month


  // const currDayName = daysArr[t.getDay()];
  const firstDay = new Date(t.getFullYear(), t.getMonth(), 1); 
  const firstDayId = firstDay.getDay(); //get first day of current month 

  let monthGrid=[];

  if(firstDayId > 0){
    for (let index = firstDayId; index > 0; index--) {
      monthGrid.push(
        <li className="day other-month">
          <div className="date">{daysCount_lastMonth-index +1}</div>
        </li>
      )
    }
  }

  for (let index = 1; index <= daysCount; index++) {
    let selectedClass = "";
    if(index==dayOfMonth){
      selectedClass = "active"
    }
    monthGrid.push(
      <li className="day">
        <div className={"date "+selectedClass}>{index}</div>
      </li>
    )
  }


  return(
  <div>
      <div id="calendar-wrap">
        <div id="calendar">
          
          <ul className="weekdays">
            {days}
          </ul>

      
          <ul className="days">
            {monthGrid}
          </ul>
      
        </div>
      </div>
  </div>
  )
}
export default Month