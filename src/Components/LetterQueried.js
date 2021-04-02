import React from 'react';
import '../App.css';

const LetterQuerried = ({ letterQueried }) => {

    return(
      <p>{letterQueried}</p>
    )
}

const MLetterQuerried = React.memo(LetterQuerried, (props, nextProps) => {
  if(props.guesses === nextProps.guesses){
    return true;
  }
});

export default MLetterQuerried;
//export default LetterQuerried;