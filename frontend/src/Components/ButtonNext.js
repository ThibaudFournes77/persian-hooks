import React from 'react';

const ButtonNext = ({ handleButtonNext }) => {
  
    const handlerClick = () => {
      handleButtonNext()
    }

    return(
      <button onClick={handlerClick}>Suivant</button>
    )
}

export default ButtonNext;