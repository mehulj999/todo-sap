import { useState } from 'react';

// library imports
import { PlusIcon } from '@heroicons/react/24/solid'

function TodoForm ({ addTodo }) {
  const [todo, setTodo] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTodo({
      text: todo,
      checked: false,
      id: Date.now()
    })
    setTodo("")
  }

  return (
    <form
      className="todo"
      onSubmit={handleFormSubmit}
      >
      <div className="wrapper">
        <input
          type="text"
          id="todo"
          className="input"
          value={todo}
          onInput={(e) => setTodo(e.target.value)}
          required
          autoFocus
          maxLength={60}
          placeholder="Enter Todo"
        />
        <label
          htmlFor="todo"
          className="label"
        >Enter Todo</label>
      </div>
      <button
        className="btn"
        aria-label="Add Todo"
        type="submit"
        >
        <PlusIcon />
      </button>
    </form>
  )
}
export default TodoForm