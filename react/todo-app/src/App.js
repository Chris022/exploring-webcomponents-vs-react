import React from "react";

import Heading from './components/heading/Heading';
import Card from './components/card/Card';
import Button from './components/button/Button';
import Todo from './components/todo/Todo';
import Spacer from './components/spacer/Spacer';

import './App.css';

function App() {

  let [todos,setTodos] = React.useState([]);

  let add_todo = ()=>{
    let name = window.prompt("Todo:","");
    if(name==="")return;
    let todo = {
      text:name,
      done:false
    }
    setTodos([...todos,todo]);
  }

  let check_todo = (i) =>{
    let todos_buff =  [...todos]
    todos_buff[i].done = !todos_buff[i].done;
    setTodos(todos_buff)
  }

  return (
    <div className='app'>
      <Heading text="ToDo - React"></Heading>
      <Card>
        {todos.map((todo,i) => (
          <Todo key={"todo-"+i} text={todo.text} done={todo.done} onCheck={()=>check_todo(i)}></Todo>
        ))}
        <Spacer />
        <Button text="Add ToDo" onClick={add_todo}></Button>
      </Card>
    </div>
  );
}

export default App;
