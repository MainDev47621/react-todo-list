import React from 'react';
import { Todo } from './Todo';

export function TodoList({ todos, dispatch }) {
    return (
        <div>
            {todos.map(todo => {
                return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
            })}
        </div>
    )
}