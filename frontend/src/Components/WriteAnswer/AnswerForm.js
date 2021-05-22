import React from 'react';

function AnswerForm({ onInputValueChange, onFormSubmit, inputValue }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        onFormSubmit();
    }
    const handleChange = (e) => {
        onInputValueChange(e.target.value);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleChange} />
            <button type="submit">Vérifier</button>
        </form>
    );
}

export default AnswerForm;
