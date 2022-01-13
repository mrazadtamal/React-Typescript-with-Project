import React from "react";
import "./InputFile.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputFile: React.FC<Props> = ({ todo, setTodo }) => {
  return (
    <>
      <form className="input">
        <input className="todoInput" type="text" placeholder="add todo" />
        <button type="submit" className="inputBtn">
          ADD
        </button>
      </form>
    </>
  );
};

export default InputFile;
