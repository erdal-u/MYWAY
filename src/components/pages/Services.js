import React from "react";
import { useState } from "react";
import Task from "../pages/Task";

export default function Home() {
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    // get value from input field
    const task = document.querySelector("#taskInput").value;
    // add task to state
    setTasks([...tasks, task]);
    // clear input field
    document.querySelector("#taskInput").value = "";
  };

  const deleteTask = (index) => {
    // remove task from state
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <header className="bg-gray-700 p-4">
        <h1 className="text-3xl font-bold">My Todo List</h1>
      </header>
      <main className="p-4">
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            id="taskInput"
            className="p-2 bg-gray-700 border-2 border-gray-600 rounded-lg w-full mr-2"
          />
          <button
            className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500"
            onClick={addTask}>
            Add Task
          </button>
        </div>
        <ul>
          {tasks.map((task, index) => (
            <Task key={index} task={task} onDelete={() => deleteTask(index)} />
          ))}
        </ul>
      </main>
    </div>
  );
}
