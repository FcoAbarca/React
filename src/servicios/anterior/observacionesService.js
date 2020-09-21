import http from "./httpService";
import { apiURL } from "../config.json";
import {setJwt, getJwt, getDataJwt} from "./httpService";

export function getDocentesCursosGuias() {
    let { docente } = getDataJwt();
    let apiEndPointLC = apiURL + "/Docentes/guias";

    if ( docente > 0 )
        apiEndPointLC = `${apiEndPointLC}/${docente}`;

    setJwt( getJwt() );
    return http.get( apiEndPointLC );
}
export function getDetalleObservaciones( acta) {
  const apiEndPointLC = apiURL + `/Observaciones/detalle/${acta.corte}/${acta.docente}/${acta.curso}`;

  setJwt(getJwt());
  return http.get( apiEndPointLC );
}
export function putDetalleObservacion(id, observacion) {
  const obs = { "id": id,
                 "observacion": observacion }

  let apiEndPoint = `${apiURL}/Observaciones/update`;
  
  setJwt(getJwt());
  return http.post( apiEndPoint, obs ).then( resp => resp).catch(err => err);
}
export function deleteObservaciones( id ) {

  let apiEndPoint = `${apiURL}/Observaciones/delete/${id}`;
  
  setJwt(getJwt());
  return http.get( apiEndPoint );
}

export function postAddObservaciones(data) {
  let { usuario } = getDataJwt();

  data.usuario = parseInt(usuario);
  let apiEndPoint = `${apiURL}/Observaciones`;
 
  setJwt(getJwt());

  return http.post( apiEndPoint, data ).then( resp => resp).catch(err => err);
}