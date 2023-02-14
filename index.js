const express = require('express');
const app = express();
const { tasks } = require('./data');

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.status(200).send('hello worldsss');
});

app.get('/api/task', (req, res) => {
  res.status(200).json({ success: true, data: tasks });
});

app.post('/api/task', (req, res) => {
  const { task } = req.body;
  console.log(task);
  res.status(200).json({ success: true, task: task });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
