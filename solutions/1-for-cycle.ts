import { Section, Todo } from '../todo/todo.interfaces';

export const groupTodos = (todos: Todo[]): Section[] => {
  const sections: Section[] = [];
  for (let i = 0; i < todos.length; i++) {
    let section = null;
    for (let j = 0; j < sections.length; j++) {
      if (sections[j].title === todos[i].section) {
        section = sections[j];
      }
    }
    if (!section) {
      section = { title: todos[i].section, todos: [] };
      sections.push(section);
    }
    section.todos.push(todos[i]);
  }
  return sections;
};
