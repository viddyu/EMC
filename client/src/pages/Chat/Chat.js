import React, { Component } from "react";
import Auth from '../../Auth/Auth.js';
import "./Chat.css";
//import * as io from 'socket.io-client';
import * as WebSocketWrapper from 'ws-wrapper'
const auth = new Auth();

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
        const protocol = window.location.protocol.replace("http", "ws");
        if(auth.isAuthenticated)
           auth.getProfile();
        this.socket = new WebSocketWrapper(
            new WebSocket(protocol + "//" + window.location.host + "/socket")
        );
        if(auth.isAuthenticated)
        {
            auth.getProfile();
            let senderName = localStorage.getItem("name");
            console.log( "Sender Name:" + senderName );
            this.socket.set("name", senderName);
        }
        else
        {
            this.socket.set("name", Math.random());
        }
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
        if(auth.isAuthenticated)
        {
          auth.getProfile();  // Get Profile Info form login
          let senderName = localStorage.getItem("name");
          console.log( "Sender Name:" + senderName );
          this.socket.set("name", senderName);
        }    
        this.socket.emit("chatMessage", this.state.message);
        this.setState({ message: "" });
    };

    render() {
        return (
            <div className="chat">
                <ul>
                    {this.state.messages.map((msg) =>
                        <li>{msg.from}: {msg.message}</li>  
                    )};
                </ul>
                <form className="chat-form" onSubmit={this.sendMessage}>
                    <div className="form-group chat-input">
                        <textarea className="form-control" onChange={this.updateInputChange}
                            name="message" value={this.state.message} />
                        <div className="chat-button">
                            <button className="btn btn-primary">Send</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Chat;