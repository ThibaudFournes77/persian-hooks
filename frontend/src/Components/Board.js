import React from 'react';
import LetterProposed from './LetterProposed'

const Board = ({ lettersSelected, letterQueried, guesses, onWon }) => {

    return(
      <div>
        {lettersSelected.map((data, index) => 
          <LetterProposed id={data._id} data={data.persian} key={data._id} letterQueried={letterQueried} guesses={guesses} onWon={onWon} />
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
