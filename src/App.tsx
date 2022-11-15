import React from "react";
import "./App.css";
import Todo from "./components/todo/todo";
import Compas from "./components/comp-a/compa-a";

function App() {
  const { toto, compaRender } = Compas();

  console.log(toto);

  return (
    <div className="app">
      <Todo />
      <p>{compaRender}</p>
    </div>
  );
}

export default App;
