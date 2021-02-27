import React, { useState, useEffect } from 'react';
import '../App.css';

const ButtonNext = (props) => {

    const [visible, setVisible] = useState('block');

    /*useEffect(() => {
      return () => {
        props.buttonNextReset();
      }
    })*/
  
    const handlerClick = () => {
      //Faire ça uniquement si on a gagné !
      //Afficher le bouton quand on gagne MAIS utiliser quand même le state (on en aura besoin pour la suite)
      props.handleButtonNext()
    }

    return(
      <button onClick={handlerClick()}>Suivant</button>
    )
}

export default ButtonNext;