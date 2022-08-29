import React,{useState} from "react";
import Chatbot from "react-chatbot-kit";
import io from 'socket.io-client'
import config from "./chatbot/config";
import ActionProvider from "./chatbot/ActionProvider";
import MessageParser from "./chatbot/MessageParser";
import "./App.css";
import Livechat from "./livechatbot/Livechat";
const socket=io.connect("http://localhost:3001");

function App() {
  const [username,setUsername]=useState("")
  const [room,setRoom]=useState("")
   const joinroom=()=>{
    if(username !=='' && room !==''){
      socket.emit('join_room',room)

    }
   }
  return (
    <div className="App">
      <div style={{ maxWidth: "300px" }}>
        <Chatbot
        
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
        <div>
          <h1>join chatbot</h1>
          <input type="text" placeholder="name" onChange={(e)=>{setUsername(e.target.value)}}/>
          <input type="text" placeholder="room id" onChange={(e)=>{setRoom(e.target.value)}} />
          <button onClick={joinroom}>join a room</button>
        </div>
        
      </div>
      <Livechat socket={socket} username={username} room={room}/>
    </div>
  );
}

export default App;
