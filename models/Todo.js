const { Schema, model } = require('mongoose');
//

const TodoSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  dateCreated: {
    type: Date,
    default: Date.now()
  },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
});


module.exports = model('Todo', TodoSchema);
// Current Exercise
// Create a Todo.js file inside of the models folder.
//   Inside of the Todo.js
// You will create a TodoSchema
// The schema should have a 'text' field
// that is of type String and it is required
// Feel free to write your own custom error message in case user doesn't provide it
// The Schema should have a 'completed' field
// That is of type Boolean and should default to false
// The Schema should have a 'dateCreated' Field
// That is of type date and defaults to the current date now
// Export this model so we can use it in other files.
// **** As a bonus make sure we are requiring this model inside of the index.js in the models folder.
