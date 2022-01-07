import { orderBy, find } from 'lodash';
import React from 'react';
import Todo from './Todo';
import { Section, Todo as TTodo } from './todo.interfaces';

const sortTodos = (todos: TTodo[]) =>
  orderBy(todos, ['done', 'priority'], ['asc', 'desc']);

export default (section: Section) => {
  const [todos, setTodos] = React.useState(sortTodos(section.todos));

  const updateTodo = (title: string, done: boolean) => {
    const todo = find(todos, { title });
    if (todo) {
      todo.done = done;
    }
    setTodos(sortTodos(todos));
  };
  return (
    <div className="p-2">
      <h2 className="pb-2 ml-2 font-bold">{section.title}</h2>
      <ul className="divide-y border rounded">
        {todos.map((todo) => (
          <Todo {...todo} updateTodo={updateTodo} />
        ))}
      </ul>
    </div>
  );
};
