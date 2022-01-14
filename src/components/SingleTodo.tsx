import React from "react";
import { Todo } from "../model";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineCloudDone } from "react-icons/md";
import "./style.css";

const SingleTodo: React.FC<{
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}> = ({ todo, todos, setTodos }) => {
  return (
    <form className="todoSingle">
      <span className="todosText">{todo.todo}</span>
      <div>
        <span className="icon">
          <FiEdit />
        </span>
        <span className="icon">
          <AiOutlineDelete />
        </span>
        <span className="icon">
          <MdOutlineCloudDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
