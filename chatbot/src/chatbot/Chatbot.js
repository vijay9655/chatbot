import React from 'react'
import config from "./config";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";
import Chatbot from "react-chatbot-kit";

function Chatbott() {
  return (
    <div>  <Chatbot
        
    config={config}
    actionProvider={ActionProvider}
    messageParser={MessageParser}
  /></div>
  )
}

export default Chatbott