import { Section, Todo } from '../todo/todo.interfaces';

export const groupTodos = (todos: Todo[]): Section[] => {
  return todos.reduce((sections, todo) => {
    let section = sections.find((section) => section.title === todo.section);
    if (!section) {
      section = { title: todo.section, todos: [] };
      sections.push(section);
    }
    section.todos.push(todo);
    return sections;
  }, [] as Section[]);
};
