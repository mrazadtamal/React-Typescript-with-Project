import React, { useEffect, useRef, useState } from "react";
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
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <form className="todoSingle" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="todos__single--text"
          ref={inputRef}
        />
      ) : todo.isDone ? (
        <s className="todos__single--text">{todo.todo}</s>
      ) : (
        <span className="todos__single--text">{todo.todo}</span>
      )}
      <div>
        <span className="icon">
          <FiEdit />
        </span>
        <span
          className="icon"
          onClick={() => {
            handleDelete(todo.id);
          }}
        >
          <AiOutlineDelete />
        </span>
        <span
          className="icon"
          onClick={() => {
            handleDone(todo.id);
          }}
        >
          <MdOutlineCloudDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
