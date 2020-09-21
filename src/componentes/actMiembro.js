import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Select from "react-dropdown-select";
import Divider from '@material-ui/core/Divider';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PostAddIcon from '@material-ui/icons/PostAdd';

import Telefono from './telefonos'

export default class ActMiembro extends Component {
    state = { confirmOpen: false, acta: 0,
              telefonos: [{"telefono":"1", "numero":"2222-2222", "empresa":"TIGO"}, 
                          {"telefono":"2", "numero":"8888-8888", "empresa":"CLARO"}], familiares: [],
              sectores: [], categorias: [], asociaciones: [] };

    setConfirmOpen = ( valor ) => this.setState({ confirmOpen : valor});

    /*async componentDidMount() {
        const { status, data: periodosEVA } = await getPeriodosEvaActivos();

        if ( parseInt( status ) === 200) {
            this.setState({ periodosEVA });
        }
        this.CargarCalificaciones ()
    };

    async CargarCalificaciones () {
        const { status, data: calificaciones } = await getCalificaciones();

        if ( status === 200) {
            this.setState({ calificaciones });
        }
    }*/

    render() {
      let telefonos = this.state.telefonos;
        return (
            <React.Fragment>
            <Paper elevation={3} style={{margin:10, padding: 20}}>
            <Grid container component="main" spacing={3}>
                <Grid item xs={12} align='left' style={{paddingTop:2, paddingBottom:5, fontWeight:'bold'}} >
                    Datos Personales
                </Grid>
                <Grid item xs={false} md={3} align='left' style={{paddingTop:2, paddingBottom:0}} >
                    Nombres
                </Grid>
                <Grid item xs={false} md={3} align='left' style={{paddingTop:2, paddingBottom:0}} >
                    Apellidos
                </Grid>
                <Grid item xs={false} md={2} align='left' style={{paddingTop:2, paddingBottom:0}} >
                    Sexo
                </Grid>
                <Grid item xs={false} md={2} align='left' style={{paddingTop:2, paddingBottom:0}} >
                    Estado Civil
                </Grid>
                <Grid item xs={false} md={2} align='left' style={{paddingTop:2, paddingBottom:0}} >
                    Fecha Nacimiento
                </Grid>

                <Grid item md={3} style={{paddingTop:2, paddingBottom:5}}>
                    <TextField variant="outlined" size='small' fullWidth={true} 
                               defaultValue={''} />
                </Grid>
                
                <Grid item md={3} style={{paddingTop:2, paddingBottom:5}}>
                    <TextField variant="outlined" size='small' fullWidth={true} 
                               defaultValue={''}/>
                </Grid>
                <Grid item md={2} style={{paddingTop:2, paddingBottom:5}}>
                    <Select/>
                </Grid>
                <Grid item xs={12} md={2} style={{paddingTop:2, paddingBottom:5}}>
                    <Select/>
                </Grid>

                <Grid item md={2} style={{paddingTop:2, paddingBottom:0}}>
                    <TextField variant="outlined" size='small' fullWidth={true} 
                               defaultValue={''} type="date"/>
                </Grid>

                <Grid item xs={false} md={3} align='left' style={{paddingTop:2, paddingBottom:0}} >
                    Cedula
                </Grid>
                <Grid item xs={false} md={3} align='left' style={{paddingTop:2, paddingBottom:0}} >
                    Email
                </Grid>
                <Grid item xs={false} md={2} align='left' style={{paddingTop:2, paddingBottom:0}} >
                    Num Hijos
                </Grid>
                <Grid item xs={false} md={4} align='left' style={{paddingTop:2, paddingBottom:0}} >
                    Sector/Barrio
                </Grid>

                <Grid item md={3} style={{paddingTop:2, paddingBottom:5}}>
                    <TextField variant="outlined" size='small' fullWidth={true} 
                               defaultValue={''}/>
                </Grid>
                
                <Grid item md={3} style={{paddingTop:2, paddingBottom:5}}>
                    <TextField variant="outlined" size='small' fullWidth={true} 
                               defaultValue={''}/>
                </Grid>
                <Grid item md={2} style={{paddingTop:2, paddingBottom:5}}>
                    <TextField variant="outlined" size='small' fullWidth={true} 
                               defaultValue={''}/>
                </Grid>
                <Grid item md={4} style={{paddingTop:2, paddingBottom:5}}>
                  <Select/>
                </Grid>

                <Grid item xs={false} md={12} align='left' style={{paddingTop:2, paddingBottom:0}} >
                    Direccion
                </Grid>

                <Grid item  md={12} style={{paddingTop:2, paddingBottom:5}}>
                    <TextField variant="outlined" size='small' fullWidth={true} 
                               defaultValue={''} multiline rows={1}/>
                </Grid>
                <Grid container  md={5} style={{paddingTop:20, paddingBottom:5}}>
                  <Grid item xs={12} align='left' style={{marginBottom:5, fontWeight:'bold'}} >
                    Telefonos
                    <Divider />
                  </Grid>
                  <Grid item xs={12} align='left' style={{marginBottom:5, fontWeight:'bold'}} >
                    <Telefono item={null} nuevo={true}/>
                    <Divider />
                  </Grid> 
                  { 
                    telefonos.map( value => <Telefono item = {value} nuevo={false} />)
                  }
                </Grid>
                <Grid container md={7} style={{paddingTop:20, paddingBottom:5}}>
                  <Grid item xs={12} align='left' style={{padding:0, marginBottom:0, fontWeight:'bold'}} >
                    Datos Escolares y Profesionales</Grid>
                  <Grid item xs={4} align='left' style={{paddingTop:2, paddingBottom:0}} >
                    Escolaridad
                  </Grid> 
                  <Grid item xs={4} align='left' style={{paddingTop:2, paddingBottom:0}} >
                  </Grid> 
                  <Grid item xs={4} align='left' style={{paddingTop:2, paddingBottom:0}} >
                    Profesion
                  </Grid> 
                  <Grid item xs={12} md={4} style={{paddingTop:2, paddingBottom:5}}>
                    <Select/>
                  </Grid>

                  <Grid item md={4} style={{paddingTop:2, paddingBottom:0}}>
                      <TextField variant="outlined" size='small' fullWidth={true} 
                                defaultValue={''} type="date"/>
                  </Grid>
                  <Grid item md={4} style={{paddingTop:2, paddingBottom:0}}>
                      <TextField variant="outlined" size='small' fullWidth={true} 
                                defaultValue={''} type="date"/>
                  </Grid>

                </Grid>
            </Grid>
            </Paper>
            
        </React.Fragment>
        )
    };
}
/*<ConfirmDialog 
                title = {`¿Confirma Guardar los datos del Miembro?`} 
                open = {this.state.confirmOpen} 
                setOpen = {this.setConfirmOpen} 
                onConfirm = {this.AnularActa} />  */
/*
<Select  
                            values={''}
                            onChange={(valor) => this.setState({periodoACT: valor})} 
                            valueField='id' 
                            labelField='descripcion'
                            searchBy='descripcion' />

<Select  
                            onChange={(valor) => { this.setState({docenteACT: valor});
                                                               this.CursosDocente(valor)}}
                            values={this.state.docenteACT}
                            valueField='id'
                            labelField='descripcion'
                            searchBy='descripcion' />



<Grid item xs={12} md={11} style={{paddingTop:2, paddingBottom:0}}>
                                { this.props.row.id > 0 ?
                                    <TextField variant="outlined" size='small' fullWidth={true} 
                                               defaultValue={this.props.row.curso} disabled={true} />
                                    :
                                    <Select values={this.state.cursoACT}
                                            options={optionsCS}
                                            onChange={(valor) => { this.setState({cursoACT: valor});
                                                                   this.DisciplinaCursosDocente(valor)}}
                                            valueField='id' 
                                            labelField='descripcion'
                                            disabled= {this.props.row.id > 0 ? true : false} />
                                }
                            </Grid>
                            <Grid item xs={12} style={{paddingTop:2, paddingBottom:0}} >
                                <Divider />
                            </Grid>
                            <Grid item xs={false} md={1} style={{paddingTop:5, paddingBottom:0 }} >
                                Disciplina
                            </Grid>
                            <Grid item xs={12} md={9} style={{paddingTop:2, paddingBottom:0 }}>
                                <Select options={optionsDP} 
                                        values={this.state.disciplinaACT}
                                        valueField='id'
                                        labelField='descripcion'
                                        searchBy='descripcion'
                                        onChange={(valor) => { this.setState({disciplinaACT: valor});
                                                               this.CambioDisciplina( valor )}} />
                            </Grid>
                            <Grid item xs={12} md={2} style={{paddingTop:2, paddingBottom:0, textAlign:'right'}}>
                                <Tooltip title="Agregar alumnos al acta">
                                    <Button variant="contained" color="primary" fullWidth={true}
                                            onClick={ () => this.setState( { confirmOpen: true })}>
                                        <PostAddIcon/>
                                    </Button>
                                </Tooltip>
                            </Grid>
                            <Grid item xs={12} style={{paddingTop:2, paddingBottom:0 }} >
                                <Divider />
                            </Grid>
                            <Grid item xs={false} md={1} style={{paddingTop:5, paddingBottom:0 }} >
                                Alumnos
                            </Grid>
                            <Grid item xs={12} md={11} style={{paddingTop:2, paddingBottom:0}}>
                                <Select options={optionsAFA} 
                                        multi
                                        itemRenderer={this.customItemRenderer}
                                        valueField='id'
                                        labelField='descripcion'
                                        searchBy='descripcion'
                                        values={this.state.alumnoACT}
                                        onChange={(alumnoACT) => this.setState({alumnoACT}) }
                                        placeholder='Seleccione alumno a anexar'
                                        disabled= {this.props.row.id > 0 && this.state.alumnosACTA.length > 0 ? false : true}/>
                            </Grid> 
                            <Grid item xs={12} style={{paddingTop:2, paddingBottom:0}} >
                                <Divider />
                            </Grid>
                            <Grid item xs={12}>
                                
                            </Grid>
*/