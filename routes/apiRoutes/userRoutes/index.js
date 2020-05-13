const router = require('express').Router();
const { addTodo, getAllUserEmails } = require('./../../../controllers/userController');

const { requireAuth } = require('./../../../middlewares/authMiddlewares');
//  /api/user
//   /api/user/todos
router.route('/todos')
  .post(addTodo);

// /api/user/emails
router.get('/emails', requireAuth, getAllUserEmails);


module.exports = router;
