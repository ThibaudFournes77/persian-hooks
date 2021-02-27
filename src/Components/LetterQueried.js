import React, { useEffect } from 'react';
import '../App.css';

const LetterQuerried = (props) => {
  
    /*shouldComponentUpdate(nextProps, nextState){
      if(nextProps.app.state.buttonClicked == false){
        return false
      }
      else{
        return true
      }
    }*/

    return(
      <p>{props.letterQueried}</p>
    )
}

const MLetterQuerried = React.memo(LetterQuerried, (props) => {
  if(!props.won){
    return true;
  }
})

export default MLetterQuerried;