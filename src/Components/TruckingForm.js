import React, {Component} from 'react';
import { Button } from '@material-ui/core';
import moment from "moment";

class TruckingFormUpdate extends Component{

    constructor(props) {
        super(props)
        this.state = {
            name: null,
            city: null,
            date: null
        }

        this.isChange = this.isChange.bind(this)
        this.save = this.save.bind(this)
        this.submitBtn = this.submitBtn.bind(this)
    }

    componentDidUpdate(prevProps) {
        if (this.props.formInputs !== prevProps.formInputs) {
            this.setState({
                name: this.props.formInputs.name,
                city: this.props.formInputs.city,
                date: this.props.formInputs.date,
            })
        }
    }

    isChange(event) {
        event.preventDefault();
        const key = event.target.name
        const value = event.target.value
        this.setState({
            [key]: value
        })
    }

    save(event) {
        event.preventDefault()

        if (this.state.name === '') {
            alert("Please add name")
            return;
        }
        if (this.state.city === '') {
            alert("Please add city")
            return;
        }
        if (this.state.date === '') {
            alert("Please add date")
            return;
        }
        
        const newTrucking = {
            name: this.state.name,
            date: this.state.date,
            city: this.state.city
        }
        
        this.setState({
            name: '',
            date: '',
            city: ''
        })

        if (this.props.editing === true) {
            const date = moment(this.state.date);
            if(!date.isValid()) {
                alert("Date is invalid, please enter new one");
                return;
            }
            else {
                this.props.onEdit(newTrucking, this.props.formInputs.id);
            }
        } else {
            const date = moment(this.state.date);
            if(!date.isValid()) {
                alert("Date is invalid, please enter new one");
                return;
            }
            else {
                newTrucking.id = null;
                this.props.onAdd(newTrucking);
            }
        }
    }

    butttonForm={
        width: "158px",
        height: "60px",
        left: "200px"
    };
    inputForm={
        display: "flex",
        flexFlow: "column",
        marginBottom: "14px",
        marginLeft: "88px",
        width: "400px",
        height: "60px",
        border: "2px solid #EE4D47",
        borderRadius: "5px",
        fontFamily: "Rubik, sans-serif",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "18px",
        lineHeight: "40px"
        
    };
    submitBtn() {
        if (this.props.editing === true)
            return (<p>Update</p>)
        else
            return (<p>Save</p>)
    }

    formStyle = {
        position: "absolute",
        marginLeft: "730px",
        marginTop: "116px"
    };

    render() {
        return (
                <div style={this.formStyle}>
                    <input style={this.inputForm} type={'text'} name={'date'} placeholder={'Date'} value={this.state.date} onChange={this.isChange}/>
                    <input style={this.inputForm} type={'text'} name={'name'} placeholder={'Name'} value={this.state.name} onChange={this.isChange}/>
                    <input style={this.inputForm} type={'text'} name={'city'} placeholder={'City'} value={this.state.city} onChange={this.isChange}/>  
                    <Button type="submit" style={this.butttonForm} variant="contained" color="secondary" id={'submit'}  onClick={this.save}>{this.submitBtn()}</Button>
                </div>
            )
        }
}

export default TruckingFormUpdate