class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    console.log(message);
    // const initmsg=['hi','hello','hey','help']
    // const products=['products','develop']
    const lowercase = message.toLowerCase();
    
   
// console.log(lowercase.find('making products'))


    if(lowercase.includes('hi') || lowercase.includes('hello')|| lowercase.includes('hey')){
      this.actionProvider.greet(message);
    }
   else if(lowercase.includes('help')){
      this.actionProvider.help();
    }
    // if (lowercase.includes(lowercase) === false) {
    //   this.actionProvider.welcome(message);
    // }
  else if(lowercase.includes('products') ||lowercase.includes('develop') || lowercase.includes('products developed') ){
    this.actionProvider.productdetails();

  }
 else if(lowercase.includes('tell about website') || lowercase.includes(' about websites') || lowercase.includes('website details') || lowercase.includes('your websites ')){
    this.actionProvider.productabout()

  }

 else if(lowercase.includes('years') && lowercase.includes('making products') || lowercase.includes('company making product') ){
    this.actionProvider.productyears()
  }


  else  if (lowercase.includes("queries") || lowercase.includes("connect agent")) {
      this.actionProvider.handleJavascriptQuiz();
    }
  else  if (lowercase.includes("contacts") || lowercase.includes("contact") || lowercase.includes("contact developing product team")){
     this.actionProvider.contactagent()
     
    }
else{
  this.actionProvider.contactagent()

}

  }

}

export default MessageParser;
