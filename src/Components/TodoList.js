// TodoList.js
import React from 'react';
import TodoItem from './TodoItem';
import './Style.css';

const TodoList = ({ todos, onEdit, onToggleStatus, onDelete }) => {
  return (
    <table className="table w-full">
      <thead>
        <tr>
          <th>Task</th>
          <th>Due Date</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody className="todos-list-body">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onEdit={onEdit}
            onToggleStatus={onToggleStatus}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TodoList;
