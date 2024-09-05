import React, { useState } from "react";
import TodoList from "./TodoList";

// Mock DB - initial data (can be replaced with an API call)
const mockDB = [
  { id: 1, text: "Item 1", completed: false },
  { id: 2, text: "Item 2", completed: false },
];

function TodoApp() {
  const [tasks, setTasks] = useState(mockDB);
  const [newTask, setNewTask] = useState("");

  // Add new task
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        { id: tasks.length + 1, text: newTask.trim(), completed: false },
      ]);
      setNewTask("");
    }
  };

  // Mark task as done/undone
  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <TodoList
        tasks={tasks}
        toggleTaskCompletion={toggleTaskCompletion}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default TodoApp;