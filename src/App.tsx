import React, { useState } from "react";
import "./App.css";
import InputFile from "./components/InputFile";
import { Todo } from "./model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  console.log(todo);
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = () => {};

  return (
    <div className="App">
      <div className="header">AZAD TODO</div>
      <InputFile todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    </div>
  );
};

export default App;
