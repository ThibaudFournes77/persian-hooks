import React from 'react';
import '../App.css';

const ButtonNext = ({ handleButtonNext }) => {
  
    const handlerClick = () => {
      handleButtonNext()
    }

    return(
      <button onClick={handlerClick}>Suivant</button>
    )
}

export default ButtonNext;