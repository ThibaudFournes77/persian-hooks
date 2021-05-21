import React from 'react';

const LetterQuerried = ({ letterQueried }) => {

    return(
      <p>{letterQueried}</p>
    )
}

const MLetterQuerried = React.memo(LetterQuerried, (props, nextProps) => {
  if(props.round === nextProps.round){
    return true;
  }
});

export default MLetterQuerried;
//export default LetterQuerried;