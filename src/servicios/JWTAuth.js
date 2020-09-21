import axios from 'axios';

import { apiURL } from "../config.json";

const apiEndPoint = `${apiURL}/loginAM.php`;

const login = async (data) => {
    try {
        let CA = { "codigo": data.codigo};
        let response = await axios.post(apiEndPoint, CA);
        
        if (response.status === 200 && response.data.jwt){
        // && response.data.expiration) {
            localStorage.setItem("token_SAI_AM", response.data.jwt);
            //localStorage.setItem("expire_at", response.data.expiration);
            return response.data.data;
        }
    } catch(e) {
        return 400;
    }
}

const logout = () => {
    localStorage.removeItem("token_SAI_AM");
    localStorage.removeItem("expire_at");
}

export default { login, logout }