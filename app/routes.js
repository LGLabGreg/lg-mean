var Todo = require('./models/todo');

module.exports = function(app) {

  // server routes ===========================================================
  // handle things like api calls
  // authentication routes

  // sample api route
  app.get('/api/todos', function(req, res) {
    // use mongoose to get all nerds in the database
    Todo.find(function(err, things) {

      // if there is an error retrieving, send the error. 
      // nothing after res.send(err) will execute
      if (err)
        res.send(err);

      res.json(things); // return all nerds in JSON format
    });
  });

  // create todo and send back all todos after creation
  app.post('/api/todos', function(req, res) {

    // create a todo, information comes from AJAX request from Angular
    Todo.create({
      text: req.body.text,
      done: false
    }, function(err, todo) {
      if (err)
        res.send(err);

      // get and return all the todos after you create another
      Todo.find(function(err, todos) {
        if (err)
          res.send(err)
        res.json(todos);
      });
    });

  });

  // delete a todo
  app.delete('/api/todos/:todo_id', function(req, res) {
    Todo.remove({
      _id: req.params.todo_id
    }, function(err, todo) {
      if (err)
        res.send(err);

      // get and return all the todos after you create another
      Todo.find(function(err, todos) {
        if (err)
          res.send(err)
        res.json(todos);
      });
    });
  });

  // frontend routes =========================================================
  // route to handle all angular requests
  app.get('*', function(req, res) {
    res.sendfile('./build/index.html'); // load our public/index.html file
  });

};