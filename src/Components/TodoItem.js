// TodoItem.js
import React from 'react';
import './Style.css';

const TodoItem = ({ todo, onEdit, onToggleStatus, onDelete }) => {
  return (
    <tr className="todo-item" data-id={todo.id}>
      <td>{todo.task}</td>
      <td>{todo.dueDate}</td>
      <td>{todo.status}</td>
      <td className='todo-actions'>
        <button className="btn btn-warning btn-sm my-button" onClick={() => onEdit(todo.id)}>
          <i className="bx bx-edit-alt bx-bx-xs"></i>
        </button>
        <button className="btn btn-success btn-sm my-button" onClick={() => onToggleStatus(todo.id)}>
          <i className="bx bx-check bx-xs"></i> 
        </button>
        <button className="btn btn-error btn-sm my-button" onClick={() => onDelete(todo.id)}>
          <i className="bx bx-trash bx-xs"></i> 
        </button>
      </td>
    </tr>
  );
};

export default TodoItem;
