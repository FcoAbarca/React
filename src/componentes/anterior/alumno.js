import React, {useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from '@material-ui/lab/TabPanel';
import TabContext from '@material-ui/lab/TabContext';

import Personales from './personales';
import Matricula from './matricula';
import Calificaciones from './calificaciones';

import { getData } from '../servicios/calificacionesService';

const useStyles = makeStyles({ root: { flexGrow: 1 } });

export default function Alumno( props ) {
  const classes = useStyles();
  const [cargado, setCargado] = useState(false);
  const [value, setValue] = useState('2');
  const [data, setData] = useState({ hits: [] });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect( () => {
    (async () => {
      if ( !cargado ){
        const result = await getData();
      
        setData(result.data);
        setCargado(true);

        props.setAlumno( { nombre: result.data.alumno.alumno,
                           curso: `${result.data.matricula.añoLectivo} ${result.data.matricula.curso}` })
      }
    })()
  }, []);

  return (
    <Paper square className={classes.root}>
      <TabContext value={value}>
        <Tabs value={value}
              onChange={handleChange}
              variant="fullWidth"
              indicatorColor="primary"
              textColor="primary"
              aria-label="icon tabs example">
          <Tab label="Anuncios" value="1" />
          <Tab label="Personales" value="2"/>
          <Tab label="Academicos" value="3"/>
          <Tab label="Calificaciones" value="4"/>
          
        </Tabs>
        <TabPanel value="1">
            Recuerde matener al dia con sus pagos para tener acceso a la plataforma!! 
        </TabPanel>
        <TabPanel value="2">
          { cargado && <Personales
                         data= {data.alumno}>
                       </Personales>
          }
        </TabPanel>
        <TabPanel value="3">
          { cargado && <Matricula
                         data= {data.matricula}>
                       </Matricula>
          }
        </TabPanel>
        <TabPanel value="4">
          { cargado && <Calificaciones
                         cortes= {data.cortes}
                         tipos= {data.tipoDisciplinas}
                         disciplinas= {data.disciplinas}
                         conceptos= {data.conceptos}
                         notas= {data.notas}
                         notasCON= {data.notasCON}
                         totales= {data.totales}>
                       </Calificaciones>
          }
        </TabPanel>
        
      </TabContext>
    </Paper>
  );
}
/*
<Tab label="Calificaciones Detalle" value="5"/>
<TabPanel value="5">Item One5</TabPanel>
*/