import React from "react";

const Todo = ({ todo, toggleTodos }) => {
  const handleTodoClick = () => {
    toggleTodos(todo.id);
  };
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={handleTodoClick}
        />
        {todo.name}
      </label>
    </div>
  );
};

export default Todo;
