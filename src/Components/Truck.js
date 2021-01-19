import React from 'react';
import truck from '../media/truck.png';

const truckStyles = {
    backgroundImage: `url${truck}`,
    top: '746px',
    position:'absolute',
    left: '0px'
};

const Truck = () =>{
    
        return(
            <img src={truck} alt="Truck" style={truckStyles}/>
        );
    }

export default Truck;