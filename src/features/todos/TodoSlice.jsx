import {createSlice} from "@reduxjs/toolkit";

const SavedTodos=JSON.parse(localStorage.getItem("todos"))||[];

const initialState={
    items:SavedTodos,
}

const todoSlice=createSlice({
    name:"todos",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            state.items.push({id:Date.now(),todo:action.payload, completed:false});
            localStorage.setItem("todos",JSON.stringify(state.items));
             
        },
        deleteTodo:(state,action)=>{
            state.items = state.items.filter((task)=>task.id!==action.payload);
             localStorage.setItem("todos",JSON.stringify(state.items));
        },
       updateTodo:(state,action)=>{
        const {id,newTodo}=action.payload;
        const todoNewEdit=state.items.find((t)=>t.id==id)
        if(todoNewEdit){
            todoNewEdit.todo=newTodo;
        }
        localStorage.setItem("todos",JSON.stringify(state.items));
       }  
    }  
});
  console.log(todoSlice);
export const{addTodo,deleteTodo,updateTodo}=todoSlice.actions;
export default todoSlice.reducer;


