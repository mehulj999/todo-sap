import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './components/TodoList';
import EditForm from './components/EditForm'
import TodoForm from './components/TodoForm'

const API_URL = 'http://localhost:3000/api/todos';
function Main() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState({});
  const [newTodoText, setNewTodoText] = useState('');
  const [previousFocusEl, setPreviousFocusEl] = useState(null);
  const [editedTodo, setEditedTodo] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // Fetch todos on component load
  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    const response = await axios.get(API_URL);
    setTodos(response.data);
  };

  const handleAddTodo = async (newTodo) => {
    const newTodoText = newTodo.text.trim();
    if (!newTodoText) {
      return;
    }
    const date = newTodo.date;
    try {
      const response = await axios.post(API_URL, { text: newTodoText, completed: false, date: date });
      const addedTodo = response.data;

      setTodos([addedTodo, ...todos]);
      setNewTodoText('');

      console.log("New todo added:", addedTodo);
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const deleteTodo = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    loadTodos();
  };

  const createToggleCompleted = (todos, setTodos) => async (id) => {
    const todo = todos.find((todo) => todo.id === id);
    if (todo) {
      try {
        // Send a PATCH request to update the completed status
        await axios.patch(`${API_URL}/${id}`, { completed: !todo.completed });
        setTodos(todos.map((t) =>
          t.id === id ? { ...t, completed: !t.completed } : t
        ));
      } catch (error) {
        console.error("Error updating the todo:", error);
      }
    } else {
      console.error("Todo not found for id:", id);
    }
  };

  const toggleCompleted = createToggleCompleted(todos, setTodos);

  const updateTodo = async (newTodo) => {
    try {
      const id = newTodo.id;
      const response = await axios.put(`${API_URL}/${id}`, newTodo);
      const updatedTodo = response.data;
      setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
      closeEditMode();
    } catch (error) {
      console.error("Error updating the todo:", error);
    }
    closeEditMode();
  };

  const closeEditMode = () => {
    setIsEditing(false);
    previousFocusEl.focus();
  }

  const enterEditMode = (todo) => {
    setEditedTodo(todo);
    setIsEditing(true);
    setPreviousFocusEl(document.activeElement);
  }

  return (
    <div className="container">
      <header>
        <h1>My Todo List</h1>
      </header>
      {
        isEditing && (
          <EditForm
            editedTodo={editedTodo}
            updateTodo={updateTodo}
            closeEditMode={closeEditMode}
          />
        )
      }
      <TodoForm addTodo={handleAddTodo} />
      {todos && (
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          toggleCompleted={toggleCompleted}
          enterEditMode={enterEditMode}
        />
      )}
    </div>
  )
}

export default Main;
