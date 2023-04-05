const passport = require('passport');
const express = require('express');
require('dotenv').config();

const {
    CLIENT_ID,
    CLIENT_SECRET,
    CALLBACK_URL,
} = process.env;


passport.serializeUser((user, done) => {
    done(null, user);
})
passport.deserializeUser(function(user, done) {
    done(null, user);
});
const GoogleStrategy = require('passport-google-oauth2').Strategy;
passport.use(new GoogleStrategy({
        clientID: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        callbackURL: CALLBACK_URL,
        passReqToCallback: true
    },
    function(request, accessToken, refreshToken, profile, done) {
        console.log("Google Profile");
        console.log(profile.emails[0].value, profile.displayName);
        done();
    }
));