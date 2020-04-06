import React from "react";

import Todo from "./Todo/Todo";

const TodoList = ({ todos, toggleTodos }) => {
  return todos.map((todo) => {
    return <Todo key={todo.id} toggleTodos={toggleTodos} todo={todo} />;
  });
};

export default TodoList;
