var express = require('express');
var todoRepository = require('./TodoRepository');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.get('/api/todo', function (req, res) {
  res.send(todoRepository.list());
});

app.post('/api/todo', function (req, res) {
  res.send(todoRepository.store(req.body.todo));
});

app.delete('/api/todo/:id', function (req, res) {
  res.send(todoRepository.remove(parseInt(req.params.id,10)));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
