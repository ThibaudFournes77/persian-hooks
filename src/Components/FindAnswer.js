import React, { useState, useEffect } from 'react';
//import '../App.css';
import Board from './Board';
import LetterQuerried from './LetterQueried';
import ButtonNext from './ButtonNext';
import datas from '../datas';

const FindAnswer = (props) => {

  //const [guesses, setGuesses] = useState(0);
  const [won, setWon] = useState(false);
  //const [buttonClicked, setButtonClicked] = useState(false);

  /*useEffect(() => {
    console.log("won", won)
  }, [won])*/
  
  const getId = (datas) => {
    const tabIdLetters = []
    datas.map((data, index) =>
      (tabIdLetters.push(data.id))
    )
    return tabIdLetters
  }

  
  const getRandom = (arr, n) => {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");

    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }

    return result;
  }

  const getOneRandom = (arr) => {
    var result,
        len = arr.length;
        var x = Math.floor(Math.random() * len);
        result = arr[x]
    return result;
  }

  //handleWon sans le bouton =============================
  /*handleWon(){
    const newGuesses = this.state.guesses + 1
    this.setState({
      guesses: newGuesses,
      won: true
    })
  }*/

  const handleWon = () => {
    setWon(true);
    console.log("salut");
  }

  const handleButtonNext = () => {
    /*const newGuesses = guesses + 1;
    setGuesses(newGuesses);*/
    setWon(false);
    //setButtonClicked(true);
  }

  /*const handleResetButton = () => {
    setButtonClicked(false);
  }*/

  const lettersSelected = getRandom(getId(props.datas), 4) //les 4 lettres affichées
  const letterQueried = getOneRandom(lettersSelected) //on en sélectionne une qui sera celle demandée

  //app={this} à garder si on gère le style à partir de l'état du composant app, sinon à supprimer
  //LE GARDER DANS ButtonNext

  return (
    <div className="App">
      <Board datas={datas} className="board" lettersSelected={lettersSelected} letterQueried={letterQueried} buttonClicked={1/*buttonClicked*/} won={won} onWon={handleWon} />
      <LetterQuerried lettersSelected={lettersSelected} letterQueried={letterQueried} won={won} buttonClicked={1/*buttonClicked*/} />
      {won && <ButtonNext handleButtonNext={handleButtonNext} buttonNextReset={1/*handleResetButton*/} />}
    </div>
  )
}

export default FindAnswer;