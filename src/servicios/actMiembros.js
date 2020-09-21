import http from "./httpService";
import { apiURL } from "../config.json";
import {setJwt, getJwt, getDataJwt} from "./httpService";

export function getData() {
    let jwt = getJwt();
    let apiEndPoint = apiURL + `/miembro.php?jwt=${jwt}`;
  
    //setJwt( getJwt() );
    return http.get( apiEndPoint );
}