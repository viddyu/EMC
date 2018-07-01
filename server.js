const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const http = require("http");

// Wrapper for raw WebSocketServer to make programming more fun!
const WebSocketServerWrapper = require("ws-server-wrapper");

// Raw WebSocket server support for Node.js
const WebSocketServer = require("ws").Server;

const routes = require("./routes");
const PORT = process.env.PORT || 3001;

const app = express();
const server = http.createServer(app);
// Create WebSocketServer
const wss = new WebSocketServerWrapper(
    new WebSocketServer({ server, path: "/socket" }));

// Handle chat message
wss.on("chatMessage", function (msg) {
    console.log("Incoming message", msg);
    // `this` refers to the WebSocket who sent the message
    wss.emit("chatMessage", this.get("name"), msg);
});
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
wss.on("connection", (socket) => {
    console.log("new connection!");
    // Set name to what username is supposed to be
    socket.set("name", Math.random());
    socket.emit("chatMessage", `Welcome to chat, ${socket.get('name')}!`)
});
wss.on("disconnect", (socket) => {
    // When any user disconnects, run this...
    console.log("bye!", socket.get("name"));
    wss.emit("chatMessage", "System", socket.get("name") + " left the chat!");
});

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/EMCdb");

// Start the API server
server.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});