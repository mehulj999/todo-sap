// require dependencies so they can be used throughout this code
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const todoRoutes = require('./api/todos');

// initialize Express.js server and save as a variable
// so it can be referred to as `app`
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/todos', todoRoutes);

// run the server on port 3000
// for example the app can run locally at this URL: http://localhost:3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});