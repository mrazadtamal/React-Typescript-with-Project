import React, { useState } from "react";
import "./App.css";
import InputFile from "./components/InputFile";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");

  return (
    <div className="App">
      <div className="header">AZAD TODO</div>
      <InputFile todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default App;
