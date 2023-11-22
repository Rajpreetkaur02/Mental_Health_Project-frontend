import React, { useState, useEffect } from 'react';
import './GroupChatPage.css'
import SockJS from 'sockjs-client'
import Stomp from 'stompjs'
import { over } from 'stompjs'; 

var stompClient = null;

const colors = [
  '#2196F3', '#32c787', '#00BCD4', '#ff5652',
  '#ffc107', '#ff85af', '#FF9800', '#39bbb0'
];

const ChatApp = () => {
  // const [username, setUsername] = useState('');
//   const [stompClient, setStompClient] = useState(null);
  const [connecting, setConnecting] = useState(true);
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const [userData, setUserData] = useState({
    username: '',
    connected: false,
    message: ''
  });

  // useEffect(() => {
  //   console.log(userData);
  // }, [userData]);


//   useEffect(() => {
//     if (stompClient) {
//       stompClient.connect({}, onConnected, onError);
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [stompClient]);

  const connect = () => {

    // if (username.trim()) {
    //   setUsername(username.trim());

    //   const socket = new SockJS('http://localhost:8080/ws');
    //   const stompClient = over(socket);
    //   stompClient.connect({}, onConnected, onError);

    // //   setStompClient(stomp);
    // }
    // console.log(username);

    let Sock = new SockJS('http://locahost:8080/ws');
    stompClient = over(Sock);
    stompClient.connect({}, onConnected, onError);
    
  };

  const onConnected = () => {
    setUserData({...userData,"connected": true});

    stompClient.subscribe('/topic/public', onMessageReceived);

    stompClient.send("/app/addUser",
      {},
      JSON.stringify({ sender: userData.username, type: 'JOIN' })
    );

    setConnecting(false);
  };

  const onError = (error) => {
    console.error('Could not connect to WebSocket server. Please refresh this page to try again!', error);
  };

  const sendMessage = (event) => {
    event.preventDefault();

    const messageContent = messageInput.trim();
    if (messageContent && stompClient) {
      const chatMessage = {
        sender: userData.username,
        content: messageInput,
        type: 'CHAT'
      };
      stompClient.send("/app/sendMessage", {}, JSON.stringify(chatMessage));
      setMessageInput('');
    }
  };

  const onMessageReceived = (payload) => {
    const message = JSON.parse(payload.body);

    setMessages((prevMessages) => [...prevMessages, message]);
  };

  const getAvatarColor = (messageSender) => {
    let hash = 0;
    for (let i = 0; i < messageSender.length; i++) {
      hash = 31 * hash + messageSender.charCodeAt(i);
    }
    const index = Math.abs(hash % colors.length);
    return colors[index];
  };

  const handleUsername=(event)=>{
    const {value}=event.target;
    setUserData({...userData,"username": value});
  }

  const registerUser=()=>{
    connect();
  }

  return (
    <div>
      {/* {connecting && <div className="connecting">Connecting...</div>} */}

      {/* {!username &&(
        <div id="username-page">
          <div className="username-page-container">
            <h1 className="title">Type your username to enter the Chatroom</h1>
            <form onSubmit={connect}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Username"
                  autoComplete="off"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-group">
                <button type="submit" className="accent username-submit">Start Chatting</button>
              </div>
            </form>
          </div>
        </div>
      )} */}
      
      {userData.connected? 
      <>
      <h1>connected</h1>
      </>
      :
      <>
        <div id="username-page">
          <div className="username-page-container">
            <h1 className="title">Type your username to enter the Chatroom</h1>
            <form onSubmit={registerUser}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Username"
                  autoComplete="off"
                  className="form-control"
                  value={userData.username}
                  onChange={handleUsername}
                />
              </div>
              <div className="form-group">
                <button type="submit" className="accent username-submit">Start Chatting</button>
              </div>
            </form>
          </div>
        </div>
      </>
      }

      {userData.username && !connecting && (
        <div id="chat-page">
          <div className="chat-container">
            <div className="chat-header">
              <h2>Spring WebSocket Chat Demo - By Alibou</h2>
            </div>
            <ul id="messageArea">
              {messages.map((message, index) => (
                <li key={index} className={message.type === 'JOIN' || message.type === 'LEAVE' ? 'event-message' : 'chat-message'}>
                  {message.type !== 'JOIN' && message.type !== 'LEAVE' && (
                    <>
                      <i style={{ backgroundColor: getAvatarColor(message.sender) }}>{message.sender[0]}</i>
                      <span>{message.sender}</span>
                    </>
                  )}
                  <p>{message.content}</p>
                </li>
              ))}
            </ul>
            <form onSubmit={sendMessage}>
              <div className="form-group">
                <div className="input-group clearfix">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    autoComplete="off"
                    className="form-control"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                  />
                  <button type="submit" className="primary">Send</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatApp;
