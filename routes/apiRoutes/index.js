const router = require('express').Router();

// const todoRoutes = require('./todoRoutes');
// const userRoutes = require('./userRoutes');
const authRoutes = require('./authRoutes');

//   /api
// /api/todo
// router.use('/todo', todoRoutes);
// /api/user
// router.use('/user', userRoutes)

// /api/auth
router.use('/auth', authRoutes);

module.exports = router;
