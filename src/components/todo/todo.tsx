import React, { useEffect, useState } from "react";
import "./todo.css";
import InputTodo from "../input-todo/input-todo";
import ListTodo from "../list-todo/list-todo";
import todoService from "../../services/todo-service";

const Todo = () => {
  //Variables

  //States
  const [todoList, setTodoList] = useState<any[]>([]);

  useEffect(() => {
    getTodos();
    console.log(typeof addTodo);
  }, []);

  //Functions
  const addTodo = async (description: any) => {
    try {
      const response = await todoService.create(description);
      console.log(response.data);

      setTodoList((prevTodoList) => [...prevTodoList, response.data]);
    } catch (err) {
      console.error(err);
    }
    console.warn("TODOOOOOOOOO");
  };

  const getTodos = async () => {
    let response = await todoService.getAll();
    console.log(response.data);
    setTodoList(response.data);
  };

  const deleteTodo = async (todo: any) => {
    await todoService.delete(todo.todo_id);
    let newList = todoList.filter((v) => v.todo_id !== todo.todo_id);
    setTodoList(newList);
  };

  const updateTodo = async (id: number, description: string) => {
    let response = await todoService.update(id, description);
    let newList = todoList.map((v: any) => {
      return id === v.todo_id ? response : v;
    });
    setTodoList(newList);
  };

  //Template
  return (
    <div>
      <h1 className="header">Input Todo</h1>
      <div className="input">
        <InputTodo addTodo={addTodo} />
      </div>
      <div className="list">
        <ListTodo
          list={todoList}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      </div>
    </div>
  );
};

export default Todo;
