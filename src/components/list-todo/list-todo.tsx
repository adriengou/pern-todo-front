import React, {Fragment, useState, useEffect} from 'react';
import "./list-todo.css"
import {API_URL} from "../../environment";

const ListTodo = ()=>{

    const [todoList, setTodoList] = useState([])

    const getTodos = () => {

    }

    useEffect(()=>{
        getTodos()
    })

    return(
        <div className="list-div">
            <div className="todo">
                <span className="description">Random desc</span>
                <button className="edit-button">Edit</button>
                <button className="delete-button">Delete</button>
            </div>
            <div className="todo">
                <span className="description">Just a second random desc</span>
                <button className="edit-button">Edit</button>
                <button className="delete-button">Delete</button>
            </div>
        </div>
    )
}

export default ListTodo
