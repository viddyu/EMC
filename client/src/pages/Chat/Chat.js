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
        this.socket = new WebSocketWrapper(
            new WebSocket("ws://localhost:3000/socket")
        );
        this.socket.on("chatMessage", (msg) => {
            const {messages} = this.state;
            this.setState({
                messages: [...messages, msg]
            })
            window.scrollTo(0, document.body.scrollHeight);
        });
        this.socket.on("open", () => console.log('Socket connected!'));
    }

    updateInputChange = (event) => {
        const input = event.target;
        this.setState({
            [input.name]: input.value
        })
    };

    sendMessage = (event) => {
        this.socket.emit("chatMessage", this.state.message);
        this.setState({message: ""});
    };

    render() {
        return (
            <div>
                <ul>
                    {this.state.messages.map((msg) => <li>{msg}</li>)}
                </ul>
                <input onChange={this.updateInputChange} name="message"
                    value={this.state.message} />
                <button onClick={this.sendMessage}>Send</button>
            </div>
        )
    }
}

export default Chat;