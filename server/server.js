const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
});

// GET /users returning an array of user objects
// Give users a name prop and age property

app.get('/users', (req, res) => {
  res.send([
    {
      name: 'don',
      age: 64
    },
    {
      name: 'bjorn',
      age: 28
    },
    {
      name: 'utrid',
      age: 77
    }
  ])
});

app.listen(3000, () => {
  console.log('Server is started at port 3000.')
});

module.exports.app = app;