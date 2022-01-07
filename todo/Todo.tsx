import React from 'react';
import { ArrowDownIcon, ArrowUpIcon, CheckIcon } from '@heroicons/react/solid';
import { Todo } from './todo.interfaces';

type Props = Todo & { updateTodo: (title: string, done: boolean) => void };

export default ({ title, priority, done, updateTodo }: Props) => {
  const finishTodo = () => updateTodo(title, true);
  const undoTodo = () => updateTodo(title, false);
  return (
    <li
      key={title}
      className="flex align-middle px-5 py-2 cursor-pointer hover:bg-gray-100"
    >
      {done ? (
        <CheckIcon className="w-5 h-5 text-green-600" onClick={undoTodo} />
      ) : (
        <span className="w-5 h-5 border rounded-full" onClick={finishTodo} />
      )}
      <span className="flex-grow ml-2">{title}</span>
      {priority === 'urgent' ? (
        <ArrowUpIcon className="w-5 h-5 text-red-600" aria-hidden="true" />
      ) : (
        <ArrowDownIcon className="w-5 h-5 text-green-600" aria-hidden="true" />
      )}
    </li>
  );
};
