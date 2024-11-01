const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, '../data/todos.json');

// Helper functions to read and write data
const readTodos = () => JSON.parse(fs.readFileSync(dataFilePath));
const writeTodos = (data) => fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));

// GET: Retrieve all todos
router.get('/', (req, res) => {
  const todos = readTodos();
  res.json(todos);
});

// POST: Add a new todo
router.post('/', (req, res) => {
  const todos = readTodos();
  const newTodo = { id: Date.now(), text: req.body.text, completed: false };
  todos.push(newTodo);
  writeTodos(todos);
  res.status(201).json(newTodo);
});

// PUT: Update a todo's completion status
router.put('/:id', (req, res) => {
  const todos = readTodos();
  let todo = todos.find(t => t.id === parseInt(req.params.id, 10));
  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  Object.assign(todo, req.body);
  writeTodos(todos);
  res.json(todo);
});


// PATCH: Only update completed status
router.patch('/:id', (req, res) => {
  const todos = readTodos();
  const todo = todos.find(t => t.id === parseInt(req.params.id, 10)); // Ensure base 10 parsing

  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  if (typeof req.body.completed !== 'undefined') {
    todo.completed = req.body.completed; // Update completed status
  } else {
    return res.status(400).json({ error: 'Completed status is required' });
  }

  writeTodos(todos);
  res.json(todo);
});


// DELETE: Remove a todo
router.delete('/:id', (req, res) => {
  let todos = readTodos();
  todos = todos.filter(t => t.id !== parseInt(req.params.id));
  writeTodos(todos);
  res.json({ message: 'Todo deleted' });
});

module.exports = router;
