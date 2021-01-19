import React, { Component } from 'react';
import TruckingList from "./TruckingList";
import Trucking from "./Trucking";
import TruckingData from "../Data/TruckingData.json"
// import style from "./style/style.css";
// import Background from './Background';
import background from './style/media/scene.png'

const divBackground = {
    backgroundImage: `url(${background})`,
    backgroundRepeat  : 'no-repeat',
    width: '100%',
    height:'800px',
    position:'relative',
} 

const TruckingService = () => {
    
    return (
        <div style={divBackground}>
            {/* < Background /> */}
            < TruckingList TruckingData = {TruckingData}/>
            < Trucking />
        </div>
    )
}

export default TruckingService