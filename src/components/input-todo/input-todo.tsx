import React, { useState } from "react";
import "./input-todo.css";

const InputTodo = (args: any) => {
  //Variables
  let { addTodo } = args;

  //States
  let [description, setDescription] = useState("");

  //Functions
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  //Template
  return (
    <>
      <input type="text" value={description} onChange={onInputChange} />
      <button onClick={() => addTodo(description)}>Add</button>
      <p>{typeof addTodo}</p>
    </>
  );
};

export default InputTodo;
