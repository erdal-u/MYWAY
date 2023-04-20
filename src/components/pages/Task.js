import React from "react";

const Task = ({ task, onDelete }) => {
  return (
    <li className="flex justify-between items-center bg-gray-700 p-2 mb-2 rounded-lg">
      <span>{task}</span>
      <button
        className="px-2 py-1 bg-red-600 rounded-lg hover:bg-red-500"
        onClick={onDelete}>
        X
      </button>
    </li>
  );
};

export default Task;
