import React, {useState, useEffect,Component} from 'react';
import TruckingList from "./TruckingList";
import TruckingFormAdd from './TruckingFormAdd';


const TruckingContainer = (props) => {
    return (
        <div style={{
                width:"550px",
                height: "594px",
                backgroundColor: "white",
                marginLeft: "183px",
                marginTop: "113px",
                borderRadius: "10px",
                fontFamily: "Rubik, sans-serif",
                lineHeight: "40px",
                fontSize: "18px",
                display: "flex"
        }}>
            {/* {props.children} */}
            <TruckingList/>
            <TruckingFormAdd />
        </div>
        ); 
    }

export default TruckingContainer;
    

