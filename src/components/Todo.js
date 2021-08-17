import React from 'react';
import { ACTIONS } from '../App';

export function Todo({ todo, dispatch }) {
    return (
        <div>
            <span>{todo.name}</span>
            <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}>Delete Todo</button>
        </div>
    );
}