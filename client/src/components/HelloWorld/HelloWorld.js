/* eslint react/no-did-mount-set-state: "off" */

import React, { Component } from 'react';
import axios from 'axios';

class HelloWorld extends Component {
  state = {
    messages: null,
  };

  async componentDidMount() {
    const response = await axios.get('/test');

    this.setState({ messages: response.data });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.messages &&
            this.state.messages.map(message => (
              <li key={message.id}>{message.message}</li>
            ))}
        </ul>
      </div>
    );
  }
}

export default HelloWorld;
