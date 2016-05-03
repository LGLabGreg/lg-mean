var Todo = require('./models/todo');

module.exports = function(app) {

  // server routes ===========================================================

  // authentication routes
  app.use('/', function(req, res, next) {
    //console.log('middleware');
    next();
  });

  //GET
  app.get('/api/todos', function(req, res) {
    // use mongoose to get all todos in the database
    Todo.find(function(err, todos) {

      // if there is an error retrieving, send the error. 
      // nothing after res.send(err) will execute
      if (err)
        res.send(err);

      res.json(todos); // return all todos in JSON format
    });
  });

  //POST
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

  //PUT
  app.put('/api/todos', function(req, res) {
    console.log('put: ' + JSON.stringify(req.body));
    Todo.findOne({
      _id: req.body._id
    }, function(err, todo) {
      console.log('found: ' + JSON.stringify(todo));
      console.log('found txt: ' + JSON.stringify(todo.text));
      if (err)
        res.send(err);

      // update todo
      todo.text = req.body.text;
      todo.done = req.body.done;
      // save the todo
      todo.save(function(err) {
        if (err)
          res.send(err);
        console.log('User successfully updated!');

        // get and return all the todos after you create another
        Todo.find(function(err, todos) {
          if (err)
            res.send(err)
          res.json(todos);
        });
      });

    });
  });

  //DELETE
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