import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Board from './Board';
import LetterQuerried from './LetterQueried';
import ButtonNext from './ButtonNext';
import LoadingBox from './utils/LoadingBox';
import MessageBox from './utils/MessageBox';

const FindAnswer = () => {

  const [guesses, setGuesses] = useState(0);
  const [won, setWon] = useState(false);
  const [letters, setLetters] = useState([]);
  const [lettersSelected, setLettersSelected] = useState([]);
  const [letterQueried, setLetterQueried] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const loadData = async () => {
    try{
      setLoading(true);
      const { data } = await axios.get('/api/letters');
      setLetters(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    let ignore = false;
    if(!ignore){
      loadData();
    }
    return () => ignore = true;
  }, []);

  useEffect(() => {
    if(letters.length > 0){
      const newLettersSelected = getRandom(getId(letters), 4);
      const newLetterQueried = getOneRandom(newLettersSelected);
      setLettersSelected(newLettersSelected);
      setLetterQueried(newLetterQueried);
    }
    
  }, [letters, guesses]);
  
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
      {loading && <LoadingBox />}
      {error && <MessageBox variant="danger">{error}</MessageBox>}
      {lettersSelected.length > 0 && letterQueried &&
      (
        <>
          <Board datas={letters} className="board" lettersSelected={lettersSelected} letterQueried={letterQueried} guesses={guesses} onWon={handleWon} />
          <LetterQuerried lettersSelected={lettersSelected} letterQueried={letterQueried} guesses={guesses} />
          {won && <ButtonNext handleButtonNext={handleButtonNext} />}
        </>
      )}
    </div>
  )
}

export default FindAnswer;