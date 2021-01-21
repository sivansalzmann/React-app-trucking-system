import React, { Component } from "react";
import TruckingList from "./TruckingList";

class TruckingPage extends Component {

  render() {
    return (
      <div>
        <TruckingList/>
        <div className={'truck'}></div>
      </div>
    );
  }
}

export default TruckingPage;