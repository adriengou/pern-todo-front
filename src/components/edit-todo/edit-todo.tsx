import "./edit-todo.css";
import React, { useEffect, useState } from "react";

export default function EditTodo(props: any) {
  //Variables

  //States
  const [newTodo, setNewTodo] = useState<any>();

  useEffect(() => {
    console.log("props todo from useEffect", props.editedTodo);
    console.log("newTodo from useEffect", newTodo);
  }, [newTodo, props.editedTodo]);

  //Functions
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("input value: ", event.target.value);
    setNewTodo({
      todo_id: props.editedTodo.todo_id,
      description: event.target.value,
    });
  };

  //Template
  if (!props.show) {
    return null;
  }

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        if (e.target === e.currentTarget) {
          props.cancelModal();
        }
      }}
      className="modal"
    >
      <div className="modal-content">
        <div className="modal-header">
          <h2>Edit Todo</h2>
        </div>
        <div className="modal-body">
          <input
            defaultValue={props.editedTodo.description}
            onChange={onInputChange}
            type="text"
            className="edit-input"
          />
        </div>
        <div className="modal-footer">
          <button
            onClick={(e) => {
              e.stopPropagation();
              console.log("newTodo from onClick", newTodo);
              props.editModal(newTodo);
            }}
            className="edit-button"
          >
            Edit
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              props.cancelModal();
            }}
            className="close-button"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
