const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const port = process.env.PORT || 3002;

app.use(express.static(__dirname + "/src/components/chat/"));

io.on("connection", function(socket){
	console.log("Someone connected");
  socket.on("chat message", function(msg){
    io.emit("chat message", msg);
  });
});


const PORT = process.env.PORT || 3001;

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
app.listen(port, function(){
  console.log("Connected to port " + port);
});

app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
