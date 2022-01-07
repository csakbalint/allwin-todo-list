import React from 'react';
import { render } from 'react-dom';
import todos from './todo/todo.data';
import Sections from './todo/Sections';
import './style.css';

export function App() {
  return <Sections todos={todos} />;
}

render(<App />, document.getElementById('root'));
