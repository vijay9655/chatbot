import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Options from "../components/Options/Options";
import Quiz from "../components/Quiz/Quiz";

const config = {
  botName: "chatbot",
  initialMessages: [
    createChatBotMessage(`Welcome to our website`),
    createChatBotMessage(`Hi!, what is your name?`)


  ],
  widgets: [
    {
      widgetName: "contacts",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "javascriptQuiz",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "connect to agent confirmed?",
            answer:
            'yes',            
            id: 1,
          },
        
          {
            question:
            "tell about queries?",
            answer: "About Websites,products,",

          
            id: 2,
          },
        ],
      },
    },
  ],
};

export default config;
