  
import React from 'react';
import PropTypes from 'prop-types';
import data from "./data";

const Card = ({property}) => {
    const {price, picture, city, address, bedrooms, bathrooms, carSpaces} = property;
    return (
        
        <div className="test">
            <div className="card">
                <img src={picture} alt={city} />
                <div className="details">
                    <p className="location">
                        {city}<br />
                        {address}
                    </p>
                    <ul className="features">
                        <li className="icon-bed">{bedrooms} <span>bedrooms</span></li>
                        <li className="icon-bath">{bathrooms} <span>bathrooms</span></li>
                        <li className="icon-car">{carSpaces} <span>parking spots</span></li>
                        <li className="price"><span>price</span> {price}</li>
                    </ul>
                </div>
            </div>
            
       
        </div>
    )
}

Card.propTypes = {
    property: PropTypes.object.isRequired
}

export default Card;