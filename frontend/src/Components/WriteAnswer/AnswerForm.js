import React from 'react';

function AnswerForm({ onInputValueChange, onFormSubmit, inputValue, won, lose }) {
    let inputClass = 'write_answer_input';
    if(won){
        inputClass = "write_answer_input--correctAnswer";
    }
    if(lose){
        inputClass = "write_answer_input--wrongAnswer";
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onFormSubmit();
    }

    const handleChange = (e) => {
        onInputValueChange(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" className={inputClass} value={inputValue} onChange={handleChange} />
            <button type="submit">Vérifier</button>
        </form>
    );
}

export default AnswerForm;
