import React, { useState, useEffect } from 'react';
//import '../App.css';
import Board from './Board';
import LetterQuerried from './LetterQueried';
import ButtonNext from './ButtonNext';
import datas from '../datas';

const FindAnswer = (props) => {

  const [guesses, setGuesses] = useState(0);
  const [won, setWon] = useState(false);
  const [lettersSelected, setLettersSelected] = useState([]);
  const [letterQueried, setLetterQueried] = useState(null);

  useEffect(() => {
    const newLettersSelected = getRandom(getId(props.datas), 4);
    const newLetterQueried = getOneRandom(newLettersSelected);
    setLettersSelected(newLettersSelected);
    setLetterQueried(newLetterQueried);
  }, [guesses]);
  
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

  const handleWon = () => {
    setWon(true);
  }

  const handleButtonNext = () => {
    setGuesses(guesses + 1);
    setWon(false);
  }

  //const lettersSelected = getRandom(getId(props.datas), 4) //les 4 lettres affichées
  //const letterQueried = getOneRandom(lettersSelected) //on en sélectionne une qui sera celle demandée

  return (
    <div className="App">
      {lettersSelected.length > 0 && letterQueried &&
      (
        <>
          <Board datas={datas} className="board" lettersSelected={lettersSelected} letterQueried={letterQueried} guesses={guesses} onWon={handleWon} />
          <LetterQuerried lettersSelected={lettersSelected} letterQueried={letterQueried} guesses={guesses} />
          {won && <ButtonNext handleButtonNext={handleButtonNext} />}
        </>
      )}
    </div>
  )
}

export default FindAnswer;