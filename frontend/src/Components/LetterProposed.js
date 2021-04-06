import React, { useEffect, useState } from 'react';
import '../App.css';

const LetterProposed = ({ round, letterQueried, onWon, id, data }) => {

    const [bgColor, setBgColor] = useState('white');

    useEffect(() => {
      setBgColor('white');
    }, [round]);
  
    const handlerClick = (e) => {
      if(e.target.id == letterQueried){
        setBgColor('green');
        onWon()
      }
      else if(e.target.id != letterQueried){
        setBgColor('red');
      }
    }
  
    return(
    <button id={id} onClick={handlerClick} style={{backgroundColor:bgColor}}>{data}</button>
    )
}

export default LetterProposed;