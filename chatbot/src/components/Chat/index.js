
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
    
      user: '',

    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { name,user } = steps;

    this.setState({ name,user });
  }

  render() {
    const { name, user } = this.state;
    console.log('name',name,'user',user);

    return (
      <div style={{ width: '100%' }}>
        <SimpleForm name={this.state.user}/>
      </div>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

class SimpleForm extends Component {
  constructor(props) {
    super(props);
    console.log('namessss',props.name);
    this.state = {
    
    
      user: '',
      name:``,
      end:'end-message'

    };
  }
  componentWillMount() {
   

    this.setState({ 'user':this.props.name});
    console.log({ 'user':this.state.user.message});
  }

  render() {
    const config = {
  botAvatar: "./chatbot.jpg",
  floating: true,
 
};
// console.log(this.state.user.value);



    return (
      <ChatBot
      {...config}
        steps={[
          {
            id: '1',
            message: 'What is your name?',
            trigger: 'name',
          },
          {
            id: 'name',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: 'Hi {previousValue}! How i can help you?',
            trigger: 'user',
          },
          {
            id: 'user',
            user:true,
            // options: [
            //   { value: 'male', label: 'Male', trigger: '5' },
            //   { value: 'female', label: 'Female', trigger: '5' },
            // ],
            trigger:'review',
          },
        
        
         
          {
            id: 'review',
            component: <Review  />,
            // asMessage: true,
            trigger:this.state.name,
          },
          {
            id: 'yes',
            message: 'Hi! How i can help you?',
            trigger: this.state.end,
          },
         
        
         
          {
            id: 'end-message',
            message: 'Thanks! Your data was submitted successfully!',
            end: true,
          },
        ]}
      />
    );
  }
}

export default SimpleForm;

