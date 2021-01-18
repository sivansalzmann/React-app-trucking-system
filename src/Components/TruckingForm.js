import React, { Component } from 'react';
// import TruckingList from "./TruckingList";
// import TruckingForm from "./TruckingForm";
// import TruckingData from "../Data/TruckingData.json";
import style from "./style/style.css";
import { Button } from '@material-ui/core';
const TruckingForm = () => {
    return (
        <form className={"trucking-form"}>
            <input className={"input-form"} type={'date'} name={'date'} placeholder={'Date'}/>
            <input className={"input-form"} type={'text'} name={'name'} placeholder={'Name'}/>
            <input className={"input-form"} type={'text'} name={'city'} placeholder={'City'}/>
            <Button className={"buttton-form"} variant="contained" color="secondary" id={'submit'}><p>Save</p></Button>
        </form>
    )
}

export default TruckingForm