import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Fab } from '@material-ui/core';

const Trucking = (props) => {

    const editTrucking = () => {
        props.onChange(props.index)
    }

    const deleteTrucking = () => {
        props.onDelete(props.index)
    }
    return (
        <div className="trucking">
            {props.children}
            <div className={"delete-update"}>
                <Fab size="small" className={"but"} aria-label="edit" color="secondary" onClick={editTrucking}>
                    <EditIcon />
                </Fab>
                <Fab size="small" className={"but"} aria-label="delete" color="secondary" onClick={deleteTrucking}>
                    <DeleteIcon />
                </Fab>
            </div>
        </div>
    )
}

export default Trucking;