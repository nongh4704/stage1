import axios from "axios";

export const signupRequest = (data) => {
    return dispatch => {
        dispatch({type: "isLoading"});
        return axios.post("/api/users",data)
                .then(res => {
                    console.log("success", res);
                    dispatch({type: "success"});
                })
                .catch(err => {
                    dispatch({
                        type: "failed",
                        errors: err?.response?.data?.msg
                    });
                    console.log("err==",err);
                })
    }
}