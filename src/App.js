import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';

import Login from "./componentes/login";
import Master from "./componentes/master";

const useStyles = theme => ({ root: { flexGrow: 1,
                                      marginLeft: theme.spacing(5),
                                      marginRight: theme.spacing(5) }
                           });

class App extends React.Component {
    constructor() {
        super();
        this.state = { autenticado : localStorage.getItem("token_SAI_AM") }
        this.update = this.update.bind(this);
    }

    update = () => { this.setState({ autenticado : localStorage.getItem("token_SAI_AM") }) }

    render() {
        const { classes } = this.props;

        let button;
        if ( this.state.autenticado ) {
            button = <Router> 
                        <Master updateEstado={this.update} />
                     </Router>;
        } else 
            button = <Login updateEstado={this.update} />;
        
        return ( <div className={classes.root}>
                     {button}                
                 </div>
               );
    }
}

export default withStyles(useStyles)(App)