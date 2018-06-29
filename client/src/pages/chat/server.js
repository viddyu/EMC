const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const port = process.env.PORT || 3002;

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", function(socket){
	console.log("Someone connected");
  socket.on("chat message", function(msg){
    io.emit("chat message", msg);
  });
});

http.listen(port, function(){
  console.log("Connected to port " + port);
});