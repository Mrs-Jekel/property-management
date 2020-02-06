// Dependencies
import React, { Component, PropTypes } from 'react';


class Button extends Component {


  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    };
    this.logFormDataToConsole = this.logFormDataToConsole.bind(this);
  }

  logFormDataToConsole(event) {
    console.log('Form Values', this.props.formValues);
    this.setState({ isClicked: true });
  }

  render() {
    return (
      <button
        disabled={this.state.isClicked}
        onClick={this.logFormDataToConsole}
      >
        Contact Us
      </button>
    );
  }
}

export default Button;