import React, {useState} from "react";

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

    return(
        <form onSubmit = {onSubmit}>
            <h1>Join our community</h1>
            <div className = "form-group">
                <label>手机号</label>
                <input
                    type = "numeric"
                    className = "form-control"
                    name = "phone"
                    onChange = {onChange}/>
            </div>
            <div className = "form-group">
                <label>邮箱</label>
                <input
                    type = "email"
                    className = "form-control"
                    name = "email"
                    onChange = {onChange}/>
            </div>
            <div className = "form-group">
                <label>密码</label>
                <input
                    type = "password"
                    className = "form-control"
                    name = "password"
                    onChange = {onChange}/>
            </div>
            <div className = "form-group">
                <label>确认密码</label>
                <input
                    type = "password"
                    className = "form-control"
                    name = "passwordConfirmation"
                    onChange = {onChange}/>
            </div>
            <div className = "form-group">
                <button className = "btn btn-primary btn-lg">注册</button>
            </div>
        </form>
    )
}

export default SignupForm;