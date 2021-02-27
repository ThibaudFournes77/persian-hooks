import React, { useEffect, useState } from 'react';
import '../App.css';

const LetterProposed = (props) => {

    const [bgColor, setBgColor] = useState('blue');
  
    const handlerClick = (e) => {
      if(e.target.id == props.letterQueried){
        setBgColor('green');
        props.onWon()
        console.log("gagné")
      }
      else if(e.target.id != props.letterQueried){
        setBgColor('red');
        console.log("perdu")
      }
    }
  
    return(
    <button id={props.id} onClick={handlerClick} style={{backgroundColor:bgColor}}>{props.data}</button>
    )
}

export default LetterProposed;