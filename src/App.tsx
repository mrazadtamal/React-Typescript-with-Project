import React from "react";
import "./App.css";
import InputFile from "./components/InputFile";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="header">AZAD TODO</div>
      <InputFile />
    </div>
  );
};

export default App;
