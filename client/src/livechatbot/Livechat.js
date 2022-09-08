import React, { useState,useEffect } from 'react'
import './livechat.css'
import ScrollToBottom from "react-scroll-to-bottom";
function Livechat({username,room,socket}) {
  let messagedata;
    const [currentmsg, setCurrentmsg] = useState()
    const [messageList,setMessageList]=useState([
      
{room: '1234', author: 'agent', message: 'welcome to our website!', time:new Date(Date.now()).getHours()+":"+new Date(Date.now()).getMinutes()},
{room: '1234', author: 'agent', message: 'Hi!,What is your name?', time:new Date(Date.now()).getHours()+":"+new Date(Date.now()).getMinutes()}

    ]);
    const sendMessage=async()=>{
      if(currentmsg !==''){
        const lowercase = currentmsg.toLowerCase();
        console.log('message user',currentmsg);
        if((lowercase.includes('hi') || lowercase.includes('hello')|| lowercase.includes('hey'))&&(username!='agent')){
           messagedata={
            room:room,
            author:username,
            message:currentmsg,
            time:new Date(Date.now()).getHours()+":"+new Date(Date.now()).getMinutes(),}
            await socket.emit("send_message",messagedata) 
            setMessageList((list) => [...list, messagedata]);
            setMessageList((list)=>[...list,{room:room,author:'agent',message:`${currentmsg}!,How i can help you tell here?`}])
            console.log('hiiii');

        }
        // else if(lowercase.includes(`hi,i am ${currentmsg}`)){
        //   messagedata={
        //     room:room,
        //     author:username,
        //     message:currentmsg,
        //     time:new Date(Date.now()).getHours()+":"+new Date(Date.now()).getMinutes(),}
        //     await socket.emit("send_message",messagedata) 
        //     setMessageList((list) => [...list, messagedata]);
        //     setMessageList((list)=>[...list,{room:room,author:'agent',message:`${currentmsg}!,How i can help you?`}])
        //     console.log('hiiii');
        // }
        else if((lowercase.includes('help') || lowercase.includes('connect agent') || lowercase.includes('connect with agent')||lowercase.includes('yes'))&&(username!='agent')){
          messagedata={
            room:room,
            author:username,
            message:currentmsg,
            time:new Date(Date.now()).getHours()+":"+new Date(Date.now()).getMinutes(),}
            await socket.emit("send_message",messagedata) 
            setMessageList((list) => [...list, messagedata]);
            setMessageList((list)=>[...list,{room:room,author:'agent',message:`Are you connect with agent?`}])            
        }
        else if((lowercase.includes('yes'))&&(username!='agent')){
          messagedata={
            room:room,
            author:username,
            message:currentmsg,
            time:new Date(Date.now()).getHours()+":"+new Date(Date.now()).getMinutes(),}
            await socket.emit("send_message",messagedata) 
            setMessageList((list) => [...list, messagedata]);
            setMessageList((list)=>[...list,{room:room,author:'agent',message:`please wait connect to agent.....`}]) 
        }
        else if((lowercase.includes('products') ||lowercase.includes('develop') || lowercase.includes('products developed'))&&(username!='agent')){
          messagedata={
            room:room,
            author:username,
            message:currentmsg,
            time:new Date(Date.now()).getHours()+":"+new Date(Date.now()).getMinutes(),}
            await socket.emit("send_message",messagedata) 
            setMessageList((list) => [...list, messagedata]);
            setMessageList((list)=>[...list,{room:room,author:'agent',message:`storyflics , other websites`}]) 
        }
 else if((lowercase.includes('tell about website') || lowercase.includes(' about websites') || lowercase.includes('website details') || lowercase.includes('your websites '))&&(username!='agent')){
  messagedata={
    room:room,
    author:username,
    message:currentmsg,
    time:new Date(Date.now()).getHours()+":"+new Date(Date.now()).getMinutes(),}
    await socket.emit("send_message",messagedata) 
    setMessageList((list) => [...list, messagedata]);
    setMessageList((list)=>[...list,{room:room,author:'agent',message:`It is a service/product based website offering. We are developing websites are whatsapp,chatbot,storyflics`}]) 
}

else if((lowercase.includes('years') && lowercase.includes('making products') || lowercase.includes('company making product'))&&(username!='agent') ){
  messagedata={
    room:room,
    author:username,
    message:currentmsg,
    time:new Date(Date.now()).getHours()+":"+new Date(Date.now()).getMinutes(),}
    await socket.emit("send_message",messagedata) 
    setMessageList((list) => [...list, messagedata]);
    setMessageList((list)=>[...list,{room:room,author:'agent',message:`2 years`}])
}
else if ((lowercase.includes("contacts") || lowercase.includes("contact") || lowercase.includes("contact developing product team"))&&(username!='agent')){
  messagedata={
    room:room,
    author:username,
    message:currentmsg,
    time:new Date(Date.now()).getHours()+":"+new Date(Date.now()).getMinutes(),}
    await socket.emit("send_message",messagedata) 
    setMessageList((list) => [...list, messagedata]);
    setMessageList((list)=>[...list,{room:room,author:'agent',message:`yes,connect to agent please wait!,`}])
}
        else{
         messagedata={
          room:room,
          author:username,
          message:currentmsg,
          time:new Date(Date.now()).getHours()+":"+new Date(Date.now()).getMinutes(),}
    await socket.emit("send_message",messagedata) 
    setMessageList((list) => [...list, messagedata]);
    console.log("messagedata",messagedata);

         }
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
  console.log('receivedlist msg',messageList);
  
console.log('sending input msg',currentmsg);

}, )

    
  return (
    <div className="chat-window">
     
      <div className="chat-header">
      
        <p style={{color:'black'}}>{username} &nbsp;&nbsp;&nbsp;&nbsp; Live Chat</p>
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