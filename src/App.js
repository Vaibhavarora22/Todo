
// App.js
import React, { useState, useEffect } from 'react';
import TodoItem from './Components/TodoItem';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';
import FilterButtons from './Components/FilterButtons';
import Alert from './Components/Alert';
import ThemeSwitcher from './Components/ThemeSwitcher';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [theme, setTheme] = useState('night');
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(savedTodos);
    setFilteredTodos(savedTodos);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const addTodo = (task, dueDate) => {
    const newTodo = {
      id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
      task: task.length > 14 ? task.slice(0, 14) + '...' : task,
      dueDate: dueDate || 'No due date',
      completed: false,
      status: 'pending',
    };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    setFilteredTodos(updatedTodos);
    saveToLocalStorage(updatedTodos);
    showAlert('Task added successfully', 'success');
  };

  const editTodo = (id, updatedTask) => {
    const updatedTodos = todos.map(todo => (todo.id === id ? { ...todo, task: updatedTask } : todo));
    setTodos(updatedTodos);
    setFilteredTodos(updatedTodos);
    saveToLocalStorage(updatedTodos);
    showAlert('Todo updated successfully', 'success');
  };

  const deleteTodo = id => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
    setFilteredTodos(updatedTodos);
    saveToLocalStorage(updatedTodos);
    showAlert('Todo deleted successfully', 'success');
  };

  const toggleTodoStatus = id => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed, status: todo.completed ? 'pending' : 'completed' } : todo
    );
    setTodos(updatedTodos);
    setFilteredTodos(updatedTodos);
    saveToLocalStorage(updatedTodos);
  };

  const clearAllTodos = () => {
    setTodos([]);
    setFilteredTodos([]);
    localStorage.removeItem('todos');
    showAlert('All todos cleared successfully', 'success');
  };

  const filterTodos = status => {
    switch (status) {
      case 'all':
        setFilteredTodos(todos);
        break;
      case 'pending':
        setFilteredTodos(todos.filter(todo => !todo.completed));
        break;
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed));
        break;
      default:
        setFilteredTodos([]);
    }
  };

  const saveToLocalStorage = todos => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const showAlert = (message, type) => {
    setAlert({ message, type });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const themes = ['cupcake', 'dark', 'light', 'bumblebee', 'synthwave', 'halloween', 'fantasy', 'dracula', 'aqua', 'luxury', 'night'];

  const handleThemeChange = themeName => {
    setTheme(themeName);
  };

  return (
    <div className="container">
      <div className="container">
        <header>
          <h1>Todo List</h1>
          {alert && <Alert message={alert.message} type={alert.type} />}
          <TodoForm onAdd={addTodo} />
        </header>
        <FilterButtons onFilter={filterTodos} />
        <TodoList todos={filteredTodos} onEdit={editTodo} onToggleStatus={toggleTodoStatus} onDelete={deleteTodo} />
        <button className="btn btn-secondary delete-all-btn my-button" onClick={clearAllTodos}>
          Delete All
        </button>
        <ThemeSwitcher themes={themes} onThemeChange={handleThemeChange} />

      </div>
      
    </div>
  );
};

export default App;


