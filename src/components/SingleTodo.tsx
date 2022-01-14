import React from "react";
import { Todo } from "../model";

const SingleTodo: React.FC<{
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}> = ({ todo, todos, setTodos }) => {
  return (
    <form className="todoSingle">
      <span className="todosText">{todo.todo}</span>
    </form>
  );
};

export default SingleTodo;
