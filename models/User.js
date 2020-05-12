const { Schema, model } = require('mongoose');
const { isEmail, isLength } = require('validator');

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    validate: [isEmail, 'Please enter a valid email address'],
    required: [true, 'You must provide an email address']
  },
  password: {
    type: String,
    required: [true, 'You must provide a password'],
    validate: [ (value) => isLength(value, { min: 6 }), 'Your password must be at least 6 characters long' ]
  },
  dateCreated: {
    type: Date,
    default: Date.now()
  },
  todos: [ {type: Schema.Types.ObjectId, ref: 'Todo' } ],
});

module.exports = model('User', UserSchema);












