import { groupBy, map } from 'lodash';
import { Section, Todo } from '../todo/todo.interfaces';

export const groupTodos = (todos: Todo[]): Section[] => {
  return map(groupBy(todos, 'section'), (todos, title) => ({
    title: title,
    todos,
  }));
};
