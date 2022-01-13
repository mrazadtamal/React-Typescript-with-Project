import React from "react";

const InputFile = () => {
  return (
    <>
      <form className="input">
        <input className="todoInput" type="text" placeholder="add todo" />
        <button>Add</button>
      </form>
    </>
  );
};

export default InputFile;
