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
                name: prevState.truckings[index]["name"],
                city: prevState.truckings[index]["city"],
                date: prevState.truckings[index]["date"]
            }
        }))
    }

    update(newTrucking, id) {
        this.setState(prevState => ({
                editing: false,
                truckings: prevState.truckings.map(
                    trucking => {
                        if (trucking.id === id) {
                            trucking.name = newTrucking.name
                            trucking.city = newTrucking.city
                            trucking.date = newTrucking.date
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
                    name: newTrucking.name,
                    date: newTrucking.date,
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
                <TableCell style={{borderBottom: 'none', padding: '15px', fontFamily: 'Rubik, sans-serif', fontWeight: '300',fontSize: '18px'}}> {index + 1} </TableCell>
                <TableCell style={{borderBottom: 'none', padding: '15px', fontFamily: 'Rubik, sans-serif', fontWeight: '300',fontSize: '18px'}}> {item.name} </TableCell>
                <TableCell style={{borderBottom: 'none', padding: '15px', fontFamily: 'Rubik, sans-serif', fontWeight: '300',fontSize: '18px'}}> {item.city} </TableCell>
                <TableCell style={{borderBottom: 'none', padding: '15px', fontFamily: 'Rubik, sans-serif', fontWeight: '300',fontSize: '18px'}}> {item.date} </TableCell>
            </Trucking>
        )
    }
    
    listStyle = {
        width: "570px",
        height: "594px",
        position: "absolute",
        marginLeft: "183px",
        top: '113px',
        background:'white',
        boxShadow: '0px 20px 40px rgba(238, 77, 71, 0.1)',
        borderRadius: '10px'
    }

    tableStyle = {
        marginTop: "22px",
        width: "100%"
    }


    render() {
        return(
            <>
                <TableContainer  style={this.listStyle}>
                    <Table className="truckingTable" style={this.tableStyle}>
                        <TableBody >
                            { this.state.truckings.map(this.eachTrucking) }
                        </TableBody >
                    </Table>
                </TableContainer >
                <TruckingFormUpdate formInputs={this.state.formInputs} editing={this.state.editing} onAdd={this.add} onEdit={this.update}/>
            </>
        )
    }
}

export default TruckingList;