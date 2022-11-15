import React, {Fragment, useState, useEffect} from 'react';
import "./list-todo.css"
import {API_URL} from "../../environment";
import todoService from "../../services/todo-service";

const ListTodo = (args:any)=>{
    //Variables
    let {list, deleteTodo, updateTodo} = args
    //States

    //Functions


    //Template
    return(
        <div className="list-div">
            {
                list.map((todo:any, i:number)=>(
                    <div className="todo" key={i}>
                        <span className="description">{todo.description}</span>
                        <button className="edit-button">Edit</button>
                        <button onClick={()=>deleteTodo(todo)} className="delete-button">Delete</button>
                    </div>
                ))
            }
        </div>
    )
}

export default ListTodo
