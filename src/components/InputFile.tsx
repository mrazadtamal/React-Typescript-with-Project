import React from "react";
import "./InputFile.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: () => void;
}

const InputFile: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  return (
    <>
      <form onSubmit={handleAdd} className="input">
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="todoInput"
          type="text"
          placeholder="add todo"
        />
        <button type="submit" className="inputBtn">
          ADD
        </button>
      </form>
    </>
  );
};

export default InputFile;
