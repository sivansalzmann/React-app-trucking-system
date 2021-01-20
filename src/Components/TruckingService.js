import React, { Component } from "react";
import backgroundImage from '../media/scene.png';
import Truck from './Truck';
import TruckingList from "./TruckingList";

class TruckingService extends Component {

  render() {
    return (
      <div>
        <TruckingList/>
        <Truck/>
      </div>
    );
  }
}

export default TruckingService;