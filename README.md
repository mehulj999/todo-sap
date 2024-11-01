# Todo App

**Author**: Mehul Dinesh Jain  
**Description**: This is a basic Todo application that allows users to create, read, update, and delete (CRUD) tasks. The frontend is built using ReactJS, while the backend API is powered by ExpressJS. The app showcases essential CRUD functionality and RESTful API integration.

---

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Folder Structure](#folder-structure)
- [Future Improvements](#future-improvements)

---

## Features

- **Create** a new task
- **Read** and display the list of tasks
- **Update** a task’s status (complete/incomplete) and text
- **Delete** a task from the list
- Simple, user-friendly interface with responsive design

## Technologies Used

- **Frontend**: ReactJS
- **Backend**: ExpressJS, NodeJS
- **Database**: JSON file storage (for simplicity in this assignment)

## Setup and Installation

### Prerequisites

- Node.js and npm installed on your machine

### Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/todo-app.git
    cd todo-app
    ```

2. Install dependencies for both the frontend and backend:

    - **Backend**:
      ```bash
      cd server
      npm install
      ```

    - **Frontend**:
      ```bash
      cd ../client
      npm install
      ```

3. Start the backend server:
    ```bash
    cd server
    node app
    ```

4. Start the frontend React app:
    ```bash
    cd ../client
    npm start -y
    ```

5. Open your browser and go to `http://localhost:3001` to view the app.

---

## Usage

1. **Add a Todo**: Enter a task in the input field and click "Add Todo."
2. **View Todos**: See the list of all tasks with their completion status.
3. **Edit a Todo**: Click on a task to edit its text.
4. **Toggle Completion**: Mark a task as complete/incomplete by toggling the checkbox.
5. **Delete a Todo**: Click on the delete icon to remove a task.

---

## API Endpoints

The following API endpoints are used in the backend to perform CRUD operations:

### 1. **Create a Todo**
   - **Endpoint**: `POST /api/todos`
   - **Description**: Adds a new todo item.
   - **Request Body**:
      ```json
      {
         "text": "Sample todo item",
         "completed": false
      }
      ```
   - **Response**:
      ```json
      {
         "id": 1,
         "text": "Sample todo item",
         "completed": false
      }
      ```

### 2. **Read All Todos**
   - **Endpoint**: `GET /api/todos`
   - **Description**: Fetches all todo items.
   - **Response**:
      ```json
      [
         {
            "id": 1,
            "text": "Sample todo item",
            "completed": false
         }
      ]
      ```

### 3. **Update a Todo**
   - **Endpoint**: `PUT /api/todos/:id`
   - **Description**: Updates the text or completion status of a todo item.
   - **Request Body**:
      ```json
      {
         "text": "Updated text",
         "completed": true
      }
      ```
   - **Response**:
      ```json
      {
         "id": 1,
         "text": "Updated text",
         "completed": true
      }
      ```

### 4. **Toggle Complete a Todo**
   - **Endpoint**: `PATCH /api/todos/:id`
   - **Description**: Toggles a todo item from complete to incomplete.
   - **Response**:
      ```json
      {"id": 1,"text": "updated text", "completed":true}
      ```


### 5. **Delete a Todo**
   - **Endpoint**: `DELETE /api/todos/:id`
   - **Description**: Deletes a todo item.
   - **Response**:
      ```json
      {"id": 1,"text": "todo text", "completed":true}
      ```

---

## Folder Structure

```
todo-app/
├── client/               # Frontend ReactJS application
│   ├── public/
│   └── src/
│       ├── components/   # React components (TodoForm, TodoList, etc.)
│       ├── App.js
│       └── index.js
│       └── Main.js
│       └── index.css
└── server/               # Backend ExpressJS API
    ├── api/
    ├── app.js         # Entry point for the server
    └── data/
        |──todos.json   # JSON file for data storage
```

---

## Future Improvements

1. **User Authentication**: Add user accounts to personalize and secure todos.
2. **Database Integration**: Use MongoDB or another database instead of JSON storage.
3. **Enhanced Styling**: Improve the UI/UX for a more professional look.
4. **Additional Features**: Implement tags, categories, or due dates for each todo.

---

## Conclusion

This Todo App demonstrates fundamental skills in React and Express, including CRUD functionality and API integration. Thank you for reviewing my mini project!

---
