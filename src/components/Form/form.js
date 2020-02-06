import React, { Component } from 'react';
// Externals
import Field from '../Form/field';
import Button from '../Form/button';


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
    // To ensure 'this' when calling 'this.updateField' refers to Form and not Field, we do:
    this.updateField = this.updateField.bind(this);
  }

  // Field could be 'name', 'email', or 'message'
  // Value is whatever the user types into the input field.
  updateField(field, value) {
    this.setState({ [field]: value });
  }

  render() {
    return (
      <div>
          
        <Field
          label="Name"
          onChange={(event) => this.updateField('name', event.target.value)}
          value={this.state.name}
        />

        <Field
          label="Email"
          onChange={(event) => this.updateField('email', event.target.value)}
          value={this.state.email}
        />

        <Field
          label="Message"
          onChange={(event) => this.updateField('message', event.target.value)}
          textarea={true}
          value={this.state.message}
        />

        <Button
          email="kgadams93@gmail.com"
          formValues={this.state}
        />
      </div>
    );
  }
}

export default Form;