import React, { Component } from "react";
import "./Chat.css";
//import * as io from 'socket.io-client';
import * as WebSocketWrapper from 'ws-wrapper'

class Chat extends Component {
    state = {
        messages: [],
        message: ""
    };

    constructor(props) {
        super(props);

        /*this.socket = io('http://localhost:3000');
        
        this.socket.on("chat message", function (msg) {
            const {messages} = this.state;
            this.setState({
                messages: [...messages, msg]
            })
            window.scrollTo(0, document.body.scrollHeight);
        });
        this.socket.on('connection', () => console.log("yay!"));*/

        // create connection to server
        this.socket = new WebSocketWrapper(
            new WebSocket("ws://" + window.location.host + "/socket")
        );
        this.socket.on("chatMessage", (from, message) => {
            const { messages } = this.state;
            this.setState({
                messages: [...messages, { from, message }]
            })
            window.scrollTo(0, document.body.scrollHeight);
        });
        this.socket.on("open", () => console.log('Socket connected!'));

        //this.socket.request("getform", formId)
        //    .then(...)
        //
    }

    updateInputChange = (event) => {
        const input = event.target;
        this.setState({
            [input.name]: input.value
        })
    };

    sendMessage = (event) => {
        event.preventDefault();
        this.socket.emit("chatMessage", this.state.message);
        this.setState({ message: "" });
    };

    render() {
        return (
            <div className="chat">
                <ul>
                    {this.state.messages.map((msg) =>
                        <li>{msg.from}: {msg.message}</li>)}
                </ul>
                <form onSubmit={this.sendMessage}>
                    <div className="form-group chat-input">
                        <input className="form-control" onChange={this.updateInputChange}
                        name="message" value={this.state.message} />
                    </div>
                    <div className="chat-button" >
                    <button className="btn btn-primary">Send</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Chat;