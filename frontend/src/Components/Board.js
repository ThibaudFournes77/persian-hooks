import React from 'react';
//import '../App.css';
import LetterProposed from './LetterProposed'

const Board = ({ lettersSelected, letterQueried, guesses, onWon }) => {
  
    const shuffle = (array) => {
      var currentIndex = array.length, temporaryValue, randomIndex;
  
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
  
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
  
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
  
      return array;
    }
  
    const randomizedDatas = shuffle(lettersSelected);
    return(
      <div>
        {randomizedDatas.map((data, index) => 
          <LetterProposed id={data.id} data={data.persian} key={data.id} letterQueried={letterQueried} guesses={guesses} onWon={onWon} />
        )}
      </div>
    )
}

const MBoard = React.memo(Board, (props, nextProps) => {
  if(props.guesses === nextProps.guesses){
    return true;
  }
})

export default MBoard;
//export default Board;