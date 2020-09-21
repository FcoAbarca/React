import axios from "axios";
import jwtDecode from "jwt-decode";
//import { toast } from "react-toastify";
//import logger from "./logService";

const tokenKey = "token_SAI_AM";

axios.interceptors.response.use((responde) => {
    return responde;
}, function (error) {
    if (typeof error.response === "undefined") {
        // do somthing
    } 
    return Promise.reject(error);
    //console.log(error)
    //localStorage.clear();
    /*if ( error.response.data.token.KEY && error.response.data.token.KEY === 'ERR_EXPIRED_TOKEN' )  {
        localStorage.clear();
        console.log('unauthorized, logging out ...');
        //auth.logout();
        //router.replace('/auth/login');
    }*/
    //return Promise.reject(error.response);
});
  
export function getJwt() {
    return localStorage.getItem(tokenKey);
}
export function setJwt(jwt) {
    //axios.defaults.headers.common["x-auth-token"] = jwt;
    axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
}
export function getDataJwt() {
    try {
        const jwt = localStorage.getItem(tokenKey);
        return jwtDecode(jwt);
    } catch (error) {
        return null;
    }
}
export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
};
