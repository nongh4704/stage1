import axios from "axios";

const loginRequest = (data) =>{
    return axios.post("/api/login", data);
}

exports = {
    loginRequest
};