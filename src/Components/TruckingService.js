import React, { Component } from "react";
import backgroundImage from '../media/scene.png';
import TruckingList from './TruckingList';
import TruckingFormAdd from './TruckingFormAdd';
import Truck from './Truck';
import TruckingContainer from "./TruckingContainer";

class TruckingService extends Component {

  render() {
    return (
      <div>
        <img src={backgroundImage} alt="backgroundImage" style={{ marginLeft:"323px" ,width:1285, height:800}}/>
        <TruckingContainer/>
        <Truck/>
      </div>
    );
  }
}

export default TruckingService;