import React, {useState, useEffect,Component} from 'react';
import TruckingList from "./TruckingList";


const TruckingContainer = (props) => {
    return (
        <div>
            {props.children}
            <TruckingList/>
        </div>
        ); 
    }

export default TruckingContainer;
    

