import React from 'react';
import LetterProposed from './LetterProposed'

const Board = ({ lettersSelected, letterQueried, round, onAnswerClick }) => {

    return(
      <div>
        {lettersSelected.map((data, index) => 
          <LetterProposed id={data._id} data={data.persian} key={data._id} letterQueried={letterQueried} round={round} onAnswerClick={onAnswerClick} />
        )}
      </div>
    )
}

const MBoard = React.memo(Board, (props, nextProps) => {
  if(props.round === nextProps.round){
    return true;
  }
})

export default MBoard;
