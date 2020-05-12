const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
mongoose.connect(process.env.MONGODB_URI  || 'mongodb://localhost/redux_todo_db', {  useNewUrlParser: true, useUnifiedTopology: true  });

app.listen(PORT);
