const passport = require('passport');
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');

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

// Let's passport know that we have declared a 'jwt' strategy.
// If we call passport.authenticate('jwt')   passpoort will refer
// to this jwtLogin strategy that we defined
passport.use(jwtLogin);
