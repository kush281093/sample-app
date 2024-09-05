import React from "react";

function TodoItem({ task, toggleTaskCompletion, deleteTask }) {
  return (
    <li
      style={{
        textDecoration: task.completed ? "line-through" : "none",
        listStyle: "none",
      }}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskCompletion(task.id)}
      />
      {task.text}
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;