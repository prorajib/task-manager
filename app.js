const express = require('express');

const app = express();
require('dotenv').config();
const tasks = require('./routes/tasks');
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
const connectDB = require('./db/connect');

const port = process.env.PORT || 5000;

// middleware
app.use(express.static('./public'));
app.use(express.json());

// routes

app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);
// app.post('/api/v1/tasks') - Create a new task
// app.get('/api/v1/tasks/:id') - get a single task
// app.patch('/api/v1/tasks/:id') - update a task
// app.delete('/api/v1/tasks/:id') - delete task

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server is listening at port:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
