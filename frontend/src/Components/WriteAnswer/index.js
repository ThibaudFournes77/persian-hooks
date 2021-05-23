import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AskedLetter from './AskedLetter';
import Correction from './Correction';
import AnswerForm from './AnswerForm';
import ButtonNext from '../ButtonNext';
import LoadingBox from '../utils/LoadingBox';
import MessageBox from '../utils/MessageBox';
import { useHistory, useParams } from 'react-router';

function TypeAnswer() {
  const { position } = useParams();
  const history = useHistory();

  const [round, setRound] = useState(0);
  const [won, setWon] = useState(false);
  const [lose, setLose] = useState(false);
  const [letters, setLetters] = useState([]);
  const [askedLetter, setAskedLetter] = useState({});
  const [inputValue, setInputValue] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const loadData = async () => {
    try{
      setLoading(true);
      const { data } = await axios.get(`/api/letters/write-answer&${position}`);
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

  const sendData = async () => {
    try{
      setLoading(true);
      await axios.post('/api/letters', results);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if(round === 20 && !loading) {
      sendData();
      if(!loading){
        history.push({
          pathname: "/results",
          state: {
            game: "write-answer",
            position,
          }
        });
      }
    }
  }, [round]);

  useEffect(() => {
    if(letters.length > 0 && round < 20){
      setLoading(true);
      const newAskedLetter = letters[round];
      setAskedLetter(newAskedLetter);
    }
  }, [letters, round]);

  useEffect(() => {
    if(letters.length > 0){
      setLoading(false);
    }
  }, [askedLetter]);

  useEffect(() => {
    const newResult = {
      id: askedLetter._id,
    };
    if(won){
      newResult.score = 1;
      setResults([...results, newResult]);
    } else if (lose){
      newResult.score = 0;
      setResults([...results, newResult]);
    }
  }, [won, lose]);

  const handleInputValueChange = (value) => {
    setInputValue(value);
  }

  const handleFormSubmit = () => {
    if(inputValue === askedLetter.french){
      setWon(true);
    } else {
      setLose(true);
    }
  }

  const handleButtonNext = () => {
    setRound(round + 1);
    setLose(false);
    setWon(false);
    setInputValue('');
  }

  return (
    <div>
      {loading && <LoadingBox />}
      {error && <MessageBox variant="danger">{error}</MessageBox>}
      {!loading && !error && round < 20 &&
      (
        <>
          <AskedLetter askedLetter={askedLetter.persian} />
          <Correction lose={lose} answer={askedLetter.french} />
          <AnswerForm onInputValueChange={handleInputValueChange} onFormSubmit={handleFormSubmit} inputValue={inputValue} won={won} lose={lose} />
          {(won || lose) && <ButtonNext handleButtonNext={handleButtonNext} />}
        </>
      )}
    </div>
  );
}

export default TypeAnswer;
