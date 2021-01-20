import React from 'react';
import {Route} from 'react-router-dom';
import TruckingService from "../Components/TruckingService";
const ReactRouter = () => {
    return (
        <>
            <Route exact path="/" component={TruckingService}/>
        </>
    )
}

export default ReactRouter