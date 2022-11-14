import React, {Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import InputTodo from "./components/input-todo/input-todo";
import ListTodo from "./components/list-todo/list-todo";

function App() {
  return (
    <div className="app">
        <div className="input">
            <InputTodo/>
        </div>
        <div className="list">
            <ListTodo/>
        </div>
    </div>

  );
}

export default App;
