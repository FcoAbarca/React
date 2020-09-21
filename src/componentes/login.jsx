import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import auth from '../servicios/JWTAuth';
import { getDataJwt } from '../servicios/httpService';
import logo from "../miredentor.png";

const useStyles = theme => ({
    root: {
        height: '80vh',
        padding: theme.spacing(5),
    },
    image: {
        marginTop: theme.spacing(3),
        backgroundImage: `url(${logo})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        width: '100%',
        height: '100%'
    },
    titulo: {
        margin: theme.spacing(3),
        fontWeight:'bold',
        textAlign:'center'
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(5),
    },
    submit: {
        margin: theme.spacing( 3, 0 ),
        padding: theme.spacing( 2, 0) ,
    },
});

class Login extends Component {
    mensajeErr= '';
    state = { data: { codigo: "" },
              habilitado: false,
              error: false };
    
    ValidarInput = ({ currentTarget: input }) => {
        let habilitado;
        const data = { ...this.state.data };
        
        data[input.name] = input.value.toUpperCase();

        habilitado = data['codigo'] === '' ? false : true;
                    
        this.setState({ data, habilitado });
    };

    VerificarAcceso = async () => {
        try {
            const { data } = this.state;
            const response = await auth.login(data);

            if ( response === 400){
                this.mensajeErr = 'Error de Inicio de sesion, Codigo invalido.';
                this.setState({ error: true, 
                                data: { codigo: "" } });
            } else {
                const { data } = getDataJwt();

                if ( parseInt( data.id ) > 0 ) {
                    this.props.updateEstado();
                } else {
                    this.mensajeErr = 'Su codigo no es valido o no esta activo.';
                    this.setState({ error: true, 
                                    data: { codigo: "" } });
                }
            }
        } catch (error) {}
    };

    render() {
        const { classes } = this.props;
        return (
            <Grid container component="main" className={classes.root}>
                <CssBaseline />
                <Grid item xs={false} sm={4} md={6} style={{marginRight:20}} className={classes.image} />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <div className={classes.paper}>
                        <Typography component="h1" variant="h5" className={classes.titulo}>
                            SISTEMA ADMINISTRACION IGLESIA
                        </Typography>
                        <br/>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            inputProps = { { maxLength :  4 } } 
                            required
                            fullWidth
                            id="codigo"
                            label="Codigo Miembro"
                            name="codigo"
                            value={this.state.data.codigo}
                            onChange={this.ValidarInput}
                            autoFocus
                        />
                        {this.state.error && <Typography color = 'error'>
                                                { this.mensajeErr }
                                             </Typography>}
                        <Button
                            type="button"
                            fullWidth
                            disabled={!this.state.habilitado}
                            variant="contained"
                            color="primary"
                            className = {classes.submit}
                            size = "large" 

                            onClick = {this.VerificarAcceso} >
                            iniciar Sesion
                        </Button>
                    </div>
                </Grid>
            </Grid>
        );
    };
}

export default withStyles(useStyles)(Login)