import React, { Component } from 'react';
import Trucking from './Trucking';
import TruckingData from './../Data/TruckingData.json';
import style from './style/style.css'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Fab } from '@material-ui/core';

class TruckingList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            truckings : [
                
            ]
        }
        this.eachTrucking = this.eachTrucking.bind(this);
        this.edit = this.edit.bind(this);
        this.delete = this.delete.bind(this);
        this.add = this.add.bind(this);
        this.nextId = this.nextId.bind(this);
    }

    componentDidMount() {
        TruckingData.map(trucking => this.add({id: trucking.id,_date: trucking.date, _name: trucking.name, _city: trucking.city}));
    }

    edit(newTrucking, i) {
        console.log(`Edit ${i}: newTrucking: ${newTrucking}`);

        this.setState(prevState =>({
            truckings: prevState.truckings.map(
                trucking => trucking.id !== i ? trucking : {...trucking, trucking:newTrucking}
            )
        }));

    }

    delete(id) {
        this.setState(prevState => ({
            truckings: prevState.truckings.filter(trucking => trucking.id !== id)
        }))
    }

    eachTrucking(item, i) {
        return <Trucking key={i} index={item.id} onChange={this.edit} onDelete={this.delete}>
                    <ol>
                        <li>{item.date}</li>
                        <li>{item.name}</li>
                        <li>{item.city}</li>
                    </ol>
                </Trucking>
    }

    add( {id = null, _date = 'date', _name = 'name', _city = 'city'}) {
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
    }

    nextId(truckings = []) {
        let max = truckings.reduce((prev,curr) => prev.id > curr.id ? prev.id : curr.id , 0);
        return ++max;
    }

    render() {
        return(
            <div className={"trucking-list"}>
                { this.state.truckings.map(this.eachTrucking) }
                <button onClick={this.add}>add</button>

            </div>
        )
    }
}

export default TruckingList;