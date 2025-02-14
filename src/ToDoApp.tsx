import React, { FC, useState } from "react";
import Todo from "./ToDo";

const ToDoApp: FC = () => {

  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

    return (
        <>
            <h1>Todo List</h1>
            <input 
            type="text" 
            value={newTodo} 
            onChange={(e) => setNewTodo(e.target.value)} 
            />
            <button onClick={addTodo}>Add Todo</button>
            <ul>
            {todos.map((todo, index) => (
                <Todo key={index} text={todo} />
            ))}
            </ul>
        </>
    )
}

export default ToDoApp;

