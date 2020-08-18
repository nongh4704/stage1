import React, {useState} from "react";
import classNames from "classnames";

const SignupForm = (props) => {
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordConfirmation, setPasswordConfirmation] = useState();

    const onChange = (e) => {
        switch(e.target.name){
            case "phone": setPhone(e.target.value);
                break;
            case "email": setEmail(e.target.value);
                break;
            case "password": setPassword(e.target.value);
                break;
            case "passwordConfirmation": setPasswordConfirmation(e.target.value);
                break;
            default: break;
        }
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        console.log(phone, email, password, passwordConfirmation);
        props.sendSignupRequest({
            phone,
            email,
            password,
            passwordConfirmation
        });
    }

    let errors = props.signup.errors || {};
    let isLoading = props.signup.isLoading;
    console.log("isloaing",isLoading);

    return(
        <form onSubmit = {onSubmit}>
            <h1>Join our community</h1>
            <div className = "form-group">
                <label>手机号</label>
                <input
                    type = "numeric"
                    className = {classNames(["form-control", {"is-invalid": errors.phone}])}
                    name = "phone"
                    onChange = {onChange}/>
                {errors.phone ? <span className = "invalid-feedback">{errors.phone}</span> : null}
            </div>
            <div className = "form-group">
                <label>邮箱</label>
                <input
                    type = "email"
                    className = {classNames(["form-control", {"is-invalid": errors.email}])}
                    name = "email"
                    onChange = {onChange}/>
                    {errors.email ? <span className = "invalid-feedback">{errors.email}</span> : null}
            </div>
            <div className = "form-group">
                <label>密码</label>
                <input
                    type = "password"
                    className = {classNames(["form-control", {"is-invalid": errors.password}])}
                    name = "password"
                    onChange = {onChange}/>
                    {errors.password ? <span className = "invalid-feedback">{errors.password}</span> : null}
            </div>
            <div className = "form-group">
                <label>确认密码</label>
                <input
                    type = "password"
                    className = {classNames(["form-control", {"is-invalid": errors.passwordConfirmation}])}
                    name = "passwordConfirmation"
                    onChange = {onChange}/>
                    {errors.passwordConfirmation ? <span className = "invalid-feedback">{errors.passwordConfirmation}</span> : null}
            </div>
            <div className = "form-group">
                <button disabled = {isLoading} className = "btn btn-primary btn-lg">注册</button>
            </div>
        </form>
    )
}

export default SignupForm;