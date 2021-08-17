import React, { useState } from 'react';

export function Form({ addTodo }) {
    const [name, setName] = useState('');

    function handleClick(e) {
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        addTodo(name);
        setName('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={name} onChange={handleClick} />
            <input type='submit' value='Add Todo' />
        </form>
    );
}