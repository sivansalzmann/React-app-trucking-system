import React, {Component} from 'react';
import Trucking from "./Trucking";
import TruckingFormUpdate from "./TruckingFormUpdate";
import Truckings from "../Data/TruckingData.json";

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
        this.fillInput = this.fillInput.bind(this)
    }

    componentDidMount() {
        Truckings.map(item => this.add({
            id: item.id,
            name: item.name,
            date: item.date,
            city: item.city
        }))
    }

    fillInput(index) {
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
    styleTruck = {
        marginLeft:"10px"
    };

    eachTrucking(item, index) {
        return (
            <Trucking key={item.id} index={index} onChange={this.fillInput} onDelete={this.delete}>
                <td> {index + 1} </td>
                <td> {item.name} </td>
                <td> {item.city} </td>
                <td> {item.date} </td>
            </Trucking>
        )
    }

    render() {
        return(
            <div>
                <div style={{
                    width: "550px",
                    height: "594px",
                    position: "absolute",
                    marginLeft: "183px",
                    top: '113px',
                    left: '334px',
                    background:'white',
                    boxShadow: '0px 20px 40px rgba(238, 77, 71, 0.1)',
                    borderRadius: '10px'
            }}>
                <table className="delivery-table" style={{marginLeft: "24px", marginTop: "22px", width: "100%"}}>
                    <tbody>
                        { this.state.truckings.map(this.eachTrucking) }
                    </tbody>
                </table>
            </div>
             
                    <TruckingFormUpdate formInputs={this.state.formInputs} editing={this.state.editing} onAdd={this.add} onEdit={this.update}/>
            </div>
        )
    }
}

export default TruckingList;