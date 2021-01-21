import React from 'react';
import {Route} from 'react-router-dom';
import TruckingPage from "../Components/TruckingPage";
const ReactRouter = () => {
    return (
        <>
            <Route exact path="/" component={TruckingPage}/>
        </>
    )
}

export default ReactRouter