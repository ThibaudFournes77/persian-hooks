import React from 'react';

function Correction({ lose, answer }) {
    let correctionClass;
    if(lose){
        correctionClass = 'answer';
    }
    else {
        correctionClass = 'hidden';
    }
    return (
        <div className={correctionClass}>
            {answer}
        </div>
    );
}

export default Correction;
