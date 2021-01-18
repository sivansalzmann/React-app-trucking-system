import React, { Component } from 'react';
import TruckingList from "./TruckingList";
import TruckingForm from "./TruckingForm";
import TruckingData from "../Data/TruckingData.json"
import style from "./style/style.css"

const MyTruckings = () => {
    return (
        <div className={"truckings-container"}>
            < TruckingList TruckingData = {TruckingData}/>
            < TruckingForm />
            {/* <div className={"car-pic"}></div> */}
        </div>
    )
}

export default MyTruckings