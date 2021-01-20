import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Fab } from '@material-ui/core';
import {TableRow, TableCell} from "@material-ui/core";

const Trucking = (props) => {
    
    
    const editTrucking = () => {
        props.onChange(props.index)
    }

    const deleteTrucking = () => {
        props.onDelete(props.index)
    }
    return (
        <TableRow >
            {props.children}
            <TableCell style={{borderBottom: 'none'}}>
                <Fab size="small" aria-label="edit" color="secondary" onClick={editTrucking} style={{marginRight: "11px"}}>
                    <EditIcon />
                </Fab>
                <Fab size="small" aria-label="delete" color="secondary" onClick={deleteTrucking}>
                    <DeleteIcon />
                </Fab>
            </TableCell>
        </TableRow>
    )
}

export default Trucking;