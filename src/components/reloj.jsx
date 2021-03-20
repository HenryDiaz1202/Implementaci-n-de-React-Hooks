import React from 'react'
import { useState, useEffect } from 'react';

function Reloj(props) {
   const timer = useNewTimer(new Date());

   return (
      <div>
        <h1>Que nota ticher</h1>
        <h2>Son las : {timer.toLocaleTimeString()}.</h2>
      </div>
    );
}
export default Reloj;
function useNewTimer(currentDate) {
    const [date, setDate] = React.useState(currentDate);
    
    React.useEffect(() => {
      var timerID = setInterval( () => tick(), 1000 );
      return function cleanup() {
          clearInterval(timerID);
        };
     });
    
    function tick() {
      setDate(new Date());
     }
    
    return date;
  }