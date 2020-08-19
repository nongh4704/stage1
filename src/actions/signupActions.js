import axios from "axios";

export const signupRequest = (data) => {
    return dispatch => {
        return axios.post("/api/users",data)
    }
}

export const checkPhone  = (phone) => {
    return dispatch => {
        return axios.get("/api/users/" + phone);
    }
}