import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList/TodoList";
import uuidv4 from "uuid/v4";

const LOCAL_STORAGE_KEY = "todoApp.todos";

function App() {
  //{
  /*'object destructuring' the line below*/
  //}
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const toggleTodos = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  };

  const handleAddTodo = (e) => {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
    });
    todoNameRef.current.value = null;
  };

  const handleClearTodos = () => {
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  };

  return (
    <React.Fragment>
      <TodoList todos={todos} toggleTodos={toggleTodos} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodos}>Clear completed Todo</button>
      <div>
        {todos.filter((todo) => !todo.complete).length} left to complete
      </div>
    </React.Fragment>
  );
}
export default App;
