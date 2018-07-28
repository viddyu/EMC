const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const http = require("http");
const jwt = require('express-jwt');
const jwtAuthz = require('express-jwt-authz');
const jwksRsa = require('jwks-rsa');
const cors = require('cors');
require('dotenv').config();

// Wrapper for raw WebSocketServer to make programming more fun!
const WebSocketServerWrapper = require("ws-server-wrapper");

// Raw WebSocket server support for Node.js
const WebSocketServer = require("ws").Server;

const routes = require("./routes");
const PORT = process.env.PORT || 3001;

const app = express();

const server = http.createServer(app);

// Create WebSocket.Server
const wss = new WebSocketServerWrapper(
    new WebSocketServer({ server, path: "/socket" }));

var serverWrapper = new WebSocketServerWrapper(wss);

// Connected clients receive "Hello!"
serverWrapper.emit("msg", "Hello!");

// Handle chat message
wss.on("chatMessage", function (msg) {
    console.log("Incoming message", msg);
    // `this` refers to the WebSocket who sent the message
    wss.emit("chatMessage", this.get("name"), msg);
});

// key = hospitalID
// value = set of sockets connected from that hospital
let hospitalSockets = {};

wss.on("login", function (userId, token) {
    // `this` refers to the connected socket

    // Authenticate user
    // TODO: Make sure that this user isn't lying about their userId
    // In other words, validate the token
    // email is the key

    // TODO: Query MongoDB to make sure the user exists in the system
    // Also get the user type from MongoDB


    // If they are authenticated...
    this.set("userId", userId);
    // If this user is a hospital user...
    // TODO: Get the user's hospital ID
    const hospitalId = 123;
    const socketSet = hospitalSockets[hospitalId];
    if (socketSet == null) {
        // See MDN docs for `Set` (kind of like an array)
        socketSet = new Set();
        hospitalSockets[hospitalId] = socketSet;
    }
    // Add to the socketSet
    socketSet.add(socket);
});

wss.on("formSubmit", function (form) {
    console.log("Incoming message", form);

    // Check to see which hospital this form goes to
    // Get hospitalId from `form`
    const { hospitalId } = form;

    // Notify all sockets from that hospital about this form submission
    if (hospitalSockets[hospitalId]) {
        hospitalSockets[hospitalId].forEach(socket => {
            socket.emit("formSubmit", form);
        })
    }

    // Save the form in the database
});

wss.on("getForm", function (formId) {
    // `this` refers to the connected socket who issued the getform request
    // Check to see if the user is logged in...
    if (this.get("userId") == null)
        return;

    // Return a Promise that resolves to the form requested
    // client retrieves any form once its been saved
    return db.EMC
        .find({ _id: object, id: formId })
        .sort({ date: -1 })
})

// Example of request/response (delete b/c this is insecure!)
wss.on("readFile", function (filename) {
    // You can return data or a Promise that resolves to data!
    // The response is sent back to the client WebSocket.
    return new Promise((resolve, reject) => {
        fs.readFile(filename, (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
});

wss.on("connection", (socket, user) => {
    // When any user connects
    let userName =  ', ' + socket.get("name");
    socket.set("name", userName);
    console.log("hello!", userName);
    socket.emit("chatMessage", "Welcome to EMC. Please state your emergency ", socket.get("name") + ".");
});
wss.on("disconnect", (socket) => {
    // When any user disconnects, run this...
    console.log("bye!", socket.get("name"));
    wss.emit("chatMessage", "User ", socket.get("name") + " left the chat!");
});

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Handle authentication support

const corsOptions = {
    origin: 'http://localhost:3000'
};

app.use(cors(corsOptions));

const checkJwt = jwt({
    // Dynamically provide a signing key based on the kid in the header and the singing keys provided by the JWKS endpoint.
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
    }),

    getToken(req) {
        if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
            return req.headers.authorization.split(' ')[1]
        }

        return null
    },

    // Validate the audience and the issuer.
    // audience: process.env.AUTH0_AUDIENCE,
    issuer: `https://emcfr.auth0.com/`,
    algorithms: ['RS256']
});

const checkScopes = jwtAuthz(['read:messages']);

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/EMCdb");

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/EMCusers");
// Start the API server
server.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});