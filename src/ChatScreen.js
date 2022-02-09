import Avatar from '@material-ui/core/Avatar';
import React,{useState} from 'react'
import './ChatScreen.css'

function ChatScreen() {
    const [input,setInput] = useState("");
    const [messages,setMessages] = useState([
        {
            name : 'Natasha Phiri',
            image :"https://media.istockphoto.com/photos/beautiful-woman-soft-makeup-and-perfect-skin-picture-id1133213198?k=6&m=1133213198&s=612x612&w=0&h=MQGFE8-cfFi3YpfGwPA6KZoCdSPjsRgfwAgIGCmfZ3w=",
            message: 'Whats up'
        },

        {
            name : 'Natasha Phiri',
            image :"https://media.istockphoto.com/photos/beautiful-woman-soft-makeup-and-perfect-skin-picture-id1133213198?k=6&m=1133213198&s=612x612&w=0&h=MQGFE8-cfFi3YpfGwPA6KZoCdSPjsRgfwAgIGCmfZ3w=", 
            message: 'How is it going'
        },

        {
            message: 'Yes how are you'
        }
    ]);

    const handleSend = e => {
        e.preventDefault();
        setMessages([...messages,{message:input}]);
        setInput("");
    }

    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">YOU MATCHED WITH NATASHA PHIRI ON 10/08/20</p>  
            {messages.map(message => (
                message.name ? (
              <div className="chatScreen__message">
                    <Avatar className="chatScreen__image"
                            alt={message.name}
                            src = {message.image}
                    />
                    <p className="chatScreen__text">{message.message}</p>
                </div>
                ) :(
                <div className="chatScreen__message">
                    <p className="chatScreen__textUser">{message.message}</p>
                </div>
                )
                
            ))}    

            <form className="chatScreen__input">
                <input value={input} onChange={(e) => setInput(e.target.value)} className="chatScreen__inputField" type="text" placeholder="Type a message..." />
                <button type="submit" onClick={handleSend} className="chatScreen__inputButton">SEND</button>
            </form>
        </div>
    );
}

export default ChatScreen
