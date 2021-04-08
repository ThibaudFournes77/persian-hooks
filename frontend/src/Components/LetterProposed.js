import React, { useEffect, useState } from 'react';
import '../App.css';

const LetterProposed = ({ round, letterQueried, onAnswerClick, id, data }) => {

    const [bgColor, setBgColor] = useState('white');

    useEffect(() => {
      setBgColor('white');
    }, [round]);
  
    const handlerClick = (e) => {
      if(e.target.id == letterQueried){
        setBgColor('green');
      }
      else if(e.target.id != letterQueried){
        setBgColor('red');
      }
      onAnswerClick(e.target.id);
    }
  
    return(
    <button id={id} onClick={handlerClick} style={{backgroundColor:bgColor}}>{data}</button>
    )
}

export default LetterProposed;