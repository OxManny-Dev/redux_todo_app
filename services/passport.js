const passport = require('passport');
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const LocalStrategy = require('passport-local');

const { User } = require('./../models');
const { secret } = require('./../config');

// Setup options for jwt
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: secret,
};

// Create jwt strategy for handling JWT
// This strategy is for authenticating users on each request
const jwtLogin = new JwtStrategy(jwtOptions, async (payload, done) => {
  // payload === { sub: user._id, iat: timeStamp }
  try {
    const user = await User.findById(payload.sub);
    if (!user) {
      return done(null, false);
    }
    return done(null, user);
  } catch (e) {
    return done(e, false);
  }
});


// By default Localstrategy is looking for a username
// However, we are not using username, we are using email
// So here I am saying, hey if you're looking for the username
// look for the email property from the request instead
const localOptions = { usernameField: 'email' };

const localLogin = new LocalStrategy(localOptions, async (email, password, done) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return done(null, false);
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return done(null, false);
    }
    return done(null, user);
  } catch (e) {
    return done(e, false);
  }
});

// Let's passport know that we have declared a 'jwt' strategy.
// If we call passport.authenticate('jwt')   passpoort will refer
// to this jwtLogin strategy that we defined
passport.use(jwtLogin);
// Lets passport know that we have declared a 'local' strategy
// If we call passport.authenticate('local') passport will refer
// to this localLogin as the strategy that we defined
passport.use(localLogin);
