import * as React from "react";
import { useRef } from "react";
import "./NewTodo.css";

type NewTodoProps = {
  onAddTodo: (todoText: string) => void; //This means a function that accepts a string and returns void
};

const NewTodo: React.FC<NewTodoProps> = props => {
  const textInputRef = useRef<HTMLInputElement>(null); //Ref is typeof HTMLInputElement and initial value of null

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value; //This means we explicitly initiate the code and we're aware that current might be null
    props.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
        <button type="submit">ADD TODO</button>
      </div>
    </form>
  );
};

export default NewTodo;
