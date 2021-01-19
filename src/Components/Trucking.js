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
        <tr style={{
                fontFamily: "Rubik, sans-serif",
                lineHeight: "40px",
                fontSize: "18px",
                color: "#402B2B"
            }}>
            {props.children}
            <td>
                <Fab size="small" className={"but"} aria-label="edit" color="secondary" onClick={editTrucking} style={{marginRight: "11px"}}>
                    <EditIcon />
                </Fab>
                <Fab size="small" className={"but"} aria-label="delete" color="secondary" onClick={deleteTrucking} style={{marginRight: "12px"}}>
                    <DeleteIcon />
                </Fab>
            </td>
        </tr>
    )
}

export default Trucking;