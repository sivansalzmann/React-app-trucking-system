import React, {useState} from 'react';
import { Button } from '@material-ui/core';

export default function Add() {
    const [add] = useState(0)
    return(
        <Button className={"buttton-form"} variant="contained" color="secondary" id={'submit'} onClick={() => add(( {id = null, _date = 'date', _name = 'name', _city = 'city'}) => {
            this.setState(prevState => ({
                truckings: [
                    ...prevState.truckings, {
                        id: id !== null ? id : this.nextId(prevState.truckings),
                        date: _date,
                        name: _name,
                        city: _city
                    }
                ]
            }))
        })}>Save</Button>
    )
}