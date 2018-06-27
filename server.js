// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

const authRoutes = require('./routes/auth-routes');
const profileRoutes = require('./routes/profile-routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const cookie = require('./config/cookie');

const cookieSession = require('cookie-session');
const passport = require('passport');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

var keys_ = "";
if (process.env.COOKIE_KEY)
{
  keys_ = process.env.COOKIE_KEY
} 
else
{
  keys_ = 'cookie.session.cookieKey'
}
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys_]
}));

// Set view engine
app.set('view engine');

// Initialize passport
app.use(passport.initialize());
app.use(passport.session());

// Connect to mongodb
if(process.env.MONGODB_URL)
{
  mongoose.connect(process.env.MONGODB_URL);
} else {
//  try{
     const keys = require('./config/keys');
//     }
//  catch(e) { /*nothing to do */ }
  mongoose.connect(keys.mongodb.dbURI, () => {
      console.log('connected to mongodb');
  });
}
// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/html-routes.js")(app);
require("./routes/vitals-api-routes.js")(app);
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
