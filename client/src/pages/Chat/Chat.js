import React, { Component } from "react";
import "./Chat.css";

class Chat extends Component {

    render() {
        return (

            <body>
                <ul id="messages"></ul>
                <form action="">
                    <input id="m" autocomplete="off" />
                    <button>Send</button>
                </form>
                <script src="https://cdn.socket.io/socket.io-1.4.5.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                {/* <script>
                    $(function () => {
                    var socket = io();
                    $("form").submit(function () {
                        socket.emit("chat message", $("#m").val());
                    $("#m").val("");
                    return false;
                });
                    socket.on("chat message", function (msg) {
                        $("#messages").append($("<li>").text(msg));
                    window.scrollTo(0, document.body.scrollHeight);
                });
            });
            </script> */}
            </body>

            // <div>This is where the chat goes</div>

        )
    }
}

export default Chat;