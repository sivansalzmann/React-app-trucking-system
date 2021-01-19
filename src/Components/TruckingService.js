import React, { Component } from "react";
import backgroundImage from '../media/scene.png';
import Truck from './Truck';
import TruckingContainer from "./TruckingContainer";

class TruckingService extends Component {

  constainerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    marginLeft:"323px" ,
    width:1285, 
    height:800
  }
  render() {
    return (
      <div style={this.constainerStyle}>
        <TruckingContainer/>
        <Truck/>
      </div>
    );
  }
}

export default TruckingService;