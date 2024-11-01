import React, { useState, useEffect } from 'react';
import styles from './TodoList.module.css';
import TodoItem from './TodoItem'

function TodoList({ todos, toggleCompleted, deleteTodo, enterEditMode }) {
  return (
    <ul className={styles.todos}>

      { // we will sort based on ascending order of ID (oldest first)
        // the completed todos will be sent below
        // We can be confident that this implementation is right because
        // we are taking the datetime as the value for the ID
        todos
          .sort((a, b) => {
            if (a.completed && !b.completed) return 1;
            if (!a.completed && b.completed) return -1;
            return a.id - b.id;
          })
          .map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              toggleCompleted={toggleCompleted}
              enterEditMode={enterEditMode}
            />
        ))}
    </ul>
  )
}


export default TodoList
