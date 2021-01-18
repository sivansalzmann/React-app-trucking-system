import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Fab } from '@material-ui/core';
import style from './style/style.css'

class Trucking extends Component {
    constructor(props) {
        super(props);

        this.edit = this.edit.bind(this);
        this.delete = this.delete.bind(this);

        this.state = {
            editing: false
        }

        this.renderUI = this.renderUI.bind(this);
        this.renderForm = this.renderForm.bind(this);
        this.save = this.save.bind(this);
    }

   edit() {
        this.setState({
            editing: true
        })
    }

    delete() {
        this.props.onDelete(this.props.index);
    }

    save(e) {
        e.preventDefault();

        this.props.onChange(this.newTrucking.value, this.props.index);

        this.setState({
            editing: false
        })
    }
    
    renderForm() {
        return(
            <div>
                <ol>
                    <form>
                        <textarea ref={input => (this.newTrucking = input)}/>
                        <button onClick={this.save}>Save</button>
                    </form>
                </ol>
            </div>
        )
    }

    renderUI() {
        return (
            <div className="trucking">
                <div> {this.props.children} </div>
                <span>
                    <Fab className={"delete-update"} aria-label="edit" color="secondary" onClick={this.edit}>
                        <EditIcon />
                    </Fab>
                    <Fab className={"delete-update"} aria-label="delete" color="secondary" onClick={this.delete}>
                        <DeleteIcon />
                    </Fab>
                </span>
            </div>
        )
    }

    render() {
        return this.state.editing ? this.renderForm() : this.renderUI();
    }
}


export default Trucking;