import React from "react";
import SignupForm from "./SignupForm";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { signupRequest } from "../../actions/signupActions";

const SignupPage = (props) => {
    return (
        <div className = "row">
            <div className = "col-md-3"></div>
            <div className = "col-md-6">
                <SignupForm 
                    sendSignupRequest = {props.signupRequest}
                    signup = {props.signup}/>
            </div>
            <div className = "col-md-3"></div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({signupRequest}, dispatch);
}

const mapStateToProps = (state) => {
    return {
        signup: state.signup
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);