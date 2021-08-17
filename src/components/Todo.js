import React from 'react';

export function Todo({ todo }) {
    return (
        <div>
            <span>{todo.name}</span>
        </div>
    );
}