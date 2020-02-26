import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Contact extends Component {
  constructor(props) {
      super(props)

      this.state = {
          
      }
  }

  render() {
      return (
          <div className="contact-details">
              <div className="left-contact-box">
                <FontAwesomeIcon icon="envelope" size="3x" />
                <h1>Email Me with Questions <a href="mailto:sharlane.hess87@gmail.com" target="_blank" rel="noopener noreferrer">sharlane.hess87@gmail.com</a></h1>
                

                
              </div>
              <div className="right-contact-box">
                <FontAwesomeIcon icon="mobile-alt" size="3x" />
                <h1>Call or Text Shar with Questions @
                  <a href="tel:4353149391"> 435-314-9391</a>
                </h1>
              
              </div>
          </div>
      )
  }
}