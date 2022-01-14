import { type } from "os";
import React from "react";
import { Todo } from "../model";
type Props = {
  todo: Todo;
};

const SingleTodo = ({ todo, todos, setTodos }) => {
  return (
    <div>
      <h1>SingleTodo</h1>
    </div>
  );
};

export default SingleTodo;
