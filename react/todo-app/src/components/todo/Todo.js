import React from "react";


import "./Todo.css"

export default function Todo({text,done,onCheck}){
    return (
        <div className="todo">
            <input type="checkbox" checked={done} onChange={onCheck}/>
            <div>{text}</div>
        </div>
    )
}