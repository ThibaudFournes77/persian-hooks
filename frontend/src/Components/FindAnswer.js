import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Board from './Board';
import LetterQuerried from './LetterQueried';
import ButtonNext from './ButtonNext';
import LoadingBox from './utils/LoadingBox';
import MessageBox from './utils/MessageBox';
import { useParams } from 'react-router';

const FindAnswer = () => {

  const { position } = useParams();

  const [guesses, setGuesses] = useState(0);
  const [won, setWon] = useState(false);
  const [letters, setLetters] = useState([]);
  const [lettersSelected, setLettersSelected] = useState([]);
  const [letterQueried, setLetterQueried] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const loadData = async () => {
    try{
      setLoading(true);
      const { data } = await axios.get(`/api/letters/find-answer&${position}`);
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
      setLoading(true);
      const newLettersSelected = getRandom(letters, 4);
      const newLetterQueried = getOneRandom(newLettersSelected);
      setLettersSelected(newLettersSelected);
      setLetterQueried(newLetterQueried);
    }
  }, [letters, guesses]);

  // bugFix : 2e affichage était le même que le 1er. On met le loading pendant la sélection des lettres
  // on le retire une fois que la sélection est finie
  useEffect(() => {
    if(letters.length > 0){
      setLoading(false);
    }
  }, [lettersSelected]);
  
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

  return (
    <div className="App">
      {loading && <LoadingBox />}
      {error && <MessageBox variant="danger">{error}</MessageBox>}
      {!loading && !error &&
      (
        <>
          <Board className="board" lettersSelected={lettersSelected} letterQueried={letterQueried._id} guesses={guesses} onWon={handleWon} />
          <LetterQuerried letterQueried={letterQueried.french} guesses={guesses} />
          {won && <ButtonNext handleButtonNext={handleButtonNext} />}
        </>
      )}
    </div>
  )
}

export default FindAnswer;