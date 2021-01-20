import React, {Component} from 'react';
import Trucking from "./Trucking";
import TruckingFormUpdate from "./TruckingForm";
import Truckings from "../Data/TruckingData.json";
import {Table, TableBody, TableCell, TableContainer} from "@material-ui/core";

class TruckingList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            truckings: [],
            formInputs: {
                id: null,
                name: 'Name',
                date: '',
                city: 'City'
            },
            editing: false
        }

        this.eachTrucking = this.eachTrucking.bind(this)
        this.update = this.update.bind(this)
        this.delete = this.delete.bind(this)
        this.add = this.add.bind(this)
        this.nextId = this.nextId.bind(this)
        this.fill = this.fill.bind(this)
    }

    componentDidMount() {
        Truckings.map(item => this.add({
            id: item.id,
            name: item.name,
            date: item.date,
            city: item.city
        }))
    }

    fill(index) {
        this.setState(prevState => ({
            editing: true,
            formInputs: {
                id: prevState.truckings[index]["id"],
                date: prevState.truckings[index]["date"],
                name: prevState.truckings[index]["name"],
                city: prevState.truckings[index]["city"]
            }
        }))
    }

    update(newTrucking, id) {
        this.setState(prevState => ({
                editing: false,
                truckings: prevState.truckings.map(
                    trucking => {
                        if (trucking.id === id) {
                            trucking.date = newTrucking.date
                            trucking.name = newTrucking.name
                            trucking.city = newTrucking.city
                        }
                        return trucking
                    }
                )
            }
        ))
    }

    delete(id) {
        this.setState(prevState => ({
            truckings: prevState.truckings.filter((trucking, i) => i !== id)
        }))
    }

    add(newTrucking) {
        this.setState(prevState => ({
            truckings: [
                ...prevState.truckings, {
                    id: newTrucking.id !== null ? newTrucking.id : this.nextId(prevState.truckings),
                    date: newTrucking.date,
                    name: newTrucking.name,
                    city: newTrucking.city
                }]
        }))
    }

    nextId(truckings = []) {
        let max = truckings.reduce((prev, curr) => prev.id > curr.id ? prev.id : curr.id, 0);
        return ++max;
    }


    eachTrucking(item, index) {
        return (
            <Trucking key={item.id} index={index} onChange={this.fill} onDelete={this.delete}>
                <TableCell style={{borderBottom: 'none', fontFamily: 'Rubik, sans-serif'}}> {index + 1} </TableCell>
                <TableCell style={{borderBottom: 'none', fontFamily: 'Rubik, sans-serif'}}> {item.date} </TableCell>
                <TableCell style={{borderBottom: 'none', fontFamily: 'Rubik, sans-serif'}}> {item.name} </TableCell>
                <TableCell style={{borderBottom: 'none', fontFamily: 'Rubik, sans-serif'}}> {item.city} </TableCell>
            </Trucking>
        )
    }
    
    render() {
        return(
            <div className={'background'}>
                <div className={'container'}>
                <TableContainer className={'tableContainer'} style={{height: '80%'}}>
                    <Table>
                        <TableBody style={{overflow: 'scroll'}}>
                            { this.state.truckings.map(this.eachTrucking) }
                        </TableBody >
                    </Table>
                </TableContainer >
                <TruckingFormUpdate formInputs={this.state.formInputs} editing={this.state.editing} onAdd={this.add} onEdit={this.update}/>
                </div>
            </div>
        )
    }
}

export default TruckingList;