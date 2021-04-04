import React, { useEffect, useState } from 'react';
import '../App.css';

const LetterProposed = ({ guesses, letterQueried, onWon, id, data }) => {

    const [bgColor, setBgColor] = useState('white');

    useEffect(() => {
      setBgColor('white');
    }, [guesses]);
  
    const handlerClick = (e) => {
      if(e.target.id == letterQueried){
        setBgColor('green');
        onWon()
        console.log("gagné")
      }
      else if(e.target.id != letterQueried){
        setBgColor('red');
        console.log("perdu")
      }
    }
  
    return(
    <button id={id} onClick={handlerClick} style={{backgroundColor:bgColor}}>{data}</button>
    )
}

export default LetterProposed;