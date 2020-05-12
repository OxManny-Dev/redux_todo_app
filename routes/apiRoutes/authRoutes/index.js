const router = require('express').Router();
const { signUp } = require('./../../../controllers/authController');

router.post('/signup', signUp);

module.exports = router;
