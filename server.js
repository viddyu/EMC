const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const http = require("http");
const WebSocketServerWrapper = require("ws-server-wrapper");
const WebSocketServer = require("ws").Server;
const routes = require("./routes");

const PORT = process.env.PORT || 3001;

const app = express();
const server = http.createServer(app);
// Create WebSocketServer
const wss = new WebSocketServerWrapper(
    new WebSocketServer({server, path: "/socket"}) );

// Handle chat message
wss.on("chatMessage", function(msg) {
    console.log("Incoming message", msg);
    wss.emit("chatMessage", msg);
});
wss.on("connection", (socket) => {
    console.log("new connection!");
});
wss.on("disconnect", (socket) => {
    console.log("bye!");
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