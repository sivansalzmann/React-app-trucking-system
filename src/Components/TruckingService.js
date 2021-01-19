import React, { Component } from "react";
import backgroundImage from '../media/scene.png';
import Truck from './Truck';
import TruckingContainer from "./TruckingContainer";

class TruckingService extends Component {

  render() {
    return (
      <div style={{
        backgroundImage: `url(${backgroundImage})`,
        marginLeft:"323px" ,
        width:1285, 
        height:800
      }}>
        <TruckingContainer/>
        <Truck/>
      </div>
    );
  }
}

export default TruckingService;