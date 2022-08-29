class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }
  
  greet = (val) => {
    console.log(val);

    const message = this.createChatBotMessage(`${val.toUpperCase()}!, how can i help you?`);
    this.addMessageToState(message);

  };

 
  productdetails=()=>{
    const message = this.createChatBotMessage(`storyflics,other websites`);
    this.addMessageToState(message);
  }
  productabout=()=>{
    const message = this.createChatBotMessage(`It is a service/product based website offering. We are developing websites are whatsapp,chatbot,storyflics`);
    this.addMessageToState(message);
  }
productyears=()=>{
const message = this.createChatBotMessage(`2 years`);
    this.addMessageToState(message);
}
help=()=>{
  const message = this.createChatBotMessage(`yes,select below options`);
  this.addMessageToState(message);
}
contactagent=()=>{
  const message = this.createChatBotMessage(`yes,connect to agent please wait!, `,{
    widget:'contacts'
  });
  this.addMessageToState(message);
}
  handleJavascriptQuiz = () => {
    const message = this.createChatBotMessage(
     '',
      {
        widget: "javascriptQuiz",
      }
    );

    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
