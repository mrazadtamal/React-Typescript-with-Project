import React from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";

import "./style.css";

interface props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<props> = ({ todos, setTodos }) => {
  return (
    <div className="container">
      <div className="todos">
        <span className="todoHeading">Active Task</span>
      </div>
      <div className="todos romove"></div>
    </div>
  );
};

export default TodoList;
