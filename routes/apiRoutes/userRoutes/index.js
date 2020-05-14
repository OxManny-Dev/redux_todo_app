const router = require('express').Router();
const { addTodo, getAllUserEmails, getUserTodos, deleteUserTodoById, updateUserTodoById } = require('./../../../controllers/userController');

const { requireAuth } = require('./../../../middlewares/authMiddlewares');
//  /api/user
//   /api/user/todos
router.route('/todos')
  .post(requireAuth, addTodo)
  .get(requireAuth, getUserTodos);

router.route('/todos/:todoId')
  .delete(requireAuth, deleteUserTodoById)
  .put(requireAuth, updateUserTodoById);
// /api/user/emails
router.get('/emails', getAllUserEmails);

module.exports = router;


