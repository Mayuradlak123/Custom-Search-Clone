const passport = require('passport');
const express = require('express');
require('dotenv').config();

const {
    CLIENT_ID,
    CLIENT_SECRET,
    CALLBACK_URL,
} = process.env;

console.log(CLIENT_ID,
    CLIENT_SECRET,
    CALLBACK_URL, );
passport.serializeUser((user, done) => {
    done(null, user);
})
passport.deserializeUser(function(user, done) {
    done(null, user);
});
const GoogleStrategy = require('passport-google-oauth20').Strategy


passport.use(new GoogleStrategy({
        clientID: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        callbackURL: CALLBACK_URL,
        passReqToCallback: true
    },
    async function(accessToken, refreshToken, profile, callback) {
        await console.log(profile.emails[0].value);
        // callback(null, user);
    }
));