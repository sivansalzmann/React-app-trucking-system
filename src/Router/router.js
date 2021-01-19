import React from 'react';
import {Route} from 'react-router-dom';
import TruckingService from "../Components/TruckingService";
import TruckingContainer from "../Components/TruckingContainer"
const ReactRouter = () => {
    return (
        <>
            <Route exact path="/" component={TruckingService}/>
        </>
    )
}

export default ReactRouter