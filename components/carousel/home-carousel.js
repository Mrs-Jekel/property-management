  
import React from 'react';
import Card from './Card';
import { CSSTransition, TransitionGroup } from "react-transition-group";

const CarouselHome = ({property}) => {

    return(
        <div className="page">
            <div className="test">
                <TransitionGroup className="properties">
                    <CSSTransition
                        key={property._id}
                        timeout={4500}
                        classNames="slide"
                    >
                        <Card property={property} />
                    </CSSTransition>
                </TransitionGroup>
            </div>
        </div>   
    )
}

export default CarouselHome;