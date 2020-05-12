const { isEmail, isLength } = require('validator');
const { User } = require('./../models');

module.exports = {
  signUp: async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'You must provide both email and a password' });
    }
    if (!isEmail(email)) {
      return res.status(400).json({ error: 'You must provide a valid email address' });
    }
    if (!isLength(password, { min: 6 })) {
      return res.status(400).json({ error: 'Your password must be at least 6 characters long' });
    }
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) { return res.status(401).json({ error: 'User email already exists '});}
      const user = await new User({ email, password }).save();
      return res.status(200).json(user);
    } catch (e) {
      return res.status(403).json(e);
    }
  }
};
