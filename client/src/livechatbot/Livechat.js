import React, { useState } from 'react'

function Livechat({username,room,socket}) {
    const [currentmsg, setCurrentmsg] = useState()
    const sendMessage=async()=>{
      if(currentmsg !==''){
        const messagedata={
          room:room,
          author:username,
          message:currentmsg,
          time:new Date(Date.now()).getHours()+":"+new Date(Date.now()).getMinutes(),}
          
        }
      }
    
  return (
    <div>
        <div className='chat-header'>
        <p>Live Chatbot</p>
        </div>
        <div className='chat-body'>
            
        </div>
        <div className='chat-footer'>
            <input type='text' placeholder='hi...'
            onChange={(e)=>{setCurrentmsg(e.target.value)}} 
            />
            <button onClick={sendMessage}>&#9658</button>
        </div>
    </div>
  )
}

export default Livechat