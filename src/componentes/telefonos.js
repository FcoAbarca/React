import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Select from "react-dropdown-select";
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

import AddCircleIcon from '@material-ui/icons/AddCircle';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const Telefono = (props) => {
    const { item, nuevo } = props;
    return (
      <Grid container component="main" spacing={3} style={{marginTop: 5, marginBottom:5}}>
          <Grid item xs={5} align='left' style={{paddingTop:2, paddingBottom:0}} >
              <Select/>
          </Grid>
          <Grid item xs={5} align='left' style={{paddingTop:2, paddingBottom:5, fontWeight:'bold'}} >
            <TextField variant="outlined" size='small' fullWidth={true} 
                               defaultValue={nuevo ? '' : item.numero}/>
          </Grid>
          
          <Grid item xs={2} align='center' style={{paddingTop:2, paddingBottom:0}} >
            { nuevo ?
            <Tooltip title='Registrar  Telefono'>
              <IconButton edge="start" color="inherit" 
                aria-label="menu" style={{ padding: 4 }} >
                <AddCircleIcon fontSize='large'/>
               </IconButton>
             </Tooltip>
            :
            <React.Fragment>
            <Tooltip title='Actualizar Telefono'>
              <IconButton edge="start" color="inherit" 
                aria-label="menu" style={{ padding: 4 }} >
                <EditIcon fontSize='small'/>
               </IconButton>
             </Tooltip>
            <Tooltip title='Quitar Telefono'>
              <IconButton edge="start" color="inherit" 
                aria-label="menu" style={{ padding: 4, marginLeft: 5 }} >
              <DeleteForeverIcon fontSize='small'/>
               </IconButton>
             </Tooltip>
             </React.Fragment>
            }
          </Grid>
      </Grid>
    );
};

export default Telefono;