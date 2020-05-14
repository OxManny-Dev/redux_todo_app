const router = require('express').Router();

const { getTodos } = require('../../../controllers/todoController');

// /api/todos
router.get('/', getTodos);

module.exports = router;
