const router = require('express').Router();
const { addTodo, getAllUserEmails, getUserTodos, deleteUserTodoById } = require('./../../../controllers/userController');

const { requireAuth } = require('./../../../middlewares/authMiddlewares');
//  /api/user
//   /api/user/todos
router.route('/todos')
  .post(requireAuth, addTodo)
  .get(requireAuth, getUserTodos);

router.route('/todos/:todoId')
  .delete(requireAuth, deleteUserTodoById);
// /api/user/emails
router.get('/emails', getAllUserEmails);

module.exports = router;


