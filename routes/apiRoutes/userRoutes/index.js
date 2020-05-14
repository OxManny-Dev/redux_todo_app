const router = require('express').Router();
const { addTodo, getAllUserEmails, getUserTodos } = require('./../../../controllers/userController');

const { requireAuth } = require('./../../../middlewares/authMiddlewares');
//  /api/user
//   /api/user/todos
router.route('/todos')
  .post(requireAuth, addTodo)
  .get(requireAuth, getUserTodos);

// /api/user/emails
router.get('/emails', getAllUserEmails);

module.exports = router;


