import React, { useState, useRef, useReducer } from 'react';

interface ITodoListProps {
  text: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface Todo {
  text: string;
  complete: boolean;
}

interface AddAction {
  type: 'add';
  text: string;
}

interface RemoveAction {
  type: 'remove';
  idx: number;
}

type Actions = AddAction | RemoveAction;

const TodoReducer = (state: Todo[], action: Actions) => {
  switch (action.type) {
    case 'add':
      return [...state, { text: action.text, complete: false }];
    case 'remove':
      return state.filter((_, i) => action.idx !== i);
    default:
      return state;
  }
};

const TodoList: React.FC<ITodoListProps> = () => {
  const [todoText, setTodoText] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const [todos, dispatch] = useReducer(TodoReducer, []);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(event.target.value);
  };

  return (
    <div ref={divRef}>
      <input type="text" ref={inputRef} onChange={onChangeHandler} />
      <button onClick={() => dispatch({ type: 'add', text: todoText })}>Add</button>
      <hr />
      <ul>
        {todos.map((todo: Todo, idx: number) => {
          return <li key={idx}>{todo.text}</li>;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
