class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse = (message) => {
      const lowerCase = message.toLowerCase();
      console.log("message", message);
  
      if (
        lowerCase.includes("messageparser") ||
        lowerCase.includes("parse") ||
        lowerCase.includes("parser") ||
        lowerCase.includes("message parser")
      ) {
        return this.actionProvider.handleMessageParserDocs();
      }
  
      if (lowerCase.includes("action") || lowerCase.includes("actionprovider")) {
        return this.actionProvider.handleActionProviderDocs();
      }
  
      if (lowerCase.includes("config")) {
        return this.actionProvider.handleConfigDocs();
      }
  
      if (lowerCase.includes("widget")) {
        return this.actionProvider.handleWidgetDocs();
      }
  
      return this.actionProvider.handleDefault();
    };
  }
  
  export default MessageParser;
  