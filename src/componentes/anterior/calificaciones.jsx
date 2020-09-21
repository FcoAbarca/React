import React, {useState }  from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import ListAltIcon from '@material-ui/icons/ListAlt';

export default function  Calificaciones (props) {
   const [detalle, setDetalle] = useState(false);

   const cortes = Object.values(props.cortes);
   const tipos = Object.values(props.tipos);
   const disciplinas = Object.values(props.disciplinas);
   const conceptos = Object.values(props.conceptos);
   const notas = Object.values(props.notas);
   const notasCPTO = Object.values(props.notasCON);
   const totales = Object.values(props.totales);
   //const indicadores = Object.values(this.props.indicadores);
   
   return (
      <div style={{ maxWidth: '100%' }}>
         <TableContainer>
            <Table stickyHeader size="small" >
               <TableHead>
                  <TableRow>
                     <TableCell align="left" style={{ backgroundColor: '#01579b', color: 'white' }}>
                        <Tooltip key={ Math.random()} title={ `Detalle Calificaciones por Concepto Evaluativo` }>
                           <IconButton edge="start" color="inherit" aria-label="menu" style={{ padding: 6 }}
                              onClick={() => setDetalle(!detalle)}>
                              <ListAltIcon/>
                           </IconButton>
                        </Tooltip>
                     </TableCell>
                     <TableCell align="left" style={{ backgroundColor: '#01579b', color : 'white' }}>
                        Disciplina
                     </TableCell>
                     {
                        cortes.map( (column, key) => (
                        <Tooltip key={ Math.random()} title={ `${column.corte}` }>
                           <TableCell style={{ backgroundColor: '#01579b', color : 'white', padding:0 }}
                                    key={ Math.random() } align="center">
                              {column.alias}
                           </TableCell>
                        </Tooltip>))
                     }
                     <TableCell align= "center" style= {{ backgroundColor: '#01579b', 
                                                          color : 'white', padding:3 }}>
                        Nota
                     </TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  {  tipos.map( tipo => {
                        let tipoDisciplinas = disciplinas.filter( dspl => dspl.tipoDisciplina === tipo.id );
                        return (
                           <React.Fragment key = { Math.random() }>
                           <TableRow key = { Math.random() }>
                              <TableCell colSpan = { cortes.length + 3 } style={{background:'#F2F3F4', fontWeight: 'bold', fontStyle: 'italic'}} >
                                 { tipo.tipoDisciplina }
                              </TableCell>
                           </TableRow >
                           {  tipoDisciplinas.map( row => {
                                 const nota = notas.filter(n => n.disciplina === row.id); 
                                 const total = totales.filter(n => n.disciplina === row.id);
                                 const conceptosDIS = conceptos.filter(n => n.disciplina === row.id);
                                 return ( 
                                    <React.Fragment key = { Math.random() }>
                                    <TableRow key={ Math.random() } >
                                       <TableCell colSpan = '2'>
                                          { row.disciplina }
                                       </TableCell>
                                       {  cortes.map( crt => {
                                             let cal = nota.filter( nta => nta.corte === crt.id);

                                             if ( cal.length === 0 ) {
                                                return (<TableCell key={ Math.random() } align="center">-</TableCell>)
                                             } else {
                                                return ( 
                                                   <Tooltip key = { Math.random()} 
                                                            title = {`${ !row.cuantitativa ? cal[0].nota : cal[0].cualitativa}`}>
                                                      <TableCell key = { Math.random() } align = "center" style={{fontWeight: 'bold'}}>
                                                         { row.cuantitativa ? cal[0].nota : cal[0].cualitativa }
                                                      </TableCell>
                                                   </Tooltip>)
                                             }
                                          }) 
                                       }
                                       <Tooltip key = { Math.random() } 
                                                title = {`${ !row.cuantitativa ? total[0].nota : total[0].cualitativa}`}>
                                          <TableCell align = "center" 
                                                     style = {{ backgroundColor: '#01579b', 
                                                                color: 'white', padding:0 }}>
                                             { row.cuantitativa ? total[0].nota : total[0].cualitativa }
                                          </TableCell>
                                       </Tooltip>
                                    </TableRow>
                                    {conceptosDIS.map( row => {
                                       return ( 
                                          detalle && <TableRow key={ Math.random() } >
                                             <TableCell align="right" colSpan = '2'>
                                                { row.concepto } {'->'}
                                             </TableCell>
                                             {  cortes.map( crt => {
                                                   let cal = notasCPTO.filter( nta => nta.corte === crt.id 
                                                               && nta.disciplina === row.disciplina && nta.concepto === row.id);
      
                                                   if ( cal.length === 0 )
                                                      return (<TableCell key={ Math.random() } align="center">-</TableCell>)
                                                   else 
                                                      return (<TableCell key = { Math.random() } align = "center">
                                                                  { cal[0].nota }
                                                              </TableCell> )
                                                }) 
                                             }
                                             <TableCell align = "center" 
                                                        style = {{ backgroundColor: '#01579b', 
                                                                   color: 'white', padding:0 }}>
                                                   -
                                             </TableCell>
                                          </TableRow>
                                       )
                                    })
                                    }
                                    </React.Fragment>
                                 )
                              })
                           }
                           </React.Fragment>
                        )
                     })
                  }
               </TableBody>
            </Table>
         </TableContainer>
      </div>
   )
}