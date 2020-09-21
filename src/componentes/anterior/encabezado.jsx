import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

import logo from "../avatar.jpg";
import { Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: { display: 'flex',
          '& > *': {
          margin: theme.spacing(1),
        },
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

export default function Encabezado( props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt="Remy Sharp" src={logo} className={classes.large} />
      <Grid container component="main" spacing={1}>
        <Grid item xs={12}  className={classes.grid} >
          <Typography variant="h5">{ props.alumno.nombre }</Typography> 
        </Grid>
        <Grid item xs={12}  className={classes.grid} >
          <Typography variant="h5">{ props.alumno.curso }</Typography> 
        </Grid>
      </Grid>
  
  
    </div>
  );
}