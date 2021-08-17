import React, { useReducer } from 'react';
import './App.css';
import { Form } from './components/Form';
import { TodoList } from './components/TodoList';

export const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo'
}

function reducer(todos, action) {
  switch(action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, completed: false };
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);

  function addTodo(name) {
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
      </header>
      <Form addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
