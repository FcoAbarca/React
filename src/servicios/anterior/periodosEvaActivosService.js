import http from "./httpService";
import { apiURL } from "../config.json";

import {setJwt, getJwt} from "./httpService";

export function getPeriodosEvaActivos() {
  const apiEndPointLC = apiURL + "/PeriodosEvaluativos/activos";

  setJwt(getJwt());
  return http.get(apiEndPointLC);
}