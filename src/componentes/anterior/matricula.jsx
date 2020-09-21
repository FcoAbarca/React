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
                Año Lectivo: 
            </Grid>
            <Grid item xs={12} md={9} >
                {props.data.añoLectivo}
            </Grid>
            <Grid item xs={12} md={3} className={classes.grid} >
                Centro Procedencia: 
            </Grid>
            <Grid item xs={12} md={9} >
                {props.data.centroEscolar}
            </Grid>
            <Grid item xs={12} md={3} className={classes.grid} >
                Fecha Matricula: 
            </Grid>
            <Grid item xs={12} md={9} >
                {props.data.fechaMatricula}
            </Grid>
            <Grid item xs={12} md={3} className={classes.grid} >
                Tipo Ingreso: 
            </Grid>
            <Grid item xs={12} md={9} >
                {props.data.tipoIngreso}
            </Grid>
            <Grid item xs={12} md={3} className={classes.grid} >
                Tipo Matricula: 
            </Grid>
            <Grid item xs={12} md={9} >
                {props.data.tipoMatricula}
            </Grid>
            <Grid item xs={12} md={3} className={classes.grid} >
                Curso: 
            </Grid>
            <Grid item xs={12} md={9} >
                {props.data.curso}
            </Grid>
            <Grid item xs={12} md={3} className={classes.grid} >
                Docente Guia: 
            </Grid>
            <Grid item xs={12} md={9} >
                {props.data.docenteGuia}
            </Grid>
            <Grid item xs={12} md={3} className={classes.grid} >
                Conducta: 
            </Grid>
            <Grid item xs={12} md={9} >
                {props.data.conducta}
            </Grid>
            <Grid item xs={12} md={3} className={classes.grid} >
                Carta Compromiso: 
            </Grid>
            <Grid item xs={12} md={9} >
                {props.data.cartaCompromiso ? 'Si' : 'No'}
            </Grid>
            <Grid item xs={12} md={3} className={classes.grid} >
                Es Repitente: 
            </Grid>
            <Grid item xs={12} md={9} >
                {props.data.esRepitente ? 'Si' : 'No'}
            </Grid>
        </Grid>
   </Paper>
  );
}