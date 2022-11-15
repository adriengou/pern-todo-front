import React, {Fragment, useState} from 'react';
import "./input-todo.css"
import {API_URL} from "../../environment";
import todoService from "../../services/todo-service";

const InputTodo = (args:any)=>{

    //Variables
    let {addTodo} = args

    //States
    let [description, setDescription] = useState("")

    //Functions
    const onInputChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setDescription(e.target.value)
    }

    //Template
    return(
        <div className="input-div">
            <input type="text" value={description} onChange={onInputChange}/>
            <button onClick={()=>addTodo(description)}>Add</button>
            <p>{typeof addTodo}</p>
        </div>
    )
}

export default InputTodo
