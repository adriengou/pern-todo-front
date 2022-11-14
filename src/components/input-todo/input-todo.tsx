import React, {Fragment, useState} from 'react';
import "./input-todo.css"
import {API_URL} from "../../environment";

const InputTodo = ()=>{
    let [description, setDescription] = useState("")

    let onInputChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setDescription(e.target.value)
    }

    const onFormSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        try {
            const options = {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({description})
            }

            const response = await fetch(`${API_URL}`, options)
            const jsonData = await response.json()
            console.log(jsonData)

        }catch (err){
            console.error(err)
        }
    }

    return(
        <div className="input-div">
            <h1 className="input-header">Input Todo</h1>
            <form className="input-form" onSubmit={onFormSubmit}>
                <input type="text" value={description} onChange={onInputChange}/>
                <button>Add</button>
            </form>
        </div>
    )
}

export default InputTodo
