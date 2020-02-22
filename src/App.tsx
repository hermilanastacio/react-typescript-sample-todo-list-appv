import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./todo.model";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]); //We describe what our todo state should look like

  const todoAddHandler = (text: string) => {
    setTodos(prevTodos => [
      ...prevTodos, //Which is the latest todo, it is supported by default
      { id: Math.random().toString(), text: text }
    ]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId);
    });
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList onDeleteTodo={todoDeleteHandler} items={todos} />
    </div>
  );
};

export default App;
