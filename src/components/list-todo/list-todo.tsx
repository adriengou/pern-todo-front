import React, { useState, useEffect } from "react";
import "./list-todo.css";
import EditTodo from "../edit-todo/edit-todo";

const ListTodo = (props: any) => {
  //Variables

  //States
  const [show, setShow] = useState(false);
  const [editedTodo, setEditedTodo] = useState<any>({});

  //Functions
  const openModal = (todo: any) => {
    setEditedTodo(todo);
    console.log(todo, editedTodo);
    setShow(true);
  };

  const editTodo = (newTodo: any) => {
    if (!newTodo) {
      throw new Error("newTodo is missing");
      return;
    }
    console.warn("function editTodo newTodo:", newTodo);
    props.updateTodo(newTodo.todo_id, newTodo.description);
    setShow(false);
  };

  const closeModal = () => {
    setShow(false);
  };

  //Template
  return (
    <div className="list-div">
      {props.list.map((todo: any, i: number) => (
        <div className="list-element" key={i}>
          <span className="description">{todo.description}</span>
          <button onClick={() => openModal(todo)} className="edit-button">
            Edit
          </button>
          <button
            onClick={() => props.deleteTodo(todo)}
            className="delete-button"
          >
            Delete
          </button>
        </div>
      ))}
      <EditTodo
        show={show}
        editedTodo={editedTodo}
        editModal={editTodo}
        cancelModal={closeModal}
      />
    </div>
  );
};

export default ListTodo;
