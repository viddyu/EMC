const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
//try{ 
    const keys = require('./keys');
// }
//catch(e) { console.log(e); }
const User = require('../models/user-model')

passport.serializeUser((user,done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user)
    });
});

var clientID = '';
var clientSecret = '';
if (process.env.GOOGLE_ID)
    clientID = process.env.GOOGLE_ID;
else
    clientID = keys.google.clientID;

if (process.env.GOOGLE_SECRET)
    clientSecret = process.env.GOOGLE_SECRET;
else    
    clientSecret = keys.google.clientSecret;

passport.use(
    new GoogleStrategy({
        // Options for the google strategy
        callbackURL: '/auth/google/redirect',
        clientID: clientID,
        clientSecret: clientSecret
    }, (accessToken, refreshToken, profile, done) => {
        // Passport callback function
        console.log('passport callback function fired');
        console.log(profile);
        // Check if user already exists in our db
        User.findOne({googleId: profile.id}).then((currentUser) => {
            if(currentUser){
                //  Already have the user
                console.log('user is: ' + currentUser);
                done(null, currentUser);
            } else {
                // If not create user in our db
                new User({
                    username: profile.displayName,
                    googleId: profile.id,
                    thumbnail: profile._json.image.url
                }).save().then((newUser) => {
                    console.log('new user created: ' + newUser)
                    done(null, newUser);
                });
            }
        });
    })
)