import React from 'react';
import { Todo } from './Todo';

export function TodoList({ todos }) {
    return (
        <div>
            {todos.map(todo => {
                return <Todo key={todo.id} todo={todo} />
            })}
        </div>
    )
}