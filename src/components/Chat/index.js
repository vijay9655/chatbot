import React,{useState} from "react";
import ChatBot from "react-simple-chatbot";
import { ChatContainer } from "./ChatElement";
import { ThemeProvider } from "styled-components";


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
const config = {
  botAvatar: "./chatbot.jpg",
  floating: true,
};
  return (
 
      <>
      <ChatContainer>
        <ThemeProvider theme={theme} >
          
          <div style={{margin:'0% 0% 0% 70%' ,cursor:'pointer'}}>
           
        
          <div>
         
          <ChatBot   
            headerTitle="Outstagers ChatRoom"
            {...config}
            speechSynthesis={{ enable: false, lang: "en" }}
            steps={steps}  />
               
          
            
            </div>
            </div>
        </ThemeProvider>
      </ChatContainer>
    
   </>
  );
}

export default Chat;
