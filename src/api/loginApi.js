import axios from "axios";

const loginRequest = (data) =>{
    return axios.post("/api/auth", data);
}

export {
    loginRequest
};