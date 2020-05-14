const { Todo } = require('../models');

module.exports = {
  getTodos: async (req, res) => {
    try {
      const todos = await Todo.find();
      if (!todos) {
        return res.status(404).json({ error: 'No todos found' });
      }
      return res.status(200).json(todos);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
};

// Today's exercise.
// Using the project we've been building in class
// Create a new file called 'todoController.js' inside of the controllers folder.
//   This file should require the Todo model from the model's folder (Either grab from index or from Todo.js)
// This file should export an object with a 'getTodos' method.
//   the 'getTodos' method should get all of the todos in the database.
//   If there are no todos, return a response with a status of 404 and a json error that says 'No todos found'
// Otherwise, you should return a response with a status of 200 and a json response of the todos in our database.
//   You can use return res.status(403).json({ error }); for the catch statement.
//   BONUS:
// Create a route for this in the routes folder.
//   It should be a brand new folder.
// the route should just be /api/todos and should not require any authentication middlewares.
//   All users should be able to get all the todos in the database.
//

