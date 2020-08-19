import React, {useState} from "react";
import classNames from "classnames";
import {withRouter} from "react-router-dom";

const SignupForm = (props) => {
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});

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
        setIsLoading(true);
        setErrors({});
        props.sendSignupRequest({
            phone,
            email,
            password,
            passwordConfirmation
        })
        .then(res => {
            setIsLoading(false);
            props.history.push("/login");
            props.addFlashMessage({
                type: "success",
                message: "注册成功。"
            });
            
        })
        .catch(err => {
            setIsLoading(false);
            setErrors(err?.response?.data?.msg);
            props.addFlashMessage({
                type: "failed",
                message: "注册失败。"
            });
            console.log("err==",err);
        })
    }

    const onBlur = (e) => {
        let value = e.target.value;
        if(value){
            props.checkPhone(e.target.value)
            .then(res => {
                console.log("check phone==",res.data);
                if(res.data && res.data.length){
                    setErrors({phone: "该账号已存在，无法注册"});
                }else{
                    setErrors({});
                }
            })
            .catch(err => {
                setErrors({});
                console.log(err);
            })
        }
    }

    return(
        <form onSubmit = {onSubmit}>
            <h1>Join our community</h1>
            <div className = "form-group">
                <label>手机号</label>
                <input
                    type = "numeric"
                    className = {classNames(["form-control", {"is-invalid": errors.phone}])}
                    name = "phone"
                    onBlur = {onBlur}
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

export default withRouter(SignupForm);