import React,{useState} from "react";
import io from 'socket.io-client'
import "./App.css";
import Chatbott from "./chatbot/Chatbot";

import Livechat from "./livechatbot/Livechat";
const socket=io.connect("http://localhost:3001");

function App() {
  const [showChat, setShowChat] = useState(false);
  const [username,setUsername]=useState("")
  const [room,setRoom]=useState("")
   const joinroom=()=>{
    if(username !=='' && room !==''){
      socket.emit('join_room',room)
      setShowChat(true);

    }
   }
  return (
    <div className="App">
      {/* <div style={{ maxWidth: "300px" }}>
      <Chatbott/>
        <div>
          <h1>join chatbot</h1>
          <input type="text" placeholder="name" onChange={(e)=>{setUsername(e.target.value)}}/>
          <input type="text" placeholder="room id" onChange={(e)=>{setRoom(e.target.value)}} />
          <button onClick={joinroom}>join a room</button>
        </div>
      <Livechat socket={socket} username={username} room={room}/>
        
      </div> */}
      <Chatbott/>
       <div className="App">
      {!showChat ? (
        <div className="joinChatContainer">
          <h3>Join A Chat</h3>
          <input
            type="text"
            placeholder="Name..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button onClick={joinroom}>Join A Room</button>
        </div>
      ) : (
        <Livechat socket={socket} username={username} room={room} />
      )}
    </div>
    </div>
  );
}

export default App;
