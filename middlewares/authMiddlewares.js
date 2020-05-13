const passport = require('passport');

// Tells passport to look for a 'jwt' strategy that we defined
const requireAuth = passport.authenticate('jwt', { session: false });

const requireSignIn = passport.authenticate('local', { session: false });

module.exports = {
  requireAuth,
  requireSignIn,
};
