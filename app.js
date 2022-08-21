const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

const route = require('./routes/tasks');
// routes
app.get('/', (req, res) => {
  res.send(`<h1>Task Manager</h1>`);
});

app.use('/api/v1/tasks ', route);

//app.get('/api/v1/tasks')  - get all the tasks
// app.post('/api/v1/tasks') - Create a new task
// app.get('/api/v1/tasks/:id') - get a single task
// app.patch('/api/v1/tasks/:id') - update a task
// app.delete('/api/v1/tasks/:id') - delete task

app.listen(port, () => {
  console.log(`server is listening at port:${port}`);
});
console.log('Task Manager App');
