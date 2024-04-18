// TodoForm.js
import React, { useState } from 'react';
import './Style.css';

const TodoForm = ({ onAdd }) => {
  const [task, setTask] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleAddTodo = () => {
    if (task.trim() === '') {
      alert('Please enter a task');
      return;
    }
    onAdd(task, dueDate);
    setTask('');
    setDueDate('');
  };

  return (
    <div className="input-section">
      <input
        type="text"
        placeholder="Add a todo . . ."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="input input-bordered input-secondary w-full max-w-xs "
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="input input-bordered input-secondary w-full max-w-xs schedule-date"
      />
      <button className="btn btn-secondary add-task-button" onClick={handleAddTodo}>
        <i className="bx bx-plus bx-sm"></i>
      </button>
    </div>
  );
};

export default TodoForm;
