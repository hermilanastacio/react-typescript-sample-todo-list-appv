import * as React from "react";
import "./TodoList.css";

interface ITodoListProps {
  items: { id: string; text: string }[]; //This means it's an array of object
  onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<ITodoListProps> = props => {
  return (
    <ul>
      {props.items.map(todo => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={() => props.onDeleteTodo(todo.id)}>DELETE</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
