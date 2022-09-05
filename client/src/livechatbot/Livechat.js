import React, { useState,useEffect } from 'react'
import './livechat.css'
import ScrollToBottom from "react-scroll-to-bottom";
function Livechat({username,room,socket}) {
    const [currentmsg, setCurrentmsg] = useState()
    const [messageList,setMessageList]=useState([]);
    const [receivemessage,setReceivemessage]=useState([])
    const sendMessage=async()=>{
      if(currentmsg !==''){
        const messagedata={
          room:room,
          author:username,
          message:currentmsg,
          time:new Date(Date.now()).getHours()+":"+new Date(Date.now()).getMinutes(),}
    await socket.emit("send_message",messagedata) 
    setMessageList((list) => [...list, messagedata]);
    console.log("messagedata",messagedata);
    setCurrentmsg("");   

        }
      }
      useEffect(() => {
              socket.on("receive_message",(data)=>{
                 console.log('receive_message',data);
                 setMessageList((list) => [...list, data]);
                 

              })
        
      }, [socket])
      
useEffect(() => {
  console.log('received msg',messageList);
  


}, )

    
  return (
    <div className="chat-window">
     
      <div className="chat-header">
      
        <p>{username} &nbsp;&nbsp;&nbsp;&nbsp; Live Chat</p>
      </div>
      <div className="chat-body">
        <ScrollToBottom className="message-container">
          {messageList.map((messageContent) => {
            return (
              <div
                className="message"
                id={username === messageContent.author ? "other" : "you"}
              >
               {username === messageContent.author?  <div>
                  <div className="message-content">
                    <p>{messageContent.message}</p>
                  </div>
                  <div className="message-meta">
                    <p id="time">{messageContent.time}</p>
                    <p id="author">{messageContent.author}</p>
                  </div>
                </div>:<div>
                  <div className="message-content">
                    <p>{messageContent.message}</p>
                  </div>
                  <div className="message-meta">
                    <p id="time">{messageContent.time}</p>
                    <p id="author">{messageContent.author}</p>
                  </div>
                </div>}
              </div>
            );
          })}
        </ScrollToBottom>
      </div>
      <div className="chat-footer">
        <input
          type="text"
          value={currentmsg}
          placeholder="Write your message here..."
          onChange={(event) => {
            setCurrentmsg(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  )
}

export default Livechat