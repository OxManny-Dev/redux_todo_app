const { Todo, User } = require('./../models');


module.exports = {
  addTodo: async (req, res) => {
    const { text } = req.body;
    if (!text) {
      return res.status(400).json({ error: 'You must provide a text' });
    }
    try {
      const newTodo = await new Todo({ text, user: req.user._id }).save();
      req.user.todos.push(newTodo);
      await req.user.save();
      console.log("Saved", req.user);
      return res.status(200).json(newTodo);
    } catch (e) {
      return res.status(403).json(e);
    }
  },
  getAllUserEmails: async (req, res) => {
    console.log(req.user);
    try {
      const users = await User.find({}, 'email');
      if (!users) {
        return res.status(404).json({ error: 'No user found' });
      }
      return res.status(200).json(users);
    } catch (e) {
      return res.status(403).json(e);
    }
  },
  getUserTodos: async (req, res) => {
    console.log(req.user);
    try {
      // const user = await User.findById(req.user._id).populate('todos');
      // return res.status(200).json(user.todos);
      const todos = await Todo.find({ user: req.user._id });
      return res.status(200).json(todos);
    } catch (e) {
      return res.status(403).json(e);
    }
  }
};


//  Inside of userRoutes. We want to create a route for getting all of a Users todos
//  Get request should go to /api/user/todos
//  Make sure that this route is protected by the requireAuth middleware
//  Remember  console.log(req.user)

// Inside of the userController
// Add a method called getUserTodos

// This method should fetch all of the current logged in users todos
// No need to check if there are no todos
// It should respond in json all of the current logged in users todos with a status of a 200
// in the catch block, just use return res.status(403).json(e);

//  U can fetch all of the User's todos using The User queries or using the Todo queries
//   Using the User model requires a bit more work. You need to use populate
// If you use the Todo model, there is no need for populate.
