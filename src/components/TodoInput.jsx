import React,{useState} from 'react';
import {useDispatch,useSelector} from "react-redux";
import {addTodo} from "../features/todos/TodoSlice.jsx";
import TodoList from './TodoList.jsx';
import "../index.css"

export default function TodoInput() {
    const[todo,setTodo]=useState("");
    const[searchTodo,setSearchTodo]=useState("");
    const dispatch=useDispatch();
     const todos = useSelector((state) => state.todos.items);
   

    const handleTask=()=>{
        if(todo.trim()){
            dispatch(addTodo(todo));
            setTodo("")
        }  
    }
   const SearchTodos = todos.filter((e) =>
    e.todo.toLowerCase().includes(searchTodo.toLowerCase())
  );
  return (
    <>
        <div className='heading'>
            <h1>TODO LIST </h1>
            <input type="text" value={searchTodo} placeholder='Search Your Task Here...' onChange={(e)=>setSearchTodo(e.target.value)}/>
        </div>
        <div className='body-task'>
            <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)} placeholder='Enter Your Task'/>
            <button onClick={handleTask}>Add</button>
           
        </div>
        <div>
             <TodoList todos={SearchTodos}/>
        </div>
    </>
  )
}
