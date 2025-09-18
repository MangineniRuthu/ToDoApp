import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, updateTodo } from "../features/todos/TodoSlice";
import "bootstrap/dist/css/bootstrap.min.css";

export default function TodoList({ todos }) {
  const reduxTodos = useSelector((state) => state.todos.items);
  const [editTodo, setEditTodo] = useState("");
  const [editId, setEditId] = useState(null);
  const dispatch = useDispatch();
  const displayTodos = todos && todos.length > 0 ? todos : reduxTodos;
  const handleSave = (id) => {
    if (editTodo.trim()) {
      dispatch(updateTodo({ id, newTodo: editTodo }));
      setEditId(null);
      setEditTodo("");
    }
  };

  if (displayTodos.length === 0) {
    return <p>No Tasks Added Here!!</p>;
  }
  return (
    <div className="task-container">
      <ul>
        {displayTodos.map((todo) => (
          <li key={todo.id}>
            {editId === todo.id ? (
              <div className="edit-container">
                <input
                  type="text"
                  value={editTodo}
                  onChange={(e) => setEditTodo(e.target.value)}
                  placeholder="Edit Your Task here"
                />
                <button onClick={() => handleSave(todo.id)} className=" btn btn-success">Save</button>
                <button onClick={() => setEditId(null)} className=" btn btn-warning">Cancel</button>
              </div>
            ) : (
              <div className="btns-container">
                <input value={todo.todo}/>
                <button onClick={() => dispatch(deleteTodo(todo.id))} className="btn btn-warning">
                Delete
                </button>
                <button className="btn btn-secondary"
                  onClick={() => {
                    setEditId(todo.id);
                    setEditTodo(todo.todo);
                  }}
                >
                Edit
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
