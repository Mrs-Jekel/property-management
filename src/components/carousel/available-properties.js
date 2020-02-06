import React, { Component } from 'react';
// import '../../style/images.scss';
import CarouselHome from '../carousel/home-carousel';
import data from './data';
import { CSSTransition } from "react-transition-group";

// class component
class Properties extends Component {

  constructor(props){
    super(props);
    this.state = {
      appearCarouselHome: true,
      property: data.properties[0]
    }
  }

  toggleAppear = () => {
    this.setState({
      appearCarouselHome: !this.state.appearCarouselHome
    })
  }

  nextProperty = () => {
    const newIndex = this.state.property.index+1;
    this.setState({
      property: data.properties[newIndex]
    })
  }

  prevProperty = () => {
    const newIndex = this.state.property.index-1;
    this.setState({
      property: data.properties[newIndex]
    })
  }

  render() {
    const {appearCarouselHome, property} = this.state;
    return (
      <div className="Properties">
        <div className="buttons-info">
          <h1>Homes Available for Rent</h1>

          <div className="buttons">
            <button onClick={() => this.prevProperty()} disabled={property.index === 0}>Prev</button>
            <button onClick={() => this.nextProperty()} disabled={property.index === data.properties.length-1}>Next</button>
          </div>

            <div className="more-info-properties">
              For more information on the properties please contact us.
            </div>
          </div>
        <div className="test">
          <CSSTransition
            in={appearCarouselHome}
            appear={true}
            timeout={500}
            classNames="fade"
          >
            <CarouselHome property={property} />
          </CSSTransition>       
        </div>
      </div>
      
    );
  }
}

export default Properties;