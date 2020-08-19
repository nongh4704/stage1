import React from "react";
import SignupForm from "./SignupForm";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { signupRequest, checkPhone } from "../../actions/signupActions";
import { addFlashMessage } from "../../actions/flashMessage";

const SignupPage = (props) => {
    return (
        <div className = "row">
            <div className = "col-md-3"></div>
            <div className = "col-md-6">
                <SignupForm 
                    sendSignupRequest = {props.signupRequest}
                    addFlashMessage = {props.addFlashMessage}
                    checkPhone = {props.checkPhone}
                    signup = {props.signup}/>
            </div>
            <div className = "col-md-3"></div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({signupRequest, addFlashMessage, checkPhone}, dispatch);
}

const mapStateToProps = (state) => {
    return {
        signup: state.signup,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);