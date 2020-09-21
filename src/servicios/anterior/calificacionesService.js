import http from "./httpService";
import { apiURL } from "../config.json";
import {setJwt, getJwt, getDataJwt} from "./httpService";

export function getData() {
  let { matricula } = getDataJwt();
  let apiEndPoint = apiURL + `/SIAF_AP/${ matricula }`;
  
  setJwt( getJwt() );
  return http.get( apiEndPoint );
}