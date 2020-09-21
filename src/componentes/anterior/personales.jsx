import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles({ 
        root: { flexGrow: 1 }, 
        grid: { fontWeight: 'bold', 
                textAlign:'right' }
    });
export default function Personales( props ) {
  const classes = useStyles();

  return (
    <Paper square className={classes.root}>
        <Grid container component="main" spacing={3}>
            <Grid item xs={12} md={3} className={classes.grid} >
                Código: 
            </Grid>
            <Grid item xs={12} md={9} >
                {props.data.codigo}
            </Grid>
            <Grid item xs={12} md={3} className={classes.grid} >
                Sexo: 
            </Grid>
            <Grid item xs={12} md={9} >
                {props.data.sexo}
            </Grid>
            <Grid item xs={12} md={3} className={classes.grid} >
                Edad: 
            </Grid>
            <Grid item xs={12} md={9} >
                {props.data.edad}
            </Grid>
            <Grid item xs={12} md={3} className={classes.grid} >
                Fecha Nacimiento: 
            </Grid>
            <Grid item xs={12} md={9} >
                {props.data.fechaNacimiento}
            </Grid>
            <Grid item xs={12} md={3} className={classes.grid} >
                Lugar Nacimiento: 
            </Grid>
            <Grid item xs={12} md={9} >
                {props.data.lugarNacimiento}
            </Grid>
            <Grid item xs={12} md={3} className={classes.grid} >
                Nacionalidad: 
            </Grid>
            <Grid item xs={12} md={9} >
                {props.data.nacionalidad}
            </Grid>
            <Grid item xs={12} md={3} className={classes.grid} >
                Dirección: 
            </Grid>
            <Grid item xs={12} md={9} >
                {props.data.direccion}
            </Grid>
            <Grid item xs={12} md={3} className={classes.grid} >
                Telefono/Celular: 
            </Grid>
            <Grid item xs={12} md={9} >
                {props.data.telefono} / {props.data.celular}
            </Grid>
            <Grid item xs={12} md={3} className={classes.grid} >
                E-mail: 
            </Grid>
            <Grid item xs={12} md={9} >
                {props.data.email}
            </Grid>
        </Grid>
   </Paper>
  );
}