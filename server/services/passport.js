const mongoose = require('mongoose');
const passport = require('passport');
const config = require('../config/keys');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const UserModelClass = mongoose.model('users');

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
};

const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
    
    UserModelClass.findById(payload.sub, function(err, user) {
        if (err) { return done(err, false); }

        if(user) {
            done(null, user);
        } else {
            done(null, false);
        }
    })

});

passport.use(jwtLogin);