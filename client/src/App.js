import React,{useState} from "react";
import io from 'socket.io-client'
import "./App.css";
import Chatbott from "./chatbot/Chatbot";

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
      <Chatbott/>
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
