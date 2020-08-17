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
                <SignupForm sendSignupRequest = {props.signupRequest}/>
            </div>
            <div className = "col-md-3"></div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return( bindActionCreators({signupRequest}, dispatch));
}

export default connect(null, mapDispatchToProps)(SignupPage);