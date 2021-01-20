import React, { Component } from "react";
import backgroundImage from '../media/scene.png';
import Truck from './Truck';
import TruckingContainer from "./TruckingContainer";

class TruckingService extends Component {

  constainerStyle = {
    display: "block",
    backgroundImage: `url(${backgroundImage})`,
    marginLeft:"323px" ,
    // width: "70%",
    // heught: "80%",
    width:"100%", 
    height:"800px",
    backgroundSzie: "contain",
    backgroundRepeat: "no-repeat",
    // backgroundPosition: "right-top",
    // position: "absolute",
    // right: 0,
    // top: 0
  };
  
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