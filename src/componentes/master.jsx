import React from 'react';
import { makeStyles  } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Tooltip from '@material-ui/core/Tooltip';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import auth from '../servicios/JWTAuth';
import ActMiembro from './actMiembro';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(1),
        fontSize: '0.9em'
    },
    title: {
        flexGrow: 1,
        fontStyle: 'italic',
        marginRight: theme.spacing(5),
    },
    contenedorMenu: {
        flexGrow: 1
    }
}));

const notify = (tipo, texto, corto)  => {
    let  duracion = corto ? 1500 : 5000;
    
    if ( tipo === 1 )
        toast.success( texto, { autoClose : duracion } );
    else
        toast.error( texto, { autoClose : duracion } );
};

const getNotify = ( tipo, texto, corto = false ) => notify( tipo, texto, corto );

export default function Master( props ) {
    const classes = useStyles();

    const CerrarSesion = () => { auth.logout();
                                 props.updateEstado(); };
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        SAI - Actualizacion informacion de Miembro
                    </Typography>
                    <Tooltip title="Cerrar Sesion">
                       <IconButton edge = "start" 
                                   color = "inherit" 
                                   className = {classes.menuButton} 
                                   aria-label = "menu"
                                   onClick = {CerrarSesion}>
                            <AccountCircleIcon />
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </AppBar>
           
            <main className="container">
                <ActMiembro/>
                <ToastContainer />
            </main> 
        </div>
    );
}
/*<MenuItem>Cambiar Contraseña</MenuItem> */