import React from 'react';
import { Todo } from './todo.interfaces';
import Section from './Section';
import { groupTodos as groupTodosWithFor } from '../solutions/1-for-cycle';
import { groupTodos as groupTodosWithReduce } from '../solutions/2-reduce';
import { groupTodos as groupTodosWithLodash } from '../solutions/3-lodash';

interface Props {
  todos: Todo[];
}

export default ({ todos }: Props) => {
  const sections = groupTodosWithFor(todos);
  return (
    <React.Fragment>
      {sections.map((sectionData) => (
        <Section key={sectionData.title} {...sectionData} />
      ))}
    </React.Fragment>
  );
};
