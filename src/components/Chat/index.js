import React,{useState} from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import ChatBot from "react-simple-chatbot";
import { ChatContainer } from "./ChatElement";
import { ThemeProvider } from "styled-components";
import { Button } from 'antd';

/*
// Another option of ChatBot //
import config from '../../chatbot/config';
import ActionProvider from '../../chatbot/ActionProvider';
import MessageParser from '../../chatbot/MessageParser';
*/

const theme = {
  background: "#f5f8fb",
  fontFamily: "Ubuntu",
  headerBgColor: "skyblue",
  headerFontColor: "#fff",
  headerFontSize: "16px",
  botBubbleColor: "blue",
  botFontColor: "#fff",
  userBubbleColor: "lightpink",
  userFontColor: "#504f60",
};

function Chat() {

  const steps = [
    {
      id: "GlobeCoin Chat",
      message: "Hi! welcome to our Website ",
      trigger: "Ask name",
    },
    {
      id: "Ask name",
      message: "Please enter your name before we proceed...",
      trigger: "waiting1",
    },
    {
      id: "waiting1",
      user: true,
      trigger: "Name",
    },
    {
      id: "Name",
      message: "Hi {previousValue}, please select what your doubt:",
      trigger: "issues",
    },
    {
      id: "issues",
      options: [
        {
          value: "Cryptocurrency",
          label: "Products",
          trigger: "Cryptocurrency",
        },
        { value: "Bitcoin", label: "Contacts", trigger: "Bitcoin" },
        { value: "GlobeCoin", label: "Queries", trigger: "GlobeCoin" },
      ],
    },
    {
      id: "Cryptocurrency",
      message:
        "Not able to any Product details",
     
      trigger: "issues1",
    },
    {
      id: "issues1",
      options: [
        {
          value: "Cryptocurrency",
          label: "Products",
          trigger: "Cryptocurrency",
        },
        { value: "Bitcoin", label: "Contacts", trigger: "Bitcoin" },
        { value: "GlobeCoin", label: "Queries", trigger: "GlobeCoin" },
      ],
    },
    {
      id: "Bitcoin",
      message:
        "Not able to any Contact detail",
      end: true,
    },
    {
      id: "GlobeCoin",
      message:
        "Not able to any Queries detail",
      end: true,
    },
  ];
  const [toggle, setToggle] = useState(true)
const chathandle=()=>{
  setToggle(!toggle)
  // document.getElementById(chat').style.display='none'

}
  return (
    <>
      
      <ChatContainer>
        <ThemeProvider theme={theme} >
          
          <div style={{margin:'0% 0% 0% 70%' ,cursor:'pointer'}}>
            {toggle===true?
          <div id="chat">
          {/* <Button type="primary" shape="round">Chat bot</Button> */}
          {/* <Button type="primary" shape="round" icon={<img  src="./chatbot.jpg"/>} size={"small"}></Button> */}
          <img onClick={chathandle} style={{borderRadius:'50%',margin:'450% 0% 0% 80%'}} width={100} height={100} src="./chatbot.jpg"/>
          </div>:
          <div>
          <ChatBot 
            headerTitle="Outstagers ChatRoom"
            speechSynthesis={{ enable: false, lang: "en" }}
            steps={steps}  /> </div>}
            </div>
        </ThemeProvider>
      </ChatContainer>
    
    </>
  );
}

export default Chat;
