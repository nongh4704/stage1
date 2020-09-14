import React, {useState} from "react";
import {loginApi} from "../api";

const LoginForm = () => {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const onChange = (e) => {
        let name = e.target.name;
        
        if(name === "phone"){
            setPhone(e.target.value);
        }else if(name === "password"){
            setPassword(e.target.value);
        }
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        if(!phone){
            alert("请输入手机号");
            return;
        }
        if(!password){
            alert("请输入密码");
            return;
        }
    
        loginApi.loginRequest({phone, password})
        .then(res => res.json())
        .then(res =>{})
        .catch(err => {
            console.log(err);
        })
    }

    return(
        <form onSubmit = {onSubmit}>
            <h1>Login</h1>
            <div className="form-group">
                <label>手机号</label>
                <input
                    type="numeric"
                    name="phone"
                    className="form-control"
                    onChange={onChange}/>
            </div>
            <div className="form-group">
                <label>密码</label>
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    onChange={onChange}/>
            </div>
            <div className="form-group">
                <button className="btn btn-primary btn-lg">登录</button>
            </div>
        </form>
    )
}

export default LoginForm;