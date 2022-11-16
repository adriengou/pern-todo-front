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
  };

  const getTodos = async () => {
    let response = await todoService.getAll();
    setTodoList(response.data);
  };

  const deleteTodo = async (todo: any) => {
    await todoService.delete(todo.todo_id);
    let newList = todoList.filter((v) => v.todo_id !== todo.todo_id);
    setTodoList(newList);
  };

  const updateTodo = async (id: number, description: string) => {
    console.warn("updateTodo id and description", id, description);
    if (!id || !description) {
      throw new Error("id or description is missing");
      return;
    }

    let response = await todoService.update(id, description);
    let newTodo = response.data;
    let newList = todoList.map((v: any) => {
      return newTodo.todo_id === v.todo_id ? newTodo : v;
    });
    setTodoList(newList);
  };

  //Template
  return (
    <div className="todo">
      <h1 className="header">Input Todo</h1>
      <div className="body">
        <InputTodo addTodo={addTodo} />
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
