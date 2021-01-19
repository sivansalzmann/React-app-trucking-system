import React, {Component} from 'react';
import { Button } from '@material-ui/core';

class TruckingForm extends Component{
    constructor(props) {
        super(props)
        this.state = {
            name: props.formInputs.name,
            city: props.formInputs.city,
            date: props.formInputs.date,
        }

        this.inputChanged = this.inputChanged.bind(this)
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
    inputChanged(event) {
        event.preventDefault();
        const key = event.target.name
        const value = event.target.value
        this.setState({
            [key]: value
        })
    }

    save(event) {
        event.preventDefault()

        if (this.state.name === 'Name') {
            alert("Please enter Name")
            return;
        }
        if (this.state.city === 'City') {
            alert("Please enter City")
            return;
        }
        if (this.state.date === '') {
            alert("Please enter Date")
            return;
        }

        const newDelivery = {
            name: this.state.name,
            date: this.state.date,
            city: this.state.city
        }
        this.setState({
            name: 'Name',
            date: '',
            city: 'City'
        })

        if (this.props.editing === true) {
            this.props.onEdit(newDelivery, this.props.formInputs.id)
        } else {
            newDelivery.id = null
            this.props.onAdd(newDelivery)
        }
    }

    submitBtn() {
        if (this.props.editing === true)
            return (<p>Update</p>)
        else
            return (<p>Save</p>)
    }
    form={
        display: "flex",
        flexFlow: "column",
        marginBottom: "14px",
        width: "400px",
        height: "60px",
        border: "2px solid #EE4D47",
        borderRadius: "5px"
    };
    butttonForm={
        width: "158px",
        height: "60px",
        left: "153px"
    };
    inputForm={
        display: "flex",
        flexFlow: "column",
        marginBottom: "14px",
        width: "400px",
        height: "60px",
        border: "2px solid #EE4D47",
        borderRadius: "5px"
    };

    render() {
        return (
                <div style={this.form}>
                    <input style={this.inputForm} type={'date'} name={'date'} placeholder={'Date'} value={this.state.date} onChange={this.inputChanged}/>
                    <input style={this.inputForm} type={'text'} name={'name'} placeholder={'Name'} value={this.state.name} onChange={this.inputChanged}/>
                    <input style={this.inputForm} type={'text'} name={'city'} placeholder={'City'} value={this.state.city} onChange={this.inputChanged}/>
                    <Button type="submit" style={this.butttonForm} variant="contained" color="secondary" id={'submit'}  onClick={this.save}>{this.submitBtn()}</Button>
                </div>
            )
        }
}

export default TruckingForm